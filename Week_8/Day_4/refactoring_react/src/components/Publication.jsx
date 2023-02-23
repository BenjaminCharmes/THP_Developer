import React, { useState } from 'react';
import Data from '../assets/data.json';
import { Modal, List, Tag, Button, Card, Col, Row } from 'antd/es';

const Publication = ( {id} ) => {
  const [preview, setPreview] = useState(false);
  const publication = Data.profileData.posts[id];

  const deletePublication = () => alert("Je supprime la publcation avec l'id : " + publication.id);
  const updatePublication = () => alert("J'update la publcation avec l'id : " + publication.id);

  return (
    <>
      <Card bordered className="card-pubs" onClick={() => setPreview(true)}>
        <img src={publication.imageUrl} width={200} height={200} alt={publication.imageUrl} />
      </Card>

      <Modal 
        width={520} 
        visible={preview} 
        onCancel={ () => setPreview(false) }
        footer={
          <Row type="flex">
            <Col span={12} className="text-center">
              <Button type="ghost" icon="edit" onClick={updatePublication}>Edit</Button>
            </Col>
            <Col span={12} className="text-center">
              <Button type="danger" icon="delete" onClick={deletePublication}>Delete</Button>
            </Col>
          </Row>
        }
      >
        <Row type="flex" align="middle">
          <Col xs={24} md={12} className="text-center">
            <img src={publication.imageUrl} width={200} height={200} alt={publication.description} />
          </Col>
          <Col xs={24} md={12}>
            <div>
              <b>Description: </b>
              <p>{publication.description}</p>
            </div>
            <div>
              <b>Hashtag:</b>
              <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={publication.hashtags}
                renderItem={(tag) => (
                  <List.Item>
                    <Tag>{`${tag}`}</Tag>
                  </List.Item>
                )}
              />
            </div>
            <div>
              <b>Mention:</b>
              <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={publication.mentions}
                renderItem={(user) => (
                  <List.Item>
                    <Tag>{`@${user}`}</Tag>
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default Publication;