// const express = require("express");
// const app = express();
  
// app.post("/post", (req, res) => {
//   console.log("Connected to React");
//   res.redirect("/");
// });
  
// const PORT = process.env.PORT || 8080;
  
// app.listen(PORT, console.log(`Server started on port ${PORT}`));

const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const multer = require('multer');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(multer().none());

// GET WORKOUT DATA (JSON) GIVEN DATE
app.get('/logbook/data', async function(req, res) {
  try {

    // Query Param / Input Validation
    let date = req.query.date;
    if (!date) {
      res.status(400).type("text").send("Date not included!");
    } 

    let db = await getDBConnection();
    let qry = 'SELECT * FROM workouts WHERE date = ?;';
    let results = await db.all(qry, [date]);
    await db.close();
    res.json(results);
  } catch (err) {
    res.status(500);
    res.type("text").send('Error!');
  }
})

// POST WORKOUT DATA (JSON) INTO DB AND RETURN ID (JSON)
app.post('/logbook/input', async function(req, res) {
  try {
    // JSON Body parameters / Input Validation
    let date = req.body.date;
    let workout = req.body.workout;
    let exercises = req.body.exercises;
    if (!date) {
      res.status(400).type("text").send("Date not included!");
    } else if (!workout) {
      res.status(400).type("text").send("Workout not included!");
    } else if (!exercises) {
      res.status(400).type("text").send("Exercises not included!");
    }

    let db = await getDBConnection();

    // CLEAR OLD DATA
    let del = "DELETE FROM workouts WHERE date = ? AND workout = ?";
    await db.run(del, [date, workout]);

    // DB input
    for (let exercise in exercises) {
      for (let set in exercises[exercise]) {
        let setData = exercises[exercise][set];
        let update = "INSERT INTO workouts (date, workout, exercise, setN, weight, reps, RPE, notes)\
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
        await db.run(update, [date, workout, exercise, set, setData.weight, setData.reps, setData.RPE, setData.notes]);
      }
    }

    // get ID's for new rows
    let qry = 'SELECT id FROM workouts WHERE date = ?;';
    let results = await db.all(qry, [date]);
    await db.close();
    res.type("text").send(results);
  } catch (err) {
    res.status(500);
    res.type("text").send('Error!');
  }
});

/**
 * Establishes a database connection to the database and returns the database object.
 * Any errors that occur should be caught in the function that calls this one.
 * @returns {Object} - The database object for the connection.
 */
 async function getDBConnection() {
  const db = await sqlite.open({
    filename: 'logbook.db',
    driver: sqlite3.Database
  });
  return db;
}

app.use(express.static('public'));
const PORT = process.env.PORT || 8080;
app.listen(PORT);