/* GET 'login' page */
const login = function(req, res){
    res.render('login', { title: 'Sign In'});
}

/* GET 'register' page */
const register = function(req, res){
    res.render('register', { title: 'Register'});
}

/* GET 'home' page */
const home = function(req, res){ 
    res.render('index', { title: 'Home' }); 
};

module.exports = { 
    login,
    register,
    home 
};