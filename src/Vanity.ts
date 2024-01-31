
export default abstract class VanityAlgorithm {

    private static readonly PHONE_ALPHA_MAP: { [key: string]: string[] } = {
        '1': [],
        '2': ['A', 'B', 'C'],
        '3': ['D', 'E', 'F'],
        '4': ['G', 'H', 'I'],
        '5': ['J', 'K', 'L'],
        '6': ['M', 'N', 'O'],
        '7': ['P', 'Q', 'R', 'S'],
        '8': ['T', 'U', 'V'],
        '9': ['W', 'X', 'Y', 'Z'],
        '0': [],
    };

    abstract generateVanity(lastFourDigits: string): string;

    generateDefaultVanity(phoneNumber: string): string {

        const numDigits = phoneNumber.length;
        let vanityNumber = '';

        for (let i = 0; i < numDigits; i++) {
            const char = phoneNumber[i];

            // first 4 digit and hyper ignore
            if (i < 4 || char === '-') {
                vanityNumber += char;
            } else {
                const alphaOptions = VanityAlgorithm.PHONE_ALPHA_MAP[char];
                if (alphaOptions && alphaOptions.length > 0) {
                    // Choose the first alphabet option for simplicity
                    vanityNumber += alphaOptions[0];
                }
            }
        }

        return vanityNumber;
    }
}


