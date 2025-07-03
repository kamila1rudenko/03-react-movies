import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { useState } from "react";
import type { FormEvent } from "react";

interface Props {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: Props) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter your search query.");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <a
          className={css.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={css.form}>
          <input
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
