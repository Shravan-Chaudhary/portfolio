import { Col, Container, Row } from 'react-bootstrap'
import projImg from '../assets/img/project-img3.png'
import ProjectCard from './ProjectCard'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import colorSharp2 from '../assets/img/color-sharp2.png'

function Projects() {
  const projects = [
    {
      title: 'project 1',
      description: 'Web Development',
      imgUrl: projImg,
    },
    {
      title: 'project 2',
      description: 'Web Development',
      imgUrl: projImg,
    },
    {
      title: 'project 3',
      description: 'Web Development',
      imgUrl: projImg,
    },
    {
      title: 'project 4',
      description: 'Web Development',
      imgUrl: projImg,
    },
    {
      title: 'project 5',
      description: 'Web Development',
      imgUrl: projImg,
    },
    {
      title: 'project 6',
      description: 'Web Development',
      imgUrl: projImg,
    },
  ]

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In nemo
              necessitatibus mollitia, maiores unde ratione recusandae cumque.
              Amet, voluptas corrupti.
            </p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav
                variant='pills'
                className='nav-pills mb-5 justify-content-center align-items-center'
                id='pills-tab'
              >
                <Nav.Item>
                  <Nav.Link eventKey='first'>Large Scale</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Advance</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third' disable>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  )
}

export default Projects
