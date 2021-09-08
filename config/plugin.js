module.exports = ({
  env
}) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      auth: {
        user: 'markodumnic8@gmail.com',
        pass: 'Novasifra2210',
      },
      // ... any custom nodemailer options
    },
  }
});
