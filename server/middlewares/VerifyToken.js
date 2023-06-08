function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined'){
        const token=bearerHeader.split(' ')[1];
        req.token=token
        return next();
    }
    else{
        res.sendStatus(401);
    }
}

module.exports=verifyToken;