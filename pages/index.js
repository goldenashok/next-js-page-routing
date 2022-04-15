import Link from 'next/link';
import { useRouter } from 'next/router';


function Home() {
  const router = useRouter();
  const goToBlog = () => {
    router.push('/blog');
    // router.replace('/blog');
  }

  return (
    <>
      <h1> Home Page</h1>
      <ul>
        <li><Link href="/about"><a>About</a></Link></li>
        <li><Link href="/product"><a>Product</a></Link></li>
      </ul>
      <button onClick={goToBlog}>Go To Blog</button>
    </>)
}

export default Home;