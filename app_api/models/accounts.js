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
    address: {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    county: {
        type: String,
        required: true
    },
    eircode: {
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
        'default': "BAPPIE2D"
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



//generate a userid, pin, iban for the account
accountSchema.pre('validate', function(next) {
    this.pin = Math.floor(Math.random() * 1000000);
    var IBANLength = 14 - this.userid.toString().length;
    var IBAN = Math.floor(Math.random() * Math.pow(10, IBANLength));
    IBAN = IBAN + this.userid;
    this.IBAN = "IE64BAPP" + IBAN;
    next();
});

mongoose.model('Account', accountSchema);