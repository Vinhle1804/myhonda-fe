"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// Định nghĩa các type cho props
interface BasicTextFieldsProps {
  label: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  sx?: object;
}

export default function BasicTextFields({
  label,
  type = "text",
  value,
  name,
  onChange,
  required,
  error,
  helperText,
  sx,
}: BasicTextFieldsProps) {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        ...sx,
      }}
    >
      <TextField
        label={label}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        error={error}
        helperText={helperText}
        fullWidth
      />
    </Box>
  );
}
