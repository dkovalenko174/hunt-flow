const {
  User, Applicant, Call, Commentary, Stage,
} = require('../db/models');

exports.newApplicants = async (req, res, next) => {
  const { id } = req.params;

  try {
    // TODO: разобраться с багом на сервере, он происходит из за того что в меню Все тоже сылается на Id но оно не Integer
    // if (id !== '00') {
    const applicants = await Applicant.findAll({ where: { stageId: id } });
    res.send(JSON.stringify(applicants));
    // }
    // const applicants = await Applicant.findAll();
    // res.send(JSON.stringify(applicants));
    // console.log(applicants);
    // res.sendStatus(200);
  } catch (err) {
    console.log('Не могу вывести новых соискателей', err);
  }
};

exports.getUser = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const applicant = await Applicant.findOne({ where: { id }, include: { model: Stage } });
    // console.log(applicant);
    res.send(JSON.stringify(applicant));
  } catch (err) {
    console.log('Не могу вывести соискателя', err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  const result = req.body;
  try {
    const appl = await Applicant.findAll();
    res.send(JSON.stringify(appl));
  } catch (err) {
    console.log('Не могу вывести новых соискателей', err);
  }
};

exports.updateStageUser = async (req, res, next) => {
  const { id, stageId } = req.body;
  try {
    const updateStuge = await Applicant.update({ stageId }, { where: { id } });
    console.log(updateStuge);
    res.sendStatus(200);
  } catch (error) {
    console.log('', error);
  }
};
