import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Player() {
  const songs = [
    {name:"Song 1",src:'https://samplelib.com/lib/preview/mp3/sample-3s.mp3'},
    {name:"Song 2",src:'https://samplelib.com/lib/preview/mp3/sample-3s.mp3'}
  ]

  return (
    <AudioPlayer
      autoPlay
      src={songs[0].src}
    />
  )
}
