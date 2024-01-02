'use client';
// import styled from '@emotion/styled';
import theme from '@/styles/theme';
import styled from '@emotion/styled';
import Link from 'next/link';
import IconBox from '../IconBox';

// TODO: emotion ssr 적용
// import { basicStyles } from '@/styles/styles';
// const Button = styled.button({
//   background: ,
// });
const StyleComponent = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  z-index: 10;
  background-color: ${props => props.theme.palette.teal0};
`;
export default function Footer() {
  return (
    <StyleComponent
      id="footer"
      // css={theme => ({
      //   backgroundColor: theme.palette.sat,
      // })}
    >
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
    </StyleComponent>
  );
}
