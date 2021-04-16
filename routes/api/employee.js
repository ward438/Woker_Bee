const router = require('express').Router();
let users = [{ "id": 5, "name": "alex" }, { "id": 4, "name": "robert" }];
// Should create employee
router.post('/', async (req, res) => {
    res.status(200).json(users);
});

// Should return a list of all employees
router.get('/', async (req, res) => {
    res.status(200).json({ "data": users });
});

// Should return employee w/ id of X
router.get('/:id', async (req, res) => {
    res.status(200).json(users.find(x => x.id == req.params.id));
});

// Should delete employee w/ id of X
router.delete('/:id', async (req, res) => {
    res.status(200).json({ "status": "OK" });
});

// Should update employee w/ id of X
router.put('/:id', async (req, res) => {
    res.status(200).json({ "status": "OK" });
});

module.exports = router;