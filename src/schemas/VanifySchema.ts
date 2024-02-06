import { Schema } from 'dynamoose';

export const vanifyNumbersSchema = new Schema(
    {
        phoneNumber: {
            hashKey: true,
            required: true,
            type: String
        },
        vanifyNumbers: {
            type: Set,
            schema: [String]
        },
        createdAt: {
            type: Date,
            default: () => new Date()
        }
    },
    {
        saveUnknown: true,
    }
);
  
