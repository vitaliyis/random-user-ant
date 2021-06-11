import React from "react";
import {Card, Col, Row, Space, Typography, Image} from "antd";

import styles from './TileView.module.scss';

const { Title, Paragraph, Text } = Typography;

type PropsType = {
  contacts: any[]
}

const TileView: React.FC<PropsType> = ({contacts}) => {
  return (
    <Row gutter={16}>
      {contacts.map(contact => {
        return (
          <Col span={8} key={contact.key}>
            <Card
              hoverable
              cover={
                <Image
                  alt="example"
                  src={contact.picture.large}
                  preview={{
                    src: contact.picture.large,
                  }}
                />
              }
            >
              <Title level={4}>
                {`${contact.name.title}. ${contact.name.first} ${contact.name.last} (${contact.dob.age} years)`}
              </Title>
              <Paragraph
                copyable
                className={styles.textIconCopy}
              >
                <div className={styles.textEmail}>{contact.email}</div>
              </Paragraph>
              <Paragraph
                copyable
                className={styles.textIconCopy}
              >
                <div className={styles.textEmail}>{contact.phone}</div>
              </Paragraph>
              <Paragraph
                style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end'}}
                copyable={{text: `${contact.location.street.number} ${contact.location.street.name} ${contact.location.country} ${contact.location.postcode}`}}>
                <Space direction="vertical" style={{marginLeft: 4}}>
                  <Text>{`${contact.location.street.number} ${contact.location.street.name}`}</Text>
                  <Text>{`${contact.location.country} ${contact.location.postcode}`}</Text>
                </Space>
              </Paragraph>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default TileView;
