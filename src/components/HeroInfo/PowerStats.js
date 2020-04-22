import React from "react";
import styles from "./HeroInfo.module.scss";

export default function PowerStats(props) {
	return (
		<div
			className={[styles["powerstats"], [props.className]].join(" ")}
			style={{ position: "absolute", top: 0, left: 0 }}
		>
			{console.log("Props: ", props)}
			<div>Intelligence: {props.powerStats?.intelligence}</div>
			<div>Strength: {props.powerStats?.strength}</div>
			<div>Speed: {props.powerStats?.speed}</div>
			<div>Durability: {props.powerStats?.durability}</div>
			<div>Power: {props.powerStats?.power}</div>
			<div>Combat: {props.powerStats?.combat}</div>
		</div>
	);
}
