import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/data";
import "./_info.scss";

export default function Information() {
	let { infoName } = useParams();
	const [Data, setData] = useState({});

	useEffect(() => {
		console.log({data,infoName});
		var temp = data.find((x) => JSON.stringify(x.eventId) === infoName);
		// console.log(temp);
		setData({ ...temp });
	}, []);
// console.log(Data);
	return (
		<div className="_information">
			<div class="container">
				<div class="information">
					<div className="_information_header">
						<div className="_information_title">Know More</div>

						<br />

						<h1 className=" _information_eventName" data-title={Data.eventName}>
							{Data.eventName}
						</h1>
					</div>
					<div className="_information_body">
						<h2 className="_information_body_subHeading">Date and time</h2>

						<p>
							{Data.date} <sup>{Data.superr}</sup> 2022 @ {Data.time}
						</p>
					</div>
					<div className="_information_body">
						<h2 className="_information_body_subHeading">Venue</h2>

						<p>
							{" "}
							<a href="https://goo.gl/maps/3pxziFs1biWZSSgi7">
								C Block , IMS Engineering College , Ghaziabad
							</a>
						</p>
					</div>

					<div className="_information_body">
						<h2 className="_information_body_subHeading">Description</h2>

						<p>{Data.description}</p>
					</div>
				{Data?.rules?.length > 0 &&	<div className="_information_body">
						<h2 className="_information_body_subHeading">
							Rules and Regulations
						</h2>
						<ol>
							{Data.rules.map((d, k) => <li key={k}>{d}</li>)}
						</ol>
					</div>}
					<div className="_information_body">
						<h2 className="_information_body_subHeading">Event Coordinators</h2>
						<ol>
							{Object.keys(Data).length > 0 &&
								Data.contact.s_coord.map((d, k) => (
									<li key={k}>
										{d.name + " : "}{" "}
										<a href={`tel:${d.number}`}>+91 {d.number}</a>{" "}
									</li>
								))}
						</ol>
					</div>

					{/* <div className="_information_footer">
						<a className="fill" href={Data.rLink}>
							Register Now !!
						</a>
					</div> */}
				</div>
				<div class="poster">
					<img src={Data.poster} alt="" />
				</div>
			</div>
		</div>
	);
}
