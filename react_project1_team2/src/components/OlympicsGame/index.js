import React from 'react';
import AlpineSking from '../../resources/images/gameIcon/AlpineSkiing.png'
import Biathlon from '../../resources/images/gameIcon/Biathlon.png'
import Bobsleigh from '../../resources/images/gameIcon/Bobsleigh.png'
import CrossCountrySkiing from '../../resources/images/gameIcon/CrossCountrySkiing.png'
import Curling from '../../resources/images/gameIcon/Curling.png'
import FigureSkating from '../../resources/images/gameIcon/FigureSkating.png'
import FreestyleSkiing from '../../resources/images/gameIcon/FreestyleSkiing.png'
import IceHockey from '../../resources/images/gameIcon/IceHockey.png'
import Luge from '../../resources/images/gameIcon/Luge.png'
import NordicCombined from '../../resources/images/gameIcon/NordicCombined.png'
import ShortTrackSpeedSkating from '../../resources/images/gameIcon/ShortTrackSpeedSkating.png'
import Skeleton from '../../resources/images/gameIcon/Skeleton.png'
import SkiJumping from '../../resources/images/gameIcon/SkiJumping.png'
import Snowboard from '../../resources/images/gameIcon/Snowboard.png'
import SpeedSkating from '../../resources/images/gameIcon/SpeedSkating.png'




const OlympicsGame = () => {
    return (
        <section id="game_container">
            <h1>Games and Schedule, Beijing 2022</h1>
                <a class='smid' href="https://olympics.com/en/beijing-2022/schedule-by-sport/alpine-skiing/" target="_blank" > <img  src={AlpineSking} ></img></a>   
                <a class='smid' href="https://olympics.com/en/beijing-2022/schedule-by-sport/biathlon/" target="_blank" > <img  src={Biathlon} ></img></a>   
                <a class='smid' href="https://olympics.com/en/beijing-2022/schedule-by-sport/bobsleigh/" target="_blank" > <img  src={Bobsleigh} ></img></a>                 
                <a class='smid' href="https://olympics.com/en/beijing-2022/schedule-by-sport/cross-country-skiing/" target="_blank" > <img  src={CrossCountrySkiing}></img></a>
                <a class='smid' href="https://olympics.com/en/beijing-2022/schedule-by-sport/curling/" target="_blank" > <img  src={Curling}></img></a>
                <a class='smid' href="https://olympics.com/en/beijing-2022/schedule-by-sport/figure-skating/" target="_blank" > <img  src={FigureSkating} ></img></a>   
                <a class='smid' href="https://olympics.com/en/beijing-2022/schedule-by-sport/freestyle-skiing/" target="_blank" > <img  src={FreestyleSkiing} ></img></a>                 
                <a class='smid' href="https://olympics.com/en/beijing-2022/schedule-by-sport/luge/" target="_blank" > <img  src={IceHockey}></img></a>
                <a class='smid' href="https://olympics.com/en/beijing-2022/schedule-by-sport/nordic-combined/" target="_blank" > <img  src={Luge}></img></a>  
                <a class='smid' href="https://olympics.com/en/beijing-2022/schedule-by-sport/luge/" target="_blank" > <img  src={NordicCombined} ></img></a>   
                <a class='smid' href="https://olympics.com/en/beijing-2022/schedule-by-sport/short-track-speed-skating/" target="_blank" > <img  src={ShortTrackSpeedSkating} ></img></a>                 
                <a class='smid' href="https://olympics.com/en/beijing-2022/schedule-by-sport/skeleton/" target="_blank" > <img  src={Skeleton}></img></a>
                <a class='smid' href="https://olympics.com/en/beijing-2022/schedule-by-sport/ski-jumping/" target="_blank" > <img  src={SkiJumping}></img></a>  
                <a class='smid' href="https://olympics.com/en/beijing-2022/schedule-by-sport/snowboard/" target="_blank" > <img  src={Snowboard}></img></a>
                <a class='smid' href="https://olympics.com/en/beijing-2022/schedule-by-sport/speed-skating/" target="_blank" > <img  src={SpeedSkating}></img></a>  
             
        </section>
    )
};
export default OlympicsGame;
