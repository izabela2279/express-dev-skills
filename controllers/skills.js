import { Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
  .then(skills => { 
    res.render('skills/index', {
      skills: skills,
      time: req.time
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body)
  req.body.done = false
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.id)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  newSkill as new,
  create,
  deleteSkill as delete,
}