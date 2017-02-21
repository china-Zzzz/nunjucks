define(function(require, exports, module) {
    var $ = require('jquery');
    var tem = require('one.html.js');
    var nunjucks = require('nunjucks');
    require('bootstrap');
    function homeIndex(option){


        $("#ssss").html(nunjucks.render('one.html',{data:'fgfgfgfg'}));    

    };

    module.exports = homeIndex;

});