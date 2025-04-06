import React, { useState } from 'react';
import axios from 'axios';

function Input() {
  const [input, setInput] = useState({
    input: ""
  });
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChangeHandle = (event) => {
    setInput({ input: event.target.value }); 
    console.log(input);
  };

  const onSubmitHandler = async () => {
    if (!input.input) {
      console.log('Input is empty. Please provide a valid input.');
      return;
    }

    try {
      setLoading(true); // start loading

      const response = await axios.post(
        'https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev',
        { inputs: input.input },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_HF_TOKEN}`,

          },
          responseType: 'blob',
        }
      );

      const blobData = await response.data;
      const imageURL = URL.createObjectURL(blobData);
      console.log('✅ Image URL:', imageURL);
      setImageURL(imageURL);
    } catch (err) {
      console.log('Some error occurred: ', err.response ? err.response.data : err);
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-8">
      <div className="flex gap-4 bg-white p-6 rounded-2xl shadow-lg">
        <input
          type="text"
          placeholder="Enter prompt"
          className="px-4 py-2 w-64 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onChangeHandle}
        />
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          onClick={onSubmitHandler}
        >
          Generate
        </button>
      </div>
      {
        loading && (
            <p className="text-gray-700 text-lg font-semibold">⏳ Generating image...</p>
          )
      }

      {imageURL && !loading && (
        <div className="mt-6">
          <img
            src={imageURL}
            alt="Generated"
            className="rounded-xl shadow-lg max-w-md"
          />
        </div>
      )}
    </div>
  );
}

export default Input;
