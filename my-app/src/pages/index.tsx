import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Header } from "../components/atoms/header/header";

export default function HomePage() {
  const path = useRouter();

  useEffect(() => {
    path.push('/search');
  },[]);

  return (
    <div className='container'>
      <Header size="h1">Home page</Header>
    </div>
  )
}