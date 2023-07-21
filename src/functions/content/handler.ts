import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';

import { LearnController } from './src/controllers/Content.controller';

const smart: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {

  const learnController = new LearnController()
  const res = await learnController.getContent()

  return formatJSONResponse(res);
};

export const main = middyfy(smart);
