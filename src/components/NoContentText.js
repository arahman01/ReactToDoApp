import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const NoContentText = (props) => {
  return (
    <Box textAlign="center" mt={10}>
      <Box display="inline-block" bgcolor="#f54787" p={2} borderRadius={5}>
        <Typography variant="h5" sx={{ color: "white" }}>
          No data in this section
        </Typography>
      </Box>
    </Box>
  );
};

export default NoContentText;
