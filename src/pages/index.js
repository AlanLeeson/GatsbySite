import React from "react"
import TopMenu from "../components/top_menu"
import "../styles/home.css"

export default function Home() {
  return (
    <div>
      <TopMenu />
      <main>
        <div id="ScreenWrapper">
          <div className="container">
            <h1 id="FirstName" className="name">ALAN</h1>
            <h1 id="LastName" className="name">LEESON</h1>
            <h1 style={{color: '#fff', position: 'absolute', 'margin-top': '200px', 'font-size': '6rem'}}>COMING SOON</h1>
          </div>
        </div>
      </main>
    </div>
  )
}
