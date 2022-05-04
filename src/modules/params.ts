import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

interface QueryParam {
  TableName: string;
  KeyConditionExpression: string;
  ExpressionAttributeNames: { [key: string]: string; };
  ExpressionAttributeValues: { [key: string]: string; };
}

export default {
  /* config table */
  queryParam(host: string): QueryParam {
    return {
      TableName: process.env.CONFIG_TABLE,
      KeyConditionExpression: '#pk = :pk_val',
      ExpressionAttributeNames: { '#pk': process.env.PARTITION_KEY },
      ExpressionAttributeValues: { ':pk_val': host }
    }
  },
  /* client table */
  clientParam(host: string): QueryParam {
    return {
      TableName: process.env.CLIENT_TABLE,
      KeyConditionExpression: '#pk = :pk_val',
      ExpressionAttributeNames: { '#pk': process.env.PARTITION_KEY },
      ExpressionAttributeValues: { ':pk_val': host }
    }
  },
  /* auth table */
  authParam(host: string): QueryParam {
    return {
      TableName: process.env.AUTH_TABLE,
      KeyConditionExpression: '#pk = :pk_val',
      ExpressionAttributeNames: { '#pk': process.env.PARTITION_KEY },
      ExpressionAttributeValues: { ':pk_val': host }
    }
  },
}