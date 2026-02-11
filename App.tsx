
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { WeekView } from './pages/WeekView';
import { DayView } from './pages/DayView';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/week/:weekId" element={<WeekView />} />
          <Route path="/week/:weekId/day/:dayName" element={<DayView />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
