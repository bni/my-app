import Layout from "../components/Layout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = (props) => {
  return (
    <Layout>

      <style jsx>{`
        img {
          object-fit: cover;
          width: 300px;
          height: 300px;
          border-radius: 50%;
        }
        .card {
          text-align:center; padding: 1rem;
        }
        span {
          display: block;
          cursor: pointer;
        }
      `}</style>

      <figure className="container">
        <div className="row">

          {props.headsets.map((headset) => (
            <Link as={`/detail/${headset.id}`} href={`/detail?id=${headset.id}`} key={headset.id}>

              <span className="card">
                <div>
                  <img alt="" src={headset.image.large}/>
                </div>
                <br/>
                <a>{headset.name}</a>
              </span>

            </Link>
          ))}

        </div>

      </figure>
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
