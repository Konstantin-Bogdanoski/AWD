let app = new Vue({
    el: "#colored",
    data: {
        items: [],
        filteredItems: [],
        showFiltered: false,
    },
    methods: {
        fillItems() {
            for (let i = 0; i < 10; i++) {
                let color = "red";
                if (i > 2)
                    color = "blue";
                if (i > 6)
                    color = "green";

                let item = {id: i, color: color}
                this.items.push(item);
            }
            this.filteredItems = [...this.items];
        },
        filterItems(color) {
            this.showFiltered = true;
            this.filteredItems = [];
            this.items.forEach(item => {
                if (item.color === color)
                    this.filteredItems.push(item)
            });
        },
        filterClear() {
            this.showFiltered = false;
            this.filteredItems = [...this.items];
        },
        shuffleItems() {
            this.filteredItems.sort(() => Math.random() - 0.5);
        }
    },
    created() {
        this.fillItems();
    }
});