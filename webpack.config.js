const path = require('path');
const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: {
        lib: {
            import: './src/foo.js',
        },
        main: {
            import: './src/index.js',
            dependOn: ['lib']
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    target: 'node',
    optimization: {
        runtimeChunk: 'single',
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
