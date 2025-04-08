import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="amelia",
  password="Lacer746!",
  database="movieNight"
)

mycursor = mydb.cursor()

#movies: name, director, summary, DOR, length, genre, watched
mycursor.execute("CREATE TABLE movies (name VARCHAR(200), director VARCHAR(50), summary MEDIUMTEXT, dor DATE, length DOUBLE(4, 2), genre VARCHAR(200), watched BOOL)")

