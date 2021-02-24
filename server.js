const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const PORT = process.env.PORT || 3003;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//connecting to database
const db = new sqlite3.Database('./db/election.db', err =>{
    if (err){
        return console.error(err.message);
    }
    console.log('Connnected to the election database!')
});

// Default response for any other requests(Not Found) Catch all
//ALWAYS LAST ROUTE
app.use((req, res) => {
  res.status(404).end();
});

db.on('open', () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });