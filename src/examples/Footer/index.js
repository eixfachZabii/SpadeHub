/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Footer() {
  return (
    <VuiBox
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      direction="row"
      component="footer"
      py={2}
      pb={0}
    >
      <VuiBox item xs={12} sx={{ textAlign: "center" }}>
        <VuiTypography
          variant="button"
          sx={{ textAlign: "center", fontWeight: "400 !important" }}
          color="white"
        >
          @ 2024, SPADE ♠️️ &nbsp;&nbsp;&nbsp; by{" "}
          <VuiTypography
            component="a"
            variant="button"
            href="https://github.com/lucabzt"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
            mr="2px"
          >
            Luca
          </VuiTypography>
          &
          <VuiTypography
            ml="2px"
            mr="2px"
            component="a"
            variant="button"
            href="https://github.com/eixfachZabii"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
          >
            Sebastian
          </VuiTypography>
          &
          <VuiTypography
            ml="2px"
            mr="2px"
            component="a"
            variant="button"
            href="https://github.com/M4RKUS28"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
          >
            Markus
          </VuiTypography>
          &
          <VuiTypography
            ml="2px"
            mr="2px"
            component="a"
            variant="button"
            href="https://github.com/paulvorderbruegge"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
          >
            Paul
          </VuiTypography>
          &
          <VuiTypography
            ml="2px"
            mr="2px"
            component="a"
            variant="button"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
          >
            Jonas
          </VuiTypography>
          &
          <VuiTypography
            ml="2px"
            mr="2px"
            component="a"
            variant="button"
            href="https://github.com/Maths24"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
          >
            Matthias
          </VuiTypography>
        </VuiTypography>
      </VuiBox>
      <VuiBox item xs={10}>
        <VuiBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
          <VuiBox mr={{ xs: "20px", lg: "46px" }}>
            <VuiTypography
              component="a"
              href="https://www.creative-tim.com/templates"
              variant="body2"
              color="white"
            >
              GitHub
            </VuiTypography>
          </VuiBox>
          <VuiBox>
            <VuiTypography
              component="a"
              href="https://github.com/eixfachZabii/Spade?tab=MIT-1-ov-file"
              variant="body2"
              color="white"
            >
              License
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </VuiBox>
  );
}

export default Footer;
