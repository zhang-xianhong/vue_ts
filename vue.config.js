// module.exports = {
//     css: {
//         loaderOptions: {
//             sass: {
//                 prependData: '@import "@/assets/css/base.scss"'
//             }
//         }
//     }
// }

// const fs = require('fs')
// const path = require('path')

// function resolve(dir) {
//     return path.join(__dirname, dir);
// }

// module.exports = {
//     // lintOnSave: false,
//     devServer: {
//         // host: 'dev.sa.qq.com',
//         // port: '80',
//         // watchOptions: {
//         //     ignored: /node_modules/
//         // },
//         proxy: {
//             // 代理所有请求
//             '/api': {
//                 // 后端rest服务
//                 target: 'http://127.0.0.1:3000', // 鹏鹏的机器
//                 ws: true,
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '/api': '/api'
//                 }
//             }
//         },
//         overlay: {
//             warnings: false,
//             errors: true
//         }
//     }
// };


const path = require('path')

module.exports = {
    // lintOnSave: false,
    devServer: {
        // host: '127.0.0.1',
        // port: '3000',
        watchOptions: {
            ignored: /node_modules/
        },
        proxy: {
            // 代理所有请求
            '/api': {
                // 后端rest服务
                target: 'http://127.0.0.1:3000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
};