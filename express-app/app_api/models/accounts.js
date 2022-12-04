const mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var fs = require('fs')

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
    transactions: [transactionSchema],
    hash: String,
    salt: String
    });

accountSchema.methods.setPin = function(pin) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(pin, this.salt, 1000, 64, 'sha512').toString('hex');
};

accountSchema.methods.validPin = function(pin) {
    var hash = crypto.pbkdf2Sync(pin, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
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
    var IBANLength = 14 - this.userid.toString().length;
    var IBAN = Math.floor(Math.random() * Math.pow(10, IBANLength));
    IBAN = IBAN + this.userid;
    this.IBAN = "IE64BAPP" + IBAN;

    //load transactionsDescs.txt into an array
    var transactionDescs = fs.readFileSync(__dirname + '/transactionDescs.txt').toString().split("\n");

    //generate a random amount of transactions (5-20)
    var numTransactions = Math.floor(Math.random() * 16) + 5;
    for (var i = 0; i < numTransactions; i++) {
        var date = new Date();
        date.setDate(date.getDate() - i);

        //select a random name from transactionDescs.txt
        var desc = transactionDescs[Math.floor(Math.random() * transactionDescs.length)];

        //if the desc is PAYSLIP then generate a random amount between 200 and 400
        if (desc === "PAYSLIP") {
            var value = (Math.random() * 200 + 200).toFixed(2);
        } else {
            //otherwise generate a random amount between -100 and -5
            var value = (Math.random() * -95 - 5).toFixed(2);
        }

        console.log("date: " + date + " desc: " + desc + " value: " + value);
        this.transactions.push({date: date, desc: desc, value: value});
    }

    //randomly generate a balance between 500 and 2500
    this.balance = (Math.random() * 2000 + 500).toFixed(2);

    next();
});

mongoose.model('Account', accountSchema);