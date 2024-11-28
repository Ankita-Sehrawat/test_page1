import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <div>
      <section className='my-5 py-5 '>
        <Container className='py-lg-4 '>
          <div className='w_60 m-auto'>

            <div className=' text-center'>
              <p className='fs_sm clr_dark  fw-bolder text-uppercase'>Contact us</p>
              <h1 className='ff_sen fs_xl fw-bold clr_dark py-3'>Let’s Start a Conversation</h1>
              <p className='fs_sm fw-normal clr_ash '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            </div>

            {/* purple div  */}
            <div className='pt-lg-3 mt-5'>
              <div className='bg_purp p-5 '>
                <Row className='justify-content-center'>
                  <Col md={6} sm={10}>
                    <div>
                      <p className='text-white opacity-75 fs_xsm fw-normal'>Working hours</p>
                      <div className='horiz_border my-3'></div>
                      <p className='ff_sen fw-bold fs_md text-white'>Monday To Friday</p>
                      <p className='ff_sen fw-bold fs_md text-white'>9:00 AM to 8:00 PM </p>
                      <p className='text-white opacity-75 fs_sm fw-normal'>Our Support Team is available 24/7</p>
                    </div>
                  </Col>

                  <Col md={6} sm={10} className='mt-4 mt-md-0'>
                    <p className='text-white opacity-75 fs_xsm fw-normal'>Contact Us</p>
                    <div className='horiz_border my-3'></div>
                    <p className='ff_sen fw-bold fs_md text-white'>020 7993 2905</p>
                    <p className='text-white opacity-75 fs_sm fw-normal'>hello@finsweet.com</p>

                  </Col>

                </Row>
              </div>
            </div>


            {/* form  */}
            <div className='mt-4 pt-2'>
              <form action="">
                <input className='mb-3' type="text" placeholder='Full Name' />
                <input className='mb-3' type="email" placeholder='Your Email' />
                <input className='mb-3' type="text" placeholder='Query related' />
                {/* <input className='mb-3' type="text" placeholder='Message' /> */}
                <textarea className='mb-3' type="text" placeholder='Message' />
                <button className='ms-2 fs_lmd fw-bold ff_sen sub_btn bg_sun w-100'>Send Message</button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Contact
