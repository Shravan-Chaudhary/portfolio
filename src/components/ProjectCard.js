import { Col } from 'react-bootstrap'

function ProjectCard({ title, description, imgUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} alt='image' />

        <a
          href='https://watchita.netlify.app/'
          style={{ color: 'white' }}
          target='_blank'
        >
          <div className='proj-txtx'>
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  )
}

export default ProjectCard
