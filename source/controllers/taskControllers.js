
function listTaskController(req, res) {
    res.send(['Task1', 'Task2', 'Task3']);
}

function createTaskController(req, res) {
    const content = req.body;

    if (!content || !content.name || !content.password) {
        return res.status(400).send("A solicitação deve incluir 'name' e 'password' no corpo.");
    }
    res.status(201).send(`${content.name} foi criado`);
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