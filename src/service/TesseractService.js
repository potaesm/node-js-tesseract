const Tesseract = require('tesseract.js');

async function recognize(image, languages) {
    const { data } = await Tesseract.recognize(image, languages);
    return data.text;
}

module.exports = {
    recognize
};
