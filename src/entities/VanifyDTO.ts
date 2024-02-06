import { AutoMap } from "@automapper/classes";


export class VanifyDTO {    
    
    @AutoMap()
    phoneNumber!: string;

    @AutoMap()
    vanifyNumbers!: string[];

    @AutoMap()
    createdAt?: string;    
}
