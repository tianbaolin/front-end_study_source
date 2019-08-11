
// 注册组件
Vue.component('todo-item', {
  props: ['todo', 'html'],
  // template: '<li>{{todo.next}}</li>',
  template: '#temp',
});
// 挂在根组件
const app = new Vue({
  el: '#app',
  // template: '#temp',
  // render(createElement) {
  //   return createElement('div', {
  //     on: {
  //       click() {
  //         console.log('this :', this);
  //       },
  //     },
  //   }, this.message);
  // },
  data: {
    message: 'Hello Vue!',
    show: true,
    items: [1, 2, 3, 4],
    name: '<script type="text/javascript">console.log("123")</script>',
    todo: { next: '约会' },
    html: '<a href="https://www.baidu.com">百度</a>',
  },
  methods: {
    click() {
      console.log('click');
      console.log('object :', this === app);
      this.message = this.message.split('').reverse().join('');
    },
  },
});

// console.log('app :', app);
// console.log('object :', app instanceof window.Vue);
