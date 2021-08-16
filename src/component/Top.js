import React from "react";
//import Image from "next/dist/client/image";
import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

const Top = () => {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        {/* <div style={{ flex: "100px 0 0" }}>
          <Image
            src="/images/angma.png"
            alt="logo"
            style={{ display: "block", width: 80, height: 80 }}
          />
        </div> */}
        <Header as="h1">코딩앙마</Header>
      </div>
      <Gnb />
    </div>
  );
};

export default Top;
