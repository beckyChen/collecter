var mongodb = require('mongodb');

var MongoService = function (host, port) {
    var server = new mongodb.Server(host, port, {auto_reconnect: true});
    this.db = new mongodb.Db('log', server, {safe: true});
};

MongoService.prototype.save = function (obj, func) {
    this.db.open(function (err, db) {
        if (!err) {
            db.collection('log', {safe: true}, function (err, coll) {
                if (!err) {
                    coll.insert(obj, {safe: true}, function (err, result) {
                        if(!err){
                            func(result);
                        }else{
                            console.log(err);
                        }
                    });
                }else {
                    console.log(err);
                }
            });
            db.close();
        } else {
            console.log(err);
        }

    });
};

MongoService.prototype.findAll = function (func) {
    this.db.open(function (err, db) {
        if (!err) {
            db.collection('log', {safe: true}, function (err, coll) {
                if (!err) {
                    coll.find().toArray(function(err, docs){
                        if(!err){
                            func(docs);
                        }
                    });
                }else {
                    console.log(err);
                }
            });
        } else {
            console.log(err);
        }

    });
};

exports.mongoService = new MongoService("localhost",27017);