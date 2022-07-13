var express = require('express');
const crudModel = require('../model/crudModel');
var router = express.Router();

/* GET home page */
router.post('/create', async function(req, res) {
  try {
    await crudModel.create(req.body)
    res.send('Posted')
  } catch (error) {
    res.send('error')
  }
});

router.get('/read', async function(req, res) {
  try {
    const result = await crudModel.find()
    res.json(result)
  } catch (error) {
    res.send('error')
  }
})

router.delete('/read/:id',async function(req,res){
  const {id} = req.params
  try {
    await crudModel.findByIdAndDelete(id)
    res.send('deleted')
  } catch (error) {
    res.send('error')
  }
})

router.put('/update/:id', async function(req,res){
  const {id} = req.params
  const { firstname, lastname, checkbox } = req.body
  try {
    await crudModel.findByIdAndUpdate(id,{firstname: firstname, lastname: lastname, checkbox: checkbox})
    res.send('updated')
  } catch (error) {
    res.send('error')
  }
})

module.exports = router;
