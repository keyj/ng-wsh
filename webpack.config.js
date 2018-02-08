
const path = require("path");

module.exports = {
    entry: {
        bundle: [
            // we include only "terminal.js" as it is the main object:
            // "babel-polyfill",
            path.join(__dirname, "wsh.js.es5", "lib", "terminal.js")
        ],
        dist: [
            // we include only "terminal.js" as it is the main object:
            path.join(__dirname, "wsh.js", "lib", "terminal.js")
        ],
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js",
        libraryTarget: "umd",
        library: "WSH"
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['babel-preset-env'],
                plugins: ['transform-runtime', 'transform-decorators-legacy']
                // plugins: [require('@babel/plugin-proposal-object-rest-spread')]
              }
            }
          }
        ]
    },
    plugins: [
        require("imports-loader")
    ],
    resolve: {
        modules: [
            "node_modules",
            path.join(__dirname, "node_modules")
        ]
    },
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty",
        module: "empty"
    },
    devtool: "cheap-module-source-map",
    devServer: {
        host: "localhost",
        port: 8080
    }
};
