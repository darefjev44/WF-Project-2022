//load("generate-dummy-data/output.js")
db.accounts.deleteMany({})
db.accounts.insertMany([{
firstName: "Matthew",
lastName: "Ramirez",
accountID: 600000,
PIN: 123456,
IBAN: "IE64BAPP00000000600000",
BIC: "DABNKAPP",
transactions: 
    [
		{
        date: ISODate("2022-10-16"),
        desc: "TESCO",
        amount: -12.54
		},{
        date: ISODate("2022-10-16"),
        desc: "PAYPAL",
        amount: 84.3
		},{
        date: ISODate("2022-10-15"),
        desc: "AMZN",
        amount: 297.66
		},{
        date: ISODate("2022-10-13"),
        desc: "TESCO",
        amount: -101.02
		},{
        date: ISODate("2022-10-11"),
        desc: "AMZN",
        amount: -257.21
		},{
        date: ISODate("2022-10-09"),
        desc: "LIDL",
        amount: 148.8
		},{
        date: ISODate("2022-10-08"),
        desc: "DUNNES",
        amount: 194.49
		},{
        date: ISODate("2022-10-07"),
        desc: "PAYPAL",
        amount: 391.48
		},{
        date: ISODate("2022-10-04"),
        desc: "LIDL",
        amount: 178.84
		},{
        date: ISODate("2022-10-02"),
        desc: "ALDI",
        amount: 127.91
		},{
        date: ISODate("2022-09-30"),
        desc: "TESCO",
        amount: 166.0
		},{
        date: ISODate("2022-09-30"),
        desc: "ALDI",
        amount: 248.24
		},{
        date: ISODate("2022-09-27"),
        desc: "TESCO",
        amount: -61.99
		}
	]},{
firstName: "Kelly",
lastName: "Sanchez",
accountID: 600001,
PIN: 123456,
IBAN: "IE64BAPP00000000600001",
BIC: "DABNKAPP",
transactions: 
    [
		{
        date: ISODate("2022-10-16"),
        desc: "DUNNES",
        amount: 224.88
		},{
        date: ISODate("2022-10-16"),
        desc: "ITTRALEE",
        amount: -36.15
		},{
        date: ISODate("2022-10-15"),
        desc: "ALDI",
        amount: -155.59
		},{
        date: ISODate("2022-10-14"),
        desc: "LIDL",
        amount: 37.5
		},{
        date: ISODate("2022-10-12"),
        desc: "ITTRALEE",
        amount: 100.63
		},{
        date: ISODate("2022-10-10"),
        desc: "ALDI",
        amount: 319.66
		},{
        date: ISODate("2022-10-09"),
        desc: "ITTRALEE",
        amount: 132.28
		},{
        date: ISODate("2022-10-07"),
        desc: "ALDI",
        amount: -359.26
		},{
        date: ISODate("2022-10-06"),
        desc: "ITTRALEE",
        amount: -304.06
		},{
        date: ISODate("2022-10-03"),
        desc: "ITTRALEE",
        amount: -8.2
		},{
        date: ISODate("2022-10-01"),
        desc: "SUPERVALU",
        amount: 321.07
		},{
        date: ISODate("2022-09-29"),
        desc: "SUPERVALU",
        amount: 71.97
		},{
        date: ISODate("2022-09-28"),
        desc: "AMZN",
        amount: -397.6
		},{
        date: ISODate("2022-09-25"),
        desc: "TESCO",
        amount: -62.51
		}
	]},{
firstName: "Angela",
lastName: "Johnson",
accountID: 600002,
PIN: 123456,
IBAN: "IE64BAPP00000000600002",
BIC: "DABNKAPP",
transactions: 
    [
		{
        date: ISODate("2022-10-16"),
        desc: "SUPERVALU",
        amount: -194.32
		},{
        date: ISODate("2022-10-14"),
        desc: "TESCO",
        amount: 24.44
		},{
        date: ISODate("2022-10-14"),
        desc: "LIDL",
        amount: 336.87
		},{
        date: ISODate("2022-10-12"),
        desc: "SUPERVALU",
        amount: 66.04
		},{
        date: ISODate("2022-10-12"),
        desc: "DUNNES",
        amount: 284.05
		},{
        date: ISODate("2022-10-10"),
        desc: "TESCO",
        amount: -74.16
		},{
        date: ISODate("2022-10-08"),
        desc: "ITTRALEE",
        amount: -11.11
		},{
        date: ISODate("2022-10-08"),
        desc: "PAYPAL",
        amount: 346.96
		},{
        date: ISODate("2022-10-05"),
        desc: "TESCO",
        amount: 285.15
		},{
        date: ISODate("2022-10-02"),
        desc: "LIDL",
        amount: 33.58
		},{
        date: ISODate("2022-09-29"),
        desc: "ITTRALEE",
        amount: -93.16
		},{
        date: ISODate("2022-09-29"),
        desc: "PAYPAL",
        amount: 113.41
		}
	]},{
firstName: "Jason",
lastName: "Baker",
accountID: 600003,
PIN: 123456,
IBAN: "IE64BAPP00000000600003",
BIC: "DABNKAPP",
transactions: 
    [
		{
        date: ISODate("2022-10-16"),
        desc: "ALDI",
        amount: -226.03
		},{
        date: ISODate("2022-10-15"),
        desc: "LIDL",
        amount: 131.54
		},{
        date: ISODate("2022-10-13"),
        desc: "TESCO",
        amount: 233.95
		},{
        date: ISODate("2022-10-11"),
        desc: "TESCO",
        amount: 146.75
		},{
        date: ISODate("2022-10-10"),
        desc: "AMZN",
        amount: -168.44
		},{
        date: ISODate("2022-10-09"),
        desc: "ITTRALEE",
        amount: -139.17
		},{
        date: ISODate("2022-10-07"),
        desc: "PAYPAL",
        amount: 20.29
		},{
        date: ISODate("2022-10-06"),
        desc: "ALDI",
        amount: 54.13
		},{
        date: ISODate("2022-10-04"),
        desc: "AMZN",
        amount: 53.36
		},{
        date: ISODate("2022-10-02"),
        desc: "LIDL",
        amount: 253.33
		},{
        date: ISODate("2022-09-30"),
        desc: "AMZN",
        amount: -297.37
		},{
        date: ISODate("2022-09-28"),
        desc: "AMZN",
        amount: 297.75
		},{
        date: ISODate("2022-09-27"),
        desc: "DUNNES",
        amount: 156.58
		},{
        date: ISODate("2022-09-26"),
        desc: "DUNNES",
        amount: 47.08
		},{
        date: ISODate("2022-09-26"),
        desc: "AMZN",
        amount: -79.92
		},{
        date: ISODate("2022-09-23"),
        desc: "TESCO",
        amount: -265.97
		},{
        date: ISODate("2022-09-23"),
        desc: "PAYPAL",
        amount: -35.46
		},{
        date: ISODate("2022-09-23"),
        desc: "AMZN",
        amount: 313.71
		},{
        date: ISODate("2022-09-21"),
        desc: "PAYPAL",
        amount: 146.87
		},{
        date: ISODate("2022-09-21"),
        desc: "LIDL",
        amount: -380.98
		}
	]},{
firstName: "Carol",
lastName: "Ruiz",
accountID: 600004,
PIN: 123456,
IBAN: "IE64BAPP00000000600004",
BIC: "DABNKAPP",
transactions: 
    [
		{
        date: ISODate("2022-10-16"),
        desc: "DUNNES",
        amount: 43.49
		},{
        date: ISODate("2022-10-13"),
        desc: "LIDL",
        amount: -236.07
		},{
        date: ISODate("2022-10-13"),
        desc: "TESCO",
        amount: -379.25
		},{
        date: ISODate("2022-10-12"),
        desc: "SUPERVALU",
        amount: -105.59
		},{
        date: ISODate("2022-10-10"),
        desc: "TESCO",
        amount: 326.33
		},{
        date: ISODate("2022-10-10"),
        desc: "ALDI",
        amount: 256.0
		},{
        date: ISODate("2022-10-10"),
        desc: "DUNNES",
        amount: -237.86
		},{
        date: ISODate("2022-10-09"),
        desc: "ITTRALEE",
        amount: 372.13
		},{
        date: ISODate("2022-10-08"),
        desc: "SUPERVALU",
        amount: -347.81
		},{
        date: ISODate("2022-10-08"),
        desc: "ALDI",
        amount: 14.77
		},{
        date: ISODate("2022-10-08"),
        desc: "ITTRALEE",
        amount: 290.77
		},{
        date: ISODate("2022-10-08"),
        desc: "ALDI",
        amount: 334.64
		},{
        date: ISODate("2022-10-05"),
        desc: "DUNNES",
        amount: -212.24
		},{
        date: ISODate("2022-10-02"),
        desc: "AMZN",
        amount: 306.77
		},{
        date: ISODate("2022-10-01"),
        desc: "DUNNES",
        amount: 210.74
		},{
        date: ISODate("2022-10-01"),
        desc: "ITTRALEE",
        amount: 298.28
		},{
        date: ISODate("2022-09-29"),
        desc: "PAYPAL",
        amount: 239.22
		}
	]}])