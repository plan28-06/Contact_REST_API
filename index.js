/*  Terminologies
A HTTP server is a software program that listens to requests and responds accordingly,every server.
must have one 
 
A Middleware(in the context of web frameworks) is a function that processes requests and responses.
 
Mapping incoming requests to required functions(handlers) is called routing.
*/
import appRouter from "./routes/routes.js";
import express from "express";
const app =
    express(); /* Creates an express object(instance) that helps us configure 
    settings(routers,middleware etc) related to our http server */

const PORT = process.env.PORT || 5000; // 5000 is the default port that is used if "PORT" is not available

app.listen(PORT, () =>
    console.log(`Server Open at port: ${PORT}`)
); /* Creates and Starts a HTTP server 
that listens to requests from PORT */

app.use(
    express.json()
);/* Letting our app know that we are working with JSON data
(It will only parse JSON data now when we do a POST request)*/


app.use("/api/contacts",appRouter);

