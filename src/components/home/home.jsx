import React from 'react'
import Footer from "../footer/footer";
import Headers from "../header/header";
import LandingPage from "../landingPage/landing";
export default function Home() {
  return (
    <div classname="App">
			<Headers />
			<LandingPage />
			<Footer />
		</div>
  )
}
