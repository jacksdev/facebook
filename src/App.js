
import styled from 'styled-components';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="app">
      <BodyContainer>
        <Header />
      </BodyContainer>
      
    </div>
  );
}

export default App;


const BodyContainer = styled.div`
  background-color: #d5d6e2;
	display: flex;
  height: 100vh;
  justify-content: center;
`