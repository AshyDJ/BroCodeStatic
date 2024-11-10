import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';
import image from './house_new.png';
const Home = () => {
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate('/form');
    }
    return (<>
        <head>
    <meta charset="utf-8" />
    <title>House Price Prediction System</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&amp;display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="styles.css" />
    <script defer="defer" src="/static/js/main.4a4bedfe.js"></script>
    <link href="/static/css/main.5c05684d.css" rel="stylesheet" />
    </head>
        <div id="root">
          <div className="App">
            <div>
              <img
                    src={image}
                alt="logo"
                className="logo"
                onClick={handleClick}
              />
              <div className="home row">
                <div className="col homeLeft">
                  
                  <h1 className="heading"><b>Home</b></h1>
                  <h1 className="heading"><b>Forecast</b></h1>
                </div>
                <div className="greenHome col">
                  <br /><br /><br /><br />
                  <h3><b>
                  Welcome to the vibrant world of real estate!</b></h3>
                  <br /><br />
                  <h5>Our machine learning algorithms offer accurate, customized property price predictions to support your decisions.</h5>
                  <br />
                  <h5>Whether you're a buyer, seller, or investor, move forward in the real estate market with confidence.</h5>
                  <br /><br />
                  
                    <button type="button" className="btn btn-col btn-dark btn-lg" onClick={handleClick}>
                      Get Started →
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      );
}

export default Home
