const db = require("../config/database");

class TodoModel {

    static async getAllTodos() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM todo";
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }

    static async insertNewTodo(events, status) {
        return new Promise((resolve) => {
            const query = `INSERT INTO todo (events, status) VALUES ('${events}', '${status}')`;
            db.query(query,(err, result) => {
                if (err) {
                    console.log(err);
                    resolve(false);
                }
                resolve(result);
            });
        });
    }
}

module.exports = TodoModel;