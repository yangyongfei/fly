
import MVVM from '../../index'
import Vuex from './store'
console.log(MVVM)
MVVM.use(Vuex)
// let Vuex = {}
export default new Vuex.Store({
    state: {
        counter: 0
    },

    mutations: {
        add (state) {
            // state是哪来的？
            state.counter++
        }
    },

    actions: {
        add ({ commit }) {
            // 上面的上下文是哪来的？它是什么
            setTimeout(() => {
                commit('add')
            }, 1000);
        }
    },
    
    modules: {

    }
})
