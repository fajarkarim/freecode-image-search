
const db = require('../models')
const searchGifs = require('../helpers/searchGifs')
const Image = db.image
const History = db.searchhistory

module.exports = {
  getAll: (req, res) => {
    Image.findAll()
    .then(images => res.send(images))
    .catch(err => res.status(500).send(err))
  },
  search: async (req, res) => {
    let q = req.query.q
    let offset = req.query.offset
    let limit = req.query.limit
    try {
      let {data} = await searchGifs(q, offset, limit)
      let saveToHistory = await History.create({term: q, when: new Date()})
      res.send(data.data)
    }
    catch (e) {
      res.status(500).send(e)
    }
  },
  latest_search: async (req, res) => {
    History.findAll({ attributes: ['term', 'when'], limit: 10, order: [['createdAt', 'DESC']]})
    .then(histories => {
      res.send(histories)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }
}
