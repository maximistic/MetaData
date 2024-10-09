// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        What do you want to work on today?
      </h1>
      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/train')}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Train a Model
        </button>
        <button
          onClick={() => navigate('/pre-trained')}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Use Pre-Trained Model
        </button>
      </div>
    </div>
  );
}

export default Home;