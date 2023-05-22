'use strict'
var aws = require('aws-sdk');
const dynamodb = new aws.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    let responseBody = '';
    let statusCode = 0;
    let {id, price} = JSON.parse(event.body || '{}');
    const params = {
        TableName : 'Items',
        Item: {
            id: id,
            price: price
        }
    }
    try {
        await dynamodb.put(params).promise();
        statusCode = 200;
        responseBody = JSON.stringify('SUCESS!');
    } catch (err) {
        statusCode = 200;
        responseBody = JSON.stringify(err);
    }
    const response = {
        statusCode: statusCode,
        body: responseBody,
    };
    return response;
};
