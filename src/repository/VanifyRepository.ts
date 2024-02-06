import type { Model } from "dynamoose/dist/Model";
import { model as newModel } from "dynamoose";
import { VanifyEntity } from "../entities/VanifyEntity";
import { vanifyNumbersSchema } from "../schemas/VanifySchema";


export default class VanifyRepository {

    private dbInstance: Model<VanifyEntity>;

    constructor() {
        const tableName = "VanifyNumbers";
        // VanifyRepository.dbInstance = newModel<VanifyEntity>(tableName, vanifyNumbersSchema)
        this.dbInstance = VanifyRepository.getModelInstance(tableName, vanifyNumbersSchema);
    }

    private static getModelInstance(tableName: string, schema: any): Model<VanifyEntity> {
        return newModel<VanifyEntity>(tableName, schema) as Model<VanifyEntity>;
    }

    async insertVanifyNumbers(phoneNumber: string, vNumbers: string[]): Promise<VanifyEntity> {
        
        const vanifyNumbers = await this.dbInstance.create({
            phoneNumber: phoneNumber,
            vanifyNumbers: vNumbers
        });        

        return vanifyNumbers;
    }

}