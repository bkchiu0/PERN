import express from "express";
import postgres from "pg";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3001;
const host = "192.168.99.100";
const Pool = postgres.Pool;

// Replace values with more appropriate values.
const pool = new Pool({
  user: "postgres",
  host,
  password: "admin",
  port: 5432,
  database: "postgres"
});
// Enable CORS
app.use(cors());

// Parses incoming requests as JSON if parsable
app.use(bodyParser.json());

// Add middleware here
app.use((req, res, next) => {
  next();
});

app.listen(port, () => console.log(`Node is now listening on ${host}:${port}`));
