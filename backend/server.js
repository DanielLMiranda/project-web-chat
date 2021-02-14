const app = require('./app');

const PORT = process.env.PORT || 3001;

app.server.listen(PORT, () => console.log(`Listening on ${PORT}`));
