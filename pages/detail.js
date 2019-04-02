import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";

const Detail = (props) => {
  // noinspection JSUnresolvedVariable
  return (
    <Layout>
      <h1>{props.headset.name}</h1>
      <p>{props.headset.vendor}</p>
      <img alt="" src={props.headset.image.large} />
    </Layout>
  );
};

Detail.getInitialProps = async (context) => {
  const { id } = context.query;

  const res = await fetch(`https://my-app.bni.now.sh/api/headsets/${id}`);

  const data = await res.json();

  return {
    headset: data
  };
};

export default Detail;
