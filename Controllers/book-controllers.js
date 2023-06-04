const { UserModel, BookModel } = require("../Models"); //by default it will hit index.js in models.js
const issuedBook=require("../DTOS/book-dtos")
exports.getAllBooks =async (req,res) => {
    const Books =await BookModel.find();
    if (Books.length === 0)
        return res.status(404).json({
            success: false,
            message: "no book found"
        });
    res.status(200).json({
        success: true,
        data: Books
    });
 };

exports.getSingleBookById = async (req,res)=>{
    const { id } = req.params;
    const getbooks = await BookModel.findById(id); 
    if (!getbooks) {
        res.status(404).json({
            message: "books not found"
        })
    }
    return res.status(202).json({
        data: getbooks
    });

};

/* above code can be written like this

const getAllBooks = () => { };
const getSingleBookById = () => { };
module.exports = { getAllBooks, getSingleBookById };
*/
exports.getAllissuedbooks = async (req, res) =>
{
    const user = await BookModel.find({
        issuedBook: { $exists: true },
    }).populate("issuedBook"); //if exist ignore
    //DTos=>data transfer object
    const issuedBooks = users.map((each) => new issuedBook(each))
    if (issuedBooks.length === 0)
        return res.status(404).jsonz({
            success: false,
            message: "no book has been issued"
        });
  
   
        
}
    

exports.addNewBook = async (req, res) => {
    const { data } = req.body;

    if (!data) {
        return res.status(400).json({
            success: false,
            message: "No Data Was Provided",
        });
    }

    await BookModel.create(data);

    const allBooks = await BookModel.find();

    //   if (book) {
    //     return res.status(404).json({
    //       success: false,
    //       message: "Book already exists with the same Id",
    //     });
    //   }

    return res.status(200).json({
        success: true,
        data: allBooks,
    });
};

exports.updateBookById = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;

    const updatedBook = await BookModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return res.status(200).json({
        success: true,
        data: updatedBook,
    });
    
};


    
