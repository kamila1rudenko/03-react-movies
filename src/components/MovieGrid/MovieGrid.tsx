import css from "../MovieGrid/MovieGrid.module.css";

export default function MovieGrid() {
  return (
    <ul className={css.grid}>
      <li>
        <div className={css.card}>
          <img
            className={css.image}
            src="https://image.tmdb.org/t/p/w500/poster-path"
            alt="movie title"
            loading="lazy"
          />
          <h2 className={css.title}>Movie title</h2>
        </div>
      </li>
    </ul>
  );
}
