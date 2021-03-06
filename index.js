// set an DEBUG=app:debug env var, DEBUG=app:*  or DEBUG= to disable 
const debug = require('debug')('app:debug')
const courseRouter = require('./routes/courses')
const homeRouter = require('./routes/home')
const express = require('express');
const app = express();
const port = process.env.port || 45000;


/*
 middleware section
 they are called in sequence.
 Custom middleware functions must call next() at the end to pass the res 
 to the next layer in the pipeline.
 but be aware... middleware will slow down processing
*/
app.use(express.static('public'))
app.use(express.json())
app.use('/courses', courseRouter)
app.use('/', homeRouter)

app.listen(port, () => debug(`listening on port.. ${port} `));