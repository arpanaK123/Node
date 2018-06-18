// var express=require('express');
// var router=express.Router();

// router.get('/',function(req,resp,next){
//     resp.send('this is api data');
// });

// module.exports=router;

var express=require('express');
var router=express.Router();

var Employee=require('../database/dataFile');

router.get('/',function(req,resp,next){
    Employee.find({},function(err,docs){
        resp.send(docs);
    })
});

 module.exports=router;