import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainRoutes from './routes/MainRoutes';
import ProjectRoutes from './routes/ProjectsRoutes';
function App() {
  return (
   <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<MainRoutes />} />
      <Route path='/projects/*' element={<ProjectRoutes />} />
    </Routes>
   </div>
  );
}

export default App;
