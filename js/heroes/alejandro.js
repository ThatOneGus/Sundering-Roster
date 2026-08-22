const alejandro = {
    name: "Alejandro",

    title: "The Crown Prince of Elaris",

    role: "Catalyst",

    secondaryRoles: [
        "Playmaker",
        "Controller"
    ],

    region: "Elaris",

    thumbnail:
        "Assets/Heroes/Alejandro/IMG_6309.png",

    heroArt:
        "Assets/Heroes/Alejandro/IMG_6308.png",

    description:
        "Firstborn to the royal family of Elaris, Alejandro was groomed for leadership from the moment he could speak. With a silver tongue and unmatched charisma, he became the face of diplomacy, often venturing far from the kingdom’s borders to strengthen alliances. ...or so he says.",

    profile: {

        damage: 6,

        survivability: 5,

        crowdControl: 7,

        mobility: 4,

        support: 8,

        range: 7

    },

    skins: [

        {
            name: "Default",

            rarity: "Base",

            thumbnail:
                "Assets/Heroes/Alejandro/IMG_6309.png",

            splash:
                "Assets/Heroes/Alejandro/IMG_6308.png"
        },

        {
            name: "Island Paradise",

            rarity: "Legendary",

            thumbnail:
                "Assets/Heroes/Alejandro/Skins/Island-Paradise/thumbnail.png",

            splash:
                "Assets/Heroes/Alejandro/Skins/Island-Paradise/splash.png"
        },

        {
            name: "Elarian Heir",

            rarity: "Legendary",

            thumbnail:
                "Assets/Heroes/Alejandro/Skins/Elarian-Heir/thumbnail.png",

            splash:
                "Assets/Heroes/Alejandro/Skins/Elarian-Heir/splash.png"
        },

        {
            name: "Auroral Frostbloom",

            rarity: "Legendary",

            thumbnail:
                "Assets/Heroes/Alejandro/Skins/Elarian-Heir/thumbnail.png",

            splash:
                "Assets/Heroes/Alejandro/Skins/Elarian-Heir/splash.png"
        },

        {
            name: "Campus Royalty",

            rarity: "Epic",

            thumbnail:
                "Assets/Heroes/Alejandro/Skins/Elarian-Heir/thumbnail.png",

            splash:
                "Assets/Heroes/Alejandro/Skins/Elarian-Heir/splash.png"
        },

        {
            name: "Halloween",

            rarity: "Legendary",

            thumbnail:
                "Assets/Heroes/Alejandro/Skins/Elarian-Heir/thumbnail.png",

            splash:
                "Assets/Heroes/Alejandro/Skins/Elarian-Heir/splash.png"
        },

        {
            name: "Sinful Temptation",

            rarity: "Legendary",

            thumbnail:
                "Assets/Heroes/Alejandro/Skins/Elarian-Heir/thumbnail.png",

            splash:
                "Assets/Heroes/Alejandro/Skins/Elarian-Heir/splash.png"
        }

    ],

    conceptArt: [

        {
            title: "Early Silhouette",

            image:
                "Assets/Heroes/Alejandro/Concept-Art/early-silhouette.png",

            description:
                "An early exploration of Alejandro's silhouette and Bud design."
        },

        {
            title: "Bud Exploration",

            image:
                "Assets/Heroes/Alejandro/Concept-Art/bud-exploration.png",

            description:
                "Early concepts exploring the Bud's shape and floral manifestations."
        },

        {
            title: "Final Costume Study",

            image:
                "Assets/Heroes/Alejandro/Concept-Art/final-costume.png",

            description:
                "A closer look at Alejandro's finalized royal costume."
        }

    ],
    
    abilities: [

        /* =====================================================
           PASSIVE
        ===================================================== */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Blooming Influence",

            icon:
                "Assets/Heroes/Alejandro/Abilities/IMG_6601.png",

            preview:
                "assets/heroes/alejandro/abilities/blooming-influence-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Enemies who remain near Alejandro's psychic power become Beguiled, allowing Alejandro to turn their aggression against them.",

            detailedDescription:
                "Enemies within 20m of Alejandro or a Seed who maintain line of sight for 2 seconds become Beguiled. Beguiled enemies are revealed to allies. If Beguiled enemies hit Alejandro with a form of Hard CC, they are Charmed in return and are left vulnerable while walking. Beguile ends if they leave the Seed’s influence radius. Enemies hit by an exploding Seed reduce Blooming Influence's internal cooldown.",

            stats: {

                "Beguile Range":
                    "20m",

                "Line of Sight Duration":
                    "2 sec",

                "Vulnerability":
                    "10%",

                "Charmed Duration":
                    "1 sec",

                "Internal Cooldown":
                    "15 sec",

                "Exploding Seed Cooldown Reduction":
                    "-2 sec"

            }

        },


        /* =====================================================
           PRIMARY FIRE
        ===================================================== */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Blooming Budshot",

            icon:
                "Assets/Heroes/Alejandro/Abilities/IMG_6603.png",

            preview:
                "assets/heroes/alejandro/abilities/blooming-budshot-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire piercing bolts of psychic energy from the Bud to damage enemies or heal allies. The first bolt to hit an obstacle or terrain explodes.",

            detailedDescription:
                "Fire piercing bolts of psychic energy from the Bud to damage enemies or heal allies. 4 bolts are fired in quick succession. The first bolt hit per round deals significantly more damage or healing than subsequent bolts. The first bolt to hit an obstacle or terrain will explode. The bolts will instantly Bloom any Seeds hit from Wildroot Surge.",

            stats: {

                "First Hit Healing/Damage":
                    "20",

                "Subsequent Shots Healing/Damage":
                    "10",

                "Shot Explosion Healing/Damage":
                    "15",

                "Explosion Radius":
                    "3m",

                "Fire Rate":
                    "0.8 sec per full round",

                "Attack Intervals":
                    "0.05 sec between each shot per round",

                "Projectile Speed":
                    "Hitscan",

                "Falloff":
                    "Starting at 20m, decreasing to 80% at 40m",

                "Can Crit":
                    "Yes"

            }

        },


        /* =====================================================
           ABILITY 1
        ===================================================== */

        {
            type: "Ability 1",

            key: "M2",

            name: "Verdant Pulse",

            icon:
                "Assets/Heroes/Alejandro/Abilities/IMG_6607.png",

            preview:
                "assets/heroes/alejandro/abilities/verdant-pulse-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Release a wave of psychic floral energy that heals allies, damages and shoves enemies, and leaves behind a movement-enhancing trail.",

            detailedDescription:
                "Release a wave of psychic floral energy from the Bud. The wave heals allies while damaging and shoving enemies slightly. The first 2 enemies hit by the center of the pulse are Rooted. The pulse leaves behind a flourishing trail that grants Movement Speed to allies. The pulse will instantly Bloom any Seeds hit from Wildroot Surge.",

            stats: {

                "Healing/Damage":
                    "40",

                "Maximum Distance":
                    "35m",

                "Shove Distance":
                    "5m",

                "Projectile Speed":
                    "80m/s",

                "Root Hitbox":
                    "0.8m Radius",

                "Pulse Hitbox":
                    "2.5m Radius",

                "Trail Duration":
                    "5 sec",

                "Root Duration":
                    "2.5 sec",

                "Movement Speed Boost":
                    "+40%",

                "Cooldown":
                    "8 sec"

            }

        },


        /* =====================================================
           ABILITY 2
        ===================================================== */

        {
            type: "Ability 2",

            key: "E",

            name: "Wildroot Surge",

            icon:
                "Assets/Heroes/Alejandro/Abilities/IMG_6606.png",

            preview:
                "Assets/Heroes/Alejandro/Abilities/wildroot-surge-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Plant psychic Seeds that grow through nearby healing or damage before Blooming in an area.",

            detailedDescription:
                "Plant a psychic Seed at a target location. Planting a Seed slightly knocks back enemies in the area. After a duration, the Seed Blooms and explodes, healing allies and damaging enemies. Seeds grow based on healing or damage done within their area depending on the Bud's current alignment.",

            stats: {

                "Knockback Distance":
                    "2 m",

                "Range":
                    "20 m",

                "Maximum Active Seeds":
                    "3",

                "Charges":
                    "3",

                "Recharge Time":
                    "5 sec",

                "Duration":
                    "8 sec"

            },


            sections: [

                {
                    name:
                        "Flourishing Bud",

                    color:
                        "green",

                    description:
                        "The Seed heals allies over time and grows based on healing done within its area, increasing its size and healing. If planted in Verdant Pulse's trail or the Garden of Burgeoning Florescence, the healing required for full growth is halved.",

                    details: {

                        "Healing":
                            "15 HP/s → 35 HP/s",

                        "Radius":
                            "3 m → 6 m",

                        "Healing Required for Full Growth":
                            "250",

                        "Healing Required on Trail or in Garden":
                            "125",

                        "Bloom Burst Healing":
                            "40 → 60",

                        "Bloom Burst Damage":
                            "25"

                    }

                },


                {
                    name:
                        "Wilting Bud",

                    color:
                        "violet",

                    description:
                        "The Seed Slows enemies in its area and grows based on damage done within its area, increasing its size and damage. If planted in Verdant Pulse's trail or the Garden of Burgeoning Florescence, the damage required for full growth is halved.",

                    details: {

                        "Slow Rate":
                            "20%",

                        "Radius":
                            "4 m → 8 m",

                        "Damage Required for Full Growth":
                            "250",

                        "Damage Required on Trail or in Garden":
                            "125",

                        "Bloom Burst Damage":
                            "30 → 50",

                        "Bloom Burst Healing":
                            "35"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 3 — GRAND FLOURISH
        ================================================= */

        {
            type: "Ability 3",

            key: "SHIFT",

            name: "Grand Flourish",

            icon:
                "Assets/Heroes/Alejandro/Abilities/IMG_6612.png",

            preview:
                "Assets/Heroes/Alejandro/Abilities/grand-flourish-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Bloom a massive flower beneath Alejandro to launch forward, affect nearby heroes, and gain Movement Speed upon landing.",

            detailedDescription:
                "Alejandro conjures a massive psychic flower beneath himself that violently blooms, launching him in the direction he is currently moving. The flower heals allies and damages enemies around him. Upon landing, Alejandro gains increased Movement Speed for a short duration. The flower instantly Blooms any Seeds hit from Wildroot Surge.",

            stats: {

                "Launch Distance":
                    "10 m",

                "Healing":
                    "45",

                "Damage":
                    "45",

                "Radius":
                    "6 m",

                "Movement Speed Boost":
                    "+50%",

                "Movement Speed Boost Duration":
                    "3 sec",

                "Cooldown":
                    "11 sec"

            }

        },


        /* =================================================
           ABILITY 4 — COROLLA CONVERSION
        ================================================= */

        {
            type: "Ability 4",

            key: "F",

            name: "Corolla Conversion",

            icon:
                "Assets/Heroes/Alejandro/Abilities/IMG_6611.png",

            preview:
                "Assets/Heroes/Alejandro/Abilities/corolla-conversion-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Switch the Bud between Flourishing and Wilting manifestations, specializing Alejandro toward healing or damage.",

            detailedDescription:
                "Switch between the Bud's two manifestations. Casting Corolla Conversion initially grants +10% increased healing or damage based on the selected manifestation. The bonus gradually increases to +50%, increasing by 25% per second until reaching its maximum.",

            stats: {

                "Initial Bonus":
                    "+10%",

                "Maximum Bonus":
                    "+50%",

                "Bonus Increase Rate":
                    "+25%/sec",

                "Time to Maximum":
                    "1.5 sec",

                "Switch Time":
                    "0.2 sec",

                "Cooldown":
                    "None"

            },


            sections: [

                {
                    name:
                        "Flourishing Bud",

                    color:
                        "green",

                    description:
                        "The Bud manifests in its Flourishing form, specializing Alejandro toward healing.",

                    details: {

                        "Maximum Healing Increase":
                            "+50%"

                    }

                },


                {
                    name:
                        "Wilting Bud",

                    color:
                        "violet",

                    description:
                        "The Bud manifests in its Wilting form, specializing Alejandro toward damage.",

                    details: {

                        "Maximum Damage Increase":
                            "+50%"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — BURGEONING FLORESCENCE
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Burgeoning Florescence",

            icon:
                "Assets/Heroes/Alejandro/Abilities/IMG_6610.png",

            preview:
                "Assets/Heroes/Alejandro/Abilities/burgeoning-florescence-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Channel the full power of the Bud into an enormous psychic blossom that creates a Garden based on Alejandro's current alignment.",

            detailedDescription:
                "Alejandro becomes CC Immune and channels the full power of his Bud into an enormous psychic blossom before launching it forward. All Wildroot Surge Seeds inside the Garden's initial explosion instantly Bloom. Seeds planted within the Garden afterward Bloom significantly faster. The Garden persists even if Alejandro is eliminated.",

            stats: {

                "Cast Time":
                    "1 sec",

                "Bonus Health Granted on Cast":
                    "200",

                "Projectile Speed":
                    "80 m/s",

                "Blossom Spell Field":
                    "3 m Spherical Radius",

                "Wildroot Surge Seed Bloom Time":
                    "8 sec → 4 sec",

                "Ultimate Cost":
                    "4500 Energy"

            },


            sections: [

                {
                    name:
                        "Flourishing Bud",

                    color:
                        "green",

                    description:
                        "The blossom passes through and damages enemies as it flies, stopping upon colliding with an ally or terrain. On impact, it erupts to heal allies and creates a Flourishing Garden that heals allies over time and reduces their Ability cooldowns.",

                    details: {

                        "Projectile Damage":
                            "40 HP/s",

                        "Projectile Healing":
                            "50",

                        "Initial Burst Healing":
                            "80",

                        "Garden Healing":
                            "90 HP/s",

                        "Burst Healing":
                            "70",

                        "Burst Healing Interval":
                            "1 sec",

                        "Cooldown Reduction Rate":
                            "20%",

                        "Garden Radius":
                            "10 m",

                        "Garden Duration":
                            "10 sec"

                    }

                },


                {
                    name:
                        "Wilting Bud",

                    color:
                        "violet",

                    description:
                        "The blossom passes through and heals allies as it flies, stopping upon colliding with an enemy or terrain. On impact, it erupts to damage enemies and creates a Wilting Garden that periodically damages and Slows enemies.",

                    details: {

                        "Projectile Damage":
                            "50",

                        "Projectile Healing":
                            "100 HP/s",

                        "Root Duration":
                            "3 sec",

                        "Projectile Slow Rate":
                            "45%",

                        "Projectile Slow Duration":
                            "1 sec",

                        "Initial Burst Damage":
                            "60",

                        "Garden Damage":
                            "20 HP/s",

                        "Burst Damage":
                            "70",

                        "Burst Damage Interval":
                            "1.5 sec",

                        "Garden Slow Rate":
                            "20%",

                        "Garden Radius":
                            "10 m",

                        "Garden Duration":
                            "8 sec"

                    }

                }

            ]

        }

    ]

};
