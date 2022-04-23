import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Feed from "./components/Feed.jsx";
import Rightbat from "./components/Rightbat.jsx";
import Add from "./components/Add.jsx";
import { Box, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material";


function App() {
  //dark Theme not compli
  // const [mode,setMode] = useState("light");
  // const darkTheme = createTheme ({
  //   palette:{
  //     mode:"mode",
  //   },
  // });
  return (

    // <ThemeProvider theme={darkTheme}>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbat />
        </Stack>
        <Add />
      </Box>
    // </ThemeProvider>

  );
}

export default App;