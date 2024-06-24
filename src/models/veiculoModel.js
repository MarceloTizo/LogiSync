const db = require('../Config/database');

// Buscar todos os veículos
const getAllVeiculos = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM cadastroveiculo';
        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

// Adicionar um novo veículo
const addVeiculo = (veiculo) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO cadastroveiculo (CodigoUsuario, NomeVeiculo, Placa, Marca, ModeloTipo, AnoFabricacao, Cor, CapacidadeCarga, SituacaoVeiculo, Bloqueado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        db.run(sql, [veiculo.CodigoUsuario, veiculo.NomeVeiculo, veiculo.Placa, veiculo.Marca, veiculo.ModeloTipo, veiculo.AnoFabricacao, veiculo.Cor, veiculo.CapacidadeCarga, veiculo.SituacaoVeiculo, veiculo.Bloqueado], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.lastID);
            }
        });
    });
};

// Atualizar um veículo
const updateVeiculo = (veiculo, id) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE cadastroveiculo SET CodigoUsuario = ?, NomeVeiculo = ?, Placa = ?, Marca = ?, ModeloTipo = ?, AnoFabricacao = ?, Cor = ?, CapacidadeCarga = ?, SituacaoVeiculo = ?, Bloqueado = ? WHERE CodigoVeiculo = ?`;
        db.run(sql, [veiculo.CodigoUsuario, veiculo.NomeVeiculo, veiculo.Placa, veiculo.Marca, veiculo.ModeloTipo, veiculo.AnoFabricacao, veiculo.Cor, veiculo.CapacidadeCarga, veiculo.SituacaoVeiculo, veiculo.Bloqueado, id], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes);
            }
        });
    });
};

// Deletar um veículo
const deleteVeiculo = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM cadastroveiculo WHERE CodigoVeiculo = ?';
        db.run(sql, id, function(err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(this.changes);
            }
        });
    });
};

module.exports = {
    getAllVeiculos,
    addVeiculo,
    updateVeiculo,
    deleteVeiculo
};
