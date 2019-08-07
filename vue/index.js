
// 注册组件
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.next}}</li>',
});
// 挂在根组件
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    show: true,
    items: [1, 2, 3, 4],
    name: 'tian baolin',
    todo: { next: '约会' },
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
