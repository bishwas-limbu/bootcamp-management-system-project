import express from "express";
import "dotenv/config";
import indexRouter from './routes/index.js';
import {config} from './config/config.js'; // value of port and node_env 
import dbConnection from './config/db.config.js';

dbConnection();

const app = express();


//routes
app.use('/api/v1',indexRouter);

//Error Handling for unmatched routes
app.use((req,res,next) => {
    const error = new Error("Page not Found.");
    error.status = 404;
    next(error);
});

//Error handler middleware
app.use((error,req,res,next) => {
    res.status(error.status || 500).json({
        status: false,
        error: error.message,
    });
});





app.listen(config.PORT,() => {
    console.log(`Server running in ${config.NODE_ENV} environment at port ${config.PORT}....`);
})


