const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', 'jsx'],
        alias: {
            '@components': path.resolve(__dirname,'src/components'),
            '@containers': path.resolve(__dirname,'src/containers'),
            '@pages': path.resolve(__dirname,'src/pages'),
            '@assets': path.resolve(__dirname,'src/assets'),
            '@styles': path.resolve(__dirname,'src/styles'),
            '@routes': path.resolve(__dirname,'src/routes'),
            '@icons': path.resolve(__dirname,'src/assets/icons'),
            '@logos': path.resolve(__dirname,'src/assets/logos'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test:/\.s[ac]ss$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test:/\.(png|jpg|svg|gif)$/,
                type:'asset'
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
}