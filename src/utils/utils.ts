import * as uuid from 'uuid/v4';
import * as bcrypt from 'bcrypt';
import { generate } from 'randomstring';

const SALT_ROUNDS = 10;

export const generateUUID = () => uuid();

export const generateNamespace = length => {
    return generate(length);
};

export const generatePasswordHash = async (plainPassword: string) => {
    return bcrypt.hash(plainPassword, SALT_ROUNDS).then((hash) => {
        return hash;
    });
};

export const comparePasswordHash = async (plainPassword: string, hash: any) => {
    return bcrypt.compare(plainPassword, hash).then((result) => {
        return result;
    });
};

export const errorHandler = promise => {
    return promise
        .then(data => [data, undefined])
        .catch(error => Promise.resolve([undefined, error]));
};
