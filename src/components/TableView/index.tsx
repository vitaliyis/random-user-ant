import React from 'react';
import {Table, Image, Typography, Avatar, Space} from 'antd';
import {getRandomID, transformDate} from '../../utils/utils';
import classNames from "classnames";

import styles from './TableView.module.scss';

const { Paragraph, Text } = Typography;

type PropsType = {
  contacts: Array<any>
}

const TableView: React.FC<PropsType> = ({contacts}) => {

  console.log('contacts TableView => ', contacts)

  const dataSource = contacts.map(contact => {
    return {
      key: contact.key,
      // avatar: <img style={{borderRadius: '50%'}} src={contact.picture.thumbnail} alt=""/>,
      avatar: contact.picture.thumbnail,
      fullname: `${contact.name.title}. ${contact.name.first} ${contact.name.last}`,
      birthday: <Space direction="vertical">
                  <Text>{transformDate(contact.dob.date)}</Text>
                  <Text>{contact.dob.age} year</Text>
                </Space>,
      email: <Paragraph
              className={classNames(styles.fullnameText, styles.textIconCopy)}
              copyable={{ text: contact.email }}
              >
                <div className={styles.textEmail}>{contact.email}</div>
              </Paragraph>,
      phone: <Paragraph
                className={classNames(styles.fullnameText, styles.textIconCopy)}
                copyable={{ text: contact.phone }}
              >
                <div className={styles.textEmail}>{contact.phone}</div>
              </Paragraph>,
      location: <Paragraph
                copyable
                style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end'}}
                >
                  <Space direction="vertical" style={{marginLeft: 4}}>
                    <Text strong>/{contact.location.country}/</Text>
                    <Text>{`${contact.location.street.number} ${contact.location.street.name}`}</Text>
                    <Text>{`${contact.location.country} ${contact.location.postcode}`}</Text>
                  </Space>
                </Paragraph>,
      nationality: contact.nat
    }
  })

  // const dataSource = [
  //   {
  //     key: '1',
  //     avatar: 'Mike',
  //     age: 32,
  //     address: '10 Downing Street',
  //   },
  //   {
  //     key: '2',
  //     name: 'John',
  //     age: 42,
  //     address: '10 Downing Street',
  //   },
  // ];

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (image: string) => <Avatar size={48} src={<Image src={image} />} />
    },
    {
      title: 'Full name',
      dataIndex: 'fullname',
      key: 'fullname',
      render: (text: string) => <span className={classNames(styles.fullnameText, 'fullname-global-text')}>{text}</span>
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Nationality',
      dataIndex: 'nationality',
      key: 'nationality',
    },
  ];

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{position: ['topRight', 'bottomRight']}}
    />
  );
}

export default TableView;
