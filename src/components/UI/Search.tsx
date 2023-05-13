import React, { FC } from "react";
import { TextField, Grid, ThemeProvider } from "@mui/material";
import { theme } from "../../styles/theme";

interface Props {
  matches: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Search: FC<Props> = ({ matches, value, setValue }) => {
  return (
    <Grid width={matches ? "100%" : "60%"}>
      <ThemeProvider theme={theme}>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          label="search"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
      </ThemeProvider>
    </Grid>
  );
};

export default Search;
