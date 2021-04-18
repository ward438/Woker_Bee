const Employee = require('../../models/employee');

const router = require('express').Router();


// Should return a list of all employees
router.get('/', async(req, res) => {
    Employee.findAll()
        .then((employees) => {
            res.status(200).json(employees);
        }).catch(function(err) {
            res.status(500).json({ "error": err });
        });
});

router.post('/', async(req, res) => {
    Employee.create(req.body).then(employee => {
        res.status(201).json(employee);
    }).catch(function(err) {
        res.status(500).json({ "error": err });
    });
});

// Should return employee w/ id of X
router.get('/:id', async(req, res) => {
    // shorthand for const id = req.params.id;
    const { id } = req.params;

    Employee.findByPk(id)
        .then((employee) => {
            if (employee == null) {
                res.status(404).json()
            } else {
                res.status(200).json(employee);
            }
        }).catch(function(err) {
            res.status(500).json({ "error": err });
        });
});

// Should delete employee w/ id of X
router.delete('/:id', async(req, res) => {
    res.status(200).json({ "status": "OK" });
});

// Should update employee w/ id of X
router.put('/:id', async(req, res) => {
    res.status(200).json({ "status": "OK" });
});

module.exports = router;