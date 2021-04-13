import React, { useMemo } from 'react'
import { GetHeroesByPublisher } from '../../selectors/GetHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroeList = ({ publisher }) => {

    const heroes = useMemo(() => GetHeroesByPublisher(publisher), [publisher])
    //const heroes = GetHeroesByPublisher(publisher);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => {
                    return (
                        <HeroCard
                            key={hero.id}
                            {...hero}
                        />
                    )
                })
            }
        </div>
    )
}
