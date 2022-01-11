import { FC } from 'react'
import { Navbar, Container, Image } from 'react-bootstrap'

const NavBar: FC<Record<symbol, never>> = () => {
  return (
    <Navbar variant='dark' bg='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>
          <Image
            fluid
            width={200}
            src='https://smartblock-static.s3.amazonaws.com/public-assets/smartblock-logo-white.svg'
            alt='Smartblock' />
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavBar
