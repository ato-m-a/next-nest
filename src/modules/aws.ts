import AWS, { config } from 'aws-sdk';
import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

config.update({
  region: 'ap-northeast-2',
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export default {
  client: new AWS.DynamoDB.DocumentClient(),
  s3: new AWS.S3({ params: { Bucket: process.env.BUCKET_NAME } })
}