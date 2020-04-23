module.exports = {
    devServer: {
        proxy: {
            //凡是以api开头的网络请求都反向代理到后端,否则是以前端的域名+请求发的
            '^/api': {
                    target: 'http://localhost:3000',
                    // target: 'http://yinleilei.com',
                    ws: true,
                    changeOrigin: true,
            }
        }
    }
}