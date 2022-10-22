/* GET 'login' page */
const login = function(req, res){
    res.render('login', { title: 'Sign In'});
}

/* GET 'register' page */
const register = function(req, res){
    res.render('register', { title: 'Register'});
}

/* JS providing functions for displaying transactions */
const transactionsJS = require('../../public/javascripts/transactions.js')
/* GET 'home' page */
const home = function(req, res){ 
    res.render('index', {
        transactionsJS: transactionsJS,
        title: 'Home',
        account: {
            firstName: "Margaret",
            lastName: "Reyes",
            accountID: 600000,
            PIN: 123456,
            IBAN: "IE64BAPP00000000600000",
            BIC: "DABNKAPP",
            balance: 523.23,
            transactions: [
                {
                    date: "2022-10-22",
                    desc: "LIDL",
                    value: -9.03
                },
                {
                    date: "2022-10-22",
                    desc: "AMZN",
                    value: -23.23
                },
                {
                    date: "2022-10-22",
                    desc: "TESCO",
                    value: -22.34
                },{
                    date: "2022-10-21",
                    desc: "LIDL",
                    value: -80.08
                },{
                    date: "2022-10-21",
                    desc: "LIDL",
                    value: -5.3
                },{
                    date: "2022-10-19",
                    desc: "ALDI",
                    value: -78.37
                },{
                    date: "2022-10-18",
                    desc: "AMZN",
                    value: -20.73
                },{
                    date: "2022-10-15",
                    desc: "SUPERVALU",
                    value: -4.21
                },{
                    date: "2022-10-15",
                    desc: "AMZN",
                    value: -72.53
                },{
                    date: "2022-10-13",
                    desc: "LIDL",
                    value: -23.83
                },{
                    date: "2022-10-12",
                    desc: "AMZN",
                    value: -47.16
                },{
                    date: "2022-10-12",
                    desc: "ALDI",
                    value: -37.61
                },{
                    date: "2022-10-11",
                    desc: "ITTRALEE",
                    value: -65.69
                },{
                    date: "2022-10-11",
                    desc: "ALDI",
                    value: -41.61
                },{
                    date: "2022-10-10",
                    desc: "DUNNES",
                    value: -21.84
                },{
                    date: "2022-10-09",
                    desc: "TESCO",
                    value: -54.73
                },{
                    date: "2022-10-06",
                    desc: "DUNNES",
                    value: -95.99
                },{
                    date: "2022-10-03",
                    desc: "DUNNES",
                    value: -34.72
                }
            ]   
        }
    }); 
};

module.exports = { 
    login,
    register,
    home 
};