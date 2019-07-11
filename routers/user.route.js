const router = require('express').Router();

module.exports = (wagner) => {
    const userCtrl = wagner.invoke(() =>
        require('../controllers/user.controller')(User));

    router.post('/', (req, res) =>
        userCtrl.createUser(req, res));

    /*router.get('/', (req, res) =>
        userCtrl.findAll(req, res));

    router.delete('/:id', (req, res) =>
        userCtrl.deleteByID(req, res));

    router.put('/:id', (req, res) =>
        userCtrl.updateByID(req, res));

    router.put('/activar/:id', (req, res) =>
        userCtrl.updateActivo(req, res));

    router.get('/:id', (req, res) =>
        userCtrl.findByID(req, res));

    router.get('/login/:email/:password', (req, res) =>
        userCtrl.login(req, res));*/

    return router;
}