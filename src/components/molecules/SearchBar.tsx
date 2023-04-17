import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  inputValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  error: unknown;
  label: string;
  placeholder?: string;
  helperTxt?: string;
}

function SearchBar({
  inputValue,
  onInputChange,
  onSearch,
  error,
  label,
  placeholder,
  helperTxt,
}: SearchBarProps) {
  const theme = useTheme();

  return (
    <TextField
      label={label}
      variant="outlined"
      value={inputValue}
      size="small"
      onChange={onInputChange}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onSearch();
        }
      }}
      placeholder={placeholder}
      InputProps={{
        style: {
          padding: 0,
        },
        endAdornment: (
          <div
            style={{
              display: "flex",
              margin: 0,
              alignItems: "center",
              backgroundColor: error ? "red" : theme.palette.primary.main,
              color: "white",
              borderRadius: 4,
              height: "100%",
              padding: "8px",
            }}
          >
            <Button
              style={{
                backgroundColor: error ? "red" : theme.palette.primary.main,
                color: "white",
                borderRadius: 4,
                padding: 2,
              }}
              onClick={(e) => {
                e.preventDefault();
                onSearch();
              }}
              disabled={
                inputValue.trim() === "" || !inputValue || inputValue === ""
              }
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </div>
        ),
      }}
      error={error ? true : false}
      helperText={error ? helperTxt : null}
    />
  );
}

export default SearchBar;
