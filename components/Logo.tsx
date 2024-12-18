import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo: FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
      <Image src="/logo.png" alt="FutureMorph Logo" width={40} height={40} />
      <span className="text-primary">FutureMorph</span>
    </Link>
  );
};

export default Logo;
