const router = require('express').Router()
const  express = require('express')
const uploadController = require('../controller/upload_controller')

let routes = app =>{
	router.post('/', uploadController.uploadFile);

	return app.use('/api/upload', router);
}

module.exports = router;