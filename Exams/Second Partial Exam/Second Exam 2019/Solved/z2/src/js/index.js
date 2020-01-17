let CardTypes = [
    {name: "vue", image: "img/vue.png"},
    {name: "express", image: "img/express.jpg"},
    {name: "mongo", image: "img/mongo.png"},
    {name: "nodejs", image: "img/nodejs.svg"},
    {name: "webpack", image: "img/webpack.png"},
    {name: "babel", image: "img/babel.svg"}];

shuffleCards = () => {
    return _.shuffle([].concat(_.cloneDeep(CardTypes), _.cloneDeep(CardTypes)));
};

new Vue({
    el: "#app",
    data: {
        cards: [],
        showSplash: false,
        time: "--:--",
        score: 0,
        started: false,
        startTime: 0,
        turns: 0,
        flipBackTimer: null,
        timer: null,
    },
    methods: {
        resetGame() {
            this.showSplash = false;
            let cards = shuffleCards();
            this.turns = 0;
            this.score = 0;
            this.started = false;
            this.startTime = 0;

            _.each(cards, (card) => {
                card.flipped = false;
                card.found = false;
            });

            this.cards = cards;
        },
        flippedCards() {
            return _.filter(this.cards, card => card.flipped);
        },
        sameFlippedCard() {
            let flippedCards = this.flippedCards();
            if (flippedCards.length == 2) {
                if (flippedCards[0].name == flippedCards[1].name)
                    return true;
            }
        },
        setCardFounds() {
            this.cards.forEach(card => {
                if (card.flipped)
                    card.found = true;
            });
        },
        checkAllFound() {
            let foundCards = _.filter(this.cards, card => card.found);
            if (foundCards.length == this.cards.length)
                return true;
        },
        startGame() {
            this.started = true;
            this.startTime = moment();
            this.timer = setInterval(() => {
                this.time = moment(moment().diff(this.startTime)).format("mm:ss");
            }, 1000);
        },
        finishGame() {
            this.started = false;
            clearInterval(this.timer);
            let score = 1000 - (moment().diff(this.startTime, 'seconds') - CardTypes.length * 5) * 3 - (this.turns - CardTypes.length) * 5;
            this.score = Math.max(score, 0);
            this.showSplash = true;
        },
        flipCard(card) {
            if (card.found || card.flipped) return;

            if (!this.started) {
                this.startGame();
            }

            let flipCount = this.flippedCards().length;
            if (flipCount == 0) {
                card.flipped = !card.flipped;
            } else if (flipCount == 1) {
                card.flipped = !card.flipped;
                this.turns += 1;
                if (this.sameFlippedCard()) {
                    this.flipBackTimer = setTimeout(() => {
                        this.clearFlipBackTimer();
                        this.setCardFounds();
                        this.clearFlips();

                        if (this.checkAllFound()) {
                            this.finishGame();
                        }

                    }, 200);
                } else {
                    this.flipBackTimer = setTimeout(() => {
                        this.clearFlipBackTimer();
                        this.clearFlips();
                    }, 1000);
                }
            }
        },
        clearFlips() {
            _.each(this.cards, card => {
                card.flipped = false;
            })
        }
        ,
        clearFlipBackTimer() {
            clearTimeout(this.flipBackTimer);
            this.flipBackTimer = null;
        }
    },
    created() {
        this.resetGame();
    }
});