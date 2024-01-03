import Link from 'next/link';
import Box from '@/components/Box/Box';
import Button from '@/components/Button/Button';
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
      <Button>hi</Button>
      <Input bottomText="hi">
        {/* <Input.Label>
          <div>하하</div>
        </Input.Label> */}
        <Input.TextField></Input.TextField>
      </Input>
    </div>
  );
}
