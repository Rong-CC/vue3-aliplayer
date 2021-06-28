/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2021-06-11 16:53:12
 * @LastEditors: rongcheng
 * @LastEditTime: 2021-06-28 16:06:16
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
const app = createApp(App)

app.use(router).mount('#app')
