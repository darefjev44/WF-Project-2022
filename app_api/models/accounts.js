const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    amount: { 
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
    accountID: {
        type: Number,
        required: true
    },
    PIN: {
        type: Number,
        'default': 123456,
        min: 100000,
        max: 999999
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

mongoose.model('Account', accountSchema);