// Google Cloud Storage service goes in here

const { Storage } = require('@google-cloud/storage');
const path = require('path');

// Initialize the GCS client
const storage = new Storage({
    keyFilename: path.join(__dirname, '../gcs-key.json'),
    projectId: 'pier-challenges'
});

const bucketName = 'sample-bucket-51';


// Your code in here!
function uploadPDFToGCS(filePath) {
    // this should save the file to GCS and return the public URL
}

module.exports = {
    uploadPDFToGCS
};