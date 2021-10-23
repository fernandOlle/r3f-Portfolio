import { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import Slider from 'react-touch-drag-slider';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
  }
`;
// The slider will fit any size container, lets go full screen...
const AppStyles = styled.body`
  background-color: transparent;
  height: 100vh;
  width: 100vw;
`;

const Button = styled.button`
  font-size: 2rem;
  z-index: 10;
  position: fixed;
  top: 50%;
  border-radius: 50px;
  border: 0 pink solid;
  color: white;
  background-color: #070708;
  cursor: pointer;
  box-shadow: 0 4px #999;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:hover {
    background-color: #0f1012;
  }

  &:active {
    background-color: #212326;
    box-shadow: 0 2px #666;
    transform: translateY(4px);
  }

  &:disabled {
    background-color: #333333;
    box-shadow: 0 2px #666;
    transform: translateY(4px);
  }

  ${(props) =>
    props.right
      ? css`
          left: 45vw;
        `
      : css`
          right: 45vw;
        `};
`;

const Carousel = () => {
  const [index, setIndex] = useState(1);

  const images = [
    {
      title: 'Nature Image1',
      url: '/githubF.png',
    },
    {
      title: 'Nature Image2',
      url: '/linkedinF.png',
    },
    {
      title: 'Nature Image3',
      url: '/twitterF.png',
    },
    {
      title: 'Nature Image4',
      url: '/devDog.png',
    },
  ];

  const setFinishedIndex = (i) => {
    console.log('finished dragging on slide', i);
    setIndex(i);
  };

  const next = () => {
    if (index < images.length - 1) setIndex(index + 1);
  };

  const previous = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <>
      <GlobalStyles />
      <AppStyles>
        <Button onClick={previous} left disabled={index === 0}>
          〈
        </Button>
        <Button onClick={next} right disabled={index === images.length - 1}>
          〉
        </Button>
        <Slider
          onSlideComplete={setFinishedIndex}
          onSlideStart={(i) => {
            console.clear();
            console.log('started dragging on slide', i);
          }}
          activeIndex={index}
          threshHold={100}
          transition={0.5}
          scaleOnDrag={true}
        >
          {images.map(({ url, title }, index) => (
            <img src={url} key={index} alt={title} />
          ))}
        </Slider>
      </AppStyles>
    </>
  );
};

export default Carousel;
