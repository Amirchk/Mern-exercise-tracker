const router = require('express').Router();
const exercise = require('../models/exercise.model');

router.route('/').get((req,res)=>{
    exercise.find()
    .then((exercises)=> res.json(exercises))
    .catch( (err)=>res.status(400).json(`Error: ${err}`) );
});

router.route('/add').post((req,res)=>{
   const username = req.body.username;
   const description = req.body.description;
   const duration = Number(req.body.duration);
   const date = Date.parse(req.body.date);

    const newExercise = new exercise({
        username,
        description,
        duration,
        date
    })

    newExercise.save()
    .then( ()=> res.json("Exercise added") )
    .catch( (err)=> res.status(400).json(`Error : ${err}`) )

});

router.route('/:id').get( (req,res)=>{
    exercise.findById(req.params.id)
    .then( Exercise=> res.json(Exercise) )
    .catch( (err)=>res.status(400).json(`Error: ${err}`) )
} )

router.route('/:id').delete( (req,res)=>{
    exercise.findByIdAndDelete(req.params.id)
    .then( Exercise=> res.json("exercise deletd") )
    .catch( (err)=>res.status(400).json(`Error: ${err}`) )
} )

router.route('/update/:id').post( (req,res)=>{
    exercise.findById(req.params.id)
    .then( (Exercise) =>{
        Exercise.username = req.body.username;
        Exercise.description = req.body.description;
        Exercise.duration = Number(req.body.duration);
        Exercise.date = Date.parse(req.body.date);

        Exercise.save()
        .then( ()=>{ res.json("exercise Updated") } )
        .catch( (err)=>res.status(400).json(`Error: ${err}`) )
    } )
    .catch( (err)=>res.status(400).json(`Error: ${err}`) )
} )
module.exports = router;