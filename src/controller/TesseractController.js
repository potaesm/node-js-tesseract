const path = require('path');
const os = require('os');
const multer = require('multer');
const upload = multer({ dest: path.join(os.tmpdir(), 'uploads/') });
const { TesseractService } = require('../service');

const singleUpload = upload.single('img');

module.exports = async (app) => {
    app.post('/text', singleUpload, async (request, response) => {
        try {
            const uploadedFile = request.file;
            if (!!uploadedFile) {
                const data = await TesseractService.recognize(uploadedFile.path, 'tha+eng');
                return response.send(data);
            } else {
                return response.status(400).send('No file were uploaded');
            }
        } catch (error) {
            return response.send(JSON.stringify(error));
        }
    });
}
