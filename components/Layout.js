import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
        <Header/>
        {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
