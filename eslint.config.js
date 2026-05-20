export default [
    {
        languageOptions: {
            ecmaVersion: 2015,
            globals: {
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly',
                process: 'readonly',
                require: 'readonly',
                module: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly'
            }
        },
        plugins: {},
        rules: {
            indent: ['error', 4],
            quotes: ['error', 'single'],
            semi: ['error', 'always']
        }
    },
    {
        files: ['test/**/*.js'],
        languageOptions: {
            globals: {
                describe: 'readonly',
                it: 'readonly',
                before: 'readonly',
                after: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly'
            }
        }
    }
];