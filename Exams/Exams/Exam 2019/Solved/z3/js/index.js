let app = new Vue({
    em: "#app",
    data: {
        options: [],
        records: [],
        hours: 10,
    },
    methods: {
        fillData() {
            let options = [];
            for (let i = 10; i <= 100; i += 10) {
                options.push(i);
            }
            this.options = options;
        }
    },
    created() {
        this.fillData();
    }
});
