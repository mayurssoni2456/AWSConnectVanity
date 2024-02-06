import CustomVanityAlgorithm from "./CustomVanityAlgo";
import VanityAlgorithm from "./Vanify";
import VanifyService from "./VanifyService";

export default class AppService {

    vanifyService: VanifyService;
    private phoneNumber: string;
 
    constructor(event: any) {
        //validation pending
        this.phoneNumber = event.Details.ContactData.CustomerEndpoint.Address;
        this.vanifyService = new VanifyService();
    }
    
    async generateVanifyNumbers() {
        try {
            // const phoneNumber = event.phoneNumber; // Assuming phoneNumber is a property in the event object        
            
            const vanifyNumbers = await this.vanifyService.generateVanifyNumbers(this.phoneNumber);                                
            console.log("vanifyNumbers ", vanifyNumbers);

            return {
              statusCode: 200,
              body: JSON.stringify(vanifyNumbers),
            };
          } catch (error) {
            console.error('Error:', error);
            return {
              statusCode: 500,
              body: JSON.stringify({ error: 'Internal Server Error' }),
            };
          }
    }
}