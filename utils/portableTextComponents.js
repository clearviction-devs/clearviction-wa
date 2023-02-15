import { Link } from "@mui/material";

export default {
  marks: {
    link: ({ children, value }) => {
      return <Link href={value.href}>{children}</Link>;
    },
  },
};
