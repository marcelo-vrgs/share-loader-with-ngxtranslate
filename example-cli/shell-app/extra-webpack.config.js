module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                use:
                    [{
                        loader: 'share-loader',
                        options: {
                            modules: [/@angular/, /@ngx-translate/],
                            exclude: [/@angular-devkit/],
                            namespace: 'container-app'
                        }
                    }]
            }]
    }
};