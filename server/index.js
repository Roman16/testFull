const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(cors());

let customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: String,
    email: String,
    phone: Number,
    address: String,
});

let Customer = mongoose.model('Customer', customerSchema);

let user = {
    id: 12,
    status: 'admin',
    pass: '1212',
    auth_key: 'Vq|J,e<9_+x_ODJo+CRq+~F1Nr1N+;`e;i;s:/=O$Dy&?a,ET+VSGw10h;-mV8vg'
};

app.route('/sign_up')
    .post((req, res) => {
        if (req.body.login === 'admin' && req.body.password === 'admin') {
            res.json(user);
        } else {
            res.status(500).send('Incorrect password or login!!');
        }
    });

app.route('/customers')
    .get((req, res) => {
        Customer.find()
            .then(doc => {
                res.json(doc);
            })
    })
    .post((req, res) => {
        let data = new Customer(req.body);
        data.save();
        res.sendStatus(200);
    })
    .put((req, res) => {
        Customer.findOneAndUpdate({_id: req.body.id}, { $set: { name: 'large' }}, { new: true }, (err, doc) => {
            if(err) {
                return err
            }
            res.sendStatus(200)
        });
    })
    .delete((req, res) => {
        Customer.findOneAndDelete({_id: req.body.id}, (err, doc) => {
            if(err) {
                return err
            }
            res.sendStatus(200)
        })
    });


mongoose.connect('mongodb://localhost:27017/translatedb', {
    useNewUrlParser: true
})
    .then(() => {
        console.log('mongodb connect');
        app.listen(8080, () => console.log('server run'));
    })
    .catch(() => console.log('error'));
