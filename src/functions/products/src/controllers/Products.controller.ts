import { GetProductsSevice } from "../services/GetProducts.sevice"

export class ProductsController {

    public async getProducts(): Promise<any> {
        //const postRepository = new MongoDBPostRepository()
        const getProductsSevice = new GetProductsSevice()
        const res = await getProductsSevice.execute()
        return res
    }
}