/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master/LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import { Card, Button } from "@mui/material";
import { useState } from "react";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Poker() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      {isFullscreen ? (
        <VuiBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.9)", // Fullscreen dark background
          }}
        >
          <Card
            sx={{
              width: "90%",
              height: "90%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Button
              onClick={toggleFullscreen}
              variant="contained"
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "#ff5252",
              }}
            >
              Exit Fullscreen
            </Button>
            <VuiTypography variant="h4" color="white" textAlign="center">
              Poker Embed Placeholder
            </VuiTypography>
          </Card>
        </VuiBox>
      ) : (
        <DashboardLayout>
          <DashboardNavbar />
          <VuiBox py={3} display="flex" justifyContent="center" alignItems="center">
            <Card
              sx={{
                width: "100%",
                maxWidth: "1250px", // Matches Analytics card max-width
                minHeight: "600px", // Matches Analytics card minHeight
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Button
                onClick={toggleFullscreen}
                variant="contained"
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "#00bcd4",
                }}
              >
                Enter Fullscreen
              </Button>
              <VuiTypography variant="h4" color="white" textAlign="center">
                Poker Embed Placeholder
              </VuiTypography>
            </Card>
          </VuiBox>
          <Footer />
        </DashboardLayout>
      )}
    </div>
  );
}

export default Poker;

