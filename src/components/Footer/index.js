import styles from "./Footer.module.css"
import Botao from "../Botao";
function Footer() {
    return (
        <footer className={styles.footer} >
            <h2>My First APP React JS &copy; Desenvolvido por Ane K. Gonçalves 2024</h2>
            <a href="#"><Botao /></a>
        </footer>
    );
}

export default Footer;