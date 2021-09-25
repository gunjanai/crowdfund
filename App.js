import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Dashboard from './components/Dashboard'
import { Box, Flex, Heading, HStack, VStack, Text } from '@chakra-ui/react'
import LandingPageDescription from './components/LandingPageDescription';


function App() {
  return (
    <div className="App">
      
        <Header />
        <Title />
        <Dashboard />
        <LandingPageDescription />
      
    </div>
  );
}

export default App;
