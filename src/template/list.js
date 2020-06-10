import store from '../plugin/store'
export default {
    template: `<div style="background:#f5f5f5;padding:15px">
        {{a}}{{num}} {{counter}}
    </div>`,
    data: {
        a: '我是list',
        num: 111
    },
    store,
    computed:{
        counter: function () {
            return this.$store.state.counter
        }
    },
    methods: {
        showP: function () {
            alert(this.a);
        }
    },
    beforeCreate: function () {
        console.log('生成list组件')
    },
    beforeDestroy: function () {
        console.log('list组件被摧毁了')
    }
}