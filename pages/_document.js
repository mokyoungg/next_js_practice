import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// _app은 글로벌, 레이아웃을 잡음, onClick등도 여기서 사용
// _doucment는 사용하지않음,(서버에서만 렌더링, onClick 사용 x)
