import React, { useState } from 'react';
import './styles.css'
import image from './house_new.png';

const Form = () => {
  
    // State variables for each form field
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [sqftLiving, setSqftLiving] = useState("");
    const [sqftLot, setSqftLot] = useState("");
    const [floors, setFloors] = useState("");
    const [waterfront, setWaterfront] = useState("");
    const [view, setView] = useState("");
    const [condition, setCondition] = useState("");
    const [grade, setGrade] = useState("");
    const [sqftAbove, setSqftAbove] = useState("");
    const [sqftBasement, setSqftBasement] = useState("");
    const [yearBuilt, setYearBuilt] = useState("");
    const [yearRenovated, setYearRenovated] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [prediction1, setPrediction1] = useState(null);
    const [prediction2, setPrediction2] = useState(null);
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            bedrooms: bedrooms,
            bathrooms: bathrooms,
            sqftLiving: sqftLiving,
            sqftLot: sqftLot,
            floors: floors,
            waterfront: waterfront,
            view: view,
            condition: condition,
            grade: grade,
            sqftAbove: sqftAbove,
            sqftBasement: sqftBasement,
            yearBuilt: yearBuilt,
            yearRenovated: yearRenovated,
            zipcode: zipcode
        };
//
        const response = await fetch('https://brocode-r7j5.onrender.com/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            
        });

        if (response.ok) {
            console.log('RECIEVED INFO');
            /*
            setBedrooms("");
            setBathrooms("");
            setSqftLiving("");
            setSqftLot("");
            setFloors("");
            setWaterfront("");
            setView("");
            setCondition("");
            setGrade("");
            setSqftAbove("");
            setSqftBasement("");
            setYearBuilt("");
            setYearRenovated("");
            setZipcode("");
            */
        } else {
            console.log(response.status);
        }


        const data = await response.json();
        if (data.prediction1) {
            setPrediction1(data.prediction1); 
            setPrediction2(data.prediction2); // Display prediction
        } else {
            console.error('Error in prediction:', data.error);
        }
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
        <div className="App">
          <div>
            
              <img src={image}   alt="logo" className="logo"  />
                
                    
            <div className="row">
              <div className="col predictLeftcol">
                <br />
                <br />
                <br />
                <br />
                <br />
                
                {prediction1 && (
                <div className='prediction'>
                    <h3>Prediction</h3> 
              <h4>${Number(prediction1).toLocaleString()} - ${Number(prediction2).toLocaleString()}</h4>

                </div>
            )}
              </div>
              <div className="col formStyle">
                <br />
                <h4>Fill the below form to predict house price</h4>
                <br />
                <form onSubmit={handleOnSubmit}>
                  <div className="mb-3">
                    <label htmlFor="area">Enter number of bedrooms:</label>
                    <input
                      type="number"
                      id="area"
                      className="form-control"
                      value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} required
                      
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="bedroom">Enter the number of bathrooms</label>
                    <input
                      type="number"
                      id="area"
                      className="form-control"
                      value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} required
                      
                    />
                  </div>
    
    
                  <div className="mb-3">
                    <label htmlFor="stories">Enter the Square footage of the house</label>
                    <input
                      type="number"
                      id="area"
                      className="form-control"
                      value={sqftLiving} onChange={(e) => setSqftLiving(e.target.value)} required
                      
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="mainroad">Enter Square footage of the Lot:</label>
                    <input
                      type="number"
                      id="area"
                      className="form-control"
                      value={sqftLot} onChange={(e) => setSqftLot(e.target.value)} required
                      
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="guestroom">Enter Number of floors:</label>
                    <input
                      type="number"
                      id="area"
                      className="form-control"
                      value={floors} onChange={(e) => setFloors(e.target.value)} required
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="basement">Enter Waterfront (1 = Yes, 0 = No)</label>
                    <input
                      type="number"
                      id="area"
                      className="form-control"
                      value={waterfront} onChange={(e) => setWaterfront(e.target.value)} required                      
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="hotwaterheating">View (1 = Good view, 0 = No view)</label>
                    <input
                      type="number"
                      id="area"
                      className="form-control"
                      value={view} onChange={(e) => setView(e.target.value)} required                      
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="airconditioning">Enter Condition of the house (scale 1-5)</label>
                    <input
                      type="number"
                      id="area"
                      className="form-control"
                      value={condition} onChange={(e) => setCondition(e.target.value)} required                      
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="parking">Enter Grade of the house (scale 1-13)</label>
                    <input
                      type="number"
                      id="area"
                      className="form-control"
                      value={grade} onChange={(e) => setGrade(e.target.value)} required                       
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="prefarea">Enter Square footage above ground</label>
                    <input
                      type="number"
                      id="area"
                      className="form-control"
                      value={sqftAbove} onChange={(e) => setSqftAbove(e.target.value)} required
                      
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="furnishingstatus">Enter Square footage of the basement</label>
                    <input
                      type="number"
                      id="area"
                      className="form-control"
                      value={sqftBasement} onChange={(e) => setSqftBasement(e.target.value)} required 
                      
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="furnishingstatus">Enter Year the house was built</label>
                    <input
                      type="number"
                      id="area"
                      className="form-control"
                      value={yearBuilt} onChange={(e) => setYearBuilt(e.target.value)} required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="furnishingstatus">Enter Year the house was renovated (0 if never)</label>
                    <input
                      type="number"
                      id="area"
                      className="form-control"
                      value={yearRenovated} onChange={(e) => setYearRenovated(e.target.value)} required                      
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="furnishingstatus">Enter Zipcode of the house</label>
                    <input
                      type="number"
                      id="area"
                      className="form-control"
                      value={zipcode} onChange={(e) => setZipcode(e.target.value)} required                      
                    />
                  </div>
    
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button type="submit" className="btn btn-col btn-dark btn-lg">
                      Explore Prices
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </>
      );
