//const http = require('http');
//const path = require('path');
//const status = require('http-status');
//const jwt=require('jsonwebtoken');
const _config = require('../_config');
const stripe = require('stripe')(_config.SECRET_APIKEY);

const createUser = (req, res) => {
    const user = req.body;

    stripe.customers.create(user)
        .then((data) => {
            res.status(200);
            res.json({ msg: "Usuario creado con éxito", data: data });
        }).catch((err) => {
            res.status(400);
            res.json({ msg: "Error!!!!", data: err });
        });
}

const createPago = (req, res) => {
    const pago = req.body;

    stripe.paymentIntents.create(pago)
        .then((data) => {
            res.status(200);
            res.json({ msg: "Pago realizado con éxito", data: data });
        }).catch((err) => {
            res.status(400);
            res.json({ msg: "Error!!!!", data: err });
        });
}

module.exports = () => {
    //_user = User;
    return ({
        createUser,
        createPago
    });
}