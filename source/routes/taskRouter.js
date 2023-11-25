const { listTaskController, createTaskController, deleteTaskController, updateTaskController} = require('../controllers/taskControllers')
const modelName = 'task';

function createRoutes(app) {
    app.get(`/list/${modelName}/`, listTaskController);
    app.post(`/create/${modelName}/`, createTaskController);
    app.delete(`/delete/${modelName}/`, deleteTaskController);
    app.put(`/update/${modelName}/`, updateTaskController);
}

module.exports = createRoutes;