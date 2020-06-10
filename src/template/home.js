
import store from '../plugin/store'
export default {
    template: `<div style="background:#f5f5f5;padding:15px">
        {{a}}
    </div>`,
    store,
    data: {
        a: '我是home'
    },
    methods: {
        showP: function () {
            alert(this.arr);
        }
    },
    beforeCreate: function () {
        console.log('生成list组件')
    },
    beforeDestroy: function () {
        console.log('list组件被摧毁了')
    }
}