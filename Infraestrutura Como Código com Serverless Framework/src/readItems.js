'use strict';
const aws = require('aws-sdk');
const readItems = async (event) => {
    const dynamodb = new aws.DynamoDB.DocumentClient();
    let items;
    try {
        const results = await dynamodb.scan({
            TableName: 'serverless-dio-table'
        }).promise();
        items = results.Items;
    } catch (error) {}
}
