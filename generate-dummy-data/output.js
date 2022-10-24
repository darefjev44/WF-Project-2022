db.accounts.deleteMany({})
db.accounts.insertMany([{
firstName: "Charles",
lastName: "Campbell",
address: "123 Street",
town: "Tralee",
county: "Co. County",
accountID: 600000,
PIN: 123456,
IBAN: "IE64BAPP00000000600000",
BIC: "DABNKAPP",
balance: 2087.49,
transactions: []
},{
firstName: "Nicole",
lastName: "Bell",
address: "123 Street",
town: "Tralee",
county: "Co. County",
accountID: 600001,
PIN: 123456,
IBAN: "IE64BAPP00000000600001",
BIC: "DABNKAPP",
balance: 1808.82,
transactions: []}])