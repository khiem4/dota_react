import { useEffect, useState } from "react";
import { HeroStats } from "../types";
import { Link } from "react-router-dom";
import { getHeroStats, Hero_Icon_Url } from "../services/openDotaApi";

function HeroStats() {
    const [heroes, setHeroes] = useState<HeroStats[]>()

    useEffect(() => {
        (async () => {
            const res = await getHeroStats()
            setHeroes(res)
        })()
    }, [])

    if (heroes) {
        return (
            <>
                {heroes.map((hero, i) =>
                    <div key={i}>
                        <div >
                            <img
                                src={`${Hero_Icon_Url}/${hero.name.replace("npc_dota_hero_", "")}.png?`}
                                alt={hero.localized_name}
                            />
                            <Link to={`/heroes/${hero.id}`}>
                                <p>{hero.localized_name}</p>
                            </Link>
                        </div>
                        <div>
                            <div style={{ display: '' }}>
                                <div>
                                    <div>
                                        <p>{hero.attack_type}</p>
                                        {hero.roles.map(role =>
                                            <div>{role}</div>
                                        )}
                                    </div>
                                    <div>
                                        <p>{hero.primary_attr}</p>
                                        <p>str: {hero.base_str} + {hero.str_gain}</p>
                                        <p>agi: {hero.base_agi} + {hero.agi_gain}</p>
                                        <p>int: {hero.base_int} + {hero.int_gain}</p>

                                    </div>
                                </div>
                                <div>
                                    <HeroDamage hero={hero} />
                                    <p>Attack range: {hero.attack_range}</p>
                                    <p>Base armor: {hero.base_armor}</p>
                                    <p>Move speed: {hero.move_speed}</p>
                                </div>
                                <div style={{ color: 'red' }}>
                                    <p>pro_pick {hero.pro_pick}</p>
                                    <p>pro_ban {hero.pro_ban}</p>
                                    <p>pro_win rate {((hero.pro_win / hero.pro_pick) * 100).toFixed(2)} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
    }

    return null
}

function HeroDamage({ hero }: { hero: HeroStats }) {
    if (hero.primary_attr === 'agi') {
        return (
            <p>
                Damage: {hero.base_attack_min + hero.base_agi}
                - {hero.base_attack_max + hero.base_agi}
            </p>
        )
    }
    if (hero.primary_attr === 'str') {
        return (
            <p>
                Damage: {hero.base_attack_min + hero.base_agi}
                - {hero.base_attack_max + hero.base_str}
            </p>
        )
    }
    if (hero.primary_attr === 'int') {
        return (
            <p>
                Damage: {hero.base_attack_min + hero.base_agi}
                - {hero.base_attack_max + hero.base_int}
            </p>
        )
    } else {
        return (
            <p>
                Damage: {Math.round(
                    (hero.base_agi + hero.base_str + hero.base_int)
                    * 0.7 + hero.base_attack_min)}
                - {Math.round(
                    (hero.base_agi + hero.base_str + hero.base_int)
                    * 0.7 + hero.base_attack_max)}
            </p>
        )
    }
}


export default HeroStats