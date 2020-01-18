var addShuff = new Vue({
    el: '#colored',
    data: {
        title: 'Colored filter',
        items: [
            {
                id: 1,
                color: 'red'
            },
            {
                id: 2,
                color: 'red'
            },
            {
                id: 3,
                color: 'red'
            },
            {
                id: 4,
                color: 'blue'
            },
            {
                id: 5,
                color: 'blue'
            },
            {
                id: 6,
                color: 'blue'
            },
            {
                id: 7,
                color: 'green'
            },
            {
                id: 8,
                color: 'green'
            },
            {
                id: 9,
                color: 'green'
            }
        ],
        filt: 'all'
    },
    computed: {
        filteredItems: function () {
            console.log('filtered');
            var result;

            if (this.filt != 'all') {
                var filt = this.filt
                result = this.items.filter(function (a) {
                    return a.color == filt
                });

            } else {
                result = this.items;
            }

            return result;
        }
    },

    methods: {
        shuffle: function () {
            var currentIndex = this.items.length, temporaryValue, randomIndex;

            // Тут ф-ция рэндома 
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = this.items[currentIndex];
                this.items[currentIndex] = this.items[randomIndex];
                this.items[randomIndex] = temporaryValue;
            }

            this.items = this.items.reverse();
        }
    }
});
