import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

// eslint-disable-next-line import/prefer-default-export

// const renderHeading = (level: number, children:any) => (
//   <Typography variant={`h${level}`} style={{ marginTop: '2rem', marginBottom: '1rem' }}>
//     {children}
//   </Typography>
// );

const portableTextComponent = {
  types: {
    block: (props:any) => {
      const { node, children } = props;
      // Handle 'li' blocks with margin-botom
      if (node.style === 'li') {
        return (
          <li style={{ marginBottom: '1rem' }}>{children}</li>
        );
      }
      switch (node.style) {
        case 'h1':
          return <Typography variant="h1" style={{ marginTop: '2rem', marginBottom: '1rem' }}>{props.children}</Typography>;
        case 'h2':
          return <Typography variant="h2" style={{ marginBottom: '1rem' }}>{props.children}</Typography>;
        case 'h3':
          return <Typography variant="h3" style={{ marginBottom: '1rem' }}>{props.children}</Typography>;
        case 'h4':
          return <Typography variant="h4" style={{ marginBottom: '1rem' }}>{props.children}</Typography>;
        case 'h5':
          return <Typography variant="h5" style={{ marginBottom: '1rem' }}>{props.children}</Typography>;
        case 'h6':
          return <Typography variant="h6" style={{ marginBottom: '1rem' }}>{props.children}</Typography>;
        case 'listItem':
          return <Typography variant="body2" style={{ marginBottom: '1rem' }}>{props.children}</Typography>;
        case 'listTitle':
          return <Typography variant="body2" style={{ marginTop: '1.5rem' }}>{props.children}</Typography>;
        case 'normal':
          return <Typography variant="body2" style={{ marginBottom: '1rem' }}>{props.children}</Typography>;
        // Add cases for other styles if needed
        default:
          return <Typography variant="body2" style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{props.children}</Typography>;
      }
    },
  },
  marks: {
    link: ({ children, mark }: any) => {
      if (!mark || typeof mark.href === 'undefined') {
        return children;
      }
      return <Link className="custom-calc-link-style" href={mark.href} role="link" target={mark.blank ? '_blank' : '_self'} rel="noopener no referrer" style={{ color: '#1044FE' }}>{children}</Link>;
    },
  },
  annotations: [
    {
      name: 'link',
      type: 'object',
      title: 'URL',
      fields: [
        {
          title: 'URL',
          name: 'href',
          type: 'url',
        },
      ],
    },
  ],
};

export default portableTextComponent;