/*
    return (
        <>
            <h2>House Pricing Model</h2>
            <div className='wrap'>
                <form onSubmit={handleOnSubmit}>
                    <table>
                        <tr>
                            <td><label>Enter number of bedrooms: </label></td>
                            <td><input type="text" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label>Enter number of bathrooms: </label></td>
                            <td><input type="text" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label>Enter Square footage of the house: </label></td>
                            <td><input type="text" value={sqftLiving} onChange={(e) => setSqftLiving(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label>Enter Square footage of the Lot: </label></td>
                            <td><input type="text" value={sqftLot} onChange={(e) => setSqftLot(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label>Enter Number of floors: </label></td>
                            <td><input type="text" value={floors} onChange={(e) => setFloors(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label>Enter Waterfront (1 = Yes, 0 = No): </label></td>
                            <td><input type="text" value={waterfront} onChange={(e) => setWaterfront(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label>Enter View (1 = Good view, 0 = No view): </label></td>
                            <td><input type="text" value={view} onChange={(e) => setView(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label>Enter Condition of the house (scale 1-5): </label></td>
                            <td><input type="text" value={condition} onChange={(e) => setCondition(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label>Enter Grade of the house (scale 1-13): </label></td>
                            <td><input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label>Enter Square footage above ground: </label></td>
                            <td><input type="text" value={sqftAbove} onChange={(e) => setSqftAbove(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label>Enter Square footage of the basement: </label></td>
                            <td><input type="text" value={sqftBasement} onChange={(e) => setSqftBasement(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label>Enter Year the house was built: </label></td>
                            <td><input type="text" value={yearBuilt} onChange={(e) => setYearBuilt(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label>Enter Year the house was renovated (0 if never): </label></td>
                            <td><input type="text" value={yearRenovated} onChange={(e) => setYearRenovated(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label>Enter Zipcode of the house: </label></td>
                            <td><input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} required /></td>
                        </tr>
                        <button type='submit'>Submit</button>
                    </table>
                </form>


                {prediction && (
                <div>
                    <h3>Prediction: ${prediction}</h3>
                </div>
            )}
                
            </div>
        </>
    )
        */
}

export default Form;
