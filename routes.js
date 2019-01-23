const controller = require('./controller');

module.exports = function(app) {
    app.get('/api/tasks/', controller.index)
    app.post('/api/newtask/', controller.newtask)
    app.get('/api/tasks/:id', controller.task)
    app.put('/api/update/:id/', controller.edittask)
    app.delete('/api/delete/:id/', controller.delete)
}