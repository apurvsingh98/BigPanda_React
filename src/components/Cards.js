import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>About Apurv:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='is from Bihar, India where Buddha is from!'
              label='Hometown'
              path='https://www.britannica.com/place/Bodh-Gaya'
            />
            <CardItem
              src='https://www.cmu.edu/news/sites/default/files/styles/hero_full_width_fallback/public/2023-03/rankings-2000x1000-min_0.jpg.webp?itok=ID6B9U-r'
              text='is a grad student at Carnegie Mellon University (soon graduating in 2 months!)'
              label='Education'
              
            />
            
          </ul>
          <ul className='cards__items'>
            
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1wAPQO7FG8ibe2OCSl7HS5gdtwY4MzII5FzNsWK63XxStAXo'
              text='is obsessed with Pink Floyd'
              label='Adventure'
              
            />
            <CardItem
              src='images/boat.jpeg'
              text='terrified of water but loves sailing and driving boat!'
              label='Adrenaline'
            
            />
            <CardItem
              src='https://media.licdn.com/dms/image/C4D22AQG60S60KCRMGQ/feedshare-shrink_1280/0/1611508220496?e=1710374400&v=beta&t=UeNaJGu25yxzJ5BZaykaGbt4NGTm69nAXq_udLH2rT0'
              text='is a born Panda'
              label='Team'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
