import { styled } from '@mui/material';
import { Twitter } from '@mui/icons-material';
import React from 'react';
import { PropsOf } from '@emotion/react';

export default function (props: Omit<PropsOf<'a'>, 'children'>) {
  return (
    <Link target="_blank" {...props}>
      Share
      <StyledTwitter />
    </Link>
  );
}

const Link = styled('a')`
  display: inline-flex;
  align-items: center;
  opacity: 0.8;
  transition: opacity .2s ease;

  &, &:visited {
    color: white;
  }

  &:hover, &:focus {
    color: white;
    opacity: 1;
    text-decoration: none;
  }
`;

const StyledTwitter = styled(Twitter)`
  margin-left: 4px;
  color: #1D9BF0;
`;
