import { cards } from '../card/cards_catalog.js';


export type Card = {
    slug: string,
    mn_image_link: string,
    language: string,
    competitive_limit: number,
    other_languages: object,
    name: string,
    element: string,
    type: string,
    subtype: string,
    lifepoints: number | string |null,
    mana_cost: Record<string, string|number|undefined>,
    components: Record<string, string|number|undefined>,
    effect: string,
    illustration: string,
    flavor_text: string,
    extension: string
    notes: string[],
}

export function load() {
    return { cards: cards };
}
