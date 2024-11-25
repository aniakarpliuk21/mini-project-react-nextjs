'use client';
import React, {useState} from 'react';
import styles from './Form.module.css';
import {useForm} from "react-hook-form";
import {movieService} from "@/services/api.services";
import {ISearchResult} from "@/models/ISearchResult";
import NavLinkComponent from "@/components/navLinkComponent/NavLinkComponent";

interface FormProps {
    text:string;
}
const Form = () => {
    const {handleSubmit,register} = useForm<FormProps>();
    const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);
    const customHandler = async (dataFromForm: FormProps) => {
        const moviesSearch = await movieService.searchMovies(dataFromForm.text);
        setSearchResults(moviesSearch);
    }
    return (
        <div className={styles.search}>
            <form onSubmit={handleSubmit(customHandler)}>
                <input type="text" placeholder="Search..." {...register('text')}/>
                <button className={styles.searchBtn}>
                    <img
                        src={'https://cdn-icons-png.flaticon.com/512/751/751463.png'}
                        alt="Search"
                        className={styles.searchImg}
                    />
                </button>
            </form>
            <div className={styles.results}>
                <h2>Search Results:</h2>
                {
                    searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map((movie) => (
                            <li><NavLinkComponent key={movie.id} path={'/movies/'+movie.id}>{movie.name}</NavLinkComponent></li>))}
                    </ul>
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default Form;