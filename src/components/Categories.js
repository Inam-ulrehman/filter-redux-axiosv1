import React from 'react'
import styled from 'styled-components'
import { getUniqueValues } from '../features/menu/menu.Slice'
import { useDispatch, useSelector } from 'react-redux'

const Categories = () => {
  const dispatch = useDispatch()
  const { menu, categories, mainMenu } = useSelector((state) => state.menu)

  const handleCategory = (e) => {
    console.log(e.target.value)
    const value = e.target.value
    const tempValue = mainMenu.filter((item) => item.category === value)

    dispatch(getUniqueValues({ value, tempValue }))
  }
  return (
    <Wrapper>
      <div className='button-container'>
        {categories.map((item) => {
          return (
            <button
              value={item.type}
              onClick={handleCategory}
              type='button'
              key={item.id}
              className='btn'
            >
              {item.type}
            </button>
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  margin-top: 1rem;
  .button-container {
    display: flex;
    justify-content: center;
  }
  .btn {
    margin-right: 1rem;
  }
`
export default Categories
