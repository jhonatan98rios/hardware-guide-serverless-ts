import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'content',
        cors: {
          origin: 'https://hardware-guide-web.vercel.app',
          headers: ['Content-Type'],
          allowCredentials: false,
        },
      },
    },
  ],
};
