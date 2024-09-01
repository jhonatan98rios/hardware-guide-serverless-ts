import { GetContentSevice } from "../services/GetContent.sevice"

export class LearnController {

    public async getContent(): Promise<any> {
        //const postRepository = new MongoDBPostRepository()
        const getContentSevice = new GetContentSevice()
        const res = await getContentSevice.execute()
        return res
    }
}