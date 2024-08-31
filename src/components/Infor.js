import React from "react"
import clever from '../assets/pic.png'

function Infor(){
    return(
        <div>
            <img src={clever}/>
            <h4>Agaba Pellan</h4>
            <h4>SOftware Engineer</h4>

            <div>
                <button className="btn">Email</button>
                <button className="btn contactMe">Call Now</button>
            </div>
        </div>
    )
}

export default Infor