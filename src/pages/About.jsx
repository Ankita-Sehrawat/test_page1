import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import group_pic from '../assets/images/group_img.png';
import hand_img from '../assets/images/hands_img.png';
import people_img from '../assets/images/people_img.png';
import Team from '../component/Team';
import Author from '../component/Author';

const About = () => {
  return (
    <div>
      {/* hero sec about  */}
      <section className='mt-5 pt-lg-4'>
        <Container>
          <div className='w_90 m-auto position-relative about_cont_pos p-3 p-lg-0'>
            <Row className='align-items-center'>
              <Col lg={7}>
                <div className='bg-white p-lg-5'>
                  <div className='p-lg-3'>
                    <p className='clr_dark fs_sm fw-medium mb-3'>ABOUT US</p>
                    <h1 className='ff_sen fw-bold fs_xl clr_dark'>We are a team of content writers who share their learnings</h1>
                  </div>
                </div>
              </Col>
              <Col lg={5}>
                <p className='fw-normal fs_sm clr_ash'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </Col>
            </Row>
          </div>

          <div className='bg_group_img position-relative'>
            {/* <div className='min_h'><img className='w-100 ' src={group_pic} alt="img" /></div> */}
            <div className='ylw_card position-absolute ylw_card_pos d-flex justify-content-between  flex-wrap '>
              <div>
                <p className='ff_sen fw-bold fs_lxl clr_dark'>12+</p>
                <p className='fs_sm fw-normal clr_dark '>Blogs Published</p>
              </div>
              <div className='mt-3 mt-sm-0'>
                <p className='ff_sen fw-bold fs_lxl clr_dark'>18k+</p>
                <p className='fs_sm fw-normal clr_dark '>Views on Finsweet</p>
              </div>
              <div className='mt-3 mt-sm-0'>
                <p className='ff_sen fw-bold fs_lxl clr_dark'>30k+</p>
                <p className='fs_sm fw-normal clr_dark '>Total active user</p>
              </div>
            </div>
            <div className='w_85 m-auto d-flex justify-content-between position-absolute ylw_purp_div_pos d-none d-md-flex'>
              <div className='border_pur'></div>
              <div className=' border_ylw'></div>
            </div>
          </div>


          <div>
            <section className='bg_laven p-sm-5 p-4'>
              <div className='py-lg-5 px-lg-4'>
                <Row className='justify-content-between'>
                  <Col lg={6} xxl={6} className='text-center text-lg-start'>
                    <p className='text-uppercase fs_sm fw-medium clr_dark'>Our mission</p>
                    <p className='ff_sen fs_lg fw-bold clr_dark mt-lg-4 mt-3'>Creating valuable content for creatives all around the world</p>
                    <p className='fw-normal fs_sm clr_ash mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>

                  </Col>

                  <Col lg={5} xxl={6} className='text-center text-lg-start mt-4 mt-lg-0'>
                    <p className='text-uppercase fs_sm fw-medium clr_dark'>Our vision</p>
                    <p className='ff_sen fs_lg fw-bold clr_dark mt-lg-4 mt-3'>A platform that empowers individuals to improve</p>
                    <p className='fw-normal fs_sm clr_ash mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>

                  </Col>
                </Row>
              </div>
            </section>
          </div>

        </Container>
      </section>

      {/* Our team of creatives */}
      <section className='mt-5 pt-5'>
        <Container className='pt-lg-4'>
          <Row className='align-items-center justify-content-center flex-column-reverse flex-lg-row  text-center text-lg-start'>
            <Col sm={11} lg={6} className='mt-4 mt-lg-0'>
              <p className='ff_sen fw-bold fs_llg clr_dark'>Our team of creatives</p>
              <p className='ff_sen fw-bold fs_lmd clr_dark py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <p className='fs_sm fw-normal clr_dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </Col>
            <Col sm={10} lg={6}>
              <img className='w-100' src={hand_img} alt="img" />
            </Col>
          </Row>
        </Container>
      </section>


      {/* Why we started this Blog */}
      <section className='mt-5 pt-5'>
        <Container className='pt-lg-4'>
          <Row className='align-items-center justify-content-center  '>

            <Col sm={10} lg={6}>
              <img className='w-100' src={people_img} alt="img" />
            </Col>

            <Col sm={11} lg={6} className='mt-4 mt-lg-0 text-center text-lg-start'>
              <p className='ff_sen fw-bold fs_llg clr_dark'>Why we started this Blog</p>
              <p className='ff_sen fw-bold fs_lmd clr_dark py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <p className='fs_sm fw-normal clr_dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </Col>
          </Row>
        </Container>
      </section>


      {/* list of authors  */}
      <section className='mt-5 pt-5'>
        <Container>
          <h1 className='ff_sen fw-bold fs_llg clr_dark text-center mb-md-5 mb-4'>List of Authors</h1>
          <Author />
          <Author />
        </Container>
      </section>



      {/* join team  */}
      <section className='my-5 py-5'>
        <Container className=' py-lg-4'>
          <Team />
        </Container>
      </section>

    </div>
  )
}

export default About
