require('dotenv').config()
const { default: axios } = require('axios')
const express = require('express')
const { getCityInfo, getJobs } = require('./util')
const app = express()


// // TODO: import the getCityInfo and getJobs functions from util.js

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
app.get('/api/city/:city', async (req,res) => {
    try{
        const cityInfo = await getCityInfo(req.params.city)
        const jobs = await getJobs(req.params.city)
        res.json({cityInfo, jobs})
    }catch(err){
        res.status(404).send('Data Not Found')
    }
    }
    )
    

module.exports = app
