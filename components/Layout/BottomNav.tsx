'use client';
import React from 'react';
import Link from 'next/link';
import IconBox from '../Box/IconBox';
import styles from './BottomNav.module.scss';

export default function Footer() {
  return (
    <div className={styles.bottomNav}>
      <Link href={'/calendar'} legacyBehavior>
        <IconBox>
          <IconBox.Icon name="calendar" />
          <IconBox.Label>달력</IconBox.Label>
        </IconBox>
      </Link>
      <Link href={'/map'} legacyBehavior>
        <IconBox>
          <IconBox.Icon name="calendar" />
          <IconBox.Label>지도</IconBox.Label>
        </IconBox>
      </Link>
      <Link href={'/auth/profile'} legacyBehavior>
        <IconBox>
          <IconBox.Icon name="calendar" />
          <IconBox.Label>프로필</IconBox.Label>
        </IconBox>
      </Link>
    </div>
  );
}
