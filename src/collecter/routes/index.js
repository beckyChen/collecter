var mongoService = require('../modules/mongoService').mongoService;
//var mongodb = require("mongodb");

exports.index = function(req, res){
    mongoService.findAll(function(docs){
        res.render('index', { title: '日志查看',list:docs });
    });
    /*
    mongodb.connect('mongodb://localhost:27017/log', function(err, conn){
        conn.collection('log', function(err, coll){
            coll.find().toArray(function(err, docs){
                if(!err){
                    coll.find().count(function(err,result){
                        conn.close();
                        res.render('index', { title: '日志查看',list:docs ,count:result});
                    });
                }
            });
        });

    });
    */
};