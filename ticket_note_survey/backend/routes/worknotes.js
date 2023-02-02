const express = require('express')
const{
    getWorknotes,
    getWorknote,
    createWorknote,
    deleteWorknote,
    updateWorknote
} = require('../controllers/worknotesController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.get('/',getWorknotes)

router.get('/:id',getWorknote)

router.delete('/:id',deleteWorknote)

router.patch('/:id',updateWorknote)

router.use(requireAuth) //***

router.post('/',createWorknote)



module.exports = router