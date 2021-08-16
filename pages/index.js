import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import ItemList from "../src/component/ItemList";
import { Header, Divider } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const fetchData = () => {
    axios.get(API_URL).then((res) => {
      console.log("res", res);
      setList(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | 코딩앙마</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
    </div>
  );
}

//1번 pr
