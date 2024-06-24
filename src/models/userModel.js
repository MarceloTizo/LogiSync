const db = require('../Config/database');

// Buscar todos os usuários
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM cadastrousuarios';
        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

// Adicionar um novo usuário
const addUser = (user) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO cadastrousuarios (NomeCompleto, CodigoTransportadora, Email, Senha, TipoUsuario, SituacaoUsuario, NumeroCelular) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        db.run(sql, [user.NomeCompleto, user.CodigoTransportadora, user.Email, user.Senha, user.TipoUsuario, user.SituacaoUsuario, user.NumeroCelular], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.lastID);
            }
        });
    });
};

// Atualizar um usuário
const updateUser = (user, id) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE cadastrousuarios SET NomeCompleto = ?, CodigoTransportadora = ?, Email = ?, Senha = ?, TipoUsuario = ?, SituacaoUsuario = ?, NumeroCelular = ? WHERE CodigoUsuario = ?`;
        db.run(sql, [user.NomeCompleto, user.CodigoTransportadora, user.Email, user.Senha, user.TipoUsuario, user.SituacaoUsuario, user.NumeroCelular, id], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes);
            }
        });
    });
};

// Deletar um usuário
const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM cadastrousuarios WHERE CodigoUsuario = ?';
        db.run(sql, id, function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes);
            }
        });
    });
};

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
};
