import { useState } from 'react';
import './App.css';
import APIForm from './components/APIform';

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const App = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [inputs, setInputs] = useState({
    url: '',
    format: '',
    no_ads: '',
    no_cookie_banners: '',
    width: '',
    height: '',
  });

  const submitForm = () => {
    if (!inputs.url) {
      alert('You forgot to submit a URL!');
      return;
    }

    const defaultValues = {
      format: 'jpeg',
      no_ads: 'true',
      no_cookie_banners: 'true',
      width: '1920',
      height: '1080',
    };

    // Correctly update state without mutating inputs directly
    setInputs((prevInputs) => ({
      ...defaultValues,
      ...Object.fromEntries(
        Object.entries(prevInputs).map(([key, value]) => [key, value || defaultValues[key]])
      ),
    }));

    makeQuery();
  };

  const callAPI = async (query) => {
    try {
      const response = await fetch(query);
      const data = await response.json();

      if (data.url == " " || data.url == "  ") {
        alert("Oops! Something went wrong with that query, let's try again!");
      } else {
        setCurrentImage(data.url);
        reset();
      }
    } catch (error) {
      console.error('API call failed:', error);
      alert('Failed to fetch image. Please try again.');
    }
  };

  const makeQuery = () => {
    const wait_until = 'network_idle';
    const response_type = 'json';
    const fail_on_status = '400%2C404%2C500-511';
    const fullURL = `https://${inputs.url}`;

    const query = `https://api.apiflash.com/v1/urltoimage?access_key=${ACCESS_KEY}&url=${fullURL}&format=${inputs.format}&width=${inputs.width}&height=${inputs.height}&no_cookie_banners=${inputs.no_cookie_banners}&no_ads=${inputs.no_ads}&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}`;

    callAPI(query);
  };

  const reset = () => {
    setInputs({
      url: '',
      format: '',
      no_ads: '',
      no_cookie_banners: '',
      width: '',
      height: '',
    });
  };

  return (
    <div className="whole-page">
      <h1>Build Your Own Screenshot! 📸</h1>

      <APIForm
        inputs={inputs}
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.trim(),
          }))
        }
        onSubmit={submitForm}
      />

      {currentImage && (
        <img className="screenshot" src={currentImage} alt="Screenshot returned" />
      )}

      <div className="container">
        <h3>Current Query Status:</h3>
        <p>
          https://api.apiflash.com/v1/urltoimage?access_key=ACCESS_KEY
          <br />
          &url={inputs.url} <br />
          &format={inputs.format} <br />
          &width={inputs.width} <br />
          &height={inputs.height} <br />
          &no_cookie_banners={inputs.no_cookie_banners} <br />
          &no_ads={inputs.no_ads} <br />
        </p>
      </div>
    </div>
  );
};

export default App;
