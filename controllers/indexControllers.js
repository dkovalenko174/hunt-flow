const render = require('../lib/render');
const MainPage = require('../views/MainPage');

const applicants = [
  {
    id: 1,
    applPhoto: '/photo/exampl.jpeg',
    applName: 'Ольга',
    applLastName: 'Кленова',
    experience: 5,
    phone: 89992483290,
    applEmail: 'biba@mail.ru',
    pdf: '../applicant/pdf/exampl.pdf',
    about: 'привет, я биба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 2,
    applPhoto: '/photo/exampl2.jpeg',
    applName: 'Василий',
    applLastName: 'Идов',
    experience: 10,
    phone: 89215439254,
    applEmail: 'boba@mail.ru',
    pdf: '../applicant/pdf/exampl1.pdf',
    about: 'привет, я боба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 1,
    applPhoto: '/photo/exampl.jpeg',
    applName: 'Иван',
    applLastName: 'Серов',
    experience: 5,
    phone: 89992483290,
    applEmail: 'biba@mail.ru',
    pdf: '../applicant/pdf/exampl.pdf',
    about: 'привет, я биба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 2,
    applPhoto: '/photo/exampl2.jpeg',
    applName: 'Анна',
    applLastName: 'Федорова',
    experience: 10,
    phone: 89215439254,
    applEmail: 'boba@mail.ru',
    pdf: '../applicant/pdf/exampl1.pdf',
    about: 'привет, я боба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 1,
    applPhoto: '/photo/exampl.jpeg',
    applName: 'Анна',
    applLastName: 'Федорова',
    experience: 5,
    phone: 89992483290,
    applEmail: 'biba@mail.ru',
    pdf: '../applicant/pdf/exampl.pdf',
    about: 'привет, я биба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 2,
    applPhoto: '/photo/exampl2.jpeg',
    applName: 'Василий',
    applLastName: 'Идов',
    experience: 10,
    phone: 89215439254,
    applEmail: 'boba@mail.ru',
    pdf: '../applicant/pdf/exampl1.pdf',
    about: 'привет, я боба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 1,
    applPhoto: '/photo/exampl.jpeg',
    applName: 'Василий',
    applLastName: 'Идов',
    experience: 5,
    phone: 89992483290,
    applEmail: 'biba@mail.ru',
    pdf: '../applicant/pdf/exampl.pdf',
    about: 'привет, я биба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 2,
    applPhoto: '/photo/exampl2.jpeg',
    applName: 'Боба',
    applLastName: 'Бобов',
    experience: 10,
    phone: 89215439254,
    applEmail: 'boba@mail.ru',
    pdf: '../applicant/pdf/exampl1.pdf',
    about: 'привет, я боба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 1,
    applPhoto: '/photo/exampl.jpeg',
    applName: 'Биба',
    applLastName: 'Бибко',
    experience: 5,
    phone: 89992483290,
    applEmail: 'biba@mail.ru',
    pdf: '../applicant/pdf/exampl.pdf',
    about: 'привет, я биба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 2,
    applPhoto: '/photo/exampl2.jpeg',
    applName: 'Боба',
    applLastName: 'Бобов',
    experience: 10,
    phone: 89215439254,
    applEmail: 'boba@mail.ru',
    pdf: '../applicant/pdf/exampl1.pdf',
    about: 'привет, я боба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 1,
    applPhoto: '/photo/exampl.jpeg',
    applName: 'Биба',
    applLastName: 'Бибко',
    experience: 5,
    phone: 89992483290,
    applEmail: 'biba@mail.ru',
    pdf: '../applicant/pdf/exampl.pdf',
    about: 'привет, я биба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 2,
    applPhoto: '/photo/exampl2.jpeg',
    applName: 'Боба',
    applLastName: 'Бобов',
    experience: 10,
    phone: 89215439254,
    applEmail: 'boba@mail.ru',
    pdf: '../applicant/pdf/exampl1.pdf',
    about: 'привет, я боба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 1,
    applPhoto: '/photo/exampl.jpeg',
    applName: 'Биба',
    applLastName: 'Бибко',
    experience: 5,
    phone: 89992483290,
    applEmail: 'biba@mail.ru',
    pdf: '../applicant/pdf/exampl.pdf',
    about: 'привет, я биба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 2,
    applPhoto: '/photo/exampl2.jpeg',
    applName: 'Боба',
    applLastName: 'Бобов',
    experience: 10,
    phone: 89215439254,
    applEmail: 'boba@mail.ru',
    pdf: '../applicant/pdf/exampl1.pdf',
    about: 'привет, я боба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 1,
    applPhoto: '/photo/exampl.jpeg',
    applName: 'Биба',
    applLastName: 'Бибко',
    experience: 5,
    phone: 89992483290,
    applEmail: 'biba@mail.ru',
    pdf: '../applicant/pdf/exampl.pdf',
    about: 'привет, я биба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 2,
    applPhoto: '/photo/exampl2.jpeg',
    applName: 'Боба',
    applLastName: 'Бобов',
    experience: 10,
    phone: 89215439254,
    applEmail: 'boba@mail.ru',
    pdf: '../applicant/pdf/exampl1.pdf',
    about: 'привет, я боба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 1,
    applPhoto: '/photo/exampl.jpeg',
    applName: 'Биба',
    applLastName: 'Бибко',
    experience: 5,
    phone: 89992483290,
    applEmail: 'biba@mail.ru',
    pdf: '../applicant/pdf/exampl.pdf',
    about: 'привет, я биба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 2,
    applPhoto: '/photo/exampl2.jpeg',
    applName: 'Боба',
    applLastName: 'Бобов',
    experience: 10,
    phone: 89215439254,
    applEmail: 'boba@mail.ru',
    pdf: '../applicant/pdf/exampl1.pdf',
    about: 'привет, я боба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 1,
    applPhoto: '/photo/exampl.jpeg',
    applName: 'Биба',
    applLastName: 'Бибко',
    experience: 5,
    phone: 89992483290,
    applEmail: 'biba@mail.ru',
    pdf: '../applicant/pdf/exampl.pdf',
    about: 'привет, я биба',
    stageId: 2,
    userId: 1,
  },
  {
    id: 2,
    applPhoto: '/photo/exampl2.jpeg',
    applName: 'Боба',
    applLastName: 'Бобов',
    experience: 10,
    phone: 89215439254,
    applEmail: 'boba@mail.ru',
    pdf: '../applicant/pdf/exampl1.pdf',
    about: 'привет, я боба',
    stageId: 2,
    userId: 1,
  },
];

exports.renderMainPage = async (req, res) => {
  // const { id: userId } = req.session.user;
  render(MainPage, { applicants }, res);
};

exports.logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) console.log(err);
    res.clearCookie('sid');
    res.sendStatus(200);
  });
};
