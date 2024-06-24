const db = require('../Config/database');

// Buscar todas as transportadoras
const getAllTransportadoras = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM cadastrotransportadora';
        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

// Adicionar uma nova transportadora
const addTransportadora = (transportadora) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO cadastrotransportadora (Nome, NomeFantasia, CNPJ, SituacaoTransportadora) VALUES (?, ?, ?, ?)`;
        db.run(sql, [transportadora.Nome, transportadora.NomeFantasia, transportadora.CNPJ, transportadora.SituacaoTransportadora], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.lastID);
            }
        });
    });
};

// Atualizar uma transportadora
const updateTransportadora = (transportadora, id) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE cadastrotransportadora SET Nome = ?, NomeFantasia = ?, CNPJ = ?, SituacaoTransportadora = ? WHERE CodigoTransportadora = ?`;
        db.run(sql, [transportadora.Nome, transportadora.NomeFantasia, transportadora.CNPJ, transportadora.SituacaoTransportadora, id], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes);
            }
        });
    });
};

// Deletar uma transportadora
const deleteTransportadora = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM cadastrotransportadora WHERE CodigoTransportadora = ?';
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
    getAllTransportadoras,
    addTransportadora,
    updateTransportadora,
    deleteTransportadora
};
