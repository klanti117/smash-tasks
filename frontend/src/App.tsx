import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import axios from "axios";

function App() {
  const handleClick = async () => {
    const response = await axios.get("http://localhost:3030");
    console.log("RESPONSE => " + response.data);
  };
  return (
    <ChakraProvider>
      <Box>Hi from FE</Box>
      <Button colorScheme="green" onClick={handleClick}>
        Click me
      </Button>
    </ChakraProvider>
  );
}

export default App;
