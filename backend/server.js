const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
// seat layout: A1 A2 | A3 A4
const rows = ["A", "B", "C", "D", "E", "F","G", "H"];
const cols = [1, 2, 3, 4];

let seats = [];

rows.forEach((row) => {
  cols.forEach((col) => {
    seats.push({
      id: `${row}${col}`,   // A1, A2...
      booked: false,
    });
  });
});

// ✅ GET all seats
app.get("/seats", (req, res) => {
  db.query("SELECT * FROM seats", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.post("/book", (req, res) => {
  const { seatIds } = req.body;

  if (!seatIds || seatIds.length === 0) {
    return res.status(400).json({ message: "No seats selected" });
  }

  // Check already booked
  db.query(
    "SELECT * FROM seats WHERE id IN (?) AND booked = true",
    [seatIds],
    (err, results) => {
      if (err) return res.status(500).json(err);

      if (results.length > 0) {
        return res.status(400).json({
          message: "Some seats already booked",
          alreadyBooked: results.map((s) => s.id),
        });
      }

      // Book seats
      db.query(
        "UPDATE seats SET booked = true WHERE id IN (?)",
        [seatIds],
        (err) => {
          if (err) return res.status(500).json(err);

          res.json({ message: "Booking successful 🎉" });
        }
      );
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});