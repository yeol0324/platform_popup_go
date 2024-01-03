import Link from 'next/link';
// import Button from '@/components/Button';
import Box from '@/components/Box';
import { Input } from '@/components/Input';
import dynamic from 'next/dynamic';
import Button from '@/components/Button';
// const Button = dynamic(() => import('@/components/Button'), {
//   ssr: false,
// });

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
