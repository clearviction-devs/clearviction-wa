// @description - see example in get-involved benefits of joining us section
import {
  Avatar, Box, ListItem, ListItemAvatar, ListItemText,
} from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

interface BenefitItemProps {
  id: number;
  title: string;
  leftOffset: number;
  rightOffset: number;
}

interface BenefitBoxProps {
  leftoffset: number; // custom DOM elements must be all lowercase
  rightoffset: number;
}

const BenefitBox = styled(Box)<BenefitBoxProps>(({ leftoffset, rightoffset, theme }) => ({
  paddingLeft: `${leftoffset}rem`,
  paddingRight: `${rightoffset}rem`,
  paddingBottom: theme.spacing(3),
  height: '3.5rem',
  [theme.breakpoints.down('sm')]: {
    height: '4.75rem',
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const BenefitListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '90%',
  height: '100%',
  paddingTop: 0,
  paddingBottom: 0,
  background: 'linear-gradient(to right, #546B95 70%, rgba(217, 217, 217, 0) 100%)',
  borderRadius: 15.50,
}));

const ItemNumber = styled(Avatar)(() => ({
  fontSize: '1.4rem',
  width: '1.875rem',
  height: '1.875rem',
  backgroundColor: 'transparent',
  color: 'white',
  border: '0.125rem solid white',
}));

export default function BenefitItem({
  id, title, leftOffset, rightOffset,
}: BenefitItemProps) {
  return (
    <BenefitBox leftoffset={leftOffset} rightoffset={rightOffset}>
      <BenefitListItem>
        <ListItemAvatar sx={{ minWidth: 'auto', mr: 0.5, ml: -1 }}>
          <ItemNumber>
            {id}
          </ItemNumber>
        </ListItemAvatar>
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            fontSize: { sm: '1rem', md: '1.25rem' },
          }}
        />
      </BenefitListItem>
    </BenefitBox>
  );
}
