const Punch = require('../models/punch.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// create punch
exports.punch_create = function (req, res) {
   
    let punch = new Punch(
        {
            time: Date.parse(req.body.time),
            type: req.body.type
        }
    );

    punch.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Punch Created successfully')
    })
};
// get punch
exports.punch_details = function (req, res) {
    Punch.findById(req.params.id, function (err, punch) {
        if (err) return next(err);
        res.send(punch);
    })
};
// put punch
exports.punch_update = function (req, res) {
    Punch.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, punch) {
        if (err) return next(err);
        res.send('punch udpated.');
    });
};

// delete punch
exports.punch_delete = function (req, res) {
    Punch.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};