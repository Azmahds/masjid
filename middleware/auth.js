module.exports = {
    ensureAuth: function (req, res, next) {
        if(req.session.user && req.session.user.type === "admin") {
            return next();
        } else {
            // console.log("GOOGLE Ids: ",req.session.user, req.body )
            if(req.session.user.googleId && req.session.user.type === "user"){
                return next();
            }
        }
    },
    ensureGuest: function (req, res, next) {
        if(req.session.user) {
            res.status(403).send("Forbidden");
        } else {
            return next();
        }
    }
}