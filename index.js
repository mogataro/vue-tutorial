var app = new Vue({ 
    el: '#app',
    data: {
        a: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: false
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
})



Vue.component('do-item', {
    // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
    // このプロパティは todo と呼ばれます。
    props: ['do'],
    template: '<li>{{ do.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
})


// データオブジェクト
var data = { a: 1 ,b: '2'}
var data1 = { a: 2 }
console.log(data);

// Vue インスタンスにオブジェクトを追加する
var vm = new Vue({
  el: '#ex-1',
  data: data,
})

console.log(vm.b);
console.log(data.a);

// インスタンスのプロパティを取得すると、
// 元のデータからそのプロパティが返されます
vm.a == data.a // => true

// プロパティへの代入は、元のデータにも反映されます
// vm.a = 2
// data.a // => 2

// // ... そして、その逆もまたしかりです
// data.a = 3
// vm.a // => 3

/**                    **/
var data = { c: 13, d:"aiueo"}
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

console.log(vm.$data);
console.log(vm.$el);
console.log(document.getElementById('example'));


// $watch はインスタンスメソッドです
vm.$watch('c', function (newValue, oldValue) {
  console.log("このコールバックは `vm.c` の値が変わったため呼ばれました");
   // このコールバックは `vm.c` の値が変わる時に呼ばれます
})

vm.c = "vm.cを編集したよ";//ここでwatchが呼ばれてる。

var example2 = new Vue({
  el: '#example-2',
  data: {
      a:"<strong><b>created フックはインスタンスが生成された後にコードを実行したいときに使われます。</b></strong>",
      b: 1,
      c: false,
      seen: true,
      url:"https://www.google.com"
  },
  created: function () {
    // `this` は vm インスタンスを指します
    console.log(this.a)
  }
})

var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0,
    isActive: false
  }
})


var vm = new Vue({
  el: '#example-0',
  data: {
    message: 'Hello'
  },
  computed: {
    // 算出 getter 関数
    reversedMessage: function () {
      // `this` は vm インスタンスを指します
      return this.message.split('').reverse().join('')
    },
    now: function () {
      return Date.now()
    }

  }
})

var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!',
    src: 'https://grapee.jp/wp-content/uploads/32187_main2.jpg'
  },
  watch: {
    // この関数は question が変わるごとに実行されます。
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // _.debounce は特にコストの高い処理の実行を制御するための
    // lodash の関数です。この場合は、どのくらい頻繁に yesno.wtf/api
    // へのアクセスすべきかを制限するために、ユーザーの入力が完全に
    // 終わるのを待ってから ajax リクエストを実行しています。
    // _.debounce (とその親戚である _.throttle )  についての詳細は
    // https://lodash.com/docs#debounce を見てください。
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      console.log(axios.get('https://yesno.wtf/api'))
      axios.get('https://yesno.wtf/api')
        .then(function (response) {//promise成功時に実行
          vm.answer = _.capitalize(response.data.answer)
          vm.src = response.data.image
        })
        .catch(function (error) {//promise失敗時に実行
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})