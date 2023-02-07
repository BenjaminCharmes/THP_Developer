import React, { useState, useEffect } from "react";
import { useAtom } from 'jotai';
import { skillsAtom } from "../../stores/skills";
import { firstNameAtom, lastNameAtom } from "../../stores/user";

const Profile = () => {
  const [userFirstName, setUserFirstName] = useAtom(firstNameAtom);
  const [userLastName, setUserLastName] = useAtom(lastNameAtom);
  const [userSkills, setUserSkills] = useAtom(skillsAtom)

  const [formData, setFormData] = useState({
    firstName: userFirstName,
    lastName: userLastName,
    skills: userSkills ? userSkills : ''
  });

  useEffect(() => {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const skills = JSON.parse(localStorage.getItem('skills'));
    if (firstName && lastName && skills) {
      setFormData({
        firstName: firstName,
        lastName: lastName,
        skills: skills.join(', ')
      });
      setUserFirstName(firstName);
      setUserLastName(lastName);
      setUserSkills(skills);
    }
  }, []);

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();
    const skills = formData.skills
      .split(",")
      .map(skill => skill.trim())
      .filter(skill => skill !== "");
    setUserFirstName(firstName);
    setUserLastName(lastName);
    setUserSkills(skills);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('skills', JSON.stringify(skills));
  };

  return (
    <div className="form-container">
      <div className="form">
        <form className ="form-group" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">Prénom :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Nom de famille :</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="skills">Compétences :</label>
            <textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
