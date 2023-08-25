import Numbers from '../components/Calculator';
import Headings from './Heading';
import '../App.css';

const Calculator = () => (
  <div className="linkContent">
    <div>
      <Headings />
      <h3>
        lets do some maths
      </h3>
    </div>
    <Numbers />
  </div>
);
export default Calculator;
