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
            this.currentPage = index;

            let usersIndex = index * this.pageSize - this.pageSize;

            for (let i = usersIndex; i < usersIndex + 10; i++)
                this.usersOnPage.push(this.users[i]);

            if (index <= this.totalPages)
                if (index < 3)
                    for (let i = 1; i <= 5; i++)
                        this.offeredPages.push(i);
                else if (index > this.totalPages - 2)
                    for (let i = this.totalPages - 4; i <= this.totalPages; i++)
                        this.offeredPages.push(i);
                else
                    for (let i = -2; i < 3; i++)
                        this.offeredPages.push((i + index));

        }
    },
    created() {
        this.fillUsers();
        this.goToPage(1);
    }
});