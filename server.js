const express = require('express');
const morgan = require('morgan')
const apiRouter = require('./routes')

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))   

app.use('/api',apiRouter);

app.get('/',(req,res)=>{
    res.send('Hola mundo');
});

module.exports = app;

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})