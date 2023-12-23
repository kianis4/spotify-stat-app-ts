// /app/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
   return (
       <div className="p-4 bg-blue-500 text-white">
           <Link href="/tracks">
               Top Songs
           </Link>
           <Link href="/artists">
               Top Artists
           </Link>
       </div>
   );
};

export default Navbar;
