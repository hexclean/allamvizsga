module.exports = (req, res, next) => {
  if (req.user.isAdmin === 0) {
    return res.redirect("/");
  }
  next();
};
