const router = require('express').Router()

// More code here in a moment
router.get('/', (req, res) => {
    res.render('home')
})
router.get('/about', (req,res) => {
    res.render('about')
})

module.exports = router