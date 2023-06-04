const express = require("express");
const { getAllBooks, getAllissuedbooks, getSingleBookById, addNewBook, updateBookById } =
    require("../Controllers/book-controllers.js");
const { books } = require("../data/books.json");
const { UserModel, BookModel } = require("../Models"); //by default it will hit index.js in models.js
const router = express.Router();
//get all the books
router.get("/", getAllBooks);
//get book by specific id
router.get(("/:id"), getSingleBookById);

router.get("/issued/by-user", getAllissuedbooks);
router.post("/", addNewBook);

router.put("/:id", updateBookById);

















   
router.post(("/"), (req, res) => {
    const { id, name, auther, price } = req.body;
    const checkbooks = books.find(each => each.id === id)
    if (checkbooks) {
        return res.status(404).json({ message: "books already exist" });
    }
    books.push({
        id,
        name,
        auther,
        price

    });
    return res.status(200).json({
       data:books
    });

});


router.put(("/:id"), (req, res) => {
    const { id } = req.params;
    const { update } = req.body;
    const { updatedata } = books.find(each => books.id === id);
    if (updatedata) {
        const { finddata } = books.map(each => each.id === id)
        return res.status(200).json({
            ...each, ...update


        });
    }

});

module.exports = router;















