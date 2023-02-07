import { useAtom } from 'jotai';
import { fullNameAtom } from '../../stores/user';
import { skillsAtom } from '../../stores/skills';

const Home = () => {
  const fullName = useAtom(fullNameAtom);
  const skills = useAtom(skillsAtom);
  console.log(skills)

  return (
    <div className="Home">
      <h1>Bienvenue {fullName}  sur Mini Malt 🌾</h1>
      
      {skills.length > 0 ? (
        <>
        <p>Voici vos compétences:</p>
          {skills[0].map((skill, index) => (
            <p key={index}>🚀 {skill}</p>
          ))}
        </>
      ) : (
        <p>Je t'invite à aller modifier ton profil ! 📝</p>
      )}
    </div>
  );
};

export default Home;
