const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const transactionSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    value: { 
        type: Number,
        required: true
    }});

const accountSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userid: {
        type: Number,
        required: true
    },
    pin: {
        type: String,
        'default': 123456
    },
    IBAN: {
        type: String,
        required: true
    },
    BIC: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        'default': 0
    },
    transactions: [transactionSchema] 
    });

accountSchema.methods.validPin = function(pin) {
    return this.pin === pin;
};

accountSchema.methods.generateJwt = function() {
    return jwt.sign({
        _id: this._id,
        firstName: this.firstName,
        lastName: this.lastName,
        IBAN: this.IBAN,
        BIC: this.BIC,
        balance: this.balance
    }, process.env.JWT_SECRET, {
    });
}

mongoose.model('Account', accountSchema);