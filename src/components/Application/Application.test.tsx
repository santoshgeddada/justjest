import { render, screen } from "@testing-library/react"
import Application from "./Application"

describe("Application", () => {
    test("Renders Correctly", () => {
        render(<Application />)

        const inputEl = screen.getByLabelText("Name", {selector: "input"})
        expect(inputEl).toBeInTheDocument()

        const paraEl = screen.getByText("All fileds are mandatory")
        expect(paraEl).toBeInTheDocument()

        const imgEl = screen.getByAltText("a person with a laptop")
        expect(imgEl).toBeInTheDocument()

        const closeEL = screen.getByTitle("close")
        expect(closeEL).toBeInTheDocument()

        const randomEl = screen.getByTestId("random")
        expect(randomEl).toBeInTheDocument()

        const textareaEl = screen.getByLabelText(/bio/i)
        expect(textareaEl).toBeInTheDocument()

        const jobLocEl = screen.getByRole('combobox')
        expect(jobLocEl).toBeInTheDocument()

        const termsEl = screen.getByRole('checkbox')
        expect(termsEl).toBeInTheDocument()

        const submitButton = screen.getByRole('button')
        expect(submitButton).toBeInTheDocument()
    })
    
})
