const router = require('express').Router();
const Controllers = require('./controllers');

router.get('/users', Controllers.Users.findUsers);
router.get('/users/:userId/contacts', Controllers.UserContacts.findContacts);
router.post('/users', Controllers.Users.createUser);
router.post('/users/:userId/contacts', Controllers.UserContacts.createContact);

module.exports = router;
