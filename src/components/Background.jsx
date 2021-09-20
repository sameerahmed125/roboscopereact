import React from "react";

function Background(){
    return(<>
        <div className="main">
            
    <div style ={{width: "100vw",
                height: "70vh",
                position: "absolute",
                top: "0vh"}}>
                </div>

            <div  style= {{width: "100vw",
                            /* height: 30vh; */
                            position:"absolute",
                            bottom: "0vh",
                            marginTop: "auto"}}>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 7 7.021 4">
                 <defs>
                     <linearGradient id="skydark">
                        <stop offset="0%" style={{stopColor:"rgb(91,176,255)",stopOpacity:"1.00"}} />
                        <stop offset="48%" style= {{stopColor:"rgb(196,227,255)",stopOpacity:"1.00"}} />
                        <stop offset="100%" style={{stopColor:"rgb(85,126,165)",stopOpacity:"1.00"}} />
    
                     </linearGradient>
                     <linearGradient id="greydark" x1="36%" y1="0%" x2="64%" y2="100%" >
        
                        <stop offset="0%" style={{stopColor:"rgb(31,31,31)",stopOpacity:"1.00"}} />
                        <stop offset="100%" style={{stopColor:"rgb(84,86,88)",stopOpacity:"1.00"}} />
              
                  </linearGradient>
                  <linearGradient id="blackdark" x1="44%" y1="0%" x2="56%" y2="100%" >
        
                    <stop offset="0%" style={{stopColor:"rgb(80,81,72)",stopOpacity:"1.00"}} />
                    <stop offset="100%" style={{stopColor:"rgb(0,0,0)",stopOpacity:"1.00"}} />
          
              </linearGradient>
                 </defs>
                    <path style={{fill: "url(#skydark)"}} d="M 7.019 10.01 L 7.021 10.984 L 0 11 L 0 7 C 0.78 7.826 3.404 9.79 7.019 10.01" fill="none"/>
                    <path style={{fill: "url(#greydark)"}}d="M 4.012 11.011 L 0 11 L 0.013 7.52 C 1.39 9.914 2.621 10.275 4.012 11.011" fill="none"/>
                    <path style={{fill: "url(#blackdark)"}} d="M 3.022 10.984 L 0 11 L -0.001 8.002 C 0.213 8.697 0.695 10.034 3.022 10.984" fill="none"/>
                  </svg>
        </div>
        </div>
        </>
        )
    }
export default Background