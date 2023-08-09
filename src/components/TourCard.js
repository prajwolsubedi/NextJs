import React from "react";
import {
  Paper,
  Box,
  Button,
  IconButton,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Avatar,
  Container,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TourCar = () => {
  return (
    <Box>
      <Paper elevation={3} variant="elevation">
        Tour Card
      </Paper>
      <Button
        variant="outlined"
        endIcon={<DeleteIcon />}
        sx={{ marginTop: "10px" }}
      >
        Click Here
      </Button>
      <Box sx={{ marginTop: "20px" }}>
        Adding icons in mui
        <IconButton arial-label="delete" color="success" size="small">
          <DeleteIcon />
        </IconButton>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        Radio Group
        <br />
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup aria-label="choose-your-gender" defaultValue="male">
            <FormControlLabel value="male" control={<Radio />} label="male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="female"
            />
            <FormControlLabel
              value="others"
              control={<Radio />}
              label="others"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        Avatar
        <Avatar alt="elon" src="/images/elon.png" ></Avatar>
      </Box>
      <Container fixed sx={{border: '2px solid black'}}>
        <Typography>K xa halkhabar bro</Typography>
      </Container>

      
    </Box>
  );
};

export default TourCar;
