import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { ProductsController } from './src/controllers/Products.controller';

const smart = async () => {

  const productsController = new ProductsController()
  const res = await productsController.getProducts()

  return formatJSONResponse(res);
};

export const main = middyfy(smart);
