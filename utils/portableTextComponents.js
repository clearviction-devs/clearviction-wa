import { Link } from "@mui/material";

export const portableTextComponent = {
  marks: {
    link: ({ children, value }) => {
      return <Link href={value.href}>{children}</Link>;
    },
  },
};
