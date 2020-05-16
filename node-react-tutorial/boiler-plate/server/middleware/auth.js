// authentication
// 1. get token from client cookie
// 2. decode token and find user
// 3. if user exists, auth success
const { User } = require('../models/User')
let auth = (req, res, next) => {
    let token = req.cookies.x_auth; //1
    User.findByToken(token, (err, user)=>{
        if(err) throw err;
        if(!User) return res.json({isAuth:false, error:true})
        // append token, user info on req
        req.token = token;
        req.user = user;
        next(); // to next middleware
    })
}

module.exports = { auth }