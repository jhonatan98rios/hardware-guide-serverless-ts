import { GetContentSevice } from "../services/GetContent.sevice"

export class LearnController {

    public async readAll(): Promise<any> {
        //const postRepository = new MongoDBPostRepository()
        //const readAllPostsService = new ReadAllPostsService(postRepository)
        //const posts = await readAllPostsService.execute()

        const res = {key: 'Tudo certo campeão!'}
        console.log(res)
        return res
    }

    public async getContent(): Promise<any> {
        //const postRepository = new MongoDBPostRepository()
        const getContentSevice = new GetContentSevice()
        const res = await getContentSevice.execute()
        return res
    }
}