import { GetRecommendationSevice } from "../services/GetRecommendation.sevice"

export class HardwareController {

    public async getRecommendation(text: string): Promise<any> {
        //const postRepository = new MongoDBPostRepository()
        const getRecommendationSevice = new GetRecommendationSevice()
        const res = await getRecommendationSevice.execute(text)
        return res
    }
}