import Link from 'next/link';
import Button from '@/components/Button';
import Box from '@/components/Box';
import { Input } from '@/components/Input';
export default function Home() {
  return (
    <div>
      <Link href="/map/" className="flex" style={{ fontSize: '10rem' }}>
        map
      </Link>
      <Link href="/calendar/" className="flex" style={{ fontSize: '10rem' }}>
        calendar
      </Link>
      <Box>hh</Box>
      <Input bottomText="hi">
        {/* <Input.Label>
          <div>하하</div>
        </Input.Label> */}
        <Input.TextField></Input.TextField>
      </Input>
      <Button themeId="theme01">버튼</Button>
    </div>
  );
}