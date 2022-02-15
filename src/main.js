import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            counter:0
        }
    }
})
createApp(App).use(store).mount('#app')
