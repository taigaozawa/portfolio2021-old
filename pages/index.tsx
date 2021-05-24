import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import useInterval from 'use-interval';

const IndexPage = () => {
  const [messageIteration, setMessageIteration] = useState(0);

  useInterval(() => {
    setMessageIteration((messageIteration + 1) % 100);
  }, 100);
  return (
    <>
      <Head>
        <title>小澤泰河 TaigaOzawa</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="">
        <div className="bg-fixed bg-no-repeat bg-cover bg-center min-h-screen min-w-screen h-screen w-screen overflow-y-scroll" style={{
          backgroundImage: `url('/static/uoftsukuba.png')`
        }}>
          <div className="h-screen text-white flex flex-col items-center justify-center left-0 right-0 m-auto text-3xl sm:text-5xl montserrat font-bold">
            <div>
              {(() => {
                switch (true) {
                  case messageIteration === 0: return 'W';
                  case messageIteration === 1: return 'We';
                  case messageIteration === 2: return 'Wel';
                  case messageIteration === 3: return 'Welc';
                  case messageIteration === 4: return 'Welco';
                  case messageIteration === 5: return 'Welcom';
                  case messageIteration === 6: return 'Welcome';
                  case 6 < messageIteration &&
                    messageIteration < 50: return 'Welcome!';
                  case messageIteration === 50: return 'y';
                  case messageIteration === 51: return 'よ';
                  case messageIteration === 52: return 'よう';
                  case messageIteration === 53: return 'ようk';
                  case messageIteration === 54: return 'ようこ';
                  case messageIteration === 55: return 'ようこs';
                  case messageIteration === 56: return 'ようこそ';
                  case 56 < messageIteration &&
                    messageIteration < 100: return 'ようこそ！';
                  default:
                    return '...';
                }
              })()
              }
            </div>
            <a href="#about" className="scrButton mt-8 text-lg font-extralight"><span></span></a>
          </div>
        </div>
        <div className="fixed px-2 h-12 top-0 bg-gray-200 w-screen bg-opacity-70">
          <div className="flex justify-between max-w-6xl m-auto">
            <Link href="/">
              <div className="cursor-pointer mt-3 text-lg sm:text-xl font-extralight">小澤泰河 <span className="montserrat">TaigaOzawa</span></div>
            </Link>
            <div className="hidden sm:flex">
              <Link href="/profile"><div className="cursor-pointer text-sm mr-2 rounded-full mt-2.5 h-8  text-white px-3 pt-1.5 bg-pink-600 hover:bg-pink-700 transition ease-in-out duration-500">プロフィール Profile</div></Link>
              <Link href="/notes"><div className="cursor-pointer text-sm rounded-full mt-2.5 h-8  text-white px-3 pt-1.5 bg-lightBlue-600 hover:bg-lightBlue-700 transition ease-in-out duration-500">ノート Notes</div></Link>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="bg-blue-50 flex flex-col justify-center items-center">
        <div className="mt-24 mx-2 bg-opacity-70 text-white bg-gray-900 p-3 sm:p-5 rounded-3xl shadow-2xl">
          <h1 className="mt-1 pb-3 sm:mt-3 px-3 pb-2 border-b-2 border-yellow-600 text-xl sm:text-4xl flex justify-center items-center">
            <div className="mr-4 font-extralight ">小澤泰河 </div>
            <div className="montserrat font-extralight">TaigaOzawa</div>
          </h1>
          <div className="sm:mt-4 mb-2 sm:mb-4 flex flex-col justify-center items-center">
            <p className="flex text-sm sm:text-lg flex-col justify-center items-center mt-3 mb-3">
              <div className="font-bold">筑波大学&nbsp;修士2年</div>
              <div className="text-gray-300">
                <span>理工情報生命学術院&nbsp;</span>
                <span>数理物質科学研究群</span>
              </div>
              <div className="text-gray-300">物理学学位プログラム</div>
              <div>茨城県つくば市在住</div>
            </p>
            <p className="flex text-sm sm:text-lg flex-col justify-center items-center">
              <div className="font-bold">A graduate student at University of Tsukuba,&nbsp;</div>
              <div className="text-gray-300">majoring in physics at Nuclear Theory Group,&nbsp;</div>
              <div>and based in Tsukuba, near Tokyo&nbsp;</div>
            </p>
          </div>
        </div>
        <div className="mt-5 mb-24">
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
              <div className="text-sm mb-10 sm:text-base cursor-pointer pt-1 sm:pt-2 pb-2 sm:pb-3 px-5 bg-lightBlue-600 hover:bg-lightBlue-700 hover:text-opacity-90 rounded-full text-white transition ease-in-out duration-500">
                ノート See notes&nbsp;
              <span className="text-xl">&gt;</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="mb-4 text-black text-sm sm:text-base">©️ 2021 Taiga Ozawa. All rights reserved.</div>
      </div>
    </>
  )
}

export default IndexPage
