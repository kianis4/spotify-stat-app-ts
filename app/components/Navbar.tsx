// /app/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
      <div className="flex justify-between items-center bg-blue-500 p-4">
          <Link href="/tracks">
              <div className="text-white text-lg font-bold hover:text-purple-400">Top Songs</div>
          </Link>
          <Link href="/albums">
            <div className="text-white text-lg font-bold hover:text-purple-400">Top Albums</div>
          </Link>
          <Link href="/artists">
              <div className="text-white text-lg font-bold hover:text-purple-400">Top Artists</div>
          </Link>
      </div>
  );
};

export default Navbar;

