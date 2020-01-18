let app = new Vue({
    el: "#app",
    data: {
        hourlyPay: 100,
        records: [],
        record: {
            hours: 0,
            description: ""
        },
        index: null,
        hours: 10,
        totalTime: 0,
        totalEarned: 0,
        hourRate: 10,
        showEdit: 0,
    },
    methods: {
        fillData() {
            let rec1 = {hours: 5, description: "This is an example record 1"};
            this.records.push(rec1);
            let rec2 = {hours: 4, description: "This is an example record 2"};
            this.records.push(rec2);
            let rec3 = {hours: 3, description: "This is an example record 3"};
            this.records.push(rec3);
            this.updateTotal();
        },
        addRecord() {
            if (this.record.hours === 0 || this.record.hours == null) {
                alert("Don't forget to record your HOURS");
                return;
            }
            if (this.record.description === "" || this.record.description == null) {
                alert("Dont forget to add your DESCRIPTION");
                return;
            }
            this.records.push(this.record);
            this.record = {
                hours: 0,
                description: ""
            };
            this.updateTotal();
        },
        showEditForm(index) {
            this.showEdit = true;
            let record = this.records[index];
            this.record.hours = record.hours;
            this.record.description = record.description;
            this.index = index;
        },
        editRecord(index) {
            if (typeof this.records[index] === "undefined") {
                alert("Invalid index");
                return;
            }
            if (this.record.hours === 0 || this.record.hours == null) {
                alert("Don't forget to record your HOURS");
                return;
            }
            if (this.record.description === "" || this.record.description == null) {
                alert("Dont forget to add your DESCRIPTION");
                return;
            }
            this.records[index] = this.record;
            this.updateTotal();
            this.showEdit = false;
            this.record = {
                hours: 0,
                description: ""
            };
            this.index = null;
        },
        deleteRecord(index) {
            if (index > -1) {
                this.records.splice(index, 1);
                this.updateTotal();
            } else
                alert("Invalid index");
        },
        updateTotal() {
            let earned = 0;
            let hours = 0;
            this.records.forEach(record => {
                earned += (record.hours * this.hourRate);
                hours += parseInt(record.hours);
            });
            this.totalTime = hours;
            this.totalEarned = earned;
        },
    },
    created() {
        this.fillData();
    }
});
