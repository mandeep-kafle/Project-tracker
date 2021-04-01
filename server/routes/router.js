const express=require('express');
const route=express.Router()

const services=require('../services/render');

const controller=require('../controller/controller');


// @description root route
// @method get

route.get('/',services.homeRoutes);

// @description add project
// @method get/add_project

route.get('/add_project',services.add_project);


// @description root route
// @method get/update_project

route.get('/update_project',services.update_project);


//in render. js

// route.get('/',(req,res)=>{
//     res.render('index');
// })
// route.get('/add_project',(req,res)=>{
//     res.render('add_project');
// })
// route.get('/update_project',(req,res)=>{
//     res.render('update_project');
// })



//api

route.post('/api/projects',controller.create);
route.get('/api/projects',controller.find);
route.put('/api/projects/:id',controller.update);
route.delete('/api/projects/:id',controller.delete);

module.exports =route