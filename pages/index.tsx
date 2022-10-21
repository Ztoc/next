import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Container sx={{paddingTop:5}}>
      <Header></Header>
    </Container>
    </div>
  )
}

export default Home
