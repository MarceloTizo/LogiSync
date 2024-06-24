const db = require('../Config/database');

// Buscar todos os produtos
const getAllProdutos = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM cadastroprodutos';
        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

// Adicionar um novo produto
const addProduto = (produto) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO cadastroprodutos (DescricaoProduto, Categoria, SituacaoProduto) VALUES (?, ?, ?)`;
        db.run(sql, [produto.DescricaoProduto, produto.Categoria, produto.SituacaoProduto], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.lastID);
            }
        });
    });
};

// Atualizar um produto
const updateProduto = (produto, id) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE cadastroprodutos SET DescricaoProduto = ?, Categoria = ?, SituacaoProduto = ? WHERE CodigoProduto = ?`;
        db.run(sql, [produto.DescricaoProduto, produto.Categoria, produto.SituacaoProduto, id], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes);
            }
        });
    });
};

// Deletar um produto
const deleteProduto = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM cadastroprodutos WHERE CodigoProduto = ?';
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
    getAllProdutos,
    addProduto,
    updateProduto,
    deleteProduto
};
