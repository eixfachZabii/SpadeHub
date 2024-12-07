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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboard/components/ReferralTracking";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";

// Placeholder for the Poker section
const PokerPlaceholder = () => (
  <Card
    sx={{
      width: "100%",
      height: "1050px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}
  >
    <VuiTypography variant="h4" color="white" textAlign="center">
      Poker Placeholder
    </VuiTypography>
  </Card>
);

// Placeholder for the Spotify section
const SpotifyPlaceholder = () => (
  <Card
    sx={{
      width: "100%", // Use full width for Spotify on left
      height: "65.5%", // Set height to match Poker Placeholder
      backgroundColor: "rgba(30, 215, 96, 0.1)", // Spotify-like color
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}
  >
    <VuiTypography variant="h4" color="white" textAlign="center">
      Spotify Placeholder
    </VuiTypography>
  </Card>
);

function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing="18px">
            {/* Left side - 1/5 for Welcome and Spotify placeholders */}
            <Grid item xs={12} lg={2} xl={2}>
              <VuiBox mb={3}>
                <WelcomeMark /> {/* Welcome message */}
              </VuiBox>
              <SpotifyPlaceholder /> {/* Spotify Placeholder */}
            </Grid>

            {/* Right side - 4/5 for Poker Placeholder */}
            <Grid item xs={12} lg={10} xl={10}>
              <PokerPlaceholder /> {/* Poker Placeholder */}
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}


export default Dashboard;
