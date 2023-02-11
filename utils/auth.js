const jwt = require("jsonwebtoken")

const secret_key = "mern-market"

const auth = async(req, res, next) => {
  if(req.method === "GET"){
    return next()
  }
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQGdtYWlsLmNvbSIsImlhdCI6MTY3NjA5Njk5MywiZXhwIjoxNjc2MTc5NzkzfQ.mFySUaytBXQXRY1Qd8iEtu9wIcG2HlzWxt0r4if-vxA"
  // await req.headers.authorization.split(" ")[1]
  if(!token){
    return res.status(400).json({message: "トークンがありません"})
  }
  try{
    const decoded = jwt.verify(token, secret_key)
    req.body.email = decoded.email
    return next()
  }catch(err){
    return res.status(400).json({message: "トークンが正しくないので、ログインしてください"})
  }
}

module.exports = auth