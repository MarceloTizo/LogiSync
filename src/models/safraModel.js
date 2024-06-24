const db = require('../Config/database');

// Buscar todas as safras
const getAllSafras = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM cadastrosafra';
        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

// Adicionar uma nova safra
const addSafra = (safra) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO cadastrosafra (AnoSafra, SituacaoSafra) VALUES (?, ?)`;
        db.run(sql, [safra.AnoSafra, safra.SituacaoSafra], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.lastID);
            }
        });
    });
};

// Atualizar uma safra
const updateSafra = (safra, id) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE cadastrosafra SET AnoSafra = ?, SituacaoSafra = ? WHERE CodigoSafra = ?`;
        db.run(sql, [safra.AnoSafra, safra.SituacaoSafra, id], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes);
            }
        });
    });
};

// Deletar uma safra
const deleteSafra = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM cadastrosafra WHERE CodigoSafra = ?';
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
    getAllSafras,
    addSafra,
    updateSafra,
    deleteSafra
};
