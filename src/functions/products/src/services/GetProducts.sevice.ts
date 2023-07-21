import { products } from "../mockdata/products/products"


export type Product = {
    name: string
    image: string
    moba: string
    cpu: string
    storage: string
    ram: string
    gpu: string
    price: string
    screen: string
    link: string
}

export type Products = {
    notebook: {
        low: Product[]
        mid: Product[]
        high: Product[]
    }
    desktop: {
        low: Product[]
        mid: Product[]
        high: Product[]
    }
}


export class GetProductsSevice {   

    constructor() {}

    async execute(): Promise<Products> {
        return products as Products
    }
}