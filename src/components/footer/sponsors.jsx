import React from "react";

export default function Sponsors() {
	const spon = [
		"https://via.placeholder.com/200x160?Text=Sponsors",
		"https://via.placeholder.com/200x160?Text=Sponsors",
		"https://via.placeholder.com/200x160?Text=Sponsors",
		"https://via.placeholder.com/200x160?Text=Sponsors",
		"https://via.placeholder.com/200x160?Text=Sponsors",
		"https://via.placeholder.com/200x160?Text=Sponsors",
		"https://via.placeholder.com/200x160?Text=Sponsors",
		"https://via.placeholder.com/200x160?Text=Sponsors",
		"https://via.placeholder.com/200x160?Text=Sponsors",
	];

	return (
		<div className="_sponsors">
			<h2>Our Sponsors</h2>

			<div className="_sponsors_body">
				{spon.map((d, k) => {
					return <img src={d} key={k} />;
				})}
			</div>
		</div>
	);
}
