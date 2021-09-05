import React from "react";
import { Menu } from "semantic-ui-react";
import { useRouter } from "next/router";

const Gnb = () => {
  // const activeItem = "home";
  const router = useRouter();

  let activeItem;
  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  }

  const goLink = (e, data) => {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    }
  };

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />
      <Menu.Item
        name="about"
        active={activeItem === "messages"}
        onClick={goLink}
      />
      <Menu.Item
        name="Contact Us"
        active={activeItem === "contact"}
        onClick={() => {
          router.push("/contact");
        }}
      />
    </Menu>
  );
};

export default Gnb;

/**
next의 router, link 쓰는 이유
a 태그를 써도 잘 가긴 함.
a 태그나 로케이션을 사용하면 새로고침이 되서 이동됨.
(요청이 늘어나 spa의 장점이 사라짐)
**/
