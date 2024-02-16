import React, { useState } from 'react';
import './App.css';
import './otherss.css';
import './fixit.css';

const Spinner = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const ImageClassifier = ({ onPrediction }) => {
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('imagefile', imageFile);

    try {
      const response = await fetch('http://localhost:9006/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to predict image');
      }
      const data = await response.json();
      onPrediction(data.prediction);
    } catch (error) {
      console.error('Error predicting image:', error);
    }
  };

  return (
    <div>
      <h1 className="text-center">Image Classifier</h1>
      <form className="p-3 text-center" onSubmit={handleSubmit} encType="multipart/form-data">
        <input className="form-control" type="file" name="imagefile" onChange={handleImageChange} />
        <input className="btn btn-primary mt-3" type="submit" value="Predict Image" />
      </form>
    </div>
  );
};

function Labguide() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner

  const handleImagePrediction = (prediction) => {
    setPrompt(`${prediction}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when fetching data
    try {
      const response = await fetch('http://localhost:9005/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });
      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false); // Set loading state to false after fetching data
  };

  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <div className="otherss">
              <center>
                <ImageClassifier onPrediction={handleImagePrediction} />
                <h1>You can change the input if you want here: </h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <label>
                    Prompt: <t> </t>
                    <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                  </label>
                  <button type="submit">Generate</button>
                </form>
                <center>
                  <div className="response-box">
                  {isLoading && <Spinner />} {/* Conditionally render spinner */}
                    {output && <div className="response">{output}</div>}
                  </div>
                </center>
              </center>
            </div>
            <div className='containerr'>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Start from your surroundings!
            </h1>
            <p className="lead">
              Look around you, you have a lots of broken or unused items. Well one way is to throw that, but you can even recycle that too! How you may ask? Just upload your broken item and we'll give you the steps!
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom" style= {{fontSize: '30px'}}>How is that done?</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#collection" />
              </svg>
            </div>
            <h2>Step 1</h2>
            <p>
              <b>
                Firstly the image is taken and converted into a file like image and loaded to store in the form of an array.</b>
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#people-circle" />
              </svg>
            </div>
            <h2>Step 2</h2>
            <p>
              <b>
                The output/prediction is then directly feeded into the chatbot as a prompt but with a variation which uses OPENAI's api.
              </b>
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#toggles2" />
              </svg>
            </div>
            <h2>Step 3</h2>
            <p>
              <b>
                Finally through API endpoint the output is displayed in the form of text.
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Labguide;
