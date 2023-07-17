import axios from "axios"

const Base_Url = 'https://api.opendota.com/api'

export async function getHeroStats() {
    const response = await axios.get(`${Base_Url}/heroStats`)
    return response.data
}

export async function getHeroAbilities() {
    const response = await axios.get(`${Base_Url}/constants/hero_abilities`)
    return response.data
}

export async function getAbilities() {
    const response = await axios.get(`${Base_Url}/constants/abilities`)
    return response.data
}

export const Hero_Icon_Url = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes'

export const Abilities_Icon_Url = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities'
