// Import Styles
import styles from "./footer.module.scss";
// Import custom component
import Container from "./container";
import Nav from "./nav";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Nav.SocialMedia />
      </Container>
    </footer>
  );
};

export default Footer;
