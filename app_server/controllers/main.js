const request = require('request');
const axios = require('axios');
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = '';//TODO Server URL Here
}

const transactions = require('../../public/javascripts/transactions.js');

/* Home */
const _renderHomepage = function(req, res, responseBody){
    res.render('index', {
        transactionsJS: transactions,
        name: 'BankApp',
        title: 'Home',
        account: responseBody
    });
};

const home = function(req, res){ 
    //const path = '/api/home/6356ba3de572620756423e15';
    const path = '/api/home/600001';
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };

    request(requestOptions, (err, response, body) => {
        _renderHomepage(req, res, body);
    })
};


/* GET 'login' page */
const login = function(req, res){
    res.render('login', {
        name: 'BankApp',
        title: 'Sign In'});
};

/* GET 'admin' page */
const admin = function(req, res){
    res.render('admin', {
        name: 'BankApp', 
        title: 'admin'});
};

module.exports = { 
    login,
    admin,
    home 
};