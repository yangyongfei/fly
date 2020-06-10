import MVVM from './src/index'
import store from './src/plugin/store'
import router from './src/plugin/router'
//调用

var vm = new MVVM({
    el: '#to',
    template: '#app',
    store,
    components: {
        c: {
            template: `<div style="background:#f5f5f5;padding:15px">
        <div>{{a}}</div>
        <input m-model="a">
        <button m-on:click='showP'>获取父元素arr值</button>
        </div>`,
            data: {
                a: '我是子组件'
            },
            methods: {
                showP: function () {
                    alert(this.arr);
                }
            },
            beforeCreate: function () {
                console.log('生成子组件')
            },
            beforeDestroy: function () {
                console.log('子组件被摧毁了')
            }
        }
    },
    data: {
        a: true,
        show: true,
        cshow: false,
        title: '标题',
        class: "c",
        obj: { a: { b: 2 } },
        arr: [1, 0, 3, 4, 5],
    },
    computed: {
        title2: function () {
            console.log('初次title2');
            return this.title + 2;
        },
        title3: {
            get: function () {
                return this.title + 3
            },
            set: function (v) {
                this.title = v - 1
            }
        },
        counter: function () {
            return this.$store.state.counter
        }
    },
    watch: {
        title: function (o, n) {
            console.log(o, n);
        },
        title2: function (o, n) {
            console.log(o, n);
        },
        title3: function (o, n) {
            console.log(o, n);
        }
    },
    methods: {
        test: function () {
            alert(this.title + '点击');
        },
        toggle: function () {
            this.show = !this.show;
        },
        togglec: function () {
            console.log('togglec');
            this.cshow = !this.cshow;
        },
        changeState () {
            this.$store.commit('add')
        }
    },
    beforeCreate: function () {
        console.log('beforeCreate')
    },
    beforeUpdate: function () {
        console.log('beforeUpdate')
    },
    created: function () {
        console.log('created')
    }
})  