import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <span>My First APP React JS </span>
            <nav>
                <a href="#"> Home</a>
                <a href="#"> Sobre</a>
            </nav>
        </header>
    );
}

export default Header;