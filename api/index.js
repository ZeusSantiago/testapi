import express from "express";
import path from "path";
import posts from "../routes/posts.js";
import logger from "../routes/middleware/logger.js";

const port = process.env.PORT || 8000;

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(logger);

//Routes
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server is running in ${port}`));

export default app;
