import { render, screen } from "@testing-library/react"
import Skills from "./Skills"

describe("Skills",()=>{
    const skills = ["HTML", "CSS", "Javascript", "Typescript", "React", "Jest"]
    describe("render list",()=>{

        test("renders correctly",()=>{
            render(<Skills skillsList={skills} />)
            const listEl = screen.getAllByRole("listitem")
            expect(listEl).toHaveLength(skills.length)
        })
    })

    describe("check all items",()=>{
        test("check length",()=>{
            render(<Skills skillsList={skills} />)
            const checkLen = screen.getAllByTitle("listItem")
            expect(checkLen).toHaveLength(skills.length)
        })
    })
})