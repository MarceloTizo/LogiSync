const db = require('../Config/database');

const getUsers = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM cadastrousuarios", [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

module.exports = { getUsers };
