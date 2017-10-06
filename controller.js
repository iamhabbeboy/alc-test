
let model = require('./model');

let controller = {

    index: (req, res) => {
        let collection = model.get('studentcollection');
        collection.find({}, {}, (err, docs) => {
            res.json(docs);
        });
    },
    new: (req, res) => {

    },
    update: (req, res) => {

    },
    delete: (req, res) => {
        res.send("ID is " + req.param('id'))
    }
}

module.exports = controller;