// Import necessary components
import React from 'react';
import App2 from './App2';
import PersonalizedLearningPlatform from './PathForge';
import Login from './login';
import ChatApp from './state'
import Multilingo from './multilingo';
import Otherss from './other';
import Labguide from './labguide';


import About from './about';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const imagePath2 = '/Screenshot 2024-02-15 at 22.00.50.png';

// Navbar component
function Navbar() {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <center />
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src={imagePath2} className="logo" alt="..." /></a>
        <div className="scrollmenu" style={{ Align: "center" }}>

          {/* <Link to="/eduhub">EduHub</Link> */}
          {/* <Link to="/multilingo">MultiLingo</Link> */}
          <Link to="/fixit">Fix It!</Link>
          <Link to="/other">Learn Something</Link>
          <Link to="/about">Future Scope</Link>
          {/* <Link to="/Login">Login/SignUp</Link> */}
        </div>
        <button style={{ backgroundColor: "black", borderColor: "black" }}
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <span className="navbar-toggler-icon" style={{ backgroundColor: "black" }}></span>
        </button>
        {/* Offcanvas content */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <h1 style= {{fontSize: '50px', margin: '10px', paddingTop: '5px'} }>
            Coming soon...
              <input type="text" style={{fontSize: '20px'}} placeholder='search'/>
          </h1>
         
          {/* ... your offcanvas content */}
        </div>
      </div>
    </nav>
  );
}

function Footer(){
  return(
    <center>
<footer className="text-gray-600 body-font" id="foot-5" style= {{backgroundColor: '#f9eded97'}}>
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
				<a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
				  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
					<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
				  </svg>
				  <span class="ml-3 text-xl">Tailblocks</span>
				</a>
				<p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
			  </div> */}
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4" id="foot-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              List of features
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">FixIt</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Learn Something</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Future Scope</a>
              </li>

            </nav>
          </div>
          
          <div className="lg:w-1/4 md:w-1/2 w-full px-4" id="foot-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              HELP
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">FAQ</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Cookies</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4" id="foot-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Address
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Bharat
                </a>
              </li>
            </nav>
          </div>
          {/* <div class="lg:w-1/4 md:w-1/2 w-full px-4">
				  <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
				  <nav class="list-none mb-10">
					<li>
					  <a class="text-gray-600 hover:text-gray-800">First Link</a>
					</li>
					<li>
					  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
					</li>
					<li>
					  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
					</li>
					<li>
					  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
					</li>
				  </nav>
				</div> */}
        </div>
      </div>
      <div className="bg-gray-100"  style= {{backgroundColor: '#f9eded97'}}>
        <div className="container mx-0 py-4 px-0 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Copyright © 2023 ForNature. All rights reserved
            {/* <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a> */}
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start" >
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="non+6e" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
    </center>
  );
}

// App component
class App extends React.Component {
  // ... your existing code

  render() {
    return (
      <Router>
        <Navbar />
        <div className="header2" style={{ height: 2 }}></div>
        <Routes>
          <Route path="/" element={<App2 />} />

          <Route path="/PathForge" element={<PersonalizedLearningPlatform />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/other" element={<Otherss />} />
          <Route path="/eduhub" element={<ChatApp />} />
          <Route path="/multilingo" element={<Multilingo />} />
          <Route path="/fixit" element={<Labguide />} />
        </Routes>
        <Footer />
      </Router>

    );
  }
}

export default App;
