import Link from 'next/link';
import { Box, FlexBox, RoundButton, Input, IconBox, Button } from '@/components';
import Spine from '@/components/Spine/Spine';

export default function Home() {
  return (
    <div>
      <Box>hh</Box>
      <Box className="mb-100">
        <div>3</div>
        <div>4</div>
      </Box>
      <RoundButton>hi</RoundButton>
      <Input>
        <Input.Label>로그인 하려면 어쩌고 저쩌고 라벨</Input.Label>
        <FlexBox>
          <IconBox iconName="person" />
          <Input.TextField></Input.TextField>
          <Button>확인</Button>
        </FlexBox>
      </Input>
      <Spine></Spine>
    </div>
  );
}
