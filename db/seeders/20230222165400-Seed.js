/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stages', [{
      stageName: 'Новые',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      stageName: 'Отправлено письмо',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      stageName: 'Назначен звонок',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      stageName: 'Назначено видеоинтервью',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      stageName: 'Резюме передано заказчику',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      stageName: 'Назначено интервью',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      stageName: 'Выставлен оффер',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      stageName: 'Оффер принят, выход на работу',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      stageName: 'Отказ',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});

    await queryInterface.bulkInsert('Users', [{
      userName: 'Dmitriy',
      userEmail: 'dmitriy@gmail.com',
      password: '123',
      userPhoto: 'https://thumb.tildacdn.com/tild3233-3462-4635-a339-636161376163/-/resize/744x/-/format/webp/13.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});

    await queryInterface.bulkInsert('Applicants', [{
      applPhoto: 'https://phonoteka.org/uploads/posts/2021-04/1619759379_18-phonoteka_org-p-fon-dlya-foto-na-rezyume-19.jpg',
      applName: 'Мария',
      applLastName: 'Иванова',
      experience: 3,
      phone: 89113251678,
      applEmail: 'mary@gmail.com',
      pdf: 'https://binaries.templates.cdn.office.net/support/templates/ru-ru/lt16402487_quantized.png',
      about: 'Опытная, приятная в общении.',
      stageId: 5,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Applicants', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Stages', null, {});
  },
};
