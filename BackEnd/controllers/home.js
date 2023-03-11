module.exports.postAll = (req, res) => {
  res.json(req.session);
};

module.exports.getAll = (req, res) => {
  res.json(req.session);
};

module.exports.logOut = (req, res) => {
  req.session.destroy();
  res.send("Logged Out");
};
