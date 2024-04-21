type SkillProps = {
    skillsList: string[]
}

const Skills = ({skillsList}: SkillProps )=>{
    return(
        <ul>
            {skillsList.map(skill=>(
                <li title="listItem">{skill}</li>
            ))}
        </ul>
    )
}

export default Skills