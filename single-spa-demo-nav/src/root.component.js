import "./root.component.css";

export default function Root(props) {
  // return <section>{props.name} is mounted!</section>;
  return (
    <nav className="nav">
    <a href="/page1" className="link">
      Page 1
    </a>
    <a href="/page2" className="link">
      Page 2
    </a>
  </nav>
  )
}
