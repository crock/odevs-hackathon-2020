const axios = require('axios')

exports.handler = async (event, context, callback) => {

    const items = JSON.parse(event.body) || {};
    const item = {};
    let final = {"results":[{"garbage":132}]};
    
    const list = items.results.map( async (item) => {
        
        const kwh = ((item.watts * item.hours) / 1000) * item.quantity;
        const response = await axios({
            method: 'post',
            url: 'https://api.cloverly.com/2019-03-beta/purchases/electricity',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.GATSBY_CLOVERLY_KEY}`
            },
            data: {
                energy: {
                    value: 70,
                    units:"kwh"
                }
            }
        })
        
        return {
            "label" : item.label,
            "electricity" : kwh,
            "emission": response.data.equivalent_carbon_in_kg,
            "cost" : kwh*(0.13)*365
        }
        
    })

    let data = await Promise.all(list);
    final.results = data;
    console.log(data);
    console.log("FML!s");

    let totEmis = final.results.reduce((sum, each)=>{
        return sum+parseFloat(each.emission)
    },0)
    let totElec = final.results.reduce((sum, each)=>{
        return sum+parseFloat(each.electricity)
    },0)
    let totCost = final.results.reduce((sum, each)=>{
        return sum+parseFloat(each.cost)
    },0)
    let tots = {
        "totalEmission":totEmis,
        "totalElectricity":totElec,
        "totalCost":totCost
    };
    final.summary = tots;
    return {
        statusCode: 200,
        body: JSON.stringify(final),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*'
        }
    };
};