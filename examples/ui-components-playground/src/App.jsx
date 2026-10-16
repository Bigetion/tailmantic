import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout.jsx';
import ComponentPlaygroundPage from './pages/ComponentPlaygroundPage.jsx';
import HomePage from './pages/HomePage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="components/:slug" element={<ComponentPlaygroundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
