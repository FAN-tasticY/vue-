//现在是关闭语法检查
module.exports = {
    lintOnSave:'warning',
        devServer:{
            proxy:{
                '/api':{
                    target:'http://localhost:3000',
                    changeOrigin:true,
                    pathRewrite:{'^/api':''}
                },
                '/test':{
                    target:'http://221.203.21.203:8001',
                    changeOrigin:true,
                    pathRewrite:{'^/test':''}
                }
            }
            
        }
    
}