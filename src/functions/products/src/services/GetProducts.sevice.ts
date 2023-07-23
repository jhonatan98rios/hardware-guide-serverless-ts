import { options } from "../mockdata/products/products"

export type Options = typeof options

export class GetProductsSevice {   

    constructor() {}

    async execute(): Promise<Options> {
        return options
    }
}