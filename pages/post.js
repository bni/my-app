import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";

const Post = (props) => {
  // noinspection JSUnresolvedVariable,JSDeprecatedSymbols
  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[\/]?p>/g, '')}</p>
      <img alt="" src={props.show.image.medium} />
    </Layout>
  );
};

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`http://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
