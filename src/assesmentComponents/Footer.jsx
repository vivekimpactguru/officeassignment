import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import YouTubeIcon from "@mui/icons-material/YouTube";

const CustomSection = styled("section")(() => ({
  padding: "50px",
  backgroundColor: "#1f3547",
}));

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <CustomSection>
      <Container>
        <Grid container spacing={4}>
          <Grid item lg={3}>
            <Stack spacing={10} alignItems={isMobile && "center"}>
              <img
                src="https://jobs.lgresources.com/hubfs/logo.svg"
                alt="logo"
              />
              <Stack direction="row">
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    marginRight: "10px",
                  }}
                >
                  {/* <FacebookIcon sx={{ color: "#fff" }} /> */}
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                  }}
                >
                  {/* <YouTubeIcon sx={{ color: "#fff" }} /> */}
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid item lg={3}>
            <Stack>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ marginBottom: "20px", color: "#fff" }}
                >
                  SALT LAKE
                </Typography>
                <Typography sx={{ marginBottom: "20px", color: "#fff" }}>
                  2250 S Redwood Rd. Ste 1 West Valley, UT 84119 801-973-6755
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ marginBottom: "20px", color: "#fff" }}
                >
                  ROY OFFICE
                </Typography>
                <Typography sx={{ color: "#fff" }}>
                  1952 W. 5600 S. Ste. 4 Roy Utah 84067 801-399-4473
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item lg={3}>
            <Box>
              <Typography
                variant="h6"
                sx={{ marginBottom: "20px", color: "#fff" }}
              >
                PROVO OFFICE
              </Typography>
              <Typography sx={{ color: "#fff" }}>
                363 N. University Ave, Suite 101 Provo, Utah 84601 801-900-4726
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Stack alignItems="center" spacing={2}>
              <Typography sx={{ color: "#fff" }}>About Us</Typography>
              <Typography sx={{ color: "#fff" }}>LG Gives Back</Typography>
              <Typography sx={{ color: "#fff" }}>Privacy Policy</Typography>
              <Typography sx={{ color: "#fff" }}>Contact Us</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: "#fff", marginTop: "40px" }} />
        <Typography
          variant="h6"
          sx={{ color: "#fff", marginTop: "30px", textAlign: "center" }}
        >
          © Copyright 2023 | Logistics Giving Resources, All Rights Reserved. |
          Utah Jobs | Utah Staffing | Utah Employment
        </Typography>
      </Container>
    </CustomSection>
  );
}

export default Footer;
