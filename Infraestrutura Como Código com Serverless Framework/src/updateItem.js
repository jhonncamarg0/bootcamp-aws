'use strict';
const aws = require('aws-sdk');
const updateItem = async (event) => {
    const {itemStatus} = JSON.parse(event.body || '{}');
    const {id} = event.pathParameters;
    const dynamodb = new aws.DynamoDB.DocumentClient();
    await dynamodb.update({
        TableName: 'serverless-dio-table',
        Key: {id},
        UpdateExpression: 'set itemStatus = :itemStatus',
        ExpressionAttributeValues: {
            ':itemStatus': itemStatus
        },
        ReturnValues: 'ALL_NEW'
    }).promise()
    return {
        statusCode: 200,
        body: JSON.stringify({msg: 'UPDATED!'})
    }
}
module.exports = {
    handler:updateItem
}
