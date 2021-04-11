// importing css files
import "./index.css";
import { Header, SideBar, BodyComponent, Footer } from "../layout";

export function Main() {
  return (
    <div id="main-component">
      <Header />
      <SideBar />
      <BodyComponent />
      <Footer />
    </div>
  );
}
