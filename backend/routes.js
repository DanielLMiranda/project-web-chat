const router = require('express').Router();
const Controllers = require('./controllers');
const authMiddleware = require('./middlewares/auth');

// Unauthorized routes
// Users
router.post('/users', Controllers.Users.createUser);

router.use(authMiddleware);

// Session
router.post('/sessions', Controllers.Session.createSession);

// Users
router.get('/users', Controllers.Users.findUsers);
router.put('/users', Controllers.Users.updateUser);

// Contacts
router.get('/users/:userId/contacts', Controllers.UserContacts.findContacts);
router.post('/users/:userId/contacts', Controllers.UserContacts.createContact);

module.exports = router;
