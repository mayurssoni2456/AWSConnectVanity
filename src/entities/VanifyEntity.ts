import { Item } from "dynamoose/dist/Item";
import { AutoMap } from "@automapper/classes";


export class VanifyEntity extends Item {    
    
    @AutoMap()
    phoneNumber!: string;

    @AutoMap()
    vanifyNumbers!: string[];

    @AutoMap()
    createdAt?: String;    
}
