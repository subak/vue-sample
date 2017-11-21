module.exports = {
    context: '/usr/src/app',
    entry: './src/index.js',
    output: {
        path: '/usr/src/app/dist',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: './',
        port: 3000,
        host: "0.0.0.0",
        disableHostCheck: true
    },

    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                },
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
};