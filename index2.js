var app4 = new Vue({ 
    el: '#app4',
    data: {
        styleObject: {
            color: 'red',
            // fontSize: '13px'
        }
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        activeColor: 'red',
        fontSize: 30
      }
})

var app = new Vue({ 
    el: '#app',
    data: {
        a: 'Hello Vue!'
    }
})


var app2 = new Vue({
    el: '#app2',
    data: {
        isActive: true,
        error: null
      },
      computed: {
        classObject: function () {
          return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
          }
        }
      }
})

var app5 = new Vue({ 
    el: '#app5',
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
      }
})


//コンポーネントの基本
// button-counter と呼ばれる新しいコンポーネントを定義します


Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

new Vue({
    el: '#components-demo',
})


/**
 * この書き方だとダメ
 */
// new Vue({
//     el: '#components-demo',
//     components: {
//         template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
//     },
//     data: function () {
//         return {
//           count: 0
//         }
//     },
// })

var app6 = new Vue({ 
    el: '#app6',
    data: {
        ok: "exist",
      }
})



var app7 = new Vue({
    el: '#no-key-example',
    data: {
      loginType: 'username'
    },
    methods: {
      toggleLoginType: function () {
        return this.loginType = this.loginType === 'username' ? 'email' : 'username'
      }
    }
});

function changeType(){
    // console.log(document.getElementById( "no-key-example" ))
    if(app7.loginType === 'username'){
        app7.loginType = 'email';
    }else{
        app7.loginType = 'username';
    }
}
console.log(app7.loginType);
