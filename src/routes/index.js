const { Router } = require('express');
const router = Router();

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


const notifications = [];

router.get('/all-sms', (req, res) => {
    res.status(200).json(notifications);
});

router.get('/sms/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const notification = notifications.find(n => n.id == id);
    if(notification) {
        res.status(200).json(notification);
    }
    else {
        res.status(404).json({ message: 'Not found' });
    }
});

router.post('/send-sms', (req, res) => {
    const { title, body, mobileNumber } = req.body;
    if(!title || !body || !mobileNumber) {
        res.status(400).json({ message: 'Bad request' });
    }
    const notification = new Notification(title, body, notifications.length + 1, mobileNumber);
    notifications.push(notification);
    res.status(201).json(notification);
})



 
module.exports = router;