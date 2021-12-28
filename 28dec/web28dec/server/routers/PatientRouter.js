const express = require('express')
const patientModel = require('../models/PatientModel')
const router = express.Router()

// http://localhost:8989/patient/savepatient
router.post("/savepatient",(request,response)=>
{
    var data = request.body;
    patientModel.savePatient()
})

module.exports = router