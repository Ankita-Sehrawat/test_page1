import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import icon1 from '../assets/images/cat_icon1.png';
import icon2 from '../assets/images/cat_icon2.png';
import icon3 from '../assets/images/cat_icon3.png';
import icon4 from '../assets/images/cat_icon4.png';

const Category = () => {

    let categ = [
        {
          icon: icon1,
          profile: "Business",
          desp: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {
          icon: icon2,
          profile: "Startup",
          desp: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {
          icon: icon3,
          profile: "Economy",
          desp: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {
          icon: icon4,
          profile: "Technology",
          desp: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        }
      ]

  return (
    <div>
      <Row className='justify-content-center justify-content-xl-start'>
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
            </Row>
    </div>
  )
}

export default Category
