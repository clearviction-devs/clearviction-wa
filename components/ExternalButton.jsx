import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button } from "@mui/material";

export default function ExternalButton({ href, label, ...props }) {
  return (
    <Button
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      endIcon={<OpenInNewIcon />}
      {...props}
    >
      {label}
    </Button>
  );
}
