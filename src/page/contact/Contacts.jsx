import React from 'react';
import ContactForm from '../../components/contact/ContactForm';

const Contacts = () => {
    return (
        <div className="p-2 md:p-0">
        <div className="md:p-14 p-8 bg-white dark:bg-my-dark rounded-2xl space-y-3">
         
<h1 className='text-3xl font-bold dark:text-white'>Contact Me</h1>
<ContactForm></ContactForm>

        </div>
      </div>
    );
};

export default Contacts;