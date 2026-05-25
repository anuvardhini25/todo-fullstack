const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

/* Middleware */

app.use(cors());
app.use(express.json());

/* =========================
   GET ALL TODOS
========================= */

app.get("/api/todos", (req, res) => {

  db.query(
    "SELECT * FROM todos",
    (err, result) => {

      if (err) {
        res.status(500).json(err);
      }
      else {
        res.json(result);
      }

    }
  );

});

/* =========================
   ADD TODO
========================= */

app.post("/api/todos", (req, res) => {

  const { task } = req.body;

  db.query(
    "INSERT INTO todos (task) VALUES (?)",
    [task],
    (err, result) => {

      if (err) {
        res.status(500).json(err);
      }
      else {

        res.json({
          id: result.insertId,
          task,
          completed: false
        });

      }

    }
  );

});

/* =========================
   UPDATE TODO
========================= */

app.put("/api/todos/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "UPDATE todos SET completed = NOT completed WHERE id = ?",
    [id],
    (err) => {

      if (err) {
        res.status(500).json(err);
      }
      else {

        res.json({
          message: "Todo Updated"
        });

      }

    }
  );

});

/* =========================
   DELETE TODO
========================= */

app.delete("/api/todos/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM todos WHERE id = ?",
    [id],
    (err) => {

      if (err) {
        res.status(500).json(err);
      }
      else {

        res.json({
          message: "Todo Deleted"
        });

      }

    }
  );

});

/* =========================
   START SERVER
========================= */

app.listen(5000, () => {

  console.log("🚀 Server Running on Port 5000");

});