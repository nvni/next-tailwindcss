import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
export default function Home() {
  return (
    <div className="bg-gray-900">
      <Header/>
      <h1 className="text-9xl text-white">Hello</h1>
    </div>
  );
}
