/**
 * @author Konstantin Bogdanoski (konstantin.b@live.com)
 */

let app = new Vue({
    el: '#app',
    data: {
        message: '',
        has_number: false,
        has_lowercase: false,
        has_uppercase: false,
        has_special: false,
    },
    methods: {
        validate_password: function () {
            this.has_number = /\d/.test(this.message);
            this.has_lowercase = /[a-z]/.test(this.message);
            this.has_uppercase = /[A-Z]/.test(this.message);
            this.has_special = /[!@#\$%\^\&*\)\(+=._-]/.test(this.message);
        }
    },
});