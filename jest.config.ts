import type {Config} from 'jest';

const config: Config = {
    bail: 1,
    moduleNameMapper: {
        '^~/utils/(.*)$': '<rootDir>/src/utils/$1',
    },
    verbose: true,
};

export default config;
