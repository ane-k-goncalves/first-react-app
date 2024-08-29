import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Watch.module.css"

function Watch() {
    return (
        <>
        <Header />
        <Container>
            <section className={styles.watch}>
                <iframe width="854" height="480" src="https://www.youtube.com/embed/NgsWGfUlwJI?si=5P2Q1_v-r2R_usMo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
        </Container>
        <Footer />
        </>
    )
}

export default Watch;