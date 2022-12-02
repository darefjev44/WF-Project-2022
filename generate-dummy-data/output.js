db.accounts.deleteMany({})
db.accounts.insertMany([{
firstName: "Daniel",
lastName: "Foster",
address: "123 Street",
town: "Town City",
county: "Co. County",
eircode: "A12 B34",
userid: 600000,
pin: "123456",
IBAN: "IE64BAPP00000000600000",
BIC: "BAPPIE2D",
balance: 2803.26,
transactions: 
    [
		{
        date: "2022-11-19",
        desc: "ITTRALEE",
        value: -33.15
		},{
        date: "2022-11-17",
        desc: "SUPERVALU",
        value: -63.47
		},{
        date: "2022-11-16",
        desc: "SUPERVALU",
        value: -66.73
		}
	]},{
firstName: "Jessica",
lastName: "Sanchez",
address: "123 Street",
town: "Town City",
county: "Co. County",
eircode: "A12 B34",
userid: 600001,
pin: "123456",
IBAN: "IE64BAPP00000000600001",
BIC: "BAPPIE2D",
balance: 1564.22,
transactions: 
    [
		{
        date: "2022-11-19",
        desc: "LIDL",
        value: -68.53
		},{
        date: "2022-11-19",
        desc: "TESCO",
        value: -55.59
		},{
        date: "2022-11-16",
        desc: "PAYPAL",
        value: -5.15
		},{
        date: "2022-11-13",
        desc: "SUPERVALU",
        value: -32.39
		},{
        date: "2022-11-10",
        desc: "ITTRALEE",
        value: -6.79
		},{
        date: "2022-11-10",
        desc: "ALDI",
        value: -5.94
		}
	]},{
firstName: "Justin",
lastName: "Perez",
address: "123 Street",
town: "Town City",
county: "Co. County",
eircode: "A12 B34",
userid: 600002,
pin: "123456",
IBAN: "IE64BAPP00000000600002",
BIC: "BAPPIE2D",
balance: 2439.42,
transactions: 
    [
		{
        date: "2022-11-19",
        desc: "PAYPAL",
        value: -0.08
		},{
        date: "2022-11-16",
        desc: "ALDI",
        value: -70.34
		},{
        date: "2022-11-13",
        desc: "LIDL",
        value: -78.9
		},{
        date: "2022-11-12",
        desc: "SUPERVALU",
        value: -22.02
		},{
        date: "2022-11-11",
        desc: "SUPERVALU",
        value: -25.97
		},{
        date: "2022-11-11",
        desc: "TESCO",
        value: -34.33
		},{
        date: "2022-11-10",
        desc: "LIDL",
        value: -18.62
		},{
        date: "2022-11-08",
        desc: "ALDI",
        value: -15.09
		}
	]},{
firstName: "Joseph",
lastName: "Martinez",
address: "123 Street",
town: "Town City",
county: "Co. County",
eircode: "A12 B34",
userid: 600003,
pin: "123456",
IBAN: "IE64BAPP00000000600003",
BIC: "BAPPIE2D",
balance: 2764.65,
transactions: 
    [
		{
        date: "2022-11-19",
        desc: "AMZN",
        value: -72.95
		},{
        date: "2022-11-18",
        desc: "ITTRALEE",
        value: -30.27
		},{
        date: "2022-11-15",
        desc: "PAYPAL",
        value: -49.99
		}
	]},{
firstName: "Michael",
lastName: "Ramirez",
address: "123 Street",
town: "Town City",
county: "Co. County",
eircode: "A12 B34",
userid: 600004,
pin: "123456",
IBAN: "IE64BAPP00000000600004",
BIC: "BAPPIE2D",
balance: 976.36,
transactions: 
    [
		{
        date: "2022-11-19",
        desc: "SUPERVALU",
        value: -24.83
		},{
        date: "2022-11-16",
        desc: "ITTRALEE",
        value: -35.29
		},{
        date: "2022-11-16",
        desc: "ALDI",
        value: -70.88
		},{
        date: "2022-11-14",
        desc: "AMZN",
        value: -82.37
		},{
        date: "2022-11-14",
        desc: "DUNNES",
        value: -47.14
		},{
        date: "2022-11-14",
        desc: "TESCO",
        value: -83.65
		},{
        date: "2022-11-13",
        desc: "DUNNES",
        value: -3.04
		},{
        date: "2022-11-12",
        desc: "TESCO",
        value: -18.64
		},{
        date: "2022-11-09",
        desc: "TESCO",
        value: -98.58
		}
	]}])