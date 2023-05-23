const router = require('express').Router()



// More code here in a moment
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/katarznra-gr.png'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisine: 'Coffee, Bakery',
        pic: '/images/beatris-m-5.jpg'
    }]
    res.render('places/index', { places })
    
})
// router.get('/places', (req,res) => {
    
//     res.places('places/index', { places })
// })

module.exports = router