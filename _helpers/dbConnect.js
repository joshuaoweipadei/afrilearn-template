const mongoose = require('mongoose');
const config = require('../config.json');

const connectionOptions = { 
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
};

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
    
        console.log("Connection is successful");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
  
module.exports = dbConnect;