import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';

import { HardwareController } from './src/controllers/Hardware.controller';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const hardwareController = new HardwareController()
  const res = await hardwareController.getRecommendation(event.body.text)

  return formatJSONResponse(res);
};

export const main = middyfy(hello);
