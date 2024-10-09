// src/pages/PreTrained.jsx
function PreTrained() {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-blue-50">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">Pre-Trained Models</h2>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            Load Dataset
          </button>
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            Generate Dataset
          </button>
        </div>
      </div>
    );
  }
  
  export default PreTrained;
  