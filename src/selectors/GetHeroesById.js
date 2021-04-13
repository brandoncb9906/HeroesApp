import { heroes } from "../data/heroes";

export const GetHeroesById = (id) => {

    return heroes.filter(heroe => heroe.id === id);
}
