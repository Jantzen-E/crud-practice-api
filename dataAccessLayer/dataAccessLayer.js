// const MongoClient = require('mongodb').MongoClient;
// const ObjectId = require("mongodb").ObjectId;
require('dotenv').config();
const mongoose = require('mongoose');
const WaterFilter = require('../models/waterFilter');

mongoose.connect(process.env.ATLAS_CONNECTION, {useNewUrlParser : true, useUnifiedTopology : true})
.then(console.log('successfully connected to database'))
.catch(err => {console.log(err)})

// const Connect = function() {
//     return new Promise((resolve, reject) => {
//         MongoClient.connect(mongoDbUrl, settings, function(err, client) {
//             if(err) {
//                 reject(err);
//             }
//             else {
//                 console.log('SUCCESSFULLY CONNECTED TO DATABASE!');
//                 database = client.db(databaseName);
//                 resolve();
//             }
//         });
//     });
// };

const getWaterFilter = (req, res) => {
    WaterFilter.find({}, (err, waterFilter) => {
        if (err) {
            console.log(err)
            res.status(500);
        }
        res.status(200).json(waterFilter)
    });
}

// app.get('/api/water-filters', async(req, res) => {
//     const options = {};
//     const query = req.query;
//     const result = await DAL.Find(options);

//     if (result) {
//         res.status(200).send(result);
//     }
//     else {
//         res.status(400).send('items not found');
//     }
// });

// app.get('/api/water-filters/:id', async(req, res) => {
//     const id = req.params.id;

//     const item = {
//         _id: ObjectId(id)
//     };

//     const result = await DAL.Find(item);

//     if (result) {
//         res.status(200).send('The resource has been successfully fetched');
//     }
//     else {
//         res.status(400).send('No item with ID: ' + id + ' found!');
//     }
// });

module.exports = {getWaterFilter};