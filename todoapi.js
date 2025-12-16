
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let nextId = 3;
let todos = [
  { id: 1, name: "Sample todo", priority: "high", isComplete: false, isFun: true },
  { id: 2, name: "Walk the dog", priority: "medium", isComplete: false, isFun: false }
];

app.get("/", (req, res) => {
  res.send("Todo API is working. Use /todos to view data.");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id === Number(req.params.id));
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
});

app.post("/todos", (req, res) => {
  const body = req.body || {};
  if (!body.name) {
    return res.status(400).json({ error: "name is required" });
  }

  const allowed = ["low", "medium", "high"];
  const priority = allowed.includes(body.priority) ? body.priority : "low";

  const todo = {
    id: nextId++,
    name: body.name,
    priority,
    isComplete: !!body.isComplete,
    isFun: !!body.isFun
  };

  todos.push(todo);
  res.status(201).json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ error: "Todo not found" });
  res.json(todos.splice(index, 1)[0]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});