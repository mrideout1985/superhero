import React from "react";
import styles from "./HeroInfo.module.scss";

export default function Appearance(props) {
	return (
		<div>
			<div
				className={[styles["appearance"], [props.className]].join(" ")}
				style={{ position: "absolute", top: 0, left: 0 }}
			>
				<div>Gender': {props.appearance?.gender}</div>
				<div>Race: {props.appearance?.race}</div>
				<div>Height: {props.appearance?.height.join(", ")}</div>
				<div>Weight: {props.appearance?.weight.join(", ")}</div>
				<div>Hair Color: {props.appearance?.["hair-color"]}</div>
				<div>Eye Color {props.appearance?.["eye-color"]}</div>
			</div>
		</div>
	);
}
