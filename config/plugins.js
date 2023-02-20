module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey:
          "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",
      },
      settings: {
        defaultFrom: "visaforminformation@gmail.com",
        defaultReplyTo: "visaforminformation@gmail.com",
      },
    },
  },
});
