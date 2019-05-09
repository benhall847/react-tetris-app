import React from "react";

export default function Row(props) {
	return (
		<div className="row">
			{props.row.map((eaItem, i) => (
				<div key={i} className="cell" />
			))}
		</div>
	);
}
