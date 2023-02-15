import { Box } from "@mui/material";

// making this a component incase we want to add the donation form anywhere else
export default function DonationForm() {
  return (
    <Box
      sx={{
        margin: -13,
      }}
    >
      <script src="https://donorbox.org/widget.js" defer></script>
      <iframe
        src="https://donorbox.org/embed/clearviction"
        name="donorbox"
        frameBorder="0"
        scrolling="no"
        height="900px"
        width="100%"
        style={{
          maxWidth: "500px",
          minWidth: "250px",
          maxHeight: "none!important",
          borderWidth: "0px",
        }}
      ></iframe>
    </Box>
  );
}
