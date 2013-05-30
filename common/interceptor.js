// check user logined
exports.userLoginInterceptor = function(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/login?next='+encodeURIComponent(req.url));
    }
    next();
};