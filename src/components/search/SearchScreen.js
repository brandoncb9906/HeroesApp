import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import { GetHeroesByName } from '../../selectors/GetHeroesByName'

export const SearchScreen = ({ history }) => {

    const [values, handleInputChange] = useForm({
        searchText: ''
    });
    const { searchText } = values;

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const heroesFiltered = useMemo(() => GetHeroesByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
        console.log(q);
    }

    return (
        <div>
            <h1>Search</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            autoComplete="off"
                            type="text"
                            placeholder="Find your hero."
                            className="form-control m-1"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn btn-block m-1 btn-outline-primary"

                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '')
                        &&
                        <div className="alert alert-info">
                            Search a Hero
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            There is not a hero with the name {q}
                        </div>
                    }

                    {
                        heroesFiltered.map(hero => {
                            return (
                                <HeroCard
                                    key={hero.id}
                                    {...hero}
                                />
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}
