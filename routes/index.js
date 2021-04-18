const router = require('express').Router();
const healthCheckRoutes = require('./api/healthcheck');
const employeesRouter = require('./api/employee');
const departmentRouter = require('./api/department');
const roleRouter = require('./api/role');

router.use("/healthcheck", healthCheckRoutes);
router.use("/employees", employeesRouter);
router.use("/departments", departmentRouter);
router.use("/roles", roleRouter);

module.exports = router;