import express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Connected From feedback server");
});

//connect with mysql
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "feedbackDB1",
});

db.connect((err) => {
  if (err) throw err;
  console.log("db connected.");
});
//create db
app.get("/createDB", (req, res) => {
  const sql = "CREATE DATABASE feedbackDB1";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("DB created");
  });
});

//create table
app.get("/createUserFeedbackTable", (req, res) => {
  const sql =
    "CREATE TABLE userFeedback (id int AUTO_INCREMENT, name varchar(100), feedback varchar(100), rating int, PRIMARY KEY(id) )";
  db.query(sql, (err) => {
    if (err) throw err;
    res.send("table created...");
  });
});

//insert feedback data into userFeedback table
app.post("/insertFeedback", (req, res) => {
  const { name, feedback, rating } = req.body;
  const sql =
    "INSERT INTO userFeedback(name, feedback, rating) VALUES (?, ?, ?);";
  db.query(sql, [name, feedback, rating], (err) => {
    if (err) throw err;
    res.send("inserted..");
  });
});

//get total feedback
app.get("/getTotalFeedback", (req, res) => {
  const sql = "select * from userFeedback";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//delete single feedback
app.get("/deleteFeedback/:id", (req, res) => {
  const sql = `DELETE from userFeedback WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Feedback Deleted.");
  });
});

//get single feedback
app.get("/singleFeedback/:id", (req, res) => {
  const sql = `SELECT * FROM userFeedback WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
//update single feedback
app.put("/updateFeedback/:id", (req, res) => {
  const { name, feedback, rating } = req.body;
  const sql = `UPDATE userFeedback SET name = ?, feedback = ?,  rating = ? WHERE id = ${req.params.id}`;
  db.query(sql, [name, feedback, rating], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
