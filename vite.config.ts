import type {UserConfig} from "vite";
// import vue from '@vitejs/plugin-vue';
// import styleImport, { VantResolve } from 'vite-plugin-style-import';

const viteConfig:UserConfig = {
    // 端口号
    port: 3555,
    // 运行时打开浏览器窗口
    open: true,
    hostname: 'localhost',
    proxy:{
        '/api': {
            target: 'https://uni937d4b0-6cc760.service.tcloudbase.com',
            changeOrigin: true,
            ws: true,
            rewrite: path => path.replace(/^\/api/,'')
        }
    },
    // plugins: [
    //     vue(),
    //     styleImport({
    //         resolves: [VantResolve()],
    //     }),
    // ],
}

export default viteConfig
