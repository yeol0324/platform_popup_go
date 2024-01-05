'use client';
import Link from 'next/link';
import styles from './BottomNav.module.scss';
import { Box, FlexBox, IconBox } from '@/components';

export default function Footer() {
  return (
    <div className={styles.bottomNav}>
      <Link href={'/calendar'} passHref>
        <FlexBox direction="column">
          <IconBox iconName="calendar" />
          <Box>달력</Box>
        </FlexBox>
      </Link>
      <Link href={'/map'} passHref>
        <FlexBox direction="column">
          <IconBox iconName="map" />
          <Box>지도</Box>
        </FlexBox>
      </Link>
      <Link href={'/auth/profile'} passHref>
        <FlexBox direction="column">
          <IconBox iconName="profile" />
          <Box>프로필</Box>
        </FlexBox>
      </Link>
    </div>
  );
}
