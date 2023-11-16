import { useEffect, useState } from "react";
import useSound from "use-sound";
import song from "./song.mp3";
import albumn_cover from "./albumn_cover.png"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import './styles.css'

const MusicPlayer = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: ""
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: ""
  });

  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(song, { volume: 0.7 });

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain
      });
    }
  }, [isPlaying, duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="mt-10">
        <div className="flex flex-row w-full" onMouseEnter={props.textEnter} 
            onMouseLeave={props.textLeave}>
            <div className="w-1/4">
                <img className="musicCover my-auto" src={albumn_cover} alt="No Albumn Cover"/>
            </div>
            <div className="w-1/4 pl-2">
                <h3 className="text-white font-bold mt-1">Lofi Mix</h3>
                <p className="text-white text-sm">lofi geek</p>
            </div>
            <div className="w-1/2">
                <div>
                    <div className="time" onMouseEnter={props.textEnter} 
            onMouseLeave={props.textLeave}>
                    <p>
                        {currTime.min}:{currTime.sec}
                    </p>
                    <p>
                        {time.min}:{time.sec}
                    </p>
                    </div>
                    <input onMouseEnter={props.textEnter} 
            onMouseLeave={props.textLeave}
                    type="range"
                    min="0"
                    max={duration / 1000}
                    default="0"
                    value={seconds}
                    className="timeline text-gray-500"
                    onChange={(e) => {
                        sound.seek([e.target.value]);
                    }}
                    />
                </div>
                <div>
                    {!isPlaying ? (
                    <button className="playButton" onClick={playingButton} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                        <AiFillPlayCircle />
                        </IconContext.Provider>
                    </button>
                    ) : (
                    <button className="playButton" onClick={playingButton} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                        <AiFillPauseCircle />
                        </IconContext.Provider>
                    </button>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
}

export default MusicPlayer
