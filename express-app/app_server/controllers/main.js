const axios = require('axios');
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = '';//TODO Server URL Here
}

/* Home */
const _renderHomepage = function(req, res){
    var token = req.cookies.token;
    const path = apiOptions.server + '/api/account/' + token;

    //Gets the account details from the token & renders the homepage
    axios
        .get(path)
        .then(function(response){
            res.render('index', {
                name: 'BankApp',
                title: 'Home',
                account: response.data
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
    if(req.cookies.token){
        _renderHomepage(req, res);
    } else{
        res.redirect('/login');
    }
};

/* Login GET */
const login = function(req, res){
    res.render('login', {
        name: 'BankApp',
        title: 'Sign In'});
};

/* Login POST */
const loginSubmit = function(req, res){
    const path = apiOptions.server + '/api/login';
    const postData = {
        userid: req.body.userid,
        pin: req.body.pin
    };

    axios
        .post(path, postData)
        .then(function(response){
            res.cookie('token', response.data.token);
            res.redirect('/');
        })
        .catch(function(err){
            res.render('error', {
                title: 'Error',
                error: err
            });
        });
};

/* Logout */
const logout = function(req, res){
    res.clearCookie('token');
    res.redirect('/login');
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
    logout,
    admin,
    home
};