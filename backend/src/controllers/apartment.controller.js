const express = require("express");
const router = express.Router()

const Apartment = require("../models/apartment.model")
const crudController = require("./crud.controller")



router.post("", async (req, res) => {
    try {
        const user_id = req.user._id;
        const item = await Apartment.create({
            title: req.body.title,
            price: req.body.price,
            user_id
        })
        
    } catch (err) {
        return res.status(500).send({Error:err.message})
    }
})


router.get("", crudController(Apartment).getAll);
router.get("/:id", crudController(Apartment).getOne);
router.patch("/:id", crudController(Apartment).updateOne);
router.delete("/:id", crudController(Apartment).deleteOne);

module.exports = router;


