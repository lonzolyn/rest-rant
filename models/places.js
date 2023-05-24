const mongoose = require('mongoose')
//const Place = require('./place')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: 'http://placekitten.com/350/350'},
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown '},
    state: { type: String, default: 'USA '},

})
module.exports = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/katarzyna-grabowska-dvdPiqndrdU-unsplash.jpg'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/katarzyna-grabowska-dvdPiqndrdU-unsplash.jpg'
}]
module.exports = mongoose.model('Place', placeSchema)
