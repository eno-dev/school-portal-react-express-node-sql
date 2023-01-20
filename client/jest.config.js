module.exports = {
    // The root directory for Jest to search for tests
    rootDir: './src',

    // The file extension for test files
    testRegex: '\\.test\\.js$',

    // A list of paths to directories that Jest should use to search for files
    roots: ['<rootDir>'],

    // Whether to use the watch mode
    watch: true,

    // A list of paths to modules that Jest should use for mocking
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
    },
};