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
    mode: 'development',
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
            '@hooks': path.resolve(__dirname,'src/hooks'),
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
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        static:{
            directory: path.join(__dirname, 'dist'),
        },
        port: 3005,
        devMiddleware:{
            publicPath:'https://localhost:3005/'
        },
        hot:'only',
        historyApiFallback: true,
    }
}