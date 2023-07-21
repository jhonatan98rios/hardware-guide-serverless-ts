import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';

import { ProductsController } from './src/controllers/Products.controller';

const smart: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {

  const productsController = new ProductsController()
  const res = await productsController.getProducts()

  return formatJSONResponse(res);
};

export const main = middyfy(smart);
