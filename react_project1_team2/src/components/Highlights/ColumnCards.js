import React from 'react';
import Fade from 'react-reveal/Fade';



import nadia from '../../resources/images/players/nadia.jpeg'
import erin from '../../resources/images/players/erinJackson.jpeg'
import mirai from '../../resources/images/players/maraiNagusa.jpeg'

const ColumnCards = () => {
    return (
        <Fade>
            <div className="center_wrapper">
                <h2>Highlights </h2>



                    <div class="column-sim">
                        <div class="card-sim">
                            <img src= {mirai} alt="" className="staff_pic"
                            style={{width:"100%",
                            height: "auto",
                            textAlign: "center"}}/>
                            <p>If I fall, I'll take the falll and keep going. <br/> Mirai Nagusa</p>
                        </div>
                    </div>  


                    <div class="column-sim">
                        <div class="card-sim">
                            <img src= {erin} alt="" className="staff_pic"
                            style={{width:"100%",
                            height: "auto",
                            textAlign: "center"}}/>
                            <p>It's funny because when they knew about my inline career, people would say 'Oh, we'll see you in the Olympics one day', and I'd be like, 'No, my sport's not in the Olympics and I'll never be an ice skater'. I never really imagined switching over to ice just because I loved inline so much and I hated being cold. <br/> - Erin Jackson</p>
                        </div>
                    </div>  



                    <div class="column-sim">
                        <div class="card-sim">
                            <img src= {nadia} alt="" className="staff_pic"
                            style={{width:"100%",
                            height: "auto",
                            textAlign: "center"}}/>
                            <p>I don't run away from a challenge because I am afraid. Instead, I run toward it because the only way to escape fear is to trample it beneath your feet." <br/> -- Nadia Comaneci, Romania, gymnastics</p>
                        </div>
                    </div>                    

            </div>
        </Fade>
    );
};

export default ColumnCards;