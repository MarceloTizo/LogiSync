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
//novo usuario
const addUser = (user) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO cadastrousuarios (NomeCompleto, CodigoTransportadora, Email, Senha, TipoUsuario, SituacaoUsuario, NumeroCelular, DataGeracao) VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))`;
        db.run(sql, [user.NomeCompleto, user.CodigoTransportadora, user.Email, user.Senha, user.TipoUsuario, user.SituacaoUsuario, user.NumeroCelular], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.lastID);
            }
        });
    });
};

        //atualizar usuario
        const updateUser = (user, id) => {
            return new Promise((resolve, reject) => {
                let sql = 'UPDATE cadastrousuarios SET ';
                let params = [];
                let updates = [];
        
                Object.keys(user).forEach(key => {
                    if (user[key] !== undefined && key !== 'DataGeracao' && key !== 'DataAlteracao') {
                        updates.push(`${key} = ?`);
                        params.push(user[key]);
                    }
                });
        
                if (updates.length === 0) {
                    reject(new Error("No fields to update"));
                    return;
                }
        
                updates.push('DataAlteracao = datetime(\'now\')');  
        
                sql += updates.join(', ') + ' WHERE CodigoUsuario = ?';
                params.push(id);
        
                db.run(sql, params, function(err) {
                    if (err) reject(err);
                    else resolve(this.changes);
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
