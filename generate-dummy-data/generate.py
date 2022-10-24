import random
import datetime
from datetime import date
from tracemalloc import start
import os

class Account:
    def __init__(self, firstName, lastName, accountID, PIN, IBAN, BIC, balance, transactions):
        self.firstName = firstName
        self.lastName = lastName
        self.accountID = accountID
        self.PIN = PIN
        self.IBAN = IBAN
        self.BIC = BIC
        self.balance = balance
        self.transactions = transactions
    def __str__(self):
        str = f'''{{
firstName: "{self.firstName}",
lastName: "{self.lastName}",
address: "123 Street",
town: "Tralee",
county: "Co. County",
accountID: {self.accountID},
PIN: {self.PIN},
IBAN: "{self.IBAN}",
BIC: "{self.BIC}",
balance: {self.balance},
transactions: 
    [
'''
        
        transStr = '\t\t{'
        n = 0
        for transaction in self.transactions:
            transStr += transaction.__str__()
            if(n != len(self.transactions)-1):
                transStr += "\n\t\t},{"
            n+=1
        transStr += "\n\t\t}"

        str += transStr
        str += "\n\t]"
        str += "}"
        return str


class Transaction:
    def __init__(self, date, desc, amount):
        self.date = date
        self.desc = desc
        self.amount = amount
    def __str__(self):
        str = f'''
        date: "{self.date}",
        desc: "{self.desc}",
        amount: {self.amount}'''
        return str

amount = input("Amount of dummy accounts to generate (or enter for defaults [5, 10-20, 0-3]): ")
if(amount != ''):
    amount = int(amount)
    transRange = input("Amount of dummy transactions to generate per account (min-max): ").split("-")
    dateVariance = input("Amount of days between subsequent transactions (min-max): ").split("-")
else:
    amount = 5
    transRange = ["10", "20"]
    dateVariance = ["0", "3"]


#import stuff from .txts
curDir = os.path.dirname(os.path.abspath(__file__))
with open(curDir + '/firstNames.txt') as file:
    firstNames = file.readlines()
    firstNames = [line.rstrip() for line in firstNames]

with open(curDir + '/lastNames.txt') as file:
    lastNames = file.readlines()
    lastNames = [line.rstrip() for line in lastNames]

with open(curDir + '/transactionDescs.txt') as file:
    transDescs = file.readlines()
    transDescs = [line.rstrip() for line in transDescs]

#generate dummy data
accounts=[]
startingAccId = 600000
for i in range(amount):
    firstName = random.choice(firstNames)
    lastName = random.choice(lastNames)
    accId = startingAccId+i
    balance = round(random.uniform(100, 3000), 2)

    #create transactions
    transactions = []
    transDate = date.today()
    for j in range(random.randint(int(transRange[0]), int(transRange[1]))):
        if(j != 0): #date
            transDate = transDate-datetime.timedelta(random.randint(int(dateVariance[0]), int(dateVariance[1])))
        transDesc = random.choice(transDescs)
        transAmt = round(random.uniform(-100, 0), 2)
        transactions.append(Transaction(transDate.isoformat(), transDesc, transAmt))
    accounts.append(Account(firstName, lastName, accId, 123456, 'IE64BAPP00000000'+str(accId), 'DABNKAPP', balance, transactions))

#finally, write to file.
output = open("generate-dummy-data/output.js", "w")

outputStr = '''db.accounts.deleteMany({})
db.accounts.insertMany(['''
n = 0
for account in accounts:
    outputStr += account.__str__()
    if(n != len(accounts)-1):
        outputStr += ","
    n+=1

outputStr += "])"
output.write(outputStr)
output.close