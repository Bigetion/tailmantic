import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout.jsx';
import ComponentPageRoute from './pages/ComponentPageRoute.jsx';
import ComponentsPage from './pages/ComponentsPage.jsx';
import HomePage from './pages/HomePage.jsx';
import InstallationPage from './pages/InstallationPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import ThemingPage from './pages/ThemingPage.jsx';
import UsagePage from './pages/UsagePage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="getting-started/installation" element={<InstallationPage />} />
          <Route path="getting-started/usage" element={<UsagePage />} />
          <Route path="customization/theming" element={<ThemingPage />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="components/:slug" element={<ComponentPageRoute />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
