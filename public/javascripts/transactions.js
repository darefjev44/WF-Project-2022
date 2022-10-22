const today = () => {
    var date = new Date();
    return date.toISOString().slice(0, 10);
};

const yesterday = () => {
    var date = new Date();
    date.setDate(date.getDate()-1);
    return date.toISOString().slice(0, 10);
};

const dateDay = (date) => {
    return date.slice(8,10);
};

const dateDayOrdinal = (date) => {
    dd = parseInt(date.slice(8,10));
    if (dd > 3 && dd < 21){
        return dd + 'th';
    } else {
        switch (dd % 10) {
            case 1:  return dd + 'st';
            case 2:  return dd + 'nd';
            case 3:  return dd + 'rd';
            default: return dd + 'th';
        }
    }
};

const dateMonth = (date) => {
    return date.slice(5,8);
}

const dateMonthLong = (date) => {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[parseInt(date.slice(5,8))-1];
}

const dateYear = (date) => {
    return date.slice(0, 4);
}

exports.today = today;
exports.yesterday = yesterday;
exports.dateDay = dateDay;
exports.dateDayOrdinal = dateDayOrdinal;
exports.dateMonth = dateMonth;
exports.dateMonthLong = dateMonthLong;
exports.dateYear = dateYear;
