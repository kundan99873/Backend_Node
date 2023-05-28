const router = require("express").Router();
const Notes = require("../model/noteModel");
const verifyToken = require("../verifyToken");

router.post("/addNotes",verifyToken,async (req, res) => {
    const newNotes = new Notes({
        user : req.User.id,
        subject : req.body.subject,
        topic : req.body.topic,
        notes : req.body.notes,
        question : req.body.question
    })
    try {
        await Notes.create(newNotes).then(data => {
            res.json("Notes added successfully")
            console.log(data)
        }).catch(err => {
            res.json(err)
        })
    } catch (error) {
        res.json(error)
    }
})

router.get("/getNotes",verifyToken,async (req,res) => {
    try {
        await Notes.find({user : req.User.id}).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err)
        })
    } catch (error) {
        res.send(error);
    }
})

router.post("/updateNote/:id", verifyToken, async(req,res) => {
    try {
        const newNotes = {};

        if(req.body.subject){
            newNotes.subject = req.body.subject
        }
        if(req.body.topic){
            newNotes.topic = req.body.topic
        }
        if(req.body.question){
            newNotes.question = req.body.question
        }
        if(req.body.notes){
            newNotes.notes = req.body.notes
        }

        Notes.findByIdAndUpdate(req.params.id,{$set : newNotes}, {new : true}).then(data => {
            res.json("updated Successful")
            console.log(data)
        }).catch(err => {
            res.json(err);
        })
        
    } catch (error) {
        res.json(error);
    }
})

router.delete("/deleteNotes/:id",verifyToken,async(req,res) => {
    try {
        Notes.findByIdAndDelete(req.params.id).then(data => {
            res.json("Deleted Successfully");
            console.log(data)
        }).catch(err => {
            console.log(err);
        })

    } catch (error) {
        res.json(error);
    }
})

module.exports = router;