exports.router = [
    {
        'path': '/',
        'method': 'get',
        'processor': 'index'
    }
];

exports.index = function(req, res) {
    res.render('index', { title: 'express skeleton' });
};