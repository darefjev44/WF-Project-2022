const axios = require('axios');
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'http://bankapp-wf-project.herokuapp.com';//TODO Server URL Here
}

/* Home GET */
const home = function(req, res){
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
            res.render('login', {
                name: 'BankApp',
                title: 'Sign In',
                messageTitle: 'Login Failed!',
                message: 'Invalid User ID or PIN. Please check your details and try again.'
            });
        });
};

/* Register GET */
const register = function(req, res){
    res.render('register', {
        name: 'BankApp',
        title: 'Register'});
};

/* Register POST */
const registerSubmit = function(req, res){
    const path = apiOptions.server + '/api/register';
    
    axios
        .post(path, req.body)
        .then(function(response){
            res.render('register', {
                name: 'BankApp',
                title: 'Register',
                messageTitle: 'Registration Successful!',
                message: 'You can now sign in with your new account.<br>Your User ID is: ' + response.data.userid + '<br>Your PIN is: ' + response.data.pin + '<br><span class="text-muted">Please keep this information safe.</span>'
            });
        })
        .catch(function(err){
            if(err.response.status === 400){
                res.render('register', {
                    name: 'BankApp',
                    title: 'Register',
                    errors: err.response.data,
                    form: req.body
                });
            } else {
                res.render('register', {
                    name: 'BankApp',
                    title: 'Register',
                    messageTitle: 'Registration Failed!',
                    message: 'Something went wrong. Please check your details and try again.<br><span class="text-muted">Error: ' + err + '</span>'
                });
            }
        });
};

/* Logout */
const logout = function(req, res){
    res.clearCookie('token');
    res.redirect('/login');
};

module.exports = { 
    login,
    loginSubmit,
    logout,
    register,
    registerSubmit,
    home
};
