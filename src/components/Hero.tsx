import { useEffect, useState } from "react"
import { HeroAbilities } from "../types"
import { getHeroAbilities } from "../services/openDotaApi"

function Hero() {
    const [hero, setHero] = useState<HeroAbilities>()
    console.log('hero:', hero)

    useEffect(() => {
        (async () => {
            const res = await getHeroAbilities()
            setHero(res)
        })()
    }, [])

    if (hero) {
        return (
            <>
            </>
        )
    }

    return null
}

export default Hero