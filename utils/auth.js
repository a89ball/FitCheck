const  authMiddleware = (req, res, next)=>{
    if (!req.session.userId) {
        res.redirect('/login')
    }
    else {
        next()
    }
}

module.exports = authMiddleware;