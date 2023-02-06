import WorksData from '../../data/WorksData/WorksData';
import { Switch, Space } from 'antd';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { DisplayContext } from '../../pages/Works/Works';
import { useContext } from 'react';

function StudyCase() {
  const context = useContext(DisplayContext) || {};
  const display = context.display || 'link';
  const toggleDisplay = context.toggleDisplay || (() => {});

  const worksCat = useParams();

  const [currentWork, setCurrentWork] = useState([]);

  useEffect(() => {
    const foundWork = WorksData.find((work) => ':' + work.slug === worksCat.worksCat)
    if (foundWork) {setCurrentWork(foundWork);}
  }, [worksCat]);

  return (
    <>
      <div className="NavbarWorks">
        <Link to="/works">Works</Link>
        <Space direction="vertical">
          <Switch
            checked={display === 'link'}
            checkedChildren="🔗"
            unCheckedChildren="🪪"
            onChange={toggleDisplay}
          />
        </Space>
        <div>
          {display === 'link' ?
            WorksData.map((work) => (
              <Link to={`/works/:${work.slug}`} key={work.slug}>{work.slug}</Link>
            ))
            :
            WorksData.map((work) => (
              <Link to={`/works/:${work.slug}`} key={work.slug} style={{ visibility: 'hidden' }}>{work.slug}</Link>
            ))
          }
        </div>
      </div>
      <div>
        <h1>{currentWork.title}</h1> 
        <p>{currentWork.content}</p>
      </div> 
      <div className="card-container">
        {display === 'card' ?
          WorksData.map((work) => (
            <Link to={`/works/:${work.slug}`} key={work.slug}>
              <div className="card">
                <h3>{work.slug}</h3>
                <p>{work.title}</p>
              </div> 
            </Link>  
          ))
          :
          <div> </div>
        }
      </div>
    </>
  );

}

export default StudyCase;