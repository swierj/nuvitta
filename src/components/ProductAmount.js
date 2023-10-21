import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

export default function ProductAmount({ increase, decrease, amount }) {
  return (
    <AmountContainer>
      <button type='button' className='amount-btn' onClick={decrease}>
        <FaMinus />
      </button>
      <h2>{amount}</h2>
      <button type='button' className='amount-btn' onClick={increase}>
        <FaPlus />
      </button>
    </AmountContainer>
  )
}

const AmountContainer = styled.section`
  display: grid;
  width: 125px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem 0;
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
  }
`
