import * as React from "react";
import {
  Modal as MuiModal,
  Button,
  Typography,
  Box,
  useTheme,
  Fab,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

export default function Modal({ open, onClose, children }) {
  const theme = useTheme();
  return (
    <div>
      <MuiModal open={open} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            [theme.breakpoints.down("sm")]: {
              maxHeight: "100vh",
              width: "100%",
            },
            [theme.breakpoints.up("md")]: {
              maxHeight: "90vh", // Set the maximum height for scrolling
              width: "80%",
            },
            bgcolor: "#1e1e1e",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            overflow: "auto", // Make the content scrollable
          }}
        >
          {children}
          <Box
            sx={{
              "& > :not(style)": { m: 1 },
              mt: 2,
            }}
          >
            <Fab
              color="primary"
              variant="extended"
              onClick={onClose}
              aria-label="close"
            >
              Close<span> </span>
              <CloseIcon sx={{ fontSize: 20 }} />
            </Fab>
          </Box>
        </Box>
      </MuiModal>
    </div>
  );
}
