// Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchGet, useFetchPost, useFetchPatch } from "../../hooks/fetchData/useFetchData";

// Components
import Button from "../../components/Button/Button";
import ButtonDoor from "../../components/ButtonDoor/ButtonDoor"

// Assets
import DoorBackground from "../../assets/images/door.webp";

// SCSS
import "./Door.scss";

export default function Door({ onUnlockSuccess, onAchievementTitle}) {

  const navigate = useNavigate();

  // User
  const auth_token = localStorage.getItem('Authorization_token');
  const { data: userData } = useFetchGet('member-data', 'user', auth_token);
  const current_user = userData?.user;
  const current_user_id = current_user?.id
  const { data: userAchievements, refetch: refetchUserAchievements} = useFetchGet(`join_table_user_achievements?user_id=${current_user?.id}`, 'user_achievements');
  const { mutate: updateUser } = useFetchPatch(`users`, auth_token);
  
  // History
  const { mutate: postUserHistory } = useFetchPost(`histories`);

  // Achievements
  const { mutate: unlockDoorAchievement, isSuccess: unlockDoorAchievementSuccess } = useFetchPost(`join_table_user_achievements`);
  const { mutate: unlockPyramidAchievement, isSuccess: unlockPyramidAchievementSuccess } = useFetchPost(`join_table_user_achievements`);

  // Enigmas
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (character) => {
    if (
      inputValue.length < 9 &&
      [" @ ", " $ ", " € ", " & ", " % ", " £ ", " + ", " # "].includes(character)
    ) {
      setInputValue(inputValue + character);
    }
  };

  const handleClearClick = () => {
    setInputValue("");
  };

  const handleSubmit = () => {
    if (inputValue === " $  €  @ ") {
      console.log(
        "Avec une satisfaction intense, vous prononcez 'connaissance' à haute voix. Et alors, la porte massive s'ouvre lentement, révélant un nouveau monde fascinant et rempli de merveilles insoupçonnées. Vous franchissez la porte, prêt à explorer ce nouveau monde avec une soif insatiable de connaissances et de découvertes."
      );
      if (auth_token && userData && !current_user?.is_door_passed) {
        updateUser({id: current_user_id, is_door_passed: true});
        refetchUserAchievements();
        if (userAchievements && !Object.values(userAchievements).some(achievement => achievement.achievement_id === 1)) {
          unlockDoorAchievement({user_id: current_user_id, achievement_id: 1})
        }        
      } else {
        localStorage.setItem("is_door_passed", true);
      }
      setTimeout(() => {
        navigate("/découverte");
      }, 1000);
      postUserHistory({user_id: current_user_id, enigma_id: 7, status: 1})
    } else {
      setInputValue("");
    }
  };

  const handleSuccessUnlock = () => {
    onUnlockSuccess();
  };

  const handleAchievementTitle = (text) => {
    onAchievementTitle(text);
  };

  // Door Achievement

  useEffect(() => {
    if (unlockDoorAchievementSuccess) {
      handleAchievementTitle('La porte');
      handleSuccessUnlock();
    }
  }, [unlockDoorAchievementSuccess]);

  // Hidden Achievement

  const handleHiddenAchievementUnlock = () => {
    refetchUserAchievements();
    if (userAchievements && !Object.values(userAchievements).some(achievement => achievement.achievement_id === 2)) {
      unlockPyramidAchievement({user_id: current_user_id, achievement_id: 2})
    }
  }

  useEffect(() => {
    refetchUserAchievements();
    if (unlockPyramidAchievementSuccess) {
      handleAchievementTitle('La pyramide');
      handleSuccessUnlock();
    }
  }, [unlockPyramidAchievementSuccess]);


  return (
    <>
      <div className="door">
        <div className="door-content">
          <div className="door-buttons">
            <div className="buttons-left">
              <div className="buttons-animate">
                <ButtonDoor content=" & " onClick={() => handleButtonClick(" & ")} />
              </div>
              <div className="buttons-animate">
                <ButtonDoor content=" € " onClick={() => handleButtonClick(" € ")} />
              </div>
              <div className="buttons-animate">
                <ButtonDoor content=" # " onClick={() => handleButtonClick(" # ")} />
              </div>
              <div className="buttons-animate">
                <ButtonDoor content=" @ " onClick={() => handleButtonClick(" @ ")} />
              </div>
            </div>
          </div>
          <div className="door-code">
            <div className="hidden_achievement">
              <Button onClick={handleHiddenAchievementUnlock}></Button>
            </div>
            <div className="door-screen">
              <input placeholder='*   *   *' type="text" value={inputValue} readOnly />
              <Button className="door-clear" content='Effacer' onClick={handleClearClick} />
            </div>
            <div className="door-script">
              <p>
                Vous êtes sur le point d'explorer un nouveau monde, mais pour y
                accéder, vous devez d'abord résoudre une énigme. La voici :{" "}
              </p>
                <br />
              <p>
                "Je <strong>$</strong>uis l'outil de ceux qui cherchent à apprendre,
                Certains me voient comme un vecteur de bonheur,
                d'autres comme un moyen de semer le malheur.
              </p>
                <br />
              <p>
                Mais ma véritable utilité est entre les mains,
                De ceux qui ont la sag<strong>€</strong>sse et l'intention divine.
              </p>
                <br />
              <p>
                Si tu veux accéder à ce nouveau monde prometteur,
                Dis-moi, <strong>@</strong>mi, quel est donc mon nom avec vigueur ?"
              </p>
                <br />
              <p>
                Trouvez les 3 caractères spéciaux qui se cachent dans cette énigme
                et vous pourrez franchir le portail vers un nouveau monde rempli
                de découvertes passionnantes et de merveilles insoupçonnées.
              </p>
            </div>
            <div className="door-validate">
              <Button onClick={handleSubmit} content="Valider"/>
            </div>
          </div>
          <div className="door-buttons">
            <div className="buttons-right">
              <div className="buttons-animate">
                <ButtonDoor content=" % " onClick={() => handleButtonClick(" % ")} />
              </div>
              <div className="buttons-animate">
                <ButtonDoor content=" £ " onClick={() => handleButtonClick(" £ ")} />
              </div>
              <div className="buttons-animate">
                <ButtonDoor content=" $ " onClick={() => handleButtonClick(" $ ")} />
              </div>
              <div className="buttons-animate">
                <ButtonDoor content=" + " onClick={() => handleButtonClick(" + ")} />
              </div>
            </div>
          </div>
        </div>
        <img className="door-background" src={DoorBackground} alt="door's enigma to enter in the Neosia World"></img>
      </div>
    </>
  );
}
