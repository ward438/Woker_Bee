const Role = require('../../models/role');
const { route } = require('./healthcheck');



const router = require('express').Router();


// Should return a list of all roles
router.get('/', async(req, res) => {
    Role.findAll()
        .then((roles) => {
            res.status(200).json(roles);
        }).catch(function(err) {
            res.status(500).json({ "error": err });
        });
});

router.put('/:id', async(req, res) => {
    const { id } = req.params;
    Role.findOne({ where: { id: id } })
        .then((role) => {
            Object.keys(req.body).forEach(key => {
                role[key] = req.body[key];
            });
            return role.save();
        })
        .then((role) => res.json(role))
        .catch((err) => res.status(500).json({ "error": err }));
})

router.post('/', async(req, res) => {
    Role.create(req.body).then(role => {
        res.status(201).json(role);
    }).catch(function(err) {
        res.status(500).json({ "error": err });
    });
});

// Should return role w/ id of X
router.get('/:id', async(req, res) => {
    // shorthand for const id = req.params.id;
    const { id } = req.params;

    Role.findByPk(id)
        .then((role) => {
            if (role == null) {
                res.status(404).json()
            } else {
                res.status(200).json(role);
            }
        }).catch(function(err) {
            res.status(500).json({ "error": err });
        });
});





// Should delete role w/ id of X
router.delete('/:id', async(req, res) => {
    res.status(200).json({ "status": "OK" });
});

// Should update role w/ id of X
router.put('/:id', async(req, res) => {
    res.status(200).json({ "status": "OK" });
});

module.exports = router;