import React from "react";
import Image from "next/dist/client/image";
import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

const Top = () => {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          {/* next에선 img태그 대신 Image 태그를 사용해야한다는데? */}
          <Image
            src="/images/angma.png"
            alt="logo"
            width="80"
            height="80"
            style={{ display: "block", width: 80, height: 80 }}
          />
        </div>
        {/* <img src="/images/angma.png" alt='img' />ß */}
        <Header as="h1">코딩앙마</Header>
      </div>
      <Gnb />
    </div>
  );
};

export default Top;

// public 에 imamge가 있으면 정적파일로 제공
// 바로 호출 가능
