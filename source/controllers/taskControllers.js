
function listTaskController(req, res) {
    res.send(['Task1', 'Task2', 'Task3']);
}

function createTaskController(req, res) {
    res.send('Task Criada');
}

function deleteTaskController(req, res) {
    res.send('Task Deletada');
}

function updateTaskController(req, res) {
    res.send('Task ATualizada');
}

module.exports = {
    listTaskController,
    createTaskController,
    deleteTaskController,
    updateTaskController,
}