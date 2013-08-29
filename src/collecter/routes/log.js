
var mongoService = require('../modules/mongoService').mongoService;

exports.log = function(req, res){
    var obj = new Object(req.body);
    obj.createTime = new Date();
    mongoService.save(obj,function(){});
    res.send("ok");
};
