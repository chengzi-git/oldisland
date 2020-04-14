    // vue.config.js
    module.exports = {
        configureWebpack: {
            devServer: {
                proxy: {
                    "/cont": {
                        target: "http://www.iciba.com/index.php",
                        changeOrigin: true,
                        pathRewrite: { "^/cont": "" }
                    },
                    "/api": {
                        target: "https://api.jisuapi.com/",
                        changeOrigin: true,
                        pathRewrite: { "^/api": "" }
                    },
                    "/ints": {
                        target: "http://dict-mobile.iciba.com/interface/index.php",
                        changeOrigin: true,
                        pathRewrite: { "^/ints": "" }
                    },
                }
            }
        }
    }