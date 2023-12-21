const express = require('express')

const router = express.Router();

// get all 
router.get('/', (req, res)=>{
    res.json({mssg: 'GETTING ALL ITEMS'})
})

// get single item 
router.get('/:id', (req, res)=>{
    res.json({mssg: 'GETTING A SINGLE ITEMS'})
})
// post a single item
router.post('/', (req, res)=>{
    res.json({mssg: 'POST A SINGLE ITEMS'})
})

// delate a single item 
router.delete('/:id', (req, res)=>{
    res.json({mssg: 'DELETING A SINGLE ITEMS'})
})

// update a single item 
router.patch('/:id', (req, res)=>{
    res.json({mssg: 'UPDATING ALL ITEMS'})
})

module.exports = router