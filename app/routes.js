const express = require('express')
const router = express.Router()
const jobRoleData = require('./jobRoleData.js')
const competencyData = require('./competencyData.js')

router.get('/home', (req, res) => {
  res.render('homeView');
});

router.get('/jobRoles', async (req, res) => {

  res.render('jobRolesView', {
    jobRoles: await jobRoleData.getJobRoles()
  }); 
});

router.get('/jobResponsibility/:roleId', async (req, res) => {
  res.render('jobResponsibility', {
    jobResponsibilty: await jobRoleData.getJobResponsibility(req.params.roleId)
  })
});

module.exports = router

router.get('/competencies/:bandName', async (req, res) => {
  res.render('competenciesView', {
    competencies: await competencyData.getCompetencies(req.params.bandName)
  }
  ); 

});

module.exports = router
