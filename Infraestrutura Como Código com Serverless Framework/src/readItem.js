"use strict";
const aws = require("aws-sdk");
const readItem = async (event) => {
    const dynamodb = new aws.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;
    let item;
    try {
        const result = await dynamodb.get({
            TableName: "serverless-dio-table",
            Key: {id}
        }).promise();
        item = result.Item;
    } catch (error) {}
    return {
        statusCode: 200,
        body: JSON.stringify(item)
    }
}
module.exports = {
    handler: readItem
}
