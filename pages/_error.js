//500 에러, 프로덕션에서 볼 수 있게 build를 해야함

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error orrured on client"}
    </p>
  );
}

Error.getInitialProp = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
