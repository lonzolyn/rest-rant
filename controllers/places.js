const router = require('express').Router()



// More code here in a moment
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placeitten.com/250/250'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisine: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
    }]
    res.render('places/index', { places })
    
})
// router.get('/places', (req,res) => {
    
//     res.places('places/index', { places })
// })

module.exports = router