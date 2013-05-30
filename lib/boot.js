var express = require('express')
    , fs = require('fs');

module.exports = function(parent, options) {
    fs.readdirSync(__dirname + '/../controllers').forEach(function(name){
        var obj = require('./../controllers/' + name)
            , app = express();

        if(obj.router) {
            obj.router.forEach(function(route){
                if (route.before) {
                    for (var i = 0; i < route.befores.length; i++) {
                        app[route.method](route.path, route.befores[i]);
                    };
                }
                app[route.method](route.path, obj[route.processor]);
            });
        }

        parent.use(app);
    });
};