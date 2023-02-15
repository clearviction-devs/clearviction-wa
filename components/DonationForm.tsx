import { Box } from "@mui/material";

// making this a component incase we want to add the donation form anywhere else
export default function DonationForm() {
  return (
    <Box
      sx={{
        margin: -13,
      }}
    >
      <script
        src="https://donorbox.org/widget.js"
        paypalExpress="false"
        defer
      ></script>
      <iframe
        src="https://donorbox.org/embed/clearviction"
        name="donorbox"
        allowpaymentrequest="allowpaymentrequest"
        seamless="seamless"
        frameBorder="0"
        scrolling="no"
        height="900px"
        width="100%"
        style={{
          maxWidth: "500px",
          minWidth: "250px",
          maxHeight: "none!important",
        }}
      ></iframe>
    </Box>
  );
}
