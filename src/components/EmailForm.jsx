import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bfz0z7a', 'template_zoocd2j', form.current, 'FDsarT-abCzA9bGxc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* Your form fields */}
      <input type="submit" value="Send" />
    </form>
  );
};

export default EmailForm;