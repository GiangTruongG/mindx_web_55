const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/UserController');
const { authMdw, requireAdmin } = require('../middlewares/auth');

router.get('/', authMdw, requireAdmin, async (req, res) => {
    const users = await UserCtrl.getUsers();
    res.json(users);
});

router.get('/:id', authMdw, () => {});

module.exports = router;