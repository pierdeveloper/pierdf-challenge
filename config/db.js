const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB Connected..")
    } catch (err) {
        console.log('error running mongo db connectDB!')
        console.error(err.message);
        // exit process w/ failure
        process.exit(1);
    }
}


module.exports = connectDB;