var Projectdb=require('../model/model');


//create and save project
exports.create=(req,res)=>{

    if(!req.body){
        res.status(400).send({message:"please fill all the fields"});
        return;
    }

    //new project
    const project=new Projectdb({
        date:req.body.date,
        name:req.body.name,
        repo:req.body.repo,
        weburl:req.body.weburl,
        issues:req.body.issues,
        status:req.body.status,
        description:req.body.description

    })

    //save project in db

    project
    .save(project)
    .then(data=>{
        //res.send(data)
        res.redirect("/")
    })

    .catch(err=>{
        res.status(500).send({
            message:err.message||"some error occurred while creating a create operation"
        });
    });
}

exports.find=(req,res)=>{
   

    if(req.query.id){
        const id = req.query.id;

        Projectdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

        }
    else{Projectdb.find()
    .then(project=>{
        res.send(project)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "error occured while retriving pproject info"})
    })
}
}

exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Projectdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        });
}

exports.delete=(req,res)=>{
const id=req.params.id;
Projectdb.findByIdAndDelete(id)
.then(data=>{
    if(!data){
        res.status(404).send({message:`cannot delete with id ${id}.Maybe id is wrong`})
    }else{
        res.send({ message:"user was deleted succesfully"})
    }
})
.catch(err=>{
    res.status(500).send({message:`cannot delete with id ${id} .`
}) ;
});

}

