const express = require('express')
const router = express.Router()
const imagesCtrl = require('../controllers/imagesController')

router.get('/imagesearch', imagesCtrl.search)
router.get('/latest/imagesearch', imagesCtrl.latest_search)

module.exports = router
