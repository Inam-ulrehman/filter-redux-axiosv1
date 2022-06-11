import React from 'react'
import styled from 'styled-components'
import Categories from '../components/Categories'
import Menu from '../components/Menu'

const Home = () => {
  return (
    <Wrapper>
      <Categories />
      <Menu />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 300vh;
`

export default Home
