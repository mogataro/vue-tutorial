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



