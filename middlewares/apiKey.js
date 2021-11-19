function apiKey(req, res, next) {
  const api_key = "1234567";
  //console.log(req.body); //only with post data
  console.log(req.query.api_key); // for query bcs we are sending query
  // all the middleware between req and res are in a line so we have to call next
  // if we are not calling next then it means requests are not going forward.

  // Middleware is useful for authorization, token key check, user roles, permissions
  const userApiKey = req.query.api_key;
  if (userApiKey && userApiKey === api_key) {
    next();
  } else {
    res.json({ message: "Not Allowed!" });
  }

  next();
}

module.exports = apiKey;
