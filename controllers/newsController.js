const news = require('../models/news')
const mongoose = require('mongoose');
const user = require('../models/user');



const addnews = async(req,res)=>{

    console.log(req.file);

    console.log(req.body);


    const news1 = new news({
 
         title : req.body.name,
         desc: req.body.desc,
         img : req.file.filename,
        
    });

 try {

   await  news1.save();

  res.status(201).send();

     
 } catch (error) {

    console.log(error)
     
 }


}
const getnewsByName = (req,res)=>{

 name : req.query.name;


 


    news.findOne({name : req.query.name})
    .then(product =>{

      if(product){

            res.status(200).send(product);
      }

      else {

        res.status(404).send();
      }


    }).catch(error =>{


        console.log(error)
    })

}

const getNews = async(req,res)=>{


  try {
  
  
  a = await news.find();

    res.status(200).send(a);
  
} catch (error) {
    console.log(error)
  }

  
}

const deleteNews = async(req,res)=>{


  try {

    await  news.deleteOne({_id:req.params.id});
      
    res.status(200).json({message : "Deleted !"});
   }
   catch{
 
   console.log(error);
 
   res.status(400);
 
   }
 


}


module.exports = {

addnews,getnewsByName,getNews,deleteNews

}