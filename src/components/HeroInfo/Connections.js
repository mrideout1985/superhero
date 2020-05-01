import React from "react";
import styles from "./HeroInfo.module.scss";

export default function Connections(props) {
	return (
		<div
			className={(styles["connections"], [props.className].join(" "))}
			style={{ position: "absolute", top: 0, left: 0 }}
		>
			<div>{props.connections?.["group-affiliation"]}</div>
			<div>Relatives': {props.connections?.relatives}</div>
		</div>
	);
}
