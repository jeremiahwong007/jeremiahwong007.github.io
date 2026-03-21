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
    min: 0,
    sec: 0
  });
  const [currTime, setCurrTime] = useState({
    min: 0,
    sec: 0
  });

  const [seconds, setSeconds] = useState(0);

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
        const seek = sound.seek([]);
        if (typeof seek === 'number' && !isNaN(seek)) {
          setSeconds(seek);
          const min = Math.floor(seek / 60);
          const sec = Math.floor(seek % 60);
          setCurrTime({ min, sec });
        }
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
    <div className="flex items-center gap-4 w-full">
        <img className="h-10 w-10 rounded flex-none object-cover aspect-square" src={albumn_cover} alt="No Albumn Cover"/>
        <div className="flex-none min-w-0">
            <h3 className="text-white text-sm font-bold leading-tight">Lofi Mix</h3>
            <p className="text-gray-400 text-xs">lofi geek</p>
        </div>
        <button className="flex-none" onClick={playingButton}>
            <IconContext.Provider value={{ size: "2em", color: "white" }}>
                {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
            </IconContext.Provider>
        </button>
        <div className="flex items-center gap-2 flex-1 min-w-0">
            <p className="text-white text-xs flex-none">{currTime.min}:{currTime.sec}</p>
            <input
                type="range"
                min="0"
                max={duration / 1000}
                default="0"
                value={seconds}
                className="timeline flex-1"
                onChange={(e) => {
                    sound.seek([e.target.value]);
                }}
            />
            <p className="text-white text-xs flex-none">{time.min}:{time.sec}</p>
        </div>
    </div>
  );
}

export default MusicPlayer
