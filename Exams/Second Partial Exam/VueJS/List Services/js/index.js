let main = new Vue({
    el: "#main",
    data: {
        services: [],
        totalPrice: 0,
    },
    methods: {
        fillServices() {
            let service = {name: "Web Development", price: 300, selected: false};
            this.services.push(service);
            service = {name: "Design", price: 400, selected: false};
            this.services.push(service);
            service = {name: "Integration", price: 250, selected: false};
            this.services.push(service);
            service = {name: "Training", price: 220, selected: false};
            this.services.push(service);
        },
        selectService(index) {
            this.services[index].selected = !this.services[index].selected;
            this.calculateTotal();
        },
        calculateTotal() {
            this.totalPrice = 0;
            this.services.forEach(service => {
                if (service.selected)
                    this.totalPrice += service.price;
            })
        }
    },
    created() {
        this.fillServices();
    }
});