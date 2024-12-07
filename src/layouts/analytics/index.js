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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import LineChart from "examples/Charts/LineCharts/LineChart";

// Data
import { lineChartDataDashboard } from "layouts/analytics/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/analytics/data/lineChartOptions";
import authorsTableData from "layouts/analytics/data/authorsTableData";

function AnalyticsDashboard() {
  const { columns, rows } = authorsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        {/* Line Chart Section */}
        <VuiBox mb={3}>
          <Card>
            <VuiBox p={3}>
              <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                Game Stats
              </VuiTypography>
              <VuiBox sx={{ height: "310px" }}>
                <LineChart
                  lineChartData={lineChartDataDashboard}
                  lineChartOptions={lineChartOptionsDashboard}
                />
              </VuiBox>
            </VuiBox>
          </Card>
        </VuiBox>

        {/* Authors Table Section */}
        <VuiBox mb={3}>
          <Card>
            <VuiBox p={3}>
              <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                Players
              </VuiTypography>
            </VuiBox>
            <VuiBox
              sx={{
                "& th": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                      `${borderWidth[1]} solid ${grey[700]}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </VuiBox>
          </Card>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AnalyticsDashboard;
