import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="ISEDB",
  password="notjustconcerts"
)

print(mydb)