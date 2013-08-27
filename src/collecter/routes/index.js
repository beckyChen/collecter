
/*
 * GET home page.
 */

var mongodb = require("mongodb");

exports.index = function(req, res){
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
};