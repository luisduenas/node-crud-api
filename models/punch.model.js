const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PunchSchema = new Schema({
    time: {type: Date, required: true},
    type: {type: Boolean, required: true},
});


// Export the model
module.exports = mongoose.model('Punch', PunchSchema);