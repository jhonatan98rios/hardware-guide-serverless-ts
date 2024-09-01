import { handlerPath } from '@libs/handler-resolver';
import type { AWS } from '@serverless/typescript';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products',
        cors: {
          origin: 'https://hardware-guide-web.vercel.app',
          headers: ['Content-Type'],
          allowCredentials: false,
        },
      },
    },
  ],
  layers: [
    { Ref: 'CommonLibsLambdaLayer' },
  ],
} as AWS["functions"]
