import React, { useState } from 'react'
import styled from 'styled-components'

export default function ProductImages({
  imgMain,
  name,
  imgAlt1,
  imgAlt2,
  imgAlt3,
}) {
  const images = [imgMain, imgAlt1, imgAlt2, imgAlt3]
  const [main, setMain] = useState(images[0])
  return (
    <ImagesContainer>
      <img src={main} alt={name} className='mainImg' />
      <div className='img-gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image}
              alt=''
              key={index}
              className={`${image === main ? 'active' : null}`}
              onClick={() => setMain(images[index])}
            />
          )
        })}
      </div>
    </ImagesContainer>
  )
}

const ImagesContainer = styled.section`
  img {
    max-width: 22rem;
    display: block;
    border-radius: 0.75rem;
    object-fit: cover;
    align-items: center;
  }
  .img-gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--brand-color);
  }
  .mainImg:hover {
    opacity: 1;
  }
  img:hover {
    opacity: 0.75;
  }
  @media (max-width: 576px) {
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 1024px) {
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`
