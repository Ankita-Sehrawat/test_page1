import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import feat_post from '../assets/images/feat_post.png';
import icon1 from '../assets/images/cat_icon1.png';
import icon2 from '../assets/images/cat_icon2.png';
import icon3 from '../assets/images/cat_icon3.png';
import icon4 from '../assets/images/cat_icon4.png';
import auth1 from '../assets/images/auth1.png';
import auth2 from '../assets/images/auth2.png';
import auth3 from '../assets/images/auth3.png';
import auth4 from '../assets/images/auth4.png';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';
import logo4 from '../assets/images/logo4.png';
import logo5 from '../assets/images/logo5.png';
import logo6 from '../assets/images/logo6.png';
import fb from '../assets/images/fb.png';
import insta from '../assets/images/insta.png';
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
import group_pic from '../assets/images/group_img.png';
import testm_img from '../assets/images/testm_img.png';
import Category from '../component/Category';
import Team from '../component/Team';
import Author from '../component/Author';

const Home = () => {

  let posts = [
    {
      person: "By John Deo   l   Aug 23, 2021 ",
      detail: "8 Figma design systems that you can download for free today."
    },
    {
      person: "By John Deo   l   Aug 23, 2021 ",
      detail: "8 Figma design systems that you can download for free today."
    },
    {
      person: "By John Deo   l   Aug 23, 2021 ",
      detail: "8 Figma design systems that you can download for free today."
    },
    {
      person: "By John Deo   l   Aug 23, 2021 ",
      detail: "8 Figma design systems that you can download for free today."
    }

  ]

  // let categ = [
  //   {
  //     icon: icon1,
  //     profile: "Business",
  //     desp: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
  //   },
  //   {
  //     icon: icon2,
  //     profile: "Startup",
  //     desp: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
  //   },
  //   {
  //     icon: icon3,
  //     profile: "Economy",
  //     desp: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
  //   },
  //   {
  //     icon: icon4,
  //     profile: "Technology",
  //     desp: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
  //   }
  // ]

  // let authors = [
  //   {
  //     author_img: auth1,
  //     author_name: "Floyd Miles",
  //     company: "Content Writer @Company",
  //     sm_imgs: [
  //       {
  //         sm1: fb,
  //         sm2: insta,
  //         sm3: linkedin,
  //         sm4: twitter,

  //       }
  //     ]
  //   },
  //   {
  //     author_img: auth2,
  //     author_name: "Dianne Russell",
  //     company: "Content Writer @Company",
  //     sm_imgs: [
  //       {
  //         sm1: fb,
  //         sm2: insta,
  //         sm3: linkedin,
  //         sm4: twitter,

  //       }
  //     ]
  //   },
  //   {
  //     author_img: auth3,
  //     author_name: "Jenny Wilson",
  //     company: "Content Writer @Company",
  //     sm_imgs: [
  //       {
  //         sm1: fb,
  //         sm2: insta,
  //         sm3: linkedin,
  //         sm4: twitter,

  //       }
  //     ]
  //   },
  //   {
  //     author_img: auth4,
  //     author_name: "Leslie Alexander",
  //     company: "Content Writer @Company",
  //     sm_imgs: [
  //       {
  //         sm1: fb,
  //         sm2: insta,
  //         sm3: linkedin,
  //         sm4: twitter,

  //       }
  //     ]
  //   },
  // ]

  let logos = [
    // { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
    { logo: logo6 }
  ]

  return (
    <div>
      {/* hero_sec */}
      <div className='hero_bg '>
        <Container>
          <div className='w_80 text-center text-lg-start min-vh-100 d-flex flex-column justify-content-center'>
            <p className='text-white fs_sm fw-normal'>Posted on <span className='fw-bolder'>startup</span></p>
            <h1 className='ff_sen fw-bold fs_lxl text-white my-3'>Step-by-step guide to choosing great font pairs</h1>
            <p className='fw-normal fs_sm text-white'>By <span className='clr_sun'>James West</span>  |  May 23, 2022 </p>
            <p className='fw-normal fs_sn text-white mt-3'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <div><button className='ms-2 fs_md fw-bold ff_sen sub_btn bg_sun mt-lg-5 mt-4'>Read More <span>></span> </button></div>
          </div>
        </Container>
      </div>

      {/* Posts  */}
      <section className='my-5 '>
        <Container className='my-lg-4 py-5'>
          <Row>
            <Col lg={7} className='text-center text-lg-start'>
              <p className='ff_sen fs_llg fw-bold clr_dark mb-4'>Featured Post</p>
              <div className='pt-lg-2 border_1 p-sm-4 p-2 '>
                <div className='p-lg-2'>
                  <img className='w-100' src={feat_post} alt="img" />

                  <div className='pt-4 mt-lg-2'>
                    <p className='fs_xsm fw-medium clr_dark'>By <span className='clr_purp'>John Doe</span>  l May 23, 2022</p>
                    <p className='ff_sen fw-bold fs_lg clr_dark mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <p className='fs_sm fw-normal clr_ash mt-3'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <button className='ms-2 fs_md fw-bold ff_sen sub_btn bg_sun mt-lg-5 mt-4'>Read More <span>></span> </button>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={5} className='mt-4 mt-lg-0'>
              <div className='d-flex justify-content-between align-items-center mb-lg-4'>
                <p className='ff_sen fs_llg fw-bold clr_dark '>All Posts</p>
                <button className='clr_purp fs_sm fw-normal border-0 bg-transparent'>View all</button>
              </div>

              <div>
                <div className="sml_sec ">
                  {posts.map((obj, index) => {
                    return (
                      <div key={index}>
                        <p className='fs_xsm fw-medium clr_dark'>{obj.person}</p>
                        <p className='clr_dark ff_sen fs_lmd fw-bold mt-2 w_80'>{obj.detail}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </section>

      {/* about us  */}
      <Container>
        <div className='w_85 ms-auto d-flex justify-content-between '>
          <div className=' border_ylw'></div>
          <div className='border_pur'></div>
        </div>
        <section className='bg_laven p-sm-5 p-4'>
          <div className='py-lg-5 px-lg-4'>
            <Row className='justify-content-between'>
              <Col lg={6} xxl={6} className='text-center text-lg-start'>
                <p className='text-uppercase fs_sm fw-medium clr_dark'>About us</p>
                <p className='ff_sen fs_llg fw-bold clr_dark mt-lg-4 mt-3'>We are a community of content writers who share their learnings</p>
                <p className='fw-normal fs_sm clr_ash mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='ff_sen fw-bold fs_md clr_purp border-0 bg-transparent mt-3'>Read More > </button>
              </Col>

              <Col lg={5} xxl={6} className='text-center text-lg-start mt-4 mt-lg-0'>
                <p className='text-uppercase fs_sm fw-medium clr_dark'>Our mission</p>
                <p className='ff_sen fs_lg fw-bold clr_dark mt-lg-4 mt-3'>Creating valuable content for creatives all around the world</p>
                <p className='fw-normal fs_sm clr_ash mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              </Col>
            </Row>
          </div>
        </section>
      </Container>

      {/* Choose A Catagory */}
      <Container className='my-5 '>
        <section className='my-lg-4 py-5'>
          <h1 className='ff_sen fw-bold fs_llg clr_dark text-center mb-md-5 mb-4'>Choose A Catagory</h1>

          <div>
            {/* <Row className='justify-content-center justify-content-xl-start'>
              {categ.map((val, i) => {
                return (
                  <Col xsm={10} sm={6} xl={3} className='mt-3 mt-xl-0'>
                    <div className="categ_card  ">
                      <div key={i} className='text-center text-sm-start'>
                        <img src={val.icon} alt="icon" />
                        <p className='mt-3 mb-2 ff_sen fw-bold fs_lg clr_dark'>{val.profile}</p>
                        <p>{val.desp}</p>
                      </div>
                    </div>
                  </Col>
                )
              })}
            </Row> */}
            <Category />

          </div>
        </section>
      </Container>


      {/* group_pic */}
      <Container>
        <Row className=' position-relative'>
          <Col lg={12} xl={10}>
            <img className='w-100' src={group_pic} alt="img" />

            <div className='w_60 p-xl-4 bg-white positio n-absolute group_cont_pos mt-4 mt-lg-0' >
              <div className='text-center text-lg-start p-lg-5'>
                <p className='text-uppercase fs_sm fw-medium clr_dark'>Why we started </p>
                <p className='ff_sen fs_xl fw-bold clr_dark mt-lg-4 mt-3'>It started out as a simple idea and evolved into our passion</p>
                <p className='fw-normal fs_sm clr_ash mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <button className='ms-2 fs_md fw-bold ff_sen sub_btn bg_sun mt-lg-5 mt-4'>Discover our story > </button>

              </div>
            </div>

          </Col>


        </Row>

        {/* 1st way */}
        {/* <Row className='align-items-baseline'>
          <Col sm={6}>
            <img className='w-10 0' src={group_pic} alt="img" />
          </Col>

          <Col sm={6} className='p-4 bg-white' >
            <div className='text-center text-lg-start p-lg-5'>
              <p className='text-uppercase fs_sm fw-medium clr_dark'>Why we started </p>
              <p className='ff_sen fs_llg fw-bold clr_dark mt-lg-4 mt-3'>It started out as a simple idea and evolved into our passion</p>
              <p className='fw-normal fs_sm clr_ash mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
              <button className='ms-2 fs_md fw-bold ff_sen sub_btn bg_sun mt-lg-5 mt-4'>Discover our story > </button>

            </div>
          </Col>
        </Row> */}

      </Container>


      {/* List of Authors */}
      <Container className='my-5'>
        <section className='py-4 py-md-5'>
          <h1 className='ff_sen fw-bold fs_llg clr_dark text-center mb-md-5 mb-4'>List of Authors</h1>

          <div>
            {/* <Row>
              {
                authors.map((obj, i) => {
                  return (
                    <Col xsm={10} sm={6} xl={3} className='mt-3 mt-xl-0'>
                      <div className="author_card">
                        <div key={i} className='text-center'>
                          <img src={obj.author_img} alt="img" />
                          <p className='fs_lg fw-bold clr_dark ff_sen mt-3'>{obj.author_name}</p>
                          <p className='fw-normal fs_xsm clr_ash pb-lg-1'>{obj.company}</p>
                          <div className='mt-3'>
                            {obj.sm_imgs.map((imgs, index) => {
                              return (
                                <div key={index} className='d-flex gap-3 justify-content-center'>
                                  <a href="https://www.facebook.com/" target='_blank'> <img src={imgs.sm1} alt="img" /></a>
                                  <a href="https://twitter.com/" target='_blank'>  <img src={imgs.sm2} alt="img" /></a>
                                  <a href="https://www.instagram.com/" target='_blank'> <img src={imgs.sm3} alt="img" /></a>
                                  <a href="https://www.linkedin.com/" target='_blank'> <img src={imgs.sm4} alt="img" /></a>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </Col>
                  )
                })
              }

            </Row> */}
            <Author />

          </div>

        </section>
      </Container>


      {/* logos */}
      <Container className='mb-5 pb-lg-5 pb-4'>
        <div className='d-flex flex-wrap align-items-center gap-5 justify-conte nt-xl-between justify-content-center'>
          <div>
            <p className='fw-normal fs_xsm clr_ash opacity-75 '>We are</p>
            <p className='ff_sen fw-bold fs_lmd clr_ash'>Featured in</p>
          </div>
          <div className='d-flex flex-wrap align-items-center gap-5 justify-content-xl-between justify-content-center'>
            {logos.map((logo1, i) => {
              return (
                <div key={i} >
                  <img src={logo1.logo} alt="img" />
                </div>
              )
            })}
          </div>
        </div>
      </Container>


      {/* TESTIMONIALs */}
      <section className='mb-5 pb-lg-5'>
        <div className='mb-4'>
          <Container className='bg_cream p-5 '>
            <div className='m-lg-4'>
              <Row className='justify-content-xl-between justify-content-center text-center text-lg-start'>
                <Col xl={4} >
                  <p className='fw-normal fs_sm clr_dark mb-2'>TESTIMONIALS</p>
                  <h1 className='ff_sen fw-bold fs_llg clr_dark mb-3'>What people say about our blog</h1>
                  <p className='fs_sm fw-normal clr_dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

                </Col>

                <Col xl={1} className='my-4 my-xl-0'>
                  <div className='vert_border m-auto'></div>
                </Col>

                <Col xl={5}  >
                  <p className='ff_sen fw-bold fs_lmd clr_dark mb-5 pb-xl-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                  <div className='pt-xl-4 d-flex justify-content-sm-between flex-column flex-sm-row justify-content-center'>
                    <div className='d-flex gap-3 align-items-center justify-content-center justify-content-sm-start mb-4 mb-sm-0'>
                      <img src={testm_img} alt="img" />
                      <div>
                        <p className='fw-bold ff_sen clr_dark '>Jonathan Vallem</p>
                        <p className='fw-normal fs_sm clr_ash'>New york, USA</p>
                      </div>
                    </div>

                    <div>
                      <button className='border-0 bg-transparent'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="24" cy="24" r="24" transform="rotate(-180 24 24)" fill="white" />
                          <path d="M34.2852 25C34.8374 25 35.2852 24.5523 35.2852 24C35.2852 23.4477 34.8374 23 34.2852 23L34.2852 25ZM13.449 23.2929C13.0585 23.6834 13.0585 24.3166 13.449 24.7071L19.813 31.0711C20.2035 31.4616 20.8367 31.4616 21.2272 31.0711C21.6177 30.6805 21.6177 30.0474 21.2272 29.6569L15.5703 24L21.2272 18.3431C21.6177 17.9526 21.6177 17.3195 21.2272 16.9289C20.8367 16.5384 20.2035 16.5384 19.813 16.9289L13.449 23.2929ZM34.2852 23L14.1561 23L14.1561 25L34.2852 25L34.2852 23Z" fill="#232536" />
                        </svg>
                      </button>

                      <button className='border-0 bg-transparent ms-4'>
                        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="31" cy="31" r="31" fill="#232536" />
                          <path d="M18 31C17.4477 31 17 31.4477 17 32C17 32.5523 17.4477 33 18 33V31ZM44.7071 32.7071C45.0976 32.3166 45.0976 31.6834 44.7071 31.2929L38.3431 24.9289C37.9526 24.5384 37.3195 24.5384 36.9289 24.9289C36.5384 25.3195 36.5384 25.9526 36.9289 26.3431L42.5858 32L36.9289 37.6569C36.5384 38.0474 36.5384 38.6805 36.9289 39.0711C37.3195 39.4616 37.9526 39.4616 38.3431 39.0711L44.7071 32.7071ZM18 33H44V31H18V33Z" fill="#F4F4F4" />
                        </svg>
                      </button>
                    </div>
                  </div>

                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section >


      {/* Join our team */}
      <Container className='pt-4 mb-5 '>
        <div className='pb-5 mb-lg-4'>
          {/* <section className=' w_40 m-auto text-center'>
          <h1 className='ff_sen fw-bold fs_llg  clr_dark'>Join our team to be a part of our story</h1>
          <p className='fw-normal fs_sm  clr_ash py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <button className=' fs_md fw-bold ff_sen sub_btn bg_sun mt-lg-3'>Join Now</button>
        </section> */}

          <Team />
        </div>
      </Container>


    </div >
  )
}

export default Home
