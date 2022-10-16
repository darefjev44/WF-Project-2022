const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    date: Date,
    desc: String,
    amount: Number
    });

const accountSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    accountID: Number,
    PIN: Number,
    IBAN: String,
    BIC: String,
    transactions: [transactionSchema] 
    });

mongoose.model('Account', accountSchema)