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
        validate: {
            validator: function(v) {
                return /^[a-zA-Z]+$/.test(v);
            },
            message: 'Invalid first name.'
        },
        maxLength: [20, 'First name is too long.'],
        required: [true, 'First name is required.']
    },
    lastName: {
        type: String,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z]+$/.test(v);
            },
            message: 'Invalid last name.'
        },
        maxLength: [20, 'Last name is too long.'],
        required: [true, 'Last name is required.']
    },
    address: {
        type: String,
        minLength: [5, 'Address is too short.'],
        maxLength: [50, 'Address is too long.'],
        required: [true, 'Address is required.']
    },
    town: {
        type: String,
        maxLength: [30, 'Town/City is too long.'],
        required: [true, 'Town is required.']
    },
    county: {
        type: String,
        maxLength: [20, 'County is too long.'],
        required: [true, 'County is required.']
    },
    eircode: {
        type: String,
        validate: {
            validator: function(v) {
                return /^([A-Za-z0-9]{3}\s{0,1}[A-Za-z0-9]{4})$/.test(v);
            },
            message: props => 'Invalid eircode format.'
        },
        required: [true, 'Eircode is required.']
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
        type: String
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
        account: {
            _id: this._id
        }
    }, process.env.JWT_SECRET, {
        expiresIn: '10m'
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