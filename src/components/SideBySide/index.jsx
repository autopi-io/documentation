import React from "react";

function SideBySide({children}) {
	return(
		<div className="row">
			<div className="col">
				{children[0]}
			</div>
			<div className="col">
				{children[1]}
			</div>
		</div>
	);
}

export default SideBySide;