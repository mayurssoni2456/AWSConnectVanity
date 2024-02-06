import VanityAlgorithm from "./Vanify";

export default class CustomVanityAlgorithm extends VanityAlgorithm {

    constructor(){
        super();
        console.log("Custom Vanity Algorithm");
    }    
    
    // Override the generateVanity method to implement custom logic
    generateVanity(number: string): string[] {
        // const output = this.generateDefaultVanity(number);

        // we can externilize the words dictionary based on brand
        const words = ["Apple", "Wow", "Nike", "Brand"]; 

        const phoneNumberPrefix = number.slice(0, -4);
        const lastFourDigits = number.slice(-4);
        const vanityNumbers: string[] = [];

        for (const word of words) {            
            const vanityNumber = `${phoneNumberPrefix}${word}`;
            vanityNumbers.push(vanityNumber);
        }

        return vanityNumbers;
    }
}
