import { HeroStats } from "../types";
import { Link } from "react-router-dom";
import { Hero_Icon_Url } from "../services/openDotaApi";
import HeroStatsHover from "./HeroStatsHover";

function HeroStats({ heroes }: { heroes: HeroStats[] }) {
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
                    <HeroStatsHover hero={hero} />
                    <div>
                        <div style={{ display: '' }}>
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

export default HeroStats