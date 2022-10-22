//load("generate-dummy-data\output.js")
db.accounts.deleteMany({})
db.accounts.insertMany([{
firstName: "Susan",
lastName: "Long",
accountID: 600000,
PIN: 123456,
IBAN: "IE64BAPP00000000600000",
BIC: "DABNKAPP",
transactions: 
    [
		{
        date: "2022-10-22",
        desc: "LIDL",
        amount: -9.03
		},{
        date: "2022-10-21",
        desc: "LIDL",
        amount: -80.08
		},{
        date: "2022-10-21",
        desc: "LIDL",
        amount: -5.3
		},{
        date: "2022-10-19",
        desc: "ALDI",
        amount: -78.37
		},{
        date: "2022-10-18",
        desc: "AMZN",
        amount: -20.73
		},{
        date: "2022-10-15",
        desc: "SUPERVALU",
        amount: -4.21
		},{
        date: "2022-10-15",
        desc: "AMZN",
        amount: -72.53
		},{
        date: "2022-10-13",
        desc: "LIDL",
        amount: -23.83
		},{
        date: "2022-10-12",
        desc: "AMZN",
        amount: -47.16
		},{
        date: "2022-10-12",
        desc: "ALDI",
        amount: -37.61
		},{
        date: "2022-10-11",
        desc: "ITTRALEE",
        amount: -65.69
		},{
        date: "2022-10-11",
        desc: "ALDI",
        amount: -41.61
		},{
        date: "2022-10-10",
        desc: "DUNNES",
        amount: -21.84
		},{
        date: "2022-10-09",
        desc: "TESCO",
        amount: -54.73
		},{
        date: "2022-10-06",
        desc: "DUNNES",
        amount: -95.99
		},{
        date: "2022-10-03",
        desc: "DUNNES",
        amount: -34.72
		}
	]}])