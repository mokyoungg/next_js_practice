import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import ItemList from "../src/component/ItemList";
import { Header, Divider } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const API_URL =
  //   "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  //브라우저 환경
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const getData = () => {
    axios.get(API_URL).then((res) => {
      console.log("res :", res.data);
      setList(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 정적파일로 사용해도 괜찮음
  return (
    <div>
      <Head>
        <title>HOME | 코딩앙마</title>
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          {/* <Loader inline="centerd" active>
            Loading
          </Loader> */}
          <p>loading</p>
        </div>
      )}
      {!isLoading && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          {list && <ItemList list={list.slice(0, 9)} />}
        </>
      )}
    </div>
  );
}

//1번 pr
//2번, 현재 pr은 open, 현상태에서 git push
