import CustomVanityAlgorithm from "./CustomVanityAlgo";
import VanityAlgorithm from "./Vanify";
import VanifyRepository from "./repository/VanifyRepository";
import {mapper} from "./shared/mapper";
import { VanifyEntity, VanifyDTO } from "./entities";

export default class VanifyService {   

    private vanifyInstance: VanityAlgorithm;
    private vanifyRepository: VanifyRepository;
    constructor() {
        this.vanifyInstance = new CustomVanityAlgorithm();                
        this.vanifyRepository = new VanifyRepository();
    }

    async generateVanifyNumbers(phoneNumber: string): Promise<VanifyDTO> {

        const vanifyNumbers = this.vanifyInstance.generateVanity(phoneNumber);        
        const vanityObj =  await this.vanifyRepository.insertVanifyNumbers(phoneNumber, vanifyNumbers);
        const vanifyData = VanifyService.toDto(vanityObj);
        return vanifyData;
    }

    static async toDto(vanifyEntity: VanifyEntity): Promise<VanifyDTO> {
        return mapper.map(vanifyEntity, VanifyEntity, VanifyDTO);
    }   
}
