const router = require('express').Router();
const Controllers = require('./controllers');

router.get('/users', Controllers.User.findUsers);
router.get('/users/:userId/contacts', Controllers.UserContacts.findContacts);
// router.post('/users', Controllers.User.createUser);
router.post('/users/:userId/contacts', Controllers.UserContacts.createContact);

module.exports = router;
