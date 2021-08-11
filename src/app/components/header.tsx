import Navbar from "./navbar";

type HeaderProps = {
  title: String;
};

export default function Header(props: HeaderProps) {
  return (
    <header className="header">
      <span className="title">{props.title}</span>
      <Navbar />
    </header>
  );
}
