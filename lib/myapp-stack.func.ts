import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
const dynamodb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const handler = async (lambdaEvent: any) => {
  await dynamodb.send(
    new PutCommand({
      TableName: process.env.DYNAMO_TABLE_NAME,
      Item: { id: "something" },
    })
  );
};
