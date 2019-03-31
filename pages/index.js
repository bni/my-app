import Layout from "../components/Layout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = (props) => {
  return (
    <Layout>
      <div className="container">

        {props.headsets.map((headset) => (
          <div className="row" key={headset.id}>
            <div className="col-sm">
              <Link as={`/detail/${headset.id}`} href={`/detail?id=${headset.id}`}>
                <a>{headset.name}</a>
              </Link>
            </div>
          </div>
        ))}

      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch("https://my-app.bni.now.sh/api/headsets");

  const data = await res.json();

  return {
    headsets: data
  };
};

export default Index;
