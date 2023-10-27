const { app, PORT } = require('./app');

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log('listening to port:', PORT);
    });
};
exports.server = server;
