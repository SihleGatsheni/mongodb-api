const util = require('util');
const  multer  = require('multer')
const  gridfs  = require('multer-gridfs-storage')


const storage = new gridfs({
	 url: "mongodb+srv://codeit:199512nd@codehub-o7ubp.mongodb.net/test?retryWrites=true&w=majority",
	options: { userNewUrlParser: true , userUnifiedTopology: true},
	file: (req, file) =>{
		const match = ["image/png", "image/jpeg"];

		if(match.indexOf(file.mimetype) === -1){
			const filename = `${Date.now()}-codeit-${file.originalname}`;
			return filename;
		}

		return{
			buvcketName: 'photos',
			filename:  `${Date.now()}-codeit-${file.originalname}`
		};
	}


});

const uploadFile = multer({storage: storage}).array('multi-files', 10);
const uploadFileMiddleware =util.promisify(uploadFile);
module.exports = uploadFileMiddleware;