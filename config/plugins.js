module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "visaforminformation@gmail.com",
        defaultReplyTo: "visaforminformation@gmail.com",
      },
    },
  },
});
