import React, {useEffect, useState} from 'react';
import TableView from "../TableView";
import {Alert, Layout} from "antd";
import styles from './Contacts.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {getContacts} from "../../redux/reducers/contacts/contacts.actions";
import HeaderContacts from "../HeaderContacts";
import TileView from "../TileView";
import Spinner from "../common/Spinner";

const { Header, Footer, Sider, Content } = Layout;

const Contacts: React.FC = () => {
  const dispatch = useDispatch();
  const {contacts, loading, error} = useTypedSelector(state => state.contacts)
  console.log('contacts ==> ', contacts)

  const [view, setView] = useState('table');
  console.log('view ===> ', view)

  useEffect(() => {
    dispatch(getContacts())
  }, [])

  return (
    <Layout className={styles.layout}>
      <Content>
        <HeaderContacts
          view={view}
          setView={setView}
        />
        {error && <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
        />}
        {loading && <Spinner />}
        { view === 'table' && !loading ? <TableView contacts={contacts} /> : <TileView contacts={contacts} />}
      </Content>
    </Layout>
  );
}

export default Contacts;
