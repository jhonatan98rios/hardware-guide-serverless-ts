import { NaturalLanguageProvider } from "../providers/NaturalLanguageProvider"
import { hardware } from "../mockdata/hardware"

export type NLPClassification = {
    device: string,
    spec: string
}

export type Product = {
    name: string,
    image: string,
    moba: string,
    cpu: string,
    storage: string,
    ram: string,
    gpu: string,
    price: string,
    screen: string,
    link: string
}

export class GetRecommendationSevice {

    private nlp: NaturalLanguageProvider

    constructor() {
        this.nlp = new NaturalLanguageProvider()
    }

    async execute(text: string) {
        const classification = await this.getClassifications(text)
        const product = this.getProductByClassification(classification)
        return product
    }

    getProductByClassification({device, spec}: NLPClassification): Product[] {
        return hardware[device][spec]
    }

    async getClassifications(text: string): Promise<NLPClassification> {
        const classifications = Promise.all([
            this.nlp.deviceClassifier(text), 
            this.nlp.specClassifier(text)
        ])

        return classifications.then(async ([device, spec]) => {
            return {
              device, spec
            }  
            
        }).catch(error => {
            throw Error(error) 
        })
    }
}