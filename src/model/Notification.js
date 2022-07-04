class Notification {
    constructor(title, body, id, mobileNumber) {
        this.id = id;
        this.title = title;
        this.mobileNumber = mobileNumber;
        this.body = body;
    }

    getId() {
        return this.id;
    }
}