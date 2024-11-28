import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import blog_hero from '../assets/images/blog_hero.png';
import blog_post1 from '../assets/images/blog_post1.png';
import blog_post2 from '../assets/images/blog_post2.png';
import blog_post3 from '../assets/images/blog_post3.png';
import blog_post4 from '../assets/images/blog_post4.png';
import Category from '../component/Category';
import Team from '../component/Team';



const Blog = () => {

  let all_post = [
    {
      img: blog_post1,
      categ: "Startup",
      details: "Design tips for designers that cover everything you need",
      lorem: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      img: blog_post2,
      categ: "Business",
      details: "How to build rapport with your web design clients",
      lorem: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      img: blog_post3,
      categ: "Startup",
      details: "Logo design trends to avoid in 2022",
      lorem: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      img: blog_post4,
      categ: "Technology",
      details: "8 Figma design systems you can download for free today",
      lorem: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      img: blog_post2,
      categ: "Economy",
      details: "Font sizes in UI design: The complete guide to follow",
      lorem: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
  ]

  return (
    <div>
      {/* hero_Sec  */}
      <div className='bg_laven py-5'>
        <Container className='py-4 my-lg-2'>
          <Row className='align-items-center justify-content-center flex-column-reverse flex-lg-row'>
            <Col sm={10} lg={6} className='mt-4 mt-lg-0'>
              <div className=' text-center text-lg-start '>
                <p className='clr_dark fs_sm fw-normal text-uppercase'>Featured Post</p>
                <h1 className='ff_sen fw-bold fs_llg clr_dark my-3'>Step-by-step guide to choosing great font pairs</h1>
                <p className='fw-normal fs_sm clr_dark'>By <span className='clr_purp'>john doe</span>  |  May 23, 2022 </p>
                <p className='fw-normal fs_sn clr_dark mt-3'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <div><button className='ms-2 fs_md fw-bold ff_sen sub_btn bg_sun mt-lg-5 mt-4'>Read More <span>></span> </button></div>
              </div>
            </Col>
            <Col sm={10} lg={6} className='text-lg-end'>
              <img className='w-100' src={blog_hero} alt="img" />
            </Col>
          </Row>
        </Container>
      </div>


      {/* All posts */}
      <section className='mt-5 pt-3'>
        <Container>
          <h1 className='ff_sen fw-bold fs_xl clr_dark mb-4'>All posts</h1>
          <div className='horiz_border'></div>

          <div >
            {all_post.map((obj, i) => {
              return (
                <div key={i} className=" mt-5 pt-3 d-flex gap-4 align-items-center flex-lg-row flex-column">
                  <img src={obj.img} alt="img" />
                  <div className='ms-2 text-center text-lg-start'>
                    <p className='fs_sm clr_purp fw-semibold text-uppercase '> {obj.categ} </p>

                    <p className='fs_llg fw-bold clr_dark py-3 ff_sen'>{obj.details}</p>

                    <p className='fw-normal fs_sm clr_ash'>{obj.lorem}</p>

                  </div>
                </div>
              )
            })}
          </div>


        </Container>
      </section>


      {/* All Categories */}
      <section className='mt-5 pt-3'>
        <Container>
          <div className='text-center'>
            {/* <button> <span>&#10094</span> Prev </button> */}
            <button className='bg-transparent border-0 ff_sen fw-bold fs_lmd clr_ash'> Prev </button>
            <button className='bg-transparent border-0 ff_sen fw-bold fs_lmd clr_dark ms-3'> Next </button>
          </div>

          <p className='ff_sen fw-bold fs_llg clr_dark mb-5 mt-lg-5 pt-3'>All Categories</p>

          <div>
            <Category />
          </div>

        </Container>
      </section>


      {/* join our team  */}
      <section className='my-5 py-5'>
        <Container className='my-lg-4'>
          <Team />
        </Container>
      </section>

    </div>
  )
}

export default Blog
