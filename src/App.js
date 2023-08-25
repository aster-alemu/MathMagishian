import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Quote from './routes/Quote';
import Calculatorr from './routes/Calculators';
import NotMatch from './routes/NotMatch';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="quote" element={<Quote />} />
        <Route path="calculator" element={<Calculatorr />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}
export default App;
