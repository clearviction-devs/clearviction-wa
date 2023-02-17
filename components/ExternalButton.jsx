import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button } from "@mui/material";

export default function ExternalButton({ href, children, ...props }) {
  return (
    <Button
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      endIcon={<OpenInNewIcon />}
      {...props}
    >
      {children}
    </Button>
  );
}
