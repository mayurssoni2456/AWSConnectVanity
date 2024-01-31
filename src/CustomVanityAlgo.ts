import VanityAlgorithm from "./Vanity";

// Example class extending VanityAlgorithm with a custom implementation
export default class CustomVanityAlgorithm extends VanityAlgorithm {
    // Override the generateVanity method to implement custom logic
    generateVanity(number: string): string {
        const output = this.generateDefaultVanity(number);
        return output;
    }
}
