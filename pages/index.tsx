import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import useInterval from 'use-interval';

const IndexPage = () => {
  const [showEnglish, setShowEnglish] = useState(false);

  useInterval(() => {
    setShowEnglish(!showEnglish);
  }, 5000);
  return (
    <>
      <Head>
        <title>小澤泰河 TaigaOzawa</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-fixed bg-no-repeat bg-cover bg-center min-h-screen min-w-screen h-screen w-screen" style={{
        backgroundImage: `url('/static/uoftsukuba.png')`
      }}>
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          <div className="fixed px-2 h-12 top-0 bg-gray-200 w-screen bg-opacity-70">
            <div className="flex justify-between max-w-6xl m-auto">
              <Link href="/">
                <div className="cursor-pointer mt-3 text-lg sm:text-xl font-extralight">小澤泰河 <span className="montserrat">TaigaOzawa</span></div>
              </Link>
              <div className="hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex">
                <Link href="/profile"><div className="cursor-pointer text-sm mr-2 rounded-full mt-2.5 h-8  text-white px-3 pt-1.5 bg-pink-600 hover:bg-pink-700 transition ease-in-out duration-500">プロフィール Profile</div></Link>
                <Link href="/notes"><div className="cursor-pointer text-sm rounded-full mt-2.5 h-8  text-white px-3 pt-1.5 bg-lightBlue-600 hover:bg-lightBlue-700 transition ease-in-out duration-500">ノート Notes</div></Link>
              </div>
            </div>
          </div>
          <div className="text-3xl sm:text-5xl montserrat mb-2 sm:mb-5 text-white font-bold">
            {showEnglish ? 'Welcome!' : 'ようこそ！'}
          </div>
          <div className="mx-2 text-black bg-opacity-70 bg-gray-300 p-3 sm:p-5 rounded-lg shadow-2xl">
            <h1 className="mt-1 sm:mt-3 px-3 pb-2 border-b-2 border-yellow-600 text-xl sm:text-4xl flex justify-center items-center">
              <div className="mr-4 font-extralight ">小澤泰河 </div>
              <div className="montserrat font-extralight ">TaigaOzawa</div>
            </h1>
            <div className="mt-2 sm:mt-4 mb-2 sm:mb-4 flex flex-col justify-center items-center">
              <p className="flex text-sm sm:text-lg flex-col justify-center items-center mt-3 mb-3">
                <div className="font-bold">筑波大学&nbsp;修士2年</div>
                <div>
                  <span>理工情報生命学術院&nbsp;</span>
                  <span>数理物質科学研究群</span>
                </div>
                <div>物理学学位プログラム</div>
                <div>茨城県つくば市在住</div>
              </p>
              <p className="flex text-sm sm:text-lg flex-col justify-center items-center">
                <div className="font-bold">A graduate student at University of Tsukuba,&nbsp;</div>
                <div>majoring in physics at Nuclear Theory Group,&nbsp;</div>
                <div>and based in Tsukuba, near Tokyo&nbsp;</div>
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-6">
            <Link href="/profile">
              <div className="text-sm sm:text-base cursor-pointer pt-1 sm:pt-2 pb-2 sm:pb-3 px-5 bg-pink-600 hover:bg-pink-700 hover:text-opacity-90 rounded-full text-white transition ease-in-out duration-500">
                プロフィールを見る See profile&nbsp;
              <span className="text-xl">&gt;</span>
              </div>
            </Link>
          </div>
          <div className="mt-1 sm:mt-3">
            <Link href="/notes">
              <div className="text-sm sm:text-base cursor-pointer pt-1 sm:pt-2 pb-2 sm:pb-3 px-5 bg-lightBlue-600 hover:bg-lightBlue-700 hover:text-opacity-90 rounded-full text-white transition ease-in-out duration-500">
                ノート See notes&nbsp;
              <span className="text-xl">&gt;</span>
              </div>
            </Link>
          </div>
          <div className="fixed bottom-2 text-white text-sm sm:text-base">©️ 2021 Taiga Ozawa. All rights reserved.</div>
        </div>

      </div>
    </>
  )
}

export default IndexPage
