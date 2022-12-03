const axios = require('axios');
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = '';//TODO Server URL Here
}

const transactionsJS = require('../../public/javascripts/transactions.js');

/* Home */
const _renderHomepage = function(req, res, data){
    const path = apiOptions.server + '/api/account/' + data.token;

    //Gets the account details from the token & renders the homepage
    axios
        .get(path)
        .then(function(response){
            res.render('index', {
                title: 'Home',
                account: response.data,
                transactionsJS: transactionsJS
            });
        })
        .catch(function(err){
            res.render('error', {
                title: 'Error',
                error: err
            });
        });
};

const home = function(req, res){
    _renderHomepage(req, res, req.body);
};

/* GET 'login' page */
const login = function(req, res){
    res.render('login', {
        name: 'BankApp',
        title: 'Sign In'});
};

const loginSubmit = function(req, res){
    const path = apiOptions.server + '/api/login';
    const postData = {
        userid: req.body.userid,
        pin: req.body.pin
    };

    //Submits the login form and attempts to redirect to the homepage with the token
    axios
        .post(path, postData)
        .then(function(response){
            _renderHomepage(req, res, response.data);
        })
        .catch(function(err){
            res.render('error', {
                title: 'Error',
                error: err
            });
        });
};


/* GET 'admin' page */
const admin = function(req, res){
    res.render('admin', {
        name: 'BankApp', 
        title: 'admin'});
};

module.exports = { 
    login,
    loginSubmit,
    admin,
    home
};