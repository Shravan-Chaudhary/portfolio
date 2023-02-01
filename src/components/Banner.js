import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

function Banner() {
  const [roleNum, setRoleNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const role = ['Web Developer', 'Fullstack Developer', 'Video Editor']
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)
    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = roleNum % role.length
    let fullText = role[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)
    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setRoleNum(roleNum + 1)
      setDelta(500)
    }
  }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Shravan`} <span className='wrap'>{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ut
              cum similique iste eaque asperiores reprehenderit aspernatur
              adipisci. Veniam illum delectus modi debitis aliquid repellat,
              saepe necessitatibus iste dolorum totam cum deleniti ab ipsa quo
              aperiam odit velit. Officiis, ullam.
            </p>
            <button onClick={() => {}}>
              Let's Connect <ArrowRightCircle size={25} />{' '}
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header image' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
