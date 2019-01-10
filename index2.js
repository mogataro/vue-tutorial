var app = new Vue({ 
    el: '#app',
    data: {
        a: 'Hello Vue!'
    }
});


var app2 = new Vue({
    el: '#app2',
    data: {
        classObject: {
            active: true,
            error: nill
        },
        computed: {
            classObject: function () {
                return {
                    active: this.isActive && !this.error,
                    'text-danger': this.error && this.error.type === 'fatal'
                }
            }
        }
    }
})

