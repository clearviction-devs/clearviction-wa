import { Box, Button, Paper, Typography } from "@mui/material";
import { flexbox } from "@mui/system";

export default function ImageContentCard({
  content,
  buttonText,
  buttonHref,
  image
}){

  return (
    <Box padding={1}>
      <Paper
        style={{
          height: 460,
          minWidth: 280,
          maxWidth: 324,
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "312px 700px",
          backgroundPosition: "40-60%",
        }}
      >
        <Typography style={{padding: 34}}>
          {content}
        </Typography>

        <Box style={{ marginTop: 64, display: "flex", justifyContent: "center", width: "100%"}}>
          <Button
            sx={{ margin: "30px auto 50px", minWidth: "240px" }}
            variant="contained"
            href={buttonHref}
          >
            {buttonText}
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

