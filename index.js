
const express = require("express");
const helmet = require("helmet");
const app = express();
const cors = require("cors");

// Use Railway's port, or 8080 locally
const PORT = process.env.PORT || 8080;

// ROUTES
const todoRoutes = require("./routes/todo.routes");

// MIDDLEWARE
app.use(cors());
app.use(helmet());
app.use(express.json());

// Adding routes
app.use("/todo", todoRoutes);

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
