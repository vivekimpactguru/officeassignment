import React from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Stack,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const CustomSection = styled("section")(() => ({
  padding: "40px 0px",
  paddingBottom: "90px",
  backgroundColor: "#173649",
  marginTop: "0px",
}));

const CustomRightArrow = styled("div")(() => ({
  //   backgroundColor: "#015e7b",
  position: "absolute",
  padding: "5px 10px",
  cursor: "pointer",
  zIndex: "1",
  border: "1px solid white",
  borderRadius: "20%",
  maxHeight: "40px",
  color: "#fff",
  top: "105%",
  right: "4%",
  fontSize: "2rem",
}));

const CustomLeftArrow = styled("div")(() => ({
  //   backgroundColor: "#015e7b",
  border: "1px solid white",
  padding: "5px 10px",
  position: "absolute",
  cursor: "pointer",
  zIndex: "1",
  borderRadius: "20%",
  maxHeight: "40px",
  color: "#fff",
  top: "105%",
  left: "60%",
  fontSize: "2rem",
}));

function NextArrow({ onClick }) {
  return (
    <CustomRightArrow onClick={onClick}>
      <ArrowForwardIosIcon />
    </CustomRightArrow>
  );
}

function PrevArrow({ onClick }) {
  return (
    <CustomLeftArrow onClick={onClick}>
      <ArrowBackIosNewIcon />
    </CustomLeftArrow>
  );
}

function Career() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const setting = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const data = [
    {
      id: 1,
      title:
        "The staff at LG Resources in Camp Hill, Pennsylvania were very patient and helpful with the application process. And the first site they sent me to the Employers hired me the very next day after I toured their facility. Thanks to you all at LG.I am forever grateful for the opportunity. Anyone seeking employment, I would recommend you go to LG RESOURCES STAFFING AGENCY. THANK YOU AND GOD BLESS",
    },
    {
      id: 2,
      title:
        "The staff at LG Resources in Camp Hill, Pennsylvania were very patient and helpful with the application process. And the first site they sent me to the Employers hired me the very next day after I toured their facility. Thanks to you all at LG.I am forever grateful for the opportunity. Anyone seeking employment, I would recommend you go to LG RESOURCES STAFFING AGENCY. THANK YOU AND GOD BLESS",
    },
    {
      id: 3,
      title:
        "The staff at LG Resources in Camp Hill, Pennsylvania were very patient and helpful with the application process. And the first site they sent me to the Employers hired me the very next day after I toured their facility. Thanks to you all at LG.I am forever grateful for the opportunity. Anyone seeking employment, I would recommend you go to LG RESOURCES STAFFING AGENCY. THANK YOU AND GOD BLESS",
    },
  ];

  return (
    <CustomSection>
      <Container>
        <Stack direction={{ xs: "column", sm: "column", lg: "row" }}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              textAlign: isMobile && "center",
              color: "#fff",
              margin: "auto",
            }}
          >
            Looking For a New Career Opportunity? We Can Help.
          </Typography>
          {!isMobile && (
            <Box
              sx={{
                width: "800px",
                position: "relative",
                left: "12%",
                backgroundImage:
                  "url(https://jobs.lgresources.com/hubfs/Group-26730.png)",
                backgroundSize: "contain",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                padding: "10px",
                borderRadius: "20px",
              }}
            />
          )}

          <Box
            sx={{
              width: "320px",
            }}
          >
            <Slider
              {...setting}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay
              autoplaySpeed="1000"
            >
              {data.map((value) => (
                <Box key={value.id}>
                  <Box
                    sx={{
                      //   border: "1px solid black",
                      backgroundColor: "#fff",
                      color: "black",
                      width: "280px",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    <Typography>{value.title}</Typography>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Stack>
      </Container>
    </CustomSection>
  );
}

export default Career;
