import React, { useState } from 'react';
import Modals from './Modals';
import { Avatar, Button, Card, Col, Icon, Row } from 'antd/es';
import Data from '../assets/data.json';


const Header = () => {
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [editPublicationModal, setEditPublicationModal] = useState(false);

  const profile = Data.profileData;

  const formatDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  }

  return (
    <>
      <Row type="flex" align="middle" justify="center">
        <Col sm={16} xs={24}>
          <Card bordered>
            <Row type="flex" align="middle" justify="center">
              <Col md={14} sm={16} xs={24}>
                <Row type="flex" justify="space-between">
                  <Col span={10} className="text-center">
                    <Avatar size={100} icon="user" className="profil-pic" src={profile.profilePicture} />
                    <h3>{`${profile.firstname} ${profile.lastname}`}</h3>
                  </Col>
                  <Col span={10}>
                    <p>
                      <Icon type="user" className="p-icon" />
                      {profile.username}
                    </p>
                    <p>
                      <Icon type="mail" className="p-icon" />
                      {profile.email}
                    </p>
                    <p>
                      <Icon type="phone" className="p-icon" />
                      {profile.phoneNumber}
                    </p>
                    <p>
                      <Icon type="calendar" className="p-icon" />
                      {formatDate(profile.createdAt)}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={10} sm={16} xs={24} className="text-center">
                <Button type="ghost" icon="setting" onClick={ () => setEditProfileModal(true) }>Edit profile</Button>
                <br />
                <br />
                <Button type="ghost" icon="upload" onClick={ () => setEditPublicationModal(true) }>Upload a publication</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Modals 
        editProfileModal={editProfileModal}
        setEditProfileModal={setEditProfileModal}
        editPublicationModal={editPublicationModal}
        setEditPublicationModal={setEditPublicationModal}
      />
    </>
  );  
};  

export default Header;