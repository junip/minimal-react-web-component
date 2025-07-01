import r2wc from "@r2wc/react-to-web-component";
import App from "../components/blog/App";

const component = r2wc(App, { props: { appName: "string" } });

customElements.define("react-blog-app", component);
