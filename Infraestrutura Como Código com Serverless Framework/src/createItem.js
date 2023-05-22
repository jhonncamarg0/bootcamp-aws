'use strict';
const {v4: uuid} = require('uuid');
const aws = require('aws-sdk');
const createItem = async (event) => {
    const {item} = JSON.parse(event.body || '{}');
    const attributeDate = new Date().toISOString();
    const id = uuid();
    const dynamodb = new aws.DynamoDB.DocumentClient();
    const newItem = {
        id,
        item,
        attributeDate,
        itemStatus: false
    }
    await dynamodb.put({
        TableName: 'serverless-dio-table',
        Item: newItem
    }).promise();
    return {
        statusCode: 200,
        body: JSON.stringify(newItem)
    }
}
module.exports = {
    handler:createItem
}
