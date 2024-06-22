const userModel = require('../models/userModel');

const listUsers = (req, res) => {
    userModel.getUsers()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).send({
                message: "Erro ao buscar usuários: " + err.message
            });
        });
};

module.exports = { listUsers };
