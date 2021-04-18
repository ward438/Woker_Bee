const Department = require('../../models/department');


const router = require('express').Router();


// Should return a list of all departments
router.get('/', async(req, res) => {
    Department.findAll()
        .then((departments) => {
            res.status(200).json(departments);
        }).catch(function(err) {
            res.status(500).json({ "error": err });
        });
});

router.put('/:id', async(req, res) => {
    const { id } = req.params;
    Department.findOne({ where: { id: id } })
        .then((department) => {
            Object.keys(req.body).forEach(key => {
                department[key] = req.body[key];
            });
            return department.save();
        })
        .then((department) => res.json(department))
        .catch((err) => res.status(500).json(err));
})

// Should return department w/ id of X
router.get('/:id', async(req, res) => {
    // shorthand for const id = req.params.id;
    const { id } = req.params;

    Department.findByPk(id)
        .then((department) => {
            if (department == null) {
                res.status(404).json()
            } else {
                res.status(200).json(department);
            }
        }).catch(function(err) {
            res.status(500).json({ "error": err });
        });
});



// Should delete department w/ id of X
router.delete('/:id', async(req, res) => {
    res.status(200).json({ "status": "OK" });
});

// Should update department w/ id of X
router.put('/:id', async(req, res) => {
    res.status(200).json({ "status": "OK" });
});

module.exports = router;