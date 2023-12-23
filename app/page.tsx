// /app/page.ts
import Topsongs from './tracks/page'
import Topartists from './artists/page';
import Dashboard from './components/dashboard';
import UserProfile from './user/page';

export default function Home() {


 return (
  <div className='container'>
    {/* <Topsongs/> */}
    {/* <Topartists/> */}
    {/* <Dashboard/> */}
    <UserProfile/>
  </div>
 );

}




