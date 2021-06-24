/*
 * @Description:
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2021-06-11 17:22:23
 * @LastEditors: rongcheng
 * @LastEditTime: 2021-06-24 16:47:57
 */
import cAliplayer from './components/index.ts'
const components = [cAliplayer]
const install = function(Vue) {
  if (install.installed) return
  components.map(() => {
    Vue.component(cAliplayer.name, cAliplayer)
  })
  if (typeof window !== 'undefined' && window.Vue) {
      install.apply(window.Vue)
  }
}

export default {
    install,
    cAliplayer
}
