import { Hero } from "../types"

function HeroStatsHover({ hero }: { hero: Hero }) {
    return (
        <div>
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
        </div>
    )
}

function HeroDamage({ hero }: { hero: Hero }) {
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

export default HeroStatsHover