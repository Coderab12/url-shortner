const express = require('express')
const shortid = require('shortid')
const Url = require('../model/urlModel')

const router = express.Router()

router.get('/new', (req, res) => {
    res.render('urls')
})

router.get('/', async(req, res) => {
    const urls = await Url.find({})
    console.log(urls)
    res.render('url-list', { urls })
})

router.post('/shorten', async(req, res) => {
  const { originalUrl } = req.body
  const shortUrl = shortid.generate()
  Url.create({ originalUrl, shortUrl })

  res.redirect("/url")
})

router.get('/:shortUrl', async(req, res) => {
    const shortUrl = req.params.shortUrl
    const url = await Url.findOne({ shortUrl:shortUrl })
    if (url) {
        res.redirect(url.originalUrl)
    } else {
        res.status(404).send('Not Found')
    }
})


module.exports = router