exports.isAuth = (req, res, next) => {
  if (req.session?.user) next();
  else res.redirect('/guest');
};

// exports.checkSession = async (req, res, next) => {
//   res.locals.username = req.session?.user?.name;
//   next();
// };
