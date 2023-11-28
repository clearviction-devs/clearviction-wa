import { Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext } from 'react';

import { PageContext } from '../components/helper/PageContext.tsx';

// eslint-disable-next-line import/prefer-default-export

// const renderHeading = (level: number, children:any) => (
//   <Typography variant={`h${level}`} style={{ marginTop: '2rem', marginBottom: '1rem' }}>
//     {children}
//   </Typography>
// );
function BlockTypeComponent(props:any) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { node, children } = props;

  const { isFinalPage } = useContext(PageContext);

  if (node.style === 'li') {
    const isOrderedList = node.listItem !== 'bullet'; // Check if it's an ordered list
    const liStyle = isOrderedList ? { textDecoration: 'none' } : {};
    return (
      <Typography style={{ marginBottom: isSmallScreen ? '1rem' : '0', ...liStyle }}>{children}</Typography>
    );
  }
  switch (node.style) {
    case 'h1':
      return <Typography variant="h4" style={{ marginTop: '2rem', marginBottom: '1rem', lineHeight: '1.5rem' }}>{children}</Typography>;
    case 'h2':
      return <Typography variant="h2" style={{ marginTop: '2rem', marginBottom: '1rem' }}>{children}</Typography>;
    case 'h3':
      return <Typography variant="h3" style={{ marginTop: '2rem', marginBottom: '1rem' }}>{children}</Typography>;
    case 'h4':
      return <Typography variant="h4" style={{ marginTop: '2rem', lineHeight: '2.5rem', marginBottom: '1rem' }}>{children}</Typography>;
    case 'h5':
      return <Typography variant="h5" style={{ marginTop: '2rem', marginBottom: '1rem' }}>{children}</Typography>;
    case 'h6':
      return <Typography variant="h6" style={{ fontSize: '0.875rem', fontWeight: '700', lineHeight: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>{children}</Typography>;
    case 'li':
      return <Typography variant="body1" style={{ color: 'red', marginBottom: '1rem' }}>{children}</Typography>;
    case 'listTitle':
      return <Typography variant="body2" style={{ marginTop: '1.5rem' }}>{children}</Typography>;
    case 'normal':
      return <Typography className="typographyDynamic" variant="body1" style={{ marginTop: '1rem', lineHeight: '1.75rem' }}>{children}</Typography>;
    // Add cases for other styles if needed
    default:
      return <Typography variant="body1" style={{ marginTop: ' 1rem ', marginBottom: '0', fontSize: '1.5rem' }}>{children}</Typography>;
  }
}

const portableTextComponent = {

  types: {
    block: BlockTypeComponent,
  },
  marks: {
    link: ({ children, mark }: any) => {
      const { isFinalPage } = useContext(PageContext);
      if (!mark || typeof mark.href === 'undefined') {
        return children;
      }
      const linkStyle = isFinalPage ? { color: '#1044FE' } : { color: 'palette.primary.main' };
      return <Link className="custom-calc-link-style" href={mark.href} role="link" target={mark.blank ? '_blank' : '_self'} rel="noopener no referrer" style={linkStyle}>{children}</Link>;
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
