import React from "react"
import { render, screen } from "@testing-library/react"
import Dashboard from "@/pages/Dashboard"
import "@testing-library/jest-dom"

describe("Dashboard page", () => {
	it("Should render properly", () => {
		render(<Dashboard />)

		const header = screen.getByRole("heading")
		const headerText = "Hello Dashboard"

		expect(header).toHaveTextContent(headerText)
	})

	it("Should render a disabled button", () => {
		render(<Dashboard />)

		const button = screen.getByRole("button")

		expect(button).toBeDisabled()
	})

	it("Should render a P with a data-testid", () => {
		render(<Dashboard />)

		const pElement = screen.getByTestId("pushingP")

		expect(pElement).toBeInTheDocument()
		expect(pElement).toHaveClass("blue")
	})
})
