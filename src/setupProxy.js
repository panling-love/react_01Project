//处理跨域
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(createProxyMiddleware('/devApi',{
        target:'http://www.web-jshtml.cn/api/react',//配置需要请求的服务器地址
        changeOrigin:true,
        pathRewrite:{
            "^/devApi":""
        }
    }))
}