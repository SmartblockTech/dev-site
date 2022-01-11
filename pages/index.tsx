import type { NextPage } from 'next'
import { Col, Container, Row } from 'react-bootstrap'
import { SpinnerDiamond } from 'spinners-react'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Container className='h-100'>
        <Row className='h-100 align-content-center'>
          <Col className='text-center'>
            <SpinnerDiamond
              size={50}
              thickness={100}
              speed={100}
              color='#4B5AE2'
              secondaryColor='rgba(55, 55, 55, 0.44)' />
            <h3 className='mt-4'>
              Site under construction
            </h3>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Home
