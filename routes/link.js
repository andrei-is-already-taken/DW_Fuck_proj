var Link = require('../models/link').Link;
exports.post = function(req, res, next) {
    var canvas = req.body.data;
    console.log("canvas here");

    //upload(canvas);
    //
    //function upload(file) {
    //    var b64 = file.substr(23);
    //    imgur.uploadBase64(b64)
    //        .then(function (json) {
    //            //console.log(json.data);
    //            var link = json.data.link;
    //            var user = res.locals.user.username;
    //            var deleteHash = json.data.deletehash;
    //            Link.addlink(user, link, deleteHash);
    //        })
    //        .catch(function (err) {
    //            console.error(err.message);
    //        });
    //}
};

exports.get = function(req, res, next) {
    Link.checkLink(res.locals.user.username, function(p_link){
        if (p_link == "No Link"){
            res.status(404).send("Fuck off!")
        }
        else{
            res.send(p_link);
        }
    });
};