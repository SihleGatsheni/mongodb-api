const express = require('express')
const itemRouter = require('./routes/items')
const userRouter = require('./routes/user')
const uploadRoute = require('./routes/uploads')
const app = express()
app.use(express.json({extended: false}));

app.use('/api/items',itemRouter)
app.use('/api/users',userRouter)
uploadRoute(app);

const PORT =process.env.PORT || 3000;
app.listen(PORT, () =>{
	console.log(`Server running on port ${PORT}`)
})
