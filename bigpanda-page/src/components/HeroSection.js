import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>RAG model and Front end demo</h1>
      <p>for Apurv's BigPanda interview</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          Give it a go!
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
