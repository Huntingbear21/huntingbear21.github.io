import React from 'react';
import logo from './bear.png';
import menu from './images/menu.png';
import profile from './images/일러스트78.jpg';


class MyNav extends React.Component {
  render() {
    return (
      <header class="font-nanum lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
        <div className="flex-1 flex justify-between items-center">
          <a href="#!">
            <img width="40" height="40" src={logo} alt="logo"/>
          </a>
          </div>

        <label htmlFor="menu-toggle" className="point-cursor lg:hidden block"><img src={menu} width="32" height="36" alt="toggle"/></label>
        <input className="hidden" type="checkbox" id="menu-toggle"/>

        <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-black pt-4 lg:pt-0">
              <li>
                <a href="https://discord.gg/qX7Aah82x5" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-yellow-400">디스코드</a>
              </li>
              <li>
                <a href="https://blog.naver.com/huntingbear21" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-yellow-400">블로그</a>
              </li>
              <li>
                <a href="https://discord.com/oauth2/authorize?client_id=687886541619462293&permissions=522304&scope=bot" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-yellow-400">코딩 도우미</a>
              </li>
              <li>
                <a href="https://discord.gg/tTq9aD3" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-yellow-400 text-yellow-400"><span>한마루<sub>Promoted</sub></span></a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

class Section1 extends React.Component {
  render() {
    return (
      <div className="font-nanum sm:grid md:p-30 xs:p-60 p-20 grid-cols-3 grid-flow-col gap-4 m-auto select-none text-right">
        <div className="row-span-3">
          <img src={profile} alt="profile" width="400" height="400" className="rounded-full shadow-2xl"/>
        </div>
        <div className="col-span-2">
          <h1 className="lg:text-6xl block sm:text-3xl md:text-4xl text-4xl">안녕하세요, 곰사냥입니다.</h1>
        <div/>
        <div className="row-span-2 my-10 text-right">
          <a className="my-button shadow-2xl" href="https://discord.gg/qX7Aah82x5">곰사냥의 디스코드</a>
          <a className="my-button shadow-2xl" href="https://blog.naver.com/huntingbear21">곰사냥의 블로그</a>
         </div>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <html>
        <MyNav />
        <body class="antialiased bg-gray-50">
          <Section1 />
        </body>
      </html>
    )
  }
}

export default App;
