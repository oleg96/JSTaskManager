var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', authorize, function(req, res, next) {
  //res.render('index', { title: 'Express' });
    res.json({
      text: "Hello Pavel"
    });
});

function authorize(req, res, next) {
    var auth = true;
    if (auth) {
        next();
        return;
    }
        res.status(401).json({text: "Unauthorized"});
        return;
}

module.exports = router;
