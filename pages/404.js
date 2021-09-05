// 404는 정적으로 보여주는게 좋음
import { Icon } from "semantic-ui-react";

//빌드타임에 정적 생성 됨
export default function Error404() {
  return (
    <div style={{ padding: "200px 0", textAlign: "center", fontSize: 30 }}>
      <Icon name="waring circle" color="red" />
      404 : 페이지를 찾을 수 없습니다.
    </div>
  );
}
