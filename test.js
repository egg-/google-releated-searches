var related = require('./')

related.load({ term: '지진', countries: ['kr'] }, function (err, result) {
  console.log(err, JSON.stringify(result))
})
