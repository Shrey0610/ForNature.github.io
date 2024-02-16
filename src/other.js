import React, { useState } from 'react';
import './App.css';
import './otherss.css';


const Spinner = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);



function Otherss() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:9005/chats', {
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
    setIsLoading(false);
  };


  return (
    <div>
  <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <div className="otherss">
          <center>
        <h1>Chatbot</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Prompt: <t> </t>
            <input type="text" value= {prompt} onChange={(e) => setPrompt(e.target.value)} />
          </label>
          <button type="submit">Generate</button>
        </form>
        <center>
        <div className="response-box">
        {isLoading && <Spinner />}
          {output && <div className="response">
          {output}
          
          </div>}
        </div></center>
        </center>
      </div>
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold lh-1 mb-3">
        Articles & Blogs
      </h1>
      <p className="lead">
      If you want references of articles and blogs then just enter the word here (for example enter: 'Plastic' and see what you get!)
      </p>
    </div>
  </div>
</div>
      <div className='containerr'>

    </div>
    </div>
  );
}

export default Otherss;
