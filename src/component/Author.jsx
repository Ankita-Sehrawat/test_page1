import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fb from '../assets/images/fb.png';
import insta from '../assets/images/insta.png';
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
import auth1 from '../assets/images/auth1.png';
import auth2 from '../assets/images/auth2.png';
import auth3 from '../assets/images/auth3.png';
import auth4 from '../assets/images/auth4.png';



const Author = () => {

    let authors = [
        {
            author_img: auth1,
            author_name: "Floyd Miles",
            company: "Content Writer @Company",
            sm_imgs: [
                {
                    sm1: fb,
                    sm2: insta,
                    sm3: linkedin,
                    sm4: twitter,

                }
            ]
        },
        {
            author_img: auth2,
            author_name: "Dianne Russell",
            company: "Content Writer @Company",
            sm_imgs: [
                {
                    sm1: fb,
                    sm2: insta,
                    sm3: linkedin,
                    sm4: twitter,

                }
            ]
        },
        {
            author_img: auth3,
            author_name: "Jenny Wilson",
            company: "Content Writer @Company",
            sm_imgs: [
                {
                    sm1: fb,
                    sm2: insta,
                    sm3: linkedin,
                    sm4: twitter,

                }
            ]
        },
        {
            author_img: auth4,
            author_name: "Leslie Alexander",
            company: "Content Writer @Company",
            sm_imgs: [
                {
                    sm1: fb,
                    sm2: insta,
                    sm3: linkedin,
                    sm4: twitter,

                }
            ]
        },
        // {
        //     author_img: auth4,
        //     author_name: "Guy Hawkins",
        //     company: "Content Writer @Company",
        //     sm_imgs: [
        //         {
        //             sm1: fb,
        //             sm2: insta,
        //             sm3: linkedin,
        //             sm4: twitter,

        //         }
        //     ]
        // },
        // {
        //     author_img: auth4,
        //     author_name: "Eleanor Pena",
        //     company: "Content Writer @Company",
        //     sm_imgs: [
        //         {
        //             sm1: fb,
        //             sm2: insta,
        //             sm3: linkedin,
        //             sm4: twitter,

        //         }
        //     ]
        // },
        // {
        //     author_img: auth4,
        //     author_name: "Robert Fox",
        //     company: "Content Writer @Company",
        //     sm_imgs: [
        //         {
        //             sm1: fb,
        //             sm2: insta,
        //             sm3: linkedin,
        //             sm4: twitter,

        //         }
        //     ]
        // },
        // {
        //     author_img: auth4,
        //     author_name: "Jacob Jones",
        //     company: "Content Writer @Company",
        //     sm_imgs: [
        //         {
        //             sm1: fb,
        //             sm2: insta,
        //             sm3: linkedin,
        //             sm4: twitter,

        //         }
        //     ]
        // },
    ]

    return (
        <div>
            <Container>
                <Row>
                    {
                        authors.map((obj, i) => {
                            return (
                                <Col xsm={10} sm={6} xl={3} className='mt-3 mt -xl-0'>
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

                </Row>
            </Container>
        </div>
    )
}

export default Author
