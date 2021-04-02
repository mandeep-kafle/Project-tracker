const axios = require('axios');
const { response } = require('express');

exports.homeRoutes=(req,res)=>{
    //make req req ti api

    axios.get('http://localhost:7000/api/projects')
    .then(function(response){
        //console.log(response.data)
        res.render('index',{projects:response.data});
    })
    .catch(err=>{
        res.send(err);
    })

        
    

    
}

exports.add_project=(req,res)=>{
    res.render('add_project');
}

exports.update_project=(req,res)=>{
    
    axios.get('http://localhost:7000/api/projects',{params:{id:req.query.id}})
    .then(function(projectdata){
        res.render("update_project",{project:projectdata.data})
    })
    .catch(err=>{
        res.send(err);
    })
}