const router = require('express').Router()
const places = require('../models/places.js')



// More code here in a moment
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/katarzyna-grabowska-dvdPiqndrdU-unsplash.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisine: 'Coffee, Bakery',
        pic: '/images/beatris-m-5RsnvSk1-0U-unsplash.jpg'
    }]
    res.render('places/index', { places })
    
})
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  

router.get('/new,', (req, res) => {
    res.render('places/new')
})
// router.get('/places', (req,res) => {
    
//     res.places('places/index', { places })
// })

module.exports = router