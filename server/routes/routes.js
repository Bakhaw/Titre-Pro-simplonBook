const express = require('express');
const Book = require('../model/Book');

const router = express.Router()

// #POST method
router.post('/add', (req, res) => {
  const newBook = new Book(req.body);

  newBook.save((err, book) => {
    if (err) res.send(err)
    res.json({message: `${book.titre} à été ajouté à la bibliothèque`})
  })
})

// #GET method
router.get('/', (req, res) => {
  Book.find((err, books) => {
    if (err) res.send(err)
    res.json(books)
  })
})

// #GET byId method
router.get('/:id', (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) res.send(err)
    res.json(book)
  })
})

// #PUT method
router.post('/:id/update', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, (err, prevBook) => {
    if (err) res.send(err)
    res.json({message: `${prevBook.titre} à bien été modifié`})
  })
})

// #DELETE method
router.get('/:id/delete', (req, res) => {
  Book.findByIdAndRemove(req.params.id, (err, book) => {
    if (err) res.send(err)
    res.json({message: `${book.titre} à bien été supprimé de la bibliothèque`})
  })
})

module.exports = router;
