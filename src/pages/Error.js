import React from "react";
import { Link } from "react-router-dom";

function Error() {
	return (
		<div className="text-center">
			<p className="h2">404 Error</p>
			<Link to="/">Back to Home</Link>
		</div>
	);
}

export default Error;
