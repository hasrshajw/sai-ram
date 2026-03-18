import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchSeats();
  }, []);

  const fetchSeats = async () => {
    const res = await axios.get("http://localhost:5000/seats");
    setSeats(res.data);
  };

  const handleSeatClick = (seat) => {
    if (seat.booked) return;

    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat.id]);
    }
  };

  const handleBooking = async () => {
    if (selectedSeats.length === 0) {
      alert("Select at least one seat ❗");
      return;
    }

    try {
      await axios.post("http://localhost:5000/book", {
        seatIds: selectedSeats,
      });

      // Add to history
      const newBooking = {
        seats: selectedSeats,
        time: new Date().toLocaleString(),
      };

      setHistory([newBooking, ...history]);

      setSelectedSeats([]);
      fetchSeats();
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  // Counts
  const bookedCount = seats.filter((s) => s.booked).length;
  const availableCount = seats.length - bookedCount;

  return (
    <div className="main">

      {/* LEFT: BUS */}
      <div className="container">
        <h2>🚌 Bus Seat Booking</h2>

        <div className="bus">
          {seats.map((seat, index) => (
            <React.Fragment key={seat.id}>

              {(index % 4 === 0 || index % 4 === 1) && (
                <div
                  className={`seat 
                    ${seat.booked ? "booked" : ""}
                    ${selectedSeats.includes(seat.id) ? "selected" : ""}
                  `}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat.id}
                </div>
              )}

              {index % 4 === 1 && <div className="aisle"></div>}

              {(index % 4 === 2 || index % 4 === 3) && (
                <div
                  className={`seat 
                    ${seat.booked ? "booked" : ""}
                    ${selectedSeats.includes(seat.id) ? "selected" : ""}
                  `}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat.id}
                </div>
              )}

            </React.Fragment>
          ))}
        </div>

        <button
          disabled={selectedSeats.length === 0}
          onClick={handleBooking}
        >
          {selectedSeats.length === 0
            ? "Select Seats"
            : `Book ${selectedSeats.length} Seat(s)`}
        </button>
      </div>

      {/* RIGHT: PANEL */}
      <div className="side-panel">

        <h3>📊 Seat Status</h3>
        <p>Available: {availableCount}</p>
        <p>Booked: {bookedCount}</p>

        <h3>🪑 Selected</h3>
        <p>{selectedSeats.join(", ") || "None"}</p>

        <h3>📜 Booking History</h3>
        {history.length === 0 ? (
          <p>No bookings yet</p>
        ) : (
          history.map((h, i) => (
            <div key={i} className="history">
              <p>Seats: {h.seats.join(", ")}</p>
              <small>{h.time}</small>
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default App;