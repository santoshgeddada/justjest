import { render, screen } from "@testing-library/react"
import Greet from "./Greet"
describe("Greet",()=>{

    test("Greeting", ()=>{
        render(<Greet/>)
        const textEl = screen.getByText("Hello")
        expect(textEl).toBeInTheDocument()
    })
    
    test("Greeting with name", ()=>{
        render(<Greet name="Santhosh"/>)
        const textEl = screen.getByText("Hello Santhosh")
        expect(textEl).toBeInTheDocument()
    })
})