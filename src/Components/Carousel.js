import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export const Home = () => ( 
  <Carousel>
  <Carousel.Item>
    <img
      style = {{
        paddingTop: 75,
        paddingLeft: 200,
        paddingRight: 200,
        paddingBottom: 100,
      }}
      id="carousel-img"
      className="d-block w-100"
      src="https://i.ytimg.com/vi/uAqMXkfZYVE/maxresdefault.jpg"
      alt="First slide"
      overflow="visible"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
          style = {{
        paddingTop: 75,
        paddingLeft: 200,
        paddingRight: 200,
        paddingBottom: 100,
      }}
      id="carousel-img"
      className="d-block w-100"
      src="https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2020/03/14/USATODAY/usatsports/247WallSt.com-247WS-651938-the-weeknd.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp" alt="Second slide"
      alt="Third slide"
      overflow="visible"
      padding= "30"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
          style = {{
          paddingTop: 75,
        paddingLeft: 200,
        paddingRight: 200,
        paddingBottom: 100,
      }}
      id="carousel-img"
      className="d-block w-100"
      src="https://i.ytimg.com/vi/pxCWiYFkvTg/maxresdefault.jpg"
      alt="Third slide"
      overflow="visible"
    />
  </Carousel.Item>
</Carousel>
)