const axios = require('axios')

exports.getJobRoles = async () => { 
  try {  
    const jobRoleResponse = await axios.get('http://localhost:8080/api/job-roles')
    return jobRoleResponse.data
  } catch (e) {
    return new Error('Could not get a response from the API with the job roles list')
  }
}

exports.getJobResponsibility = async (roleId) => { 
  try {  
    const jobRoleResponse = await axios.get('http://localhost:8080/api/job-responsibility/' + roleId)
    return jobRoleResponse.data
  } catch (e) {
    return new Error('Could not get a response from the API with the job responsibilities list')
  }
}

  
