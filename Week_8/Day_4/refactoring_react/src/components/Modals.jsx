import React, { useState } from 'react';
import { Col, Row, Modal, Input, message } from 'antd/es';
import MentionsTagsComponent from './MentionsTagsComponent';
import Data from '../assets/data.json';


const Modals = ( props ) => {
  const [hashtags, setHashtags] = useState('Your hashtags here');
  const [mentions, setMentions] = useState('Your mentions here');
  const [description, setDescription] = useState('Your description here');
  const [email, setEmail] = useState(Data.email);
  const [firstname, setFirstname] = useState(Data.firstname);
  const [lastname, setLastname] = useState(Data.lastname);
  const [phoneNumber, setPhoneNumber] = useState(Data.phoneNumber);

  const uploadPublication = () => {
    alert("J'upload une image avec la description : " + description + " et les hashtags " + hashtags + " et les mentions " + mentions);
  }

  const updateHashtags = (value) => {
    setHashtags(value);
  }

  const updateMentions = (value) => {
    setMentions(value);
  }

  const updateProfile = () => {
    message.success('Profile well updated', 3);
  }

  return (
    <>
      <Modal title="Edit your profile" okText="Update" visible={props.editProfileModal} onOk={updateProfile} onCancel={() => props.setEditProfileModal(false)}>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>EMail</b>
            <Input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Firstname</b>
            <Input id="firstname" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Lastname</b>
            <Input id="lastname" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Phone number</b>
            <Input id="email" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </Col>
        </Row>
      </Modal>

      <Modal title="Upload a publication" okText="Upload" visible={props.editPublicationModal} onOk={uploadPublication} onCancel={() => props.setEditPublicationModal(false)}>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Description:</b>
            <Input id="description" title="Description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Col>
        </Row>
        <MentionsTagsComponent type="mentions" value={mentions} title="Mention a user" setValue={updateMentions} />
        <MentionsTagsComponent type="tags" value={hashtags} title="Hashtags" setValue={updateHashtags} />
      </Modal>
    </>
  );
};


export default Modals;