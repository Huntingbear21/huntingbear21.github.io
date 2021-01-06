import React from 'react';
import logo from './bear.png';
import menu from './images/menu.png';
import profile from './images/일러스트78.jpg';

const checkSmall = () => {
  return (window.screen.width > 640);
}

class MyNav extends React.Component {
  render() {
    return (
      <div className="font-nanum flex-1 flex justify-between items-center">
        <a href="#">
          <img width="32" height="36" src={logo} alt="logo" />
          <span>곰사냥의 웹사이트</span>
        </a>

        <label htmlFor="menu-toggle" className="point-cursor lg:hidden block"><img src={menu} width="32" height="36"/></label>
        <input className="hidden" type="checkbox" id="menu-toggle"></input>

        <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
          <nav>
            <ul className="lg:flex items-center justify-between text-white pt-4 lg:pt-0">

            </ul>
          </nav>

        </div>
      </div>
    )
  }
}

class Section1 extends React.Component {
  render() {
    return (
      <div className="font-nanum float-right md:grid md:p-30 xs:p-60 p-40 grid-cols-3 grid-flow-col gap-4 justify-center bg-no-repeat">
        <div className="row-span-3">
          <img src={profile} alt="profile" width="500" height="500" className="rounded-full"/>
        </div>
        <div className="col-span-2">
          <h1 className="xs:text-7xl lg:text-5xl block md:text-4xl sm:text-5xl text-4xl">안녕하세요, 곰사냥입니다.</h1>
          <div className="my-10">
            <a className="my-button" href="https://discord.gg/qX7Aah82x5">곰사냥의 디스코드</a>
            <a className="my-button" href="https://blog.naver.com/huntingbear21">곰사냥의 블로그</a>
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
        <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
        <MyNav />
        </header>
        <body>
          <Section1 />
        </body>
      </html>
    )
  }
}

export default App;
