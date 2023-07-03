import { BayesClassifier } from 'natural'
import { device_classifier } from '../mockdata/models/device_classifier';
import { spec_classifier } from '../mockdata/models/spec_classifier';

export class NaturalLanguageProvider {

    constructor() { }

    async bayesClassifier({ text = '', modelFile = '' }) {
        try {
            const model: unknown = modelFile == 'device' ? device_classifier : spec_classifier
            const classifier = BayesClassifier.restore(model as BayesClassifier)
            const result = classifier.classify(text)
            return result

        } catch (error) {
            throw Error(error as string)
        }
    }

    async deviceClassifier(text: string) {
        try {
            const classification = await this.bayesClassifier({
                text: text,
                modelFile: 'device'
            })
            return classification

        } catch (error) {
            throw Error(error as string)
        }
    }

    async specClassifier(text: string) {
        try {
            const classification = await this.bayesClassifier({
                text: text,
                modelFile: 'spec'
            })
            return classification

        } catch (error) {
            throw Error(error as string)
        }
    }
}