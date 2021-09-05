import axios from "axios";
import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";
import Head from "next/dist/shared/lib/head";

// 최신상태 유지, 서버사이드 렌더링 필요
const Post = ({ item, name }) => {
  //서버사이드 렌더링을 하면서 이제 필요가 없어진 코드
  // const router = useRouter();
  // const { id } = router.query;

  // const [item, setItem] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  // function getData() {
  //   Axios.get(API_URL).then((res) => {
  //     setItem(res.data);
  //     setIsLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   if (id && id > 0) {
  //     getData();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [id]);

  console.log("item:", item);

  console.log("name:", name);

  return (
    // <>
    //   {isLoading && <p>loading</p>}
    //   {!isLoading && <Item item={item} />}
    // </>
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="descrition" content={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} />)
        </>
      )}
    </>
  );
};

export default Post;

//서버사이드 부분
export async function getServerSideProps(context) {
  //view/ 이후의 숫자들
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}

/**
 Nest js 모든 페이지 사전 렌더링(Pre-rendering)
 더 좋은 퍼포먼스
 검색엔진최적화(SEO)

 1. 정적 생성
 2. Server Side Rendering(SSR, Dynamic Rendering)

 차이점은 언제 html 파일을 생성하는가

 [정적생성]
 - 프로젝트가 빌드하는 시점에 html 파일들이 생성
 - 모든 요청에 재사용
 - 퍼모먼스 이유로, 넥스트 js는 정적 생성을 권고
 - 정적 생성된 페이지들은 CDN에서 캐시
 - getStaticProps / getStaticePraths

 [서버사이트 렌더링]은 매 요청마다 html을 생성
 - 항상 최신 상태 유지
 - getServerSideProps


미리 페이지를 생성해도 상관없을경우, 정적생성
>> 블로그게시판, 마케팅

 */
