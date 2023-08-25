const gcsService = require('./services/gcs');

const filePath = './sample-loan-doc.pdf';

gcsService.uploadPDFToGCS(filePath)
    .then(url => {
        console.log('Stored in GCS at:', url);
    })
    .catch(error => {
        console.error('Error:', error);
    });