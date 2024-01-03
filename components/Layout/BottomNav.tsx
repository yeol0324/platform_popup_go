'use client';
import React from 'react';
import Link from 'next/link';
import IconBox from '../IconBox';

const footerStyle = {
  display: 'flex',
  position: 'fixed' as 'fixed',
  bottom: 0,
  justifyContent: 'space-around',
  width: '100%',
  zIndex: 10,
  backgroundColor: 'black',
};
export default function Footer() {
  return (
    <div id="footer" style={footerStyle}>
      <Link href={'/calendar'}>
        <IconBox>
          <IconBox.Icon name="calendar" />
          <IconBox.Label>달력</IconBox.Label>
        </IconBox>
      </Link>
      <Link href={'/map'}>
        <IconBox>
          <IconBox.Icon name="calendar" />
          <IconBox.Label>지도</IconBox.Label>
        </IconBox>
      </Link>
      <Link href={'/auth/profile'}>
        <IconBox>
          <IconBox.Icon name="calendar" />
          <IconBox.Label>프로필</IconBox.Label>
        </IconBox>
      </Link>
      {/* <div css={basicStyles}>menu</div> */}
    </div>
  );
}
