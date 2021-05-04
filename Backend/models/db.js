const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://John:Welcome@123@cluster0.jsl2e.mongodb.net/Incubation?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log("Mongodb connected");
    } else {
        console.log("Mongodb is not connected");
    }
});

require('./blogpage');