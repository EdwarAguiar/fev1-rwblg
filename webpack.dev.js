const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common")

const devConfig = {
    mode: 'development',
    historyApiFallback: true


}

module.exports = merge(commonConfig, devConfig)