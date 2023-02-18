module.exports = {
  async afterCreate(event) {
    const { result } = event;
    console.log(result);
    try {
      await strapi.plugins["email"].services.email.send({
        to: "dusan.veselinovic.dev@gmail.com",
        from: "visaforminformation@gmail.com", //e.g. single sender verification in SendGrid
        subject: `Client email: ${result.email}`,
        html: `<p>From: ${result.name}</p>
               <p>Email: ${result.email}</p>
               <p>Country of passport: ${result.countryOfPassport}</p>
               <p>Passport number: ${result.passportNumber}</p>
               <p>Are you paid customer: ${result.areYouPaidCustomer}</p>
               <p>Reason for contact: ${result.reasonForContact}</p>
               <p>Message: ${result.message}</p>
               `,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
