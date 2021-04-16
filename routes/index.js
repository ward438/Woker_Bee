const router = require('express').Router();
const healthCheckRoutes = require('./api/healthcheck');
const employeesRouter = require('./api/employee');
const departmentRouter = require('./api/department');

router.use("/healthcheck", healthCheckRoutes);
router.use("/employees", employeesRouter);
router.use("/departments", departmentRouter);

module.exports = router;