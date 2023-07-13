import { useEffect, useState } from "react";
import { heroStats } from "../types";
import axios from "axios";

function Heroes() {
    const [heroes, setHeroes] = useState<heroStats[]>()

    useEffect(() => {
        axios
            .get('https://api.opendota.com/api/heroStats')
            .then(res => setHeroes(res.data))
    }, [])

    if (heroes) {
        return (
            <>
                {heroes.map((hero, i) => 
                    <div key={i}>
                        {hero.localized_name}
                    </div>
                )}
            </>
        )
    }

    return null
}

export default Heroes