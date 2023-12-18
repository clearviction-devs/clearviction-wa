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
  leftOffset: number;
  rightOffset: number;
}

const BenefitBox = styled(Box)<BenefitBoxProps>(({ leftOffset, rightOffset, theme }) => ({
  paddingLeft: `${leftOffset}rem`,
  paddingRight: `${rightOffset}rem`,
  paddingBottom: theme.spacing(3),
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
    <BenefitBox leftOffset={leftOffset} rightOffset={rightOffset}>
      <BenefitListItem>
        <ListItemAvatar sx={{ minWidth: 'auto', mr: 0.5, ml: -1 }}>
          <ItemNumber>
            {id}
          </ItemNumber>
        </ListItemAvatar>
        <ListItemText primary={title} />
      </BenefitListItem>
    </BenefitBox>
  );
}
