const express = require("express");
const router = express.Router();

// Imported model (burger.js) to use its database functions:
const burger = require("../models/burger");

//Show all burgers
router.get("/", function (req, res) {

    burger.select(function (data) {
        //Handlebards require an object to be passed
        let hbsObject = {
            burger: data
        };

        res.render("index", hbsObject);

    });
});

//Create burger - place burger on one side
router.post("/api/burger", function (req, res) {

    let newBurger = req.body.name;

    burger.create("burger_name", newBurger, function (result) {

        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

//Update burger - move to the other side
router.put("/api/burger/:id", function (req, res) {

    let status = Boolean(req.body.devoured);

    burger.update("devoured", status, "id", req.params.id, function (result) {

        if (result.changedRows === 0) {
            // If no rows were added, then the ID must not exist, so 404
            return res.status(404).end();
        }

        res.status(200).end();
    });
});

module.exports = router;