var express = require('express');
var router = express.Router();
const todoModel = require('./users');

/* GET home page. */
router.get('/', async (req, res) => {
  const todos = await todoModel.find();
  res.render('index',{todos});
});

router.post('/create', async (req, res) => {
  await todoModel.create({
    title: req.body.title,
    desc: req.body.desc,
    image: req.body.image
  });
  res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
  await todoModel.findOneAndDelete({_id : req.params.id})
  res.redirect('/');
});

router.get('/update/:id', async (req, res) => {
  const todo = await todoModel.findOne({_id : req.params.id})
  res.render('update', {todo});
});

router.post('/update/:id', async (req, res) => {
  await todoModel.findOneAndUpdate({_id : req.params.id},{title : req.body.title,desc : req.body.desc,image : req.body.image})
  res.redirect('/');
});

module.exports = router;