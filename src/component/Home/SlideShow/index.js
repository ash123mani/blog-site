import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';

import './scss/index.scss';
import './scss/slider-animation.scss';

const content = [
  {
    title: 'Empower yourself with the Technology',
    description: 'Learn with us and feel the power of technology.We will make you a expert developer',
    button: 'Read More',
    image: require('../../../static/images/tech2.jpg')
  },
  {
    title: 'Feel your real self with Vedanata',
    description:
      'Sages of this country discovered methods to feel your real self.Learn with us the intricacies of Vedas',
    button: 'Read More',
    image: require('../../../static/images/vedanta.jpg')
  },
  {
    title: 'Feel Financial freedom in this Capitalistic market',
    description:
      'We know words like Stocks, Shares, Equity, Wall Street always makes you feel baffled. Learn with us intricacies of the Financial market',
    button: 'Read More',
    image: require('../../../static/images/finance.jpg')
  }
];

const SlideShow = () => {
  return (
    <div className="slideshow">
      <Slider className="slider-wrapper" autoplay={2000}>
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
