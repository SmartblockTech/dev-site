import { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer: FC<Record<symbol, never>> = () => {
  return (
    <Container className='bg-dark' fluid>
      <Row>
        <Col className='py-4 text-center text-light'>
          Smartblock Technologies &reg; {new Date().getFullYear()}
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
