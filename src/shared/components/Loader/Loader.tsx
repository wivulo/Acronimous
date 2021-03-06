import './Loader.css'

export default function Loader({ loading }: any) {
    return (
      <div id="loader" className={(loading) ? 'isLoading' : '' }>
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
      </div>
    )
  }