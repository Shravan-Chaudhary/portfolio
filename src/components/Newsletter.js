import { useState } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'

function Newsletter({ subscribe, status, message }) {
  const [email, setEmail] = useState('')

  return (
    <Col lg={12}>
      <div className='newsletter-bx'>
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant='danger'>{message}</Alert>}
            {status === 'success' && <Alert variant='success'>{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form>
              <div className='new-email-bx'>
                <input
                  type='email'
                  value={email}
                  placeholder='Email Address'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type='submit'>Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default Newsletter
