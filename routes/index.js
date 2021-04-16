const router = require('express').Router();
const healthCheckRoutes = require('./api/healthcheck');
const employeesRouter = require('./api/employee');
router.use("/healthcheck", healthCheckRoutes);
router.use("/employees", employeesRouter);

// const apiRoutes = require('./api');
// When prompting user for stuff, have it point to one of these urls to populate the data
// REST API for the following things:
// /employees - Create / Update / Delete / Read / List
// Create - first_name, last_name        



// router.use('/api', apiRoutes);

module.exports = router;