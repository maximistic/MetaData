// src/pages/Train.jsx
function Train() {
    return (
      <div className="h-screen flex items-center justify-center bg-blue-50">
        <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Train a Model</h2>
  
          <label className="block mb-2">Dataset Type:</label>
          <input
            type="text"
            placeholder="Dataset Type"
            className="mb-4 w-full p-2 border rounded-lg"
          />
  
          <label className="block mb-2">Dataset Size:</label>
          <input
            type="number"
            placeholder="Dataset Size"
            className="mb-4 w-full p-2 border rounded-lg"
          />
  
          <label className="block mb-2">ML Model:</label>
          <input
            type="text"
            placeholder="ML Model"
            className="mb-4 w-full p-2 border rounded-lg"
          />
  
          <label className="block mb-2">Target Variable:</label>
          <input
            type="text"
            placeholder="Target Variable"
            className="mb-4 w-full p-2 border rounded-lg"
          />
  
          <label className="block mb-2">Number of Features:</label>
          <input
            type="number"
            placeholder="Number of Features"
            className="mb-4 w-full p-2 border rounded-lg"
          />
  
          <label className="block mb-2">Correlation Type:</label>
          <input
            type="text"
            placeholder="Correlation Type"
            className="mb-4 w-full p-2 border rounded-lg"
          />
  
          <label className="block mb-2">Data Normalization:</label>
          <input
            type="text"
            placeholder="Data Normalization"
            className="mb-4 w-full p-2 border rounded-lg"
          />
  
          <label className="block mb-2">Missing Data Percentage:</label>
          <input
            type="number"
            placeholder="Missing Data Percentage"
            className="mb-4 w-full p-2 border rounded-lg"
          />
  
          <label className="block mb-2">Missing Data Pattern:</label>
          <input
            type="text"
            placeholder="Missing Data Pattern"
            className="mb-4 w-full p-2 border rounded-lg"
          />
  
          <label className="block mb-2">Output Format:</label>
          <input
            type="text"
            placeholder="Output Format"
            className="mb-4 w-full p-2 border rounded-lg"
          />
  
          <label className="block mb-2">Random Seed:</label>
          <input
            type="number"
            placeholder="Random Seed"
            className="mb-4 w-full p-2 border rounded-lg"
          />
  
          <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  export default Train;  