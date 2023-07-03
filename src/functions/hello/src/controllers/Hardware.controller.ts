import { GetRecommendationSevice } from "../services/GetRecommendation.sevice"

export class HardwareController {

    public async readAll(): Promise<any> {
        //const postRepository = new MongoDBPostRepository()
        //const readAllPostsService = new ReadAllPostsService(postRepository)
        //const posts = await readAllPostsService.execute()

        const res = {key: 'Tudo certo campeão!'}
        console.log(res)
        return res
    }

    public async getRecommendation(text: string): Promise<any> {
        //const postRepository = new MongoDBPostRepository()
        const getRecommendationSevice = new GetRecommendationSevice()
        const res = await getRecommendationSevice.execute(text)
        return res
    }
}