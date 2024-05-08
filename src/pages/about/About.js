import { Link } from "react-router-dom";
import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.about}>
      <h1>Pag. Sobre</h1>
      <p>
        Este Projeto consiste em um blog feito com React-JS no front-end. E
        Firebase no back-end
      </p>
      <Link to="/posts/create" className="btn">Criar Post</Link>
    </div>
  );
};

export default About;
