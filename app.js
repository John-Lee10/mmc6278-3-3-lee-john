require('dotenv').config()
const express = require('express')
const { getCityInfo, getJobs } = require('./util')
const app = express()

app.use(express.json)
// // TODO: import the getCityInfo and getJobs functions from util.js
app.use('/api', { getCityInfo, getJobs })
// TODO: Statically serve the public folder
app.use(express.static('public'))
// TODO: declare the GET route /api/city/:city
// This endpoint should call getCityInfo and getJobs and return
// the result as JSON.
// The returned JSON object should have two keys:
// cityInfo (with value of the getCityInfo function)
// jobs (with value of the getJobs function)
// If no city info or jobs are found,
// the endpoint should return a 404 status
app.get('/api/city/:city', (req,res) => {
    const cityInfo = getCityInfo[req.params.index]
    const jobs = getJobs[req.params.index]
    if(!cityInfo)
        return res.status(404).send('Location Not Found')
    if(!jobs)
        return res.status(404).send('Data Not Found')
    res.json(cityInfo, jobs)
}
)

module.exports = app
