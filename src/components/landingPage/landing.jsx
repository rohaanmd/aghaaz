import React from "react";
import CardCustom from "../card";
import { data } from "../data/data";

export default function LandingPage() {
	return (
		<>
			<header className="page-header">
				<h1 className="site-title" data-title="Aghaaz">
					Aghaaz
				</h1>
				<br />
				<h2 className="page-sub-title">2022</h2>
				<br />
				<span style={{ position: "relative" }}>
					<h2 className="page-title">A Management Fest</h2>
					<div className="span-title"> By Department of MBA</div>
				</span>
			</header>
			<main>
				<section className="flex-grid event-listing">
					{data.map((d, key) => {
						console.log(d);
						return <CardCustom d={d} key={key} />;
					})}
				</section>
			</main>
		</>
	);
}
