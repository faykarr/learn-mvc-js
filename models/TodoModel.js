const db = require("../config/database");

class TodoModel {

    // Get all todos
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

    // Insert new todo
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

    // Update todo status
    static async updateTodoStatus(id, status) {
        return new Promise((resolve) => {
            const query = `UPDATE todo SET status = '${status}' WHERE id = ${id}`;
            db.query(query, (err, result) => {
                if (err) {
                    console.log(err);
                    resolve(false);
                }
                resolve(result);
            });
        });
    }

    // Delete todo
    static async deleteTodoById(id) {
        return new Promise((resolve) => {
            const query = `DELETE FROM todo WHERE id = ${id}`;
            db.query(query, (err, result) => {
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