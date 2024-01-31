
import CustomVanityAlgorithm from '../src/CustomVanityAlgo';

test('Converts phone number to vanity number', () => {
    const testPhoneNumber = '1800-555-1234';
    const expectedVanityNumber = '1800-JJJ-ADG';
    const vanityAlgo = new CustomVanityAlgorithm();
    const vanityNumber = vanityAlgo.generateVanity(testPhoneNumber)  
    expect(vanityNumber).toEqual(expectedVanityNumber);
  });
  