var mongodb = require("mongodb");

exports.log = function(req, res){
    mongodb.connect('mongodb://localhost:27017/log', function(err, conn){
        conn.collection('log', function(err, coll){
            var obj = new Object(req.query);
            obj.createTime = new Date();
            console.log(obj);
            coll.insert(obj,{safe:true},function(err,result){
                console.log(result);
            });
        });
        conn.close();
    });
    res.send("ok");
   // res.render('index', { title: 'Express' });
};
