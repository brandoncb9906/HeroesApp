import { heroes } from "../data/heroes";


export const GetHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher ${publisher} does not exists.!`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
}
