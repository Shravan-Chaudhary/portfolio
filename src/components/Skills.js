import github from '../assets/icons/github.svg'
import react from '../assets/icons/react.svg'
import redux from '../assets/icons/redux.svg'
import javascript from '../assets/icons/javascript.png'
import css from '../assets/icons/css.png'
import html from '../assets/icons/html.png'
import colorSharp from '../assets/img/color-sharp.png'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                dolorum laudantium architecto ipsa aut! Inventore consectetur
                minima nobis cumque deserunt nam similique, animi earum
                provident recusandae dolore incidunt eum ad rem! Perspiciatis
                excepturi blanditiis explicabo.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
              >
                <div className='item'>
                  <img src={react} alt='image' />
                  <h5>React</h5>
                </div>
                <div className='item'>
                  <img src={redux} alt='image' />
                  <h5>Redux</h5>
                </div>
                <div className='item'>
                  <img src={javascript} alt='image' />
                  <h5>Javascript</h5>
                </div>
                <div className='item'>
                  <img src={github} alt='image' />
                  <h5>Github</h5>
                </div>
                <div className='item'>
                  <img src={css} alt='image' />
                  <h5>CSS</h5>
                </div>
                <div className='item'>
                  <img src={html} alt='image' />
                  <h5>HTML</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp}
        alt='colorsharp'
        className='background-image-left'
      />
    </section>
  )
}

export default Skills
