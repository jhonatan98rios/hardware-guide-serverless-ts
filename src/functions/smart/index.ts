import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'smart',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
        cors: {
          origin: 'https://hardware-guide-web.vercel.app',
          headers: ['Content-Type'],
          allowCredentials: false,
        },
      },
    },
  ],
};
