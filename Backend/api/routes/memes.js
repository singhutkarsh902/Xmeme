const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Meme = require('../models/memes');

//Handling all the requests made to /memes
router.get('/', (request, response) => {
    Meme.find()
    .sort({date: -1})
    .limit(100)
    .select("_id name url caption")
    .exec()
    .then(doc => {
        // console.log(doc);
        const res = doc.map(d => {
            return {
                id: d._id,
                name: d.name,
                url: d.url,
                caption: d.caption
            }
        });
        response.status(200).json(res);
    })
    .catch(err => {
        // console.log(err);
        response.status(500).json({error: err});
    });
});

router.post('/', (request, response) => {
    const meme = new Meme({
        _id: mongoose.Types.ObjectId(),
        name: request.body.name,
        url: request.body.url,
        caption: request.body.caption
    });

    meme
    .save()
    .then(result => {
        // console.log(result);
        response.status(201).json({
            id: meme._id
        });
    })
    .catch(err => {
        // console.log(err);
        if(err.code == 11000) {
            response.status(409).json({message: "Duplicate entries not allowed!"});
        }
        else {
            response.status(500).json({ error: err });
        }
    });
});

router.get('/:memeId', (request, response) => {
    const id = request.params.memeId;
    Meme.findById(id)
    .exec()
    .then(doc => {
        // console.log(doc);
        if(doc){
            const res = {
                id: doc._id,
                name: doc.name,
                url: doc.url,
                caption: doc.caption
            };
            response.status(200).json(res);
        }
        else{
            response.status(404).json({message: "ID Not Found!"});
        }
    })
    .catch(err => {
        // console.log(err);
        response.status(500).json({error: err});
    });
});

router.patch('/:memeId', (request, response) => {
    const id = request.params.memeId;
    const upadateOps = {};
    if(request.body.url) {
        upadateOps.url = request.body.url;
    };
    if (request.body.caption) {
        upadateOps.caption = request.body.caption;
    };

    Meme.updateOne({_id: id}, { $set: upadateOps})
    .exec()
    .then(result => {
        if(result.n !== 0)
            response.status(200).json(result);
        else
            response.status(404).json({message: "ID Not Found!"});
    })
    .catch(err => {
        if (err.code == 11000) {
            response.status(409).json({ message: "Duplicate entries not allowed!" });
        }
        else {
            response.status(500).json({ error: err });
        }
    });
});

router.delete('/:memeId', (request, response) => {
    const id = request.params.memeId;
    Meme.deleteOne({_id: id})
    .exec()
    .then(result => {
        if (result.n !== 0)
            response.status(200).json(result);
        else
            response.status(404).json({ message: "ID Not Found!" });
    })
    .catch(err => {
        response.status(500).json({error: err});
    });
});

module.exports = router;