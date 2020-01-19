let colors = [
    "#E45A84",
    "#FFD478",
    "#BA53DE",
    "#393E46",
    "#497285",
    "#3AB1C8",
    "#F5EBEB",
    "#8DC6FF",
    "#B2E672",
    "#B17179"
];

let vm = new Vue({
    el: "#app",
    data: {
        habits: [],
        habit: {
            title: "",
            completed_reps: 0,
            required_reps: null,
            completed: false,
        },
    },
    methods: {
        fillHabits() {
            let habit = {
                title: "Biking", completed_reps: 2,
                required_reps: 10,
                completed: false
            };
            this.habits.push(habit);
            habit = {
                title: "Jogging", completed_reps: 0,
                required_reps: 2,
                completed: false
            };
            this.habits.push(habit);
        },
        addHabit() {
            if (this.habit.title === "" || this.habit.title == null)
                alert("Don't forget to add a TITLE to your habit");
            else if (this.habit.required_reps === 0 || this.habit.required_reps == null)
                alert("Don't forget to add REPETITIONS to yor habit");
            else {
                this.habits.push(this.habit);
                this.habit = {
                    title: "",
                    completed_reps: 0,
                    required_reps: null,
                    completed: false,
                };
            }
        },
        updateCompleted() {
            this.habits.forEach(habit => {
                if (habit.completed_reps === habit.required_reps)
                    habit.completed = true;
            })
        },
        updateProgress(index) {
            if (this.habits[index].completed_reps < this.habits[index].required_reps)
                this.habits[index].completed_reps++;
            this.updateCompleted();
        },
        removeHabit(index) {
            this.habits.splice(index, 1);
            this.updateCompleted();
        }
    },
    created() {
        this.fillHabits();
    }
});