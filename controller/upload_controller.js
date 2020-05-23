const upload = require('../middleware/uploadMiddleware');

const uploadFiles = async (req, res) =>{
	try{
		await upload(req, res);
		console.log(req.files);

		if(req.files.length <= 0){
			return res.send("You must select at least one file");
		}

		return res.send('Files have been uploaded');
	}catch(err){
		cconsole.log(err);
		if(err.code === 'LIMIT_UNEXPECTED_FILE'){
			return res.send('Too many file to upload')
		}
		return res.send(`errror when trying to upload many files: ${err}`)
	}
}

module.exports = {
	uploadFiles: uploadFiles
};