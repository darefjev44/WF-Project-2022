/*Had a lot of issues with anonymous functions in index.pug so I moved it in here*/

const today = () => {
    var date = new Date();
    return date;
};

const yesterday = () => {
    var date = new Date();
    date.setDate(date.getDate()-1);
    return date; 
};

const datesMatching = (d1, d2) => {
    //Set times of both dates to 0, we only care about the Y/M/D.
    console.log(typeof d1)
    d1.setHours(0,0,0,0);
    d2.setHours(0,0,0,0);
    return d1.getTime() === d2.getTime();
}

exports.today = today;
exports.yesterday = yesterday;
exports.datesMatching = datesMatching;
