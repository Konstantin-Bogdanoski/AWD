let app = new Vue({
    el: "#app",
    data: {
        users: [],
        usersOnPage: [],
        currentPage: null,
        totalPages: null,
        pageSize: null,
        offeredPages: []
    },
    methods: {
        fillUsers() {
            for (let i = 0; i < 200; i++) {
                let user = {firstName: "John", lastName: "Doe", ID: i};
                this.users.push(user);
            }
            this.totalPages = this.users.length / 10; // 10 users per page
            this.pageSize = 10; // 10 users per page
        },
        goToPage(index) {
            this.offeredPages = [];
            this.usersOnPage = [];
            let usersIndex = index * this.pageSize - this.pageSize;
            for (let i = usersIndex; i < usersIndex + 10; i++) {
                this.usersOnPage.push(this.users[i]);
            }
            this.currentPage = index;
            if (index < 3)
                for (let i = 1; i <= 5; i++) {
                    this.offeredPages.push(i);
                }
            else
                for (let i = -2; i < 3; i++)
                    this.offeredPages.push((i + index));
        }

    },
    created() {
        this.fillUsers();
        this.goToPage(4);
    }
});