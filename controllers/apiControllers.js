const {
  User, Applicant, Call, Commentary, Stage,
} = require('../db/models');

exports.newApplicants = async (req, res, next) => {
  const data = await req.body;
  console.log(data);
  try {
    res.sendStatus(200);
  } catch (err) {
    console.log('Не могу вывести новых соискателей', err);
  }
};
