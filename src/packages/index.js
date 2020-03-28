import Button from './button.vue'


const install = Vue => {
  Vue.component(Button.name, Button)
}

if(typeof window.Vue !== 'undefined'){
  install(Vue)
}

export default {
  install
}