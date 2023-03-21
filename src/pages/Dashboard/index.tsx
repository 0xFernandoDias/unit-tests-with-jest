import React from "react"

function Dashboard() {
	return (
		<>
			<h1>Hello Dashboard</h1>
			<button type="button" disabled>
				Click Me
			</button>
			<p data-testid="pushingP" className="blue">
				This is the P
			</p>
		</>
	)
}

export default Dashboard
