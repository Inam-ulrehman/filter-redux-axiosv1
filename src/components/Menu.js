import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Menu = () => {
  const { menu } = useSelector((state) => state.menu)

  return (
    <Wrapper>
      {menu.map((item) => {
        const { id, img, price, title, category, desc } = item
        return (
          <article className='menu-container' key={id}>
            <div className='menu-box1'>
              <img className='img' src={img} alt='' />
            </div>
            <div className='menu-box2'>
              <p className='titlee'>{title}</p>
              <p className='price'>$ {price}</p>
            </div>
            <div className='menu-box3'>
              <p className='desc'>{desc}</p>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .menu-container {
    margin: 1rem;
    box-shadow: var(--shadow-2);
    border-radius: var(--radius);
    transition: var(--transition);
    :hover {
      transition: var(--transition);
      box-shadow: var(--shadow-4);
    }
  }
  .menu-box2 {
    display: flex;
    justify-content: space-around;
    p {
      margin: 0;
    }
  }
  .menu-box3 {
    text-align: center;
  }
  .img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    object-fit: cover;
  }
  .price {
    color: var(--primary-5);
  }
`
export default Menu
