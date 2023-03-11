const isLoggedIn = (req, res, next) => {
  isLoggedIn.currentUser = req.user;
  if (!req.isAuthenticated()) {
    res.send(req.user);
  }
  next();
};

//Exporting Middleware
module.exports = isLoggedIn;
