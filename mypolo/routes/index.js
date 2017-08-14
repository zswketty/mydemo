var express = require('express');
var router = express.Router();
var items = [];



for( var i=0; i<20; i++){
function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
}


items[i] = generateUUID();
}





  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { items: items });
});


module.exports = router;
