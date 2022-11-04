import { use, useEffect } from 'react';
import { Header } from '../components/atoms/header/header';
import { useRouter } from 'next/router';
import { SearchBlock } from '../components/organisms/search-block/search-block';

export default function PageNotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(()=>{
      router.push('/')
    },3000)
  },[router]);

  return (
    <div className='container'>
      <Header size="h1">Page not found</Header>
    </div>
  )
}