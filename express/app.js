require('./configs/mongoose')
const express = require('express')
const logger = require('morgan')
const path = require('path')
const app = express()
const cors = require('cors')
const productRouterV1 = require('./routes/routerV1');
const productRouterV2 = require('./routes/routerV2')

const port = 5000

app.use(logger('dev'))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/public',express.static(path.join(__dirname, 'uploads')))

app.use('/api/v1', productRouterV1)
app.use('/api/v2', productRouterV2)
app.use((req, res, next) =>{
    res.status(404)
    res.send({
        status: 'failed',
        message: 'Resource' + req.originalUrl + ' Not Found'
    })
})
app.listen(process.env.PORT || port, () => console.log(`server: http://localhost:${port}`))