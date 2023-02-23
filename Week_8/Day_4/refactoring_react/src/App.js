// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React from 'react';
import { Col, Icon, Row } from 'antd/es';
import Header from './components/Header';
import Publication from './components/Publication';


const App = () => {

  return (
    <div style={{ margin: 50 }}>
      <Header />      

      <Row type="flex" justify="center">
        <Col sm={18} xs={24}>
          <Col span={24} className="container text-center">
            <h2>
              <Icon type="save" />
              <span className="span-icon">Publications</span>
            </h2>
            <Publication id={0}/>
            <Publication id={1}/>
            <Publication id={2}/>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default App;
