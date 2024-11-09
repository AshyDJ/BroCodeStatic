import React, { useState } from 'react';
import './styles.css'

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
    const [prediction, setPrediction] = useState(null);
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

        const response = await fetch('https://brocode-r7j5.onrender.com/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            
        });

        if (response.ok) {
            console.log('RECIEVED INFO');
            // Clear form fields after submission
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
        } else {
            console.log(response.status);
        }


        const data = await response.json();
        if (data.prediction) {
            setPrediction(data.prediction);  // Display prediction
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
            <img 
            src="data:image/png;base64,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"
            alt="logo" className="logo" />
            <div className="row">
              <div className="col predictLeftcol">
                <br />
                <br />
                <br />
                <br />
                <br />
                <img src="" alt="chossing-img" />
                {prediction && (
                <div>
                    <h3>Prediction: ${prediction}</h3>
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
                      Find Price of house
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
