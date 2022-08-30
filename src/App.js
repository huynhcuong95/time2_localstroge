import logo from './logo.svg';
import './App.css';
import Body from './Body/Index'
import { Typography } from '@mui/material';
function App() {
  return (
    <div className="App">
    <Typography variant="h3" component="h2">
  Nhắc nhở ngày quan trọng của bạn
</Typography>;
      <Body />
    </div>
  );
}

export default App;
