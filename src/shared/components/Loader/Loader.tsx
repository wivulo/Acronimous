import './Loader.css'
import {useSpring, animated} from 'react-spring'

export default function Loader({ isLoading }: any) {
alert(isLoading)
  let showLoaderAnim = useSpring({
    display: isLoading ? 'block' : 'none',
    opacity: isLoading ? 1 : 0,
    config: {mass: 1, tension: 150,friction: 10}
  })

    return (
      <animated.div id="loader" style={{...showLoaderAnim}}>
        <div className="flex flex-column flex-center">
          <div id="loader-information" >
            <p> A carregar... </p>
          </div>
  
          <div id="loader-load" >
  
            <div id="dots" className=" flex flex-row flex-center">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
  
          </div>
        </div>
      </animated.div>
    )
  }
