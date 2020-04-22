import React from "react";
import styles from "./HeroInfo.module.scss";

export default function Biography(props) {
	return (
		<div
			className={[styles["biography"], [props.className]].join(" ")}
			style={{ position: "absolute", top: 0, left: 0 }}
		>
			<div>Full name: {props.biography?.["full-name"]}</div>
			<div>Alias': {props.biography?.aliases}</div>
			<div>Alignment: {props.biography?.alignment}</div>
			<div>Alter-egos: {props.biography?.["alter-egos"]}</div>
			<div>First appearance: {props.biography?.["first-appearance"]}</div>
			<div>Place of birth: {props.biography?.["place-of-birth"]}</div>
			<div>Published by: {props.biography?.publisher}</div>
		</div>
	);
}
