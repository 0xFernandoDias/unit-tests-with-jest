import React from "react"
import { render, screen } from "@testing-library/react"
import Dashboard from "@/pages/Dashboard"
import "@testing-library/jest-dom"

describe("Dashboard page", () => {
	beforeEach(() => {
		render(<Dashboard />)
	})

	it("Should render properly", () => {
		const header = screen.getByRole("heading")
		const headerText = "Hello Dashboard"

		expect(header).toHaveTextContent(headerText)
	})

	it("Should render a disabled button", () => {
		const button = screen.getByRole("button")

		expect(button).toBeDisabled()
	})

	it("Should render a P with a data-testid", () => {
		const pElement = screen.getByTestId("pushingP")

		expect(pElement).toBeInTheDocument()
		expect(pElement).toHaveClass("blue")
	})
})
