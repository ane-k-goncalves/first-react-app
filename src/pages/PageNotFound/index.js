import Footer from "../../components/Footer";
import Header from "../../components/Header";
import error404 from "./404error.png"
import styles from "./PageNotFound.module.css"

function PageNotFound() {
    return(
        <>
            <Header />
            <section className={styles.container}>
                <h2>Página não localizada!</h2>
                <img src={error404} alt="logo pag não localizada"/>
            </section>
            <Footer />
        </>
    );
}

export default PageNotFound;