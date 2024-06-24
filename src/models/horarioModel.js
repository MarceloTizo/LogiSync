const db = require('../Config/database');

// Buscar todos os horários
const getAllHorarios = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM cadastrohorarios';
        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

// Adicionar um novo horário
const addHorario = (horario) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO cadastrohorarios (DataAgendamento, HorarioAgendamento, SituacaoHorario) VALUES (?, ?, ?)`;
        db.run(sql, [horario.DataAgendamento, horario.HorarioAgendamento, horario.SituacaoHorario], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.lastID);
            }
        });
    });
};

// Atualizar um horário
const updateHorario = (horario, id) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE cadastrohorarios SET DataAgendamento = ?, HorarioAgendamento = ?, SituacaoHorario = ? WHERE CodigoHorario = ?`;
        db.run(sql, [horario.DataAgendamento, horario.HorarioAgendamento, horario.SituacaoHorario, id], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes);
            }
        });
    });
};

// Deletar um horário
const deleteHorario = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM cadastrohorarios WHERE CodigoHorario = ?';
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
    getAllHorarios,
    addHorario,
    updateHorario,
    deleteHorario
};
