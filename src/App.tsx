import React from "react";
import "./App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import {
  TextField,
  Grid,
  useMediaQuery,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

function App() {
  const matches = useMediaQuery("(max-width:600px)");
  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });
  return (
    <div className="App">
      <Grid
        container
        display={"flex"}
        direction={"column"}
        width={matches ? "100%" : "45%"}
        gap={2}
      >
        <Grid width={matches ? "100%" : "60%"}>
          <ThemeProvider theme={theme}>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              label="search"
            />
          </ThemeProvider>
        </Grid>
        <PostList>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </PostList>
      </Grid>
    </div>
  );
}

export default App;
