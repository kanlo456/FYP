const express = require('express')
const{
    getSurveys,
    getSurvey,
    createSurvey,
    deleteSurvey,
    updateSurvey
} = require('../controllers/surveyController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.get('/',getSurveys)

router.get('/:id',getSurvey)

router.delete('/:id',deleteSurvey)

router.patch('/:id',updateSurvey)

router.use(requireAuth) //***

router.post('/',createSurvey)



module.exports = router