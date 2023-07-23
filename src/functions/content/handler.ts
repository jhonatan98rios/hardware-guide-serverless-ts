import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { LearnController } from './src/controllers/Content.controller';

const smart = async () => {

  const learnController = new LearnController()
  const res = await learnController.getContent()

  return formatJSONResponse(res);
};

export const main = middyfy(smart);
