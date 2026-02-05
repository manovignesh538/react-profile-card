function Skills() {
  const skills = ["React", "Node", "UI/UX", "Testing"];

  return (
    <div className="skills">
      {skills.map((skill, index) => (
        <span key={index}>{skill}</span>
      ))}
    </div>
  );
}

export default Skills;
