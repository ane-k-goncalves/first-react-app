import styles from "./Card.module.css"
function Card({ id }) {
    return (
        <section classsName={styles.card}>
                <a href={`https://www.youtube.com/watch?v=${id}`}
                rel="noreferrer noopener"
                target="_blank">
                <img src={`/images/joji-i.jpg`} alt="Capa" />
            </a>
        </section>
    )

}

export default Card;