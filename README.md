# httpserver-in-node


Notes from the udemy course. 

****** Core Modules ******

http        Launch a server, send a request
https       Launch a SSL server
fs          
path
os


### section 5 Notes
 
It's all about middleware

express.js is all about middleware. means incoming request is funneled through a bunch of functions.

Request -> Middleware (next()) -> middleware (res.send()) -> response


### notes for project

type nodemon server.js in terminal to run