function apiKey(req, res, next) {
  const api_key = "1234567";
  //console.log(req.body); //only with post data
  console.log(req.query); // for query bcs we are sending query
  // all the middleware between req and res are in a line so we have to call next
  next();
}

module.exports = apiKey;
