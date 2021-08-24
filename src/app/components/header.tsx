import Navbar from "./navbar";

type HeaderProps = {
  title: String;
};

export default function Header(props: HeaderProps) {
  return (
    <header className="header">
      <p>
        <span className="title">{props.title}</span><br/>
        <span>version 0.4</span>
      </p>
      <Navbar />
    </header>
  );
}
