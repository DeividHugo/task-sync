const createTaskRoutes = require('./taskRouter');
const createUserRoutes = require('./userRouter');

function createRoutes(app) {
    createTaskRoutes(app);
    createUserRoutes(app);
}

module.exports = createRoutes