const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/graduate_server',
    devServer:{
        proxy:{
            '/graduate_server':{
                target:'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/graduate_server': '/graduate_server'
                },
            }
        },
        port:8081
    }
}