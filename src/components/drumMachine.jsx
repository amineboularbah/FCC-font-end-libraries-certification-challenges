import React, { Component } from "react";
import "../componentStyle/drumStyle.css";

const tracks = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

class DrumMachine extends React.Component {
  render() {
    return (
      <div id="drum-machine" className="container">
        <div id="display">
          <h1>Press a Button</h1>
          {tracks.map((e, index) => (
            <Box text={e.keyTrigger} key={index} tracks={tracks[index]} />
          ))}
        </div>
      </div>
    );
  }
}
class Box extends React.Component {
  constructor(props) {
    super();
    this.audioref = React.createRef();
  }
  playSound = (audio, title) => {
    this.audioref.current.play();
    const parent = audio.parentNode;
    const display = parent.parentNode;
    display.querySelector("h1").innerText = title;
    parent.classList.add("active");
    audio.addEventListener("ended", () => {
      parent.classList.remove("active");
    });
  };
  render() {
    const { text, tracks } = this.props;
    return (
      <div
        className="drum-pad"
        id={`drum-${tracks.key}`}
        onClick={() =>
          this.playSound(document.getElementById(text.toUpperCase()), tracks.id)
        }
      >
        {text}
        <audio
          ref={this.audioref}
          src={tracks.url}
          className="clip"
          id={text}
        />
      </div>
    );
  }
}
document.addEventListener("keydown", (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);
  if (audio) {
    const parent = audio.parentNode;
    const display = parent.parentNode;
    display.querySelector("h1").innerText = audio.id;
    parent.classList.add("active");
    audio.play();
    audio.addEventListener("ended", () => {
      parent.classList.remove("active");
    });
  }
});
export default DrumMachine;
