const axios = require('axios')

exports.handler = async (event, context, callback) => {

    const watts = event.queryStringParameters.watts || 70;
    const hours = event.queryStringParameters.hours || 24;
    const label = event.queryStringParameters.label || "Missing";

    const kwh = (watts * hours) / 1000;
    const final = {};


    const response = await axios({
        method: 'post',
        url: 'https://api.cloverly.com/2019-03-beta/purchases/electricity',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GATSBY_CLOVERLY_KEY}`
        },
        data: {
            energy: {
                value: kwh,
                units:"kwh"
            }
        }
    })

    final.label = label;
    final.kwh = kwh;
    final.carbon = response.data.equivalent_carbon_in_kg
    final.cost = kwh*(0.13)

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