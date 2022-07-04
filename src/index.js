const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Routes
app.use(require('./routes/index'));

app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});