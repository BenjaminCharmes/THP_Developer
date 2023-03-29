// Hooks
import { useState, useEffect } from 'react'
import { useFetchGet, useFetchPost, useFetchDelete, useFetchDeleteWithID } from '../../hooks/fetchData/useFetchData'

// Components
import Button from '../../components/Button/Button'

// SCSS
import './Admin.scss'

const Admin = () => {

  // Topics
  const { data: topics } = useFetchGet('topics', 'topics');

  // Enigmas
  const { data: enigmas, refetch: refetchEnigmas } = useFetchGet('enigmas', 'enigmas');
  const { mutate: postEnigma } = useFetchPost('enigmas');
  const { mutate: deleteEnigma } = useFetchDeleteWithID(`enigmas`);

  const [displayEnigmas, setDisplayEnigmas] = useState(false);

  const handleEnigmasDisplay = () => {
    setDisplayEnigmas(true)
    setWorldSelected(1)
    setDisplayAchievements(false)
  };

  const [formEnigmaData, setFormEnigmaData] = useState(
    {
      title: "",
      description: "",
      topic_id: "",
      world: 0,
      level: 0,
      hint: ""
    }
  )

  const handleEnigmaChange = (e) => {
    setFormEnigmaData({
      ...formEnigmaData,
      [e.target.name]: e.target.value,
    });
  }

  const handleEnigmaSubmit = (e) => {
    e.preventDefault();
    postEnigma(formEnigmaData)
  }

    // World in Enigmas
  const [worldSelected, setWorldSelected] = useState(0)

  const handleWorldSelectedChange = (e) => {
    setWorldSelected(e.target.value);
  }

  const [worlds, setWorlds] = useState(0);
  const [filteredEnigmas, setFilteredEnigmas] = useState([]);

  useEffect(() => {
    if (enigmas !== null && enigmas !== undefined) {
      const newWorlds = Object.values(enigmas).reduce((worlds, enigma) => {
        if (!worlds.includes(enigma.world)) {
          worlds.push(enigma.world);
        }
        return worlds;
      }, []);
      setWorlds(newWorlds);
    }
  }, [enigmas]);

  useEffect(() => {
    if (enigmas !== null && enigmas !== undefined) {
      const tempFilteredEnigmas = enigmas.filter(enigma => enigma.world === Number(worldSelected));
      setFilteredEnigmas(tempFilteredEnigmas);
    }
  }, [worldSelected, enigmas]);

  const handleDeleteEnigma = (id) => {
    deleteEnigma(id);
    refetchEnigmas();
  };

  // Achievement
  const { data: achievements, refetch: refetchAchievements } = useFetchGet('achievements', 'achievements');
  const { mutate: postAchievement } = useFetchPost('achievements');
  const { mutate: deleteAchievement } = useFetchDeleteWithID(`achievements`);

  const [displayAchievements, setDisplayAchievements] = useState(false)

  const handleAchievementsDisplay = () => {
    setDisplayEnigmas(false)
    setDisplayAchievements(true)
  }

  const [formAchievementData, setFormAchievementData] = useState(
    {
      title: "",
      description: "",
    }
  )

  const handleAchievementChange = (e) => {
    setFormAchievementData({
      ...formAchievementData,
      [e.target.name]: e.target.value,
    });
  }

  const handleAchievementSubmit = (e) => {
    e.preventDefault();
    postAchievement(formAchievementData)
  }

  const handleDeleteAchievement = (id) => {
    deleteAchievement(id);
    refetchAchievements();
  };

  return (
    <div className='admin-wrapper'>
      <div className='admin-sidebar'>
        <h2>Catégories</h2>
        <button onClick={handleEnigmasDisplay}>Énigmes</button>
        <button onClick={handleAchievementsDisplay}>Succès</button>
      </div>
      <div className='admin-right'>
        <div className='admin-right-top-display'>
          {displayEnigmas && 
            <div>
              <div className="admin-right-top-header">
                <h3>Liste des énigmes</h3>
                <select name="world-select" onChange={handleWorldSelectedChange}>
                  {worlds.map((world) => (
                    <option key={world} value={world}>Monde {world}</option>
                  ))}
                </select>
              </div>
              <div className="admin-card-container">
                {filteredEnigmas.map((enigma, index) => { 
                  return <div key={index} className="admin-card">
                            <h3>{enigma.title}</h3>
                            <Button onClick={() => handleDeleteEnigma(enigma.id)} content='Supprimer'></Button>
                        </div>
                })}
              </div>
            </div>}
          {displayAchievements && 
            <div>
              <div className="admin-right-top-header">
                <h3>Liste des succès</h3>
              </div>
              <div className="admin-card-container">
                {achievements.map((achievement, index) => { 
                  return <div className="admin-card" key={index}>
                            <h3>{achievement.title}</h3>
                            <Button onClick={() => handleDeleteAchievement(achievement.id)} content='Supprimer'></Button>
                          </div>
                })}
              </div>
            </div>}
        </div>
        <div className='admin-right-bottom-display'>
          {displayEnigmas && 
            <div>
              <h3>Créer une nouvelle énigme</h3>
              <form action="" onSubmit={handleEnigmaSubmit}>
                <input type="text" name='title' placeholder="Titre de l'énigme" value={formEnigmaData.title} onChange={handleEnigmaChange}/>
                <input type="text" name='description' placeholder="Description de l'énigme" value={formEnigmaData.description} onChange={handleEnigmaChange}/>
                <select name="topic_id" onChange={handleEnigmaChange}>
                  {Object.values(topics).map((topic) => (
                    <option key={topic.id} value={topic.id}>{topic.title}</option>
                  ))}
                </select>
                <input type="integer" name='world' placeholder="Monde" value={formEnigmaData.world} onChange={handleEnigmaChange}/>
                <input type="integer" name='level' placeholder="Niveau" value={formEnigmaData.level} onChange={handleEnigmaChange}/>
                <input type="text" name='hint' placeholder="Indice de l'énigme" value={formEnigmaData.hint} onChange={handleEnigmaChange}/>
                <Button type="submit" content="Créer l'énigme"/>
              </form>
            </div>
          }
          {displayAchievements && 
            <div>
              <h3>Créer un nouveau succès</h3>
              <form action="" onSubmit={handleAchievementSubmit}>
                <input type="text" name='title' placeholder="Titre du succès" value={formAchievementData.title} onChange={handleAchievementChange}/>
                <input type="text" name='description' placeholder="Description du succès" value={formAchievementData.description} onChange={handleAchievementChange}/>
                <Button type="submit" content="Créer le succès"/>
              </form>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Admin
