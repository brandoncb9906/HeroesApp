import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { GetHeroesById } from '../../selectors/GetHeroesById';


export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => GetHeroesById(heroeId), [heroeId])
    //const hero = GetHeroesById(heroeId);

    if (hero.length === 0) {
        return <Redirect to="/" />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero[0];

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack();
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter Ego: </b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance: </b> {first_appearance}
                    </li>

                    <h5 className="m-1"> Characters</h5>
                    <p className="m-1">{characters}</p>

                    <button
                        className="btn btn-outline-info"
                        onClick={handleReturn}
                    >Go Back</button>
                </ul>
            </div>
        </div>
    )
}
