import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret,faMagnifyingGlass,faCartShopping,faBars,faXmark,faPlus,faChevronDown,faChevronUp } from '@fortawesome/free-solid-svg-icons'


library.add(faUserSecret,faMagnifyingGlass,faCartShopping,faBars,faXmark,faPlus,faChevronDown,faChevronUp)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
