var express = require("express");
var db = require("../models");

var router = express.Router();

// Routes for application:

router.get("/", function (req, res) {
    // burger.getAllBurgers(function (response) {
    //     // res.json(response);
    //     var hbsResponse = {
    //         burgers: response
    //     };
    //     // console.log(hbsResponse);
    //     res.render("index", hbsResponse);
    // });


    db.Burger.findAll({}).then(function (burgers) {
        // console.log(burgers);
        var hbsResponse = {
            burgers: burgers
        };
        // console.log(hbsResponse);
        res.render("index", hbsResponse);
        // res.json(burgers);
    });
});

router.post("/add", function (req, res) {
    var name = req.body.name;
    // burger.addBurger(name, function (response) {
    //     res.json(response);
    //     res.redirect("/");
    // });

    db.Burger.create({
        burgerName: name
    }).then(function () {
        res.redirect("/");
    });
});


router.put("/eat/:id", function (req, res) {
    var id = req.params.id;
    // burger.eatBurger(id, function (response) {
    //     // res.json(response);
    //     res.redirect("/");
    // });
    db.Burger.update({
        devoured: true
    },
        {
            where: { id: id }
        }).then(function () {
            res.redirect("/");
        });
});

module.exports = router;