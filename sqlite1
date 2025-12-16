// animals.js
const sqlite3 = require("sqlite3").verbose();

// 1) Open or create the database
const db = new sqlite3.Database("animals.db", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
    process.exit(1);
  }
  console.log("Connected to the animals database.");
});

// 2) Run everything in order
db.serialize(() => {
  // Create table if it does not exist
  db.run(
    `CREATE TABLE IF NOT EXISTS Animals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      habitat TEXT NOT NULL,
      life_expectancy INTEGER,
      in_danger INTEGER
    )`,
    (err) => {
      if (err) return console.error("Error creating table:", err.message);
      console.log("Animals table ready.");
    }
  );

  // 3) Insert sample rows with a prepared statement
  const insertQuery = `
    INSERT INTO Animals (name, habitat, life_expectancy, in_danger)
    VALUES (?, ?, ?, ?)
  `;
  const stmt = db.prepare(insertQuery);

  stmt.run(["Elephant", "Savannah", 60, 1], function (err) {
    if (err) return console.error("Error inserting Elephant:", err.message);
    console.log(`Inserted Elephant with rowid ${this.lastID}`);
  });

  stmt.run(["Turtle", "Ocean", 100, 0], function (err) {
    if (err) return console.error("Error inserting Turtle:", err.message);
    console.log(`Inserted Turtle with rowid ${this.lastID}`);
  });

  stmt.run(["Dog", "Domestic", 13, 0], function (err) {
    if (err) return console.error("Error inserting Dog:", err.message);
    console.log(`Inserted Dog with rowid ${this.lastID}`);
  });

  stmt.finalize();

  // 4) Query all rows
  db.all("SELECT * FROM Animals", (err, rows) => {
    if (err) return console.error("Error fetching all animals:", err.message);
    console.log("All Animals:", rows);
  });

  // 5) Query with a condition
  db.all(
    "SELECT * FROM Animals WHERE life_expectancy > ?",
    [50],
    (err, rows) => {
      if (err)
        return console.error(
          "Error fetching animals with life_expectancy > 50:",
          err.message
        );
      console.log("Life expectancy > 50:", rows);
    }
  );

  // 6) Update
  db.run(
    "UPDATE Animals SET in_danger = ? WHERE name = ?",
    [1, "Dog"],
    function (err) {
      if (err) return console.error("Error updating Dog:", err.message);
      console.log(`Rows updated: ${this.changes}`);
    }
  );

  // 7) Delete
  db.run(
    "DELETE FROM Animals WHERE name = ?",
    ["Dog"],
    function (err) {
      if (err) return console.error("Error deleting Dog:", err.message);
      console.log(`Rows deleted: ${this.changes}`);
    }
  );

  // 8) Show remaining rows
  db.all("SELECT * FROM Animals", (err, rows) => {
    if (err) return console.error("Error fetching final rows:", err.message);
    console.log("Animals after update/delete:", rows);
  });
});

// 9) Close the database at the end
db.close((err) => {
  if (err) return console.error("Error closing the database:", err.message);
  console.log("Database connection closed.");
});
