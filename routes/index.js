var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

/* POST message. */
router.post('/new', function (req, res, next) {
  const newUser = req.body.user;
  const newMessage = req.body.message;

  messages.push({text: newMessage, user: newUser, added: new Date()});
  res.redirect('/');
})

module.exports = router;
