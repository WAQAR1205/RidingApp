import React from "react";
import { NativeBaseProvider, Box , Button } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
      <Button>CLICK ME</Button>
    </NativeBaseProvider>
  );
}