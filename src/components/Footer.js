import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <img src={Logo} alt="logo" width="200px" heigth="40px" />
      </Stack>
      <Typography fontSize="15px" mt="20px" textAlign="center" pb="20px">
        This website was developed by Rubem Puttini in thanks of JavaScript
        Mastery's tutorial
      </Typography>
    </Box>
  );
};

export default Footer;
