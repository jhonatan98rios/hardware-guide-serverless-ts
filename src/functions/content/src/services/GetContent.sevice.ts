import { content } from "../mockdata/content/content"


export type Hardware = {
    title: string,
    content: {
        image: string,
        description: string
    }[]
}

export class GetContentSevice {   

    constructor() {}

    async execute(): Promise<Hardware[]> {
        return content as Hardware[]
    }
}