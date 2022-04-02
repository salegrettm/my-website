import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as FaIcons from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import emailjs from 'emailjs-com'
import './ContactForm.css';

function ContactForm() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [submitting, setSubmitting] = useState(false);

  const sendEmail = (values) => {
    setSubmitting(true);
    emailjs.send('service_yrrviqy', 'template_uek4krt', values, 'P6T5h8PZrw2vrx1Ta')
      .then(() => {
        const timeout = setTimeout(() => setSubmitting(false), 2000);
        return () => clearTimeout(timeout);
      }, (error) => {
        const timeout = setTimeout(() => setSubmitting(false), 2000);
        console.log(error.message);
        return () => clearTimeout(timeout);
      });
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      company: '',
      reason: '',
    },

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Please enter a valid email.')
        .required('Please enter your email to submit.'),
      name: Yup.string()
        .required('Please enter your name to submit.')
        .min(3, 'Too short!')
        .max(20, 'Too Long!'),
      company: Yup.string()
        .max(20, 'Too Long!'),
      reason: Yup.string()
        .required('Please enter your reason to submit.')
        .min(5, 'Too short!')
        .max(255, 'Too Long!')
    }),

    onSubmit: () => {
      const values = {
        from_email: formik.values.email,
        from_name: formik.values.name,
        company: formik.values.company,
        message: formik.values.reason
      }
      sendEmail(values);
      formik.resetForm();
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className='form' data-aos='fade-up'>
      {
        submitting ?
          <>
            <FaIcons.FaCheckCircle className='submit-icon' />
            <label className='input-label'>
              Sending...
            </label>
          </>
          :
          (
            <>
              <h3 className='form-title'>Contact Form: </h3>
              <p className='paragraph'>
                Fill this quick form out to get in contact with me!
                You will recieve an email and I will be notified.
              </p>
              <div className='form-row'>
                <div className='input-space'>
                  <label className='input-label'>
                    Email:
                  </label>
                  <input
                    data-tip
                    data-for='email'
                    type='text'
                    name='email'
                    id='email'
                    className={formik.errors.email && formik.touched.email ? 'email error' : 'email'}
                    placeholder='example@gmail.com'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {
                    formik.errors.email && formik.touched.email ?
                      <ReactTooltip
                        type='error'
                        effect='solid'
                        id='email'
                      >
                        {formik.errors.email}
                      </ReactTooltip >
                      : null
                  }
                </div>
                <div className='input-space'>
                  <label className='input-label'>
                    Name:
                  </label>
                  <input
                    data-tip
                    data-for='name'
                    type='text'
                    name='name'
                    id='name'
                    className={formik.errors.name && formik.touched.name ? 'name error' : 'name'}
                    placeholder='Type your name... '
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {
                    formik.errors.name && formik.touched.name ?
                      <ReactTooltip
                        type='error'
                        effect='solid'
                        id='name'
                      >
                        {formik.errors.name}
                      </ReactTooltip >
                      : null
                  }
                </div>
                <div className='input-space'>
                  <label className='input-label'>
                    Company (optional):
                  </label>
                  <input
                    data-tip
                    data-for='company'
                    type='text'
                    name='company'
                    id='company'
                    className={formik.errors.company && formik.touched.company ? 'company error' : 'company'}
                    placeholder='Type your company...'
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {
                  formik.errors.company && formik.touched.company ?
                    <ReactTooltip
                      type='error'
                      effect='solid'
                      id='company'
                    >
                      {formik.errors.company}
                    </ReactTooltip >
                    : null
                }
              </div>
              <label className='input-label'>
                Reason:
              </label>
              <textarea
                data-tip
                data-for='reason'
                name='reason'
                id='reason'
                className={formik.errors.reason && formik.touched.reason ? 'text-area error' : 'text-area'}
                placeholder='Describe the reason you are reaching out...'
                value={formik.values.reason}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.errors.reason && formik.touched.reason ?
                  <ReactTooltip
                    type='error'
                    effect='solid'
                    id='reason'
                  >
                    {formik.errors.reason}
                  </ReactTooltip >
                  : null
              }
              <button className='init-nav-btn' type='submit'>Send <FaIcons.FaPaperPlane /></button>
            </>
          )
      }
    </form>
  )
}

export default ContactForm