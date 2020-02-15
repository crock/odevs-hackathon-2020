const axios = require('axios')

exports.handler = async (event, context, callback) => {

    const watts = event.queryStringParameters.watts || 70;
    const hours = event.queryStringParameters.hours || 24;

    const kwh = (watts * hours) / 1000

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

    return {
        statusCode: 200,
        body: JSON.stringify(response.data)
    };
};