const heroes = [

    /* =====================================================
       ALEJANDRO
    ===================================================== */

{
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

        mobility: 5,

        support: 9,

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
            name: "Temptation",

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

},


    /* =====================================================
   ARI
===================================================== */

{
    name: "Ari",

    title: "The Sunflower Fairy",

    role: "Catalyst",

    secondaryRoles: [
        "Lifeline"
    ],

    region: "Thaloria",

    thumbnail:
        "Assets/Heroes/Ari/IMG_6594.png",

    heroArt:
        "Assets/Heroes/Ari/IMG_6484.png",

    description:
        "A tiny sunflower fairy whose radiant magic allows her to remain close to her allies, sustaining them through focused healing and bursts of solar energy.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 2,

        survivability: 5,

        crowdControl: 1,

        mobility: 2,

        support: 10,

        range: 7

    },


    /* =====================================================
       SKINS
    ===================================================== */

    skins: [

        {
            name: "Default",

            rarity: "Base",

            thumbnail:
                "Assets/Heroes/Ari/Skins/Default/thumbnail.png"
        },

        {
            name: "Faerie Waves",

            rarity: "Legendary",

            thumbnail:
                "Assets/Heroes/Ari/Skins/Faerie-Waves/thumbnail.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        {
            title: "Early Ari Concept",

            image:
                "Assets/Heroes/Ari/Concept-Art/early-concept.png",

            description:
                "Early exploration of Ari's sunflower-inspired design."
        }
        
    ],


    abilities: [


        /* =================================================
           PASSIVE — SOLAR HARMONY
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Solar Harmony",

            icon:
                "Assets/Heroes/Ari/Abilities/IMG_6625.png",

            preview:
                "Assets/Heroes/Ari/Abilities/solar-harmony-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Ari periodically generates Sunpetals that are consumed to power her abilities.",

            detailedDescription:
                "Ari generates 1 Sunpetal every 4 seconds, up to a maximum of 5. Sunpetals are consumed to power certain abilities.",

            stats: {

                "Sunpetal Generation":
                    "1 every 4 sec",

                "Maximum Sunpetals":
                    "5"

            }

        },


        /* =================================================
           PRIMARY — PETAL DANCE
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Petal Dance",

            icon:
                "Assets/Heroes/Ari/Abilities/IMG_6624.png",

            preview:
                "Assets/Heroes/Ari/Abilities/petal-dance-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Hurl a sharp petal in a straight line to damage an enemy.",

            detailedDescription:
                "Ari hurls a sharp petal in a straight line.",

            stats: {

                "Type":
                    "Projectile",

                "Damage":
                    "32",

                "Projectile Speed":
                    "120 m/s"

            }

        },


        /* =================================================
           SECONDARY — LIFE GLEAM
        ================================================= */

        {
            type: "Secondary Fire",

            key: "M2",

            name: "Life Gleam",

            icon:
                "Assets/Heroes/Ari/Abilities/IMG_6623.png",

            preview:
                "Assets/Heroes/Ari/Abilities/life-gleam-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Channel focused sunlight into an ally, consuming additional Sunpetals for stronger and longer healing.",

            detailedDescription:
                "Ari channels a beam of focused sunlight into a single ally. Hold Secondary Fire to determine how many Sunpetals are consumed. A meter displays how many Sunpetals will be used. Healing strength and duration increase based on the number of Sunpetals consumed. Healing is 30% stronger if the target is below 50% HP.",

            stats: {

                "Type":
                    "Channeled Beam",

                "Base Cost":
                    "1 Sunpetal",

                "Maximum Cost":
                    "4 Sunpetals",

                "Low Health Bonus":
                    "+30% Healing below 50% HP",

                "Cooldown":
                    "3 sec"

            },


            /* ---------------------------------------------
               SUNPETAL SCALING
            --------------------------------------------- */

            sections: [

                {
                    name:
                        "Sunpetal Scaling",

                    color:
                        "yellow",

                    description:
                        "Holding Life Gleam consumes additional Sunpetals, increasing both the healing rate and channel duration.",

                    details: {

                        "1 Sunpetal":
                            "80 HP/sec for 2.5 sec",

                        "2 Sunpetals":
                            "95 HP/sec for 3.5 sec",

                        "3 Sunpetals":
                            "110 HP/sec for 4.5 sec",

                        "4 Sunpetals":
                            "125 HP/sec for 5.5 sec"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 1 — POCKET-SIZE COMPANION
        ================================================= */

        {
            type: "Ability 1",

            key: "E",

            name: "Pocket-Size Companion",

            icon:
                "Assets/Heroes/Ari/Abilities/IMG_6622.png",

            preview:
                "Assets/Heroes/Ari/Abilities/pocket-size-companion-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Shrink down and attach to an ally, gaining protection while continuously healing your host.",

            detailedDescription:
                "Ari shrinks and attaches to a target ally after a short delay, riding along as a companion. While attached, Ari takes 50% less damage and continuously heals her host. Ari can detach at will and automatically detaches if her host is eliminated.",

            stats: {

                "Cost":
                    "1 Sunpetal",

                "Attach Delay":
                    "0.3 sec",

                "Damage Reduction":
                    "50%",

                "Host Healing":
                    "20 HP/sec",

                "Detach":
                    "At will or when host is eliminated"

            }

        },


        /* =================================================
           ABILITY 2 — SUNFLOWER
        ================================================= */

        {
            type: "Ability 2",

            key: "SHIFT",

            name: "Sunlit Flora",

            icon:
                "Assets/Heroes/Ari/Abilities/IMG_6621.png",

            preview:
                "Assets/Heroes/Ari/Abilities/sunflower-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Grant a teammate a glowing Sunflower that periodically creates healing orbs for nearby wounded allies.",

            detailedDescription:
                "Ari grants a glowing Sunflower to a selected teammate. The Sunflower creates a healing orb every 1.5 seconds. Each orb automatically seeks the most injured nearby ally. Up to 4 healing orbs can be active at once.",

            stats: {

                "Orb Generation Interval":
                    "1.5 sec",

                "Orb Healing":
                    "45 HP/sec over 2 sec",

                "Maximum Active Orbs":
                    "4",

                "Targeting":
                    "Most injured nearby ally",

                "Cooldown":
                    "18 sec"

            }

        },


        /* =================================================
           ULTIMATE — SOLAR PETALSTORM
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Solar Petalstorm",

            icon:
                "Assets/Heroes/Ari/Abilities/IMG_6620.png",

            preview:
                "Assets/Heroes/Ari/Abilities/solar-petalstorm-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Take flight and scatter radiant Sunpetals that seek wounded allies, healing them and granting Movement Speed.",

            detailedDescription:
                "Ari takes flight and scatters 10 radiant Sunpetals within a 12m radius. Each petal seeks the nearest ally and prioritizes low-health allies. A petal that cannot find an ally hovers for 4 seconds and can be picked up. Allies that catch 2 or more petals receive an additional restorative effect.",

            stats: {

                "Sunpetals Scattered":
                    "10",

                "Radius":
                    "12 m",

                "Healing Per Petal":
                    "75 HP",

                "Movement Speed Boost":
                    "+15%",

                "Movement Speed Duration":
                    "2.5 sec",

                "Unclaimed Petal Duration":
                    "4 sec",

                "Target Priority":
                    "Low-health allies"

            },


            /* ---------------------------------------------
               MULTI-PETAL BONUS
            --------------------------------------------- */

            sections: [

                {
                    name:
                        "2+ Petal Bonus",

                    color:
                        "yellow",

                    description:
                        "Any ally that catches 2 or more Sunpetals gains an additional burst of healing followed by powerful regeneration.",

                    details: {

                        "Burst Healing":
                            "55 HP",

                        "Regeneration":
                            "80 HP/sec for 3 sec",

                        "Effect Duration":
                            "10 sec after the Ultimate ends"

                    }

                }

            ]

        }

    ]

},

    /* =========================================================
   BARTHOLOMEW
========================================================= */

{
    name: "Bartholomew",

    title: "The Royal Butler",

    role: "Striker",

    secondaryRoles: [
        "Marksman"
    ],

    region: "Elaris",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Bartholomew/IMG_6495.png",

    heroArt:
        "Assets/Heroes/Bartholomew/IMG_6494.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "A refined royal servant whose impeccable manners conceal a deadly proficiency with his custom rifle cane. Bartholomew supports his allies from a measured distance, marking priority targets and creating openings with precision gunfire and carefully controlled disruption.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 8,

        survivability: 3,

        crowdControl: 4,

        mobility: 3,

        support: 6,

        range: 10

    },


    /* =====================================================
       SKINS
    ===================================================== */

    skins: [

        {
            name: "Default",

            rarity: "Base",

            thumbnail:
                "Assets/Heroes/Bartholomew/Skins/Default/thumbnail.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        Example:

        {
            title: "Cane Rifle Exploration",

            image:
                "Assets/Heroes/Bartholomew/Concept-Art/cane-rifle.png",

            description:
                "Early explorations of Bartholomew's concealed rifle cane."
        }
        */

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — AT YOUR SERVICE
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "At Your Service",

            icon:
                "Assets/Heroes/Bartholomew/Abilities/at-your-service.png",

            preview:
                "Assets/Heroes/Bartholomew/Abilities/at-your-service-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Damage enemies to Attend them, allowing an ally to consume the Mark for bonus damage.",

            detailedDescription:
                "Enemies damaged by Bartholomew's Cane Rifle or abilities become Attended for 3 seconds. The first allied hero to damage an Attended enemy consumes the Mark and deals additional damage to that enemy. Damaging an already Attended enemy refreshes the Mark's duration.",

            stats: {

                "Mark Duration":
                    "3 sec",

                "Bonus Damage":
                    "25",

                "Mark Duration Refresh":
                    "Yes",

                "Maximum Marks per Enemy":
                    "1"

            }

        },


        /* =================================================
           PRIMARY — CANE RIFLE
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Cane Rifle",

            icon:
                "Assets/Heroes/Bartholomew/Abilities/cane-rifle.png",

            preview:
                "Assets/Heroes/Bartholomew/Abilities/cane-rifle-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire precise semi-automatic shots from Bartholomew's concealed rifle cane.",

            detailedDescription:
                "Bartholomew fires precise semi-automatic shots from the concealed rifle built into his cane. Enemies damaged by Cane Rifle become Attended by At Your Service.",

            stats: {

                "Damage":
                    "53",

                "Fire Rate":
                    "1.4 shots/sec",

                "Projectile":
                    "Hitscan",

                "Damage Falloff":
                    "Begins at 30m, decreasing to 70% at 50m",

                "Ammo":
                    "7",

                "Reload Time":
                    "1.4 sec",

                "Critical Hits":
                    "Yes"

            }

        },


        /* =================================================
           ABILITY 1 — SILVER SERVICE
        ================================================= */

        {
            type: "Ability 1",

            key: "M2",

            name: "Silver Service",

            icon:
                "Assets/Heroes/Bartholomew/Abilities/silver-service.png",

            preview:
                "Assets/Heroes/Bartholomew/Abilities/silver-service-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Flick a silver knife toward an enemy, or embed it in terrain and shoot it to ricochet toward a nearby target.",

            detailedDescription:
                "Bartholomew flicks a silver knife from his cane toward an enemy. Striking an enemy extends their Attended Mark. If the knife strikes terrain instead, it remains embedded for 3 seconds. Bartholomew can shoot the embedded knife to trigger a ricochet toward the nearest enemy within 10m.",

            stats: {

                "Damage":
                    "50",

                "Projectile Speed":
                    "80 m/s",

                "Projectile Range":
                    "20 m",

                "Mark Extension":
                    "5 sec",

                "Embedded Duration":
                    "3 sec",

                "Cooldown":
                    "9 sec"

            },


            sections: [

                {
                    name:
                        "Ricochet",

                    color:
                        "white",

                    description:
                        "Shooting an embedded Silver Service knife causes it to ricochet toward the nearest enemy within range.",

                    details: {

                        "Damage":
                            "35",

                        "Maximum Ricochet Distance":
                            "10 m",

                        "Triggers At Your Service":
                            "Yes",

                        "Maximum Ricochets":
                            "1"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 2 — MEASURED REPOSITION
        ================================================= */

        {
            type: "Ability 2",

            key: "SHIFT",

            name: "Measured Reposition",

            icon:
                "Assets/Heroes/Bartholomew/Abilities/measured-reposition.png",

            preview:
                "Assets/Heroes/Bartholomew/Abilities/measured-reposition-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Sidestep or vault into a new position, empowering Bartholomew's next Cane Rifle shot.",

            detailedDescription:
                "Bartholomew makes a precise adjustment to his position while maintaining perfect composure under fire. Tapping the ability performs a short sidestep, while holding it performs a longer forward vault capable of clearing obstacles. After either movement option, Bartholomew's next Cane Rifle shot gains increased Critical Hit Chance, ignores Damage Falloff, and grants him Bonus Health. The empowered shot expires after 3 seconds if unused.",

            stats: {

                "Critical Hit Chance Bonus":
                    "+25%",

                "Damage Falloff":
                    "None on empowered shot",

                "Bonus Health":
                    "25",

                "Empowered Shot Duration":
                    "3 sec",

                "Cooldown":
                    "7 sec"

            },


            sections: [

                {
                    name:
                        "Tap — Sidestep",

                    color:
                        "teal",

                    description:
                        "Quickly adjust Bartholomew's position in the chosen direction.",

                    details: {

                        "Movement Distance":
                            "3 m"

                    }

                },


                {
                    name:
                        "Hold — Vault",

                    color:
                        "teal",

                    description:
                        "Vault forward, allowing Bartholomew to clear low obstacles.",

                    details: {

                        "Movement Distance":
                            "6 m",

                        "Maximum Obstacle Height":
                            "3 m"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 3 — FORMAL INVITATION
        ================================================= */

        {
            type: "Ability 3",

            key: "E",

            name: "Formal Invitation",

            icon:
                "Assets/Heroes/Bartholomew/Abilities/formal-invitation.png",

            preview:
                "Assets/Heroes/Bartholomew/Abilities/formal-invitation-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Pull enemies toward Bartholomew, Slow them, make them Vulnerable, and Attend them.",

            detailedDescription:
                "Bartholomew tips his cane and gives his targets an invitation they have little choice but to accept. Enemies within a 12m cone are pulled 3m toward Bartholomew, damaged, Slowed, and made Vulnerable. Enemies pulled by Formal Invitation are also Attended by At Your Service.",

            stats: {

                "Damage":
                    "40",

                "Pull Distance":
                    "3 m",

                "Slow":
                    "25%",

                "Slow Duration":
                    "2 sec",

                "Vulnerable":
                    "10% increased damage taken",

                "Vulnerable Duration":
                    "2 sec",

                "Cone Angle":
                    "60°",

                "Range":
                    "12 m",

                "Cooldown":
                    "12 sec"

            }

        },


        /* =================================================
           ULTIMATE — CURTAIN CALL
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Curtain Call",

            icon:
                "Assets/Heroes/Bartholomew/Abilities/curtain-call.png",

            preview:
                "Assets/Heroes/Bartholomew/Abilities/curtain-call-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Load a gilded round and fire four devastating piercing shots that Stagger and Attend every enemy struck.",

            detailedDescription:
                "Bartholomew loads a gilded round into his cane and delivers his final performance. After a 0.75-second casting animation, he fires 4 devastating piercing shots in a straight line. The shots can pierce shields. Enemies struck are Staggered for 1 second and become Attended by At Your Service.",

            stats: {

                "Shots":
                    "4",

                "Damage":
                    "100 + 15% Max Health",

                "Fire Rate":
                    "1 shot/sec",

                "Width":
                    "0.4 m",

                "Projectile Speed":
                    "200 m/s",

                "Cast Time":
                    "0.75 sec",

                "Stagger Duration":
                    "1 sec",

                "Pierces Shields":
                    "Yes",

                "Energy Cost":
                    "4000"

            },


            sections: [

                {
                    name:
                        "An Exceptional Performance",

                    color:
                        "yellow",

                    description:
                        "For 5 seconds after an enemy is Staggered by Curtain Call, allies who damage that Attended enemy gain increased Critical Hit Chance.",

                    details: {

                        "Ally Critical Hit Chance":
                            "+20%",

                        "Window":
                            "5 sec after Stagger"

                    }

                }

            ]

        }

    ]

},
    /* =========================================================
   CEDRIC
========================================================= */

{
    name: "Cedric",

    title: "The Smoke Warden",

    role: "Vanguard",

    secondaryRoles: [
        "Warden"
    ],

    region: "Ferrumalis",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Cedric/IMG_6588.png",

    heroArt:
        "Assets/Heroes/Cedric/IMG_6591.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "An industrial frontline defender who turns the battlefield into a choking fortress of steel and smoke. Cedric deploys durable structures, suppresses enemy damage, and thrives when fighting inside the hazy territory created by his own machinery.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 5,

        survivability: 8,

        crowdControl: 7,

        mobility: 2,

        support: 6,

        range: 4

    },


    /* =====================================================
       SKINS
    ===================================================== */

    skins: [

        {
            name: "Default",

            rarity: "Base",

            thumbnail:
                "Assets/Heroes/Cedric/Skins/Default/thumbnail.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        Example:

        {
            title: "Smoke Vent Concept",

            image:
                "Assets/Heroes/Cedric/Concept-Art/smoke-vent.png",

            description:
                "Early exploration of Cedric's deployable industrial smoke machinery."
        }
        */

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — SMOKE SYSTEMS ONLINE
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Smoke Systems Online",

            icon:
                "Assets/Heroes/Cedric/Abilities/smoke-systems-online.png",

            preview:
                "Assets/Heroes/Cedric/Abilities/smoke-systems-online-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Cedric becomes more durable for every active smoke structure while nearby smoke weakens enemies.",

            detailedDescription:
                "For every Smoke Vent or Smoke Barricade Cedric has active, he gains increased Damage Resistance. Enemies near any of Cedric's smoke clouds are Slowed and deal reduced outgoing damage while inside the haze.",

            stats: {

                "Damage Resistance per Structure":
                    "+5%",

                "Maximum Damage Resistance":
                    "+15%",

                "Enemy Slow":
                    "10%",

                "Enemy Outgoing Damage Reduction":
                    "7%"

            }

        },


        /* =================================================
           PRIMARY — GAUNTLET BASH
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Gauntlet Bash",

            icon:
                "Assets/Heroes/Cedric/Abilities/gauntlet-bash.png",

            preview:
                "Assets/Heroes/Cedric/Abilities/gauntlet-bash-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Deliver a measured three-hit melee combo with steam-assisted industrial gauntlets.",

            detailedDescription:
                "Cedric attacks with a three-hit melee sequence using his heavy industrial gauntlets. The combo progresses from a quick hook into an upward strike before ending with a broad two-handed slam. Going 2 seconds without attacking resets the combo to the first strike.",

            stats: {

                "Combo Reset Time":
                    "2 sec"

            },


            sections: [

                {
                    name:
                        "Hit 1 — Left Hook",

                    color:
                        "white",

                    description:
                        "A quick opening swing.",

                    details: {

                        "Damage":
                            "20"

                    }

                },


                {
                    name:
                        "Hit 2 — Right Uppercut",

                    color:
                        "white",

                    description:
                        "A slower upward strike that slightly lifts the enemy.",

                    details: {

                        "Damage":
                            "30",

                        "Extra Effect":
                            "Small vertical knock"

                    }

                },


                {
                    name:
                        "Hit 3 — Both Slam",

                    color:
                        "orange",

                    description:
                        "Cedric slams both fists down in a wide cone that cleaves enemies in front of him.",

                    details: {

                        "Damage":
                            "50",

                        "Area":
                            "Wide frontal cone",

                        "Cleave":
                            "Yes"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 1 — SMOKE VENT
        ================================================= */

        {
            type: "Ability 1",

            key: "E",

            name: "Smoke Vent",

            icon:
                "Assets/Heroes/Cedric/Abilities/smoke-vent.png",

            preview:
                "Assets/Heroes/Cedric/Abilities/smoke-vent-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Deploy an industrial smoke vent that fills an area with haze and scorches nearby enemies.",

            detailedDescription:
                "Cedric deploys a small industrial Smoke Vent that continuously spews thick smoke and scorches nearby enemies in short bursts. The vent prioritizes enemies attacking allies or enemies at low health.",

            stats: {

                "Radius":
                    "7 m",

                "Base Damage":
                    "30/sec",

                "Structure HP":
                    "150",

                "Targeting Priority":
                    "Enemies attacking allies or low-health enemies",

                "Maximum Active":
                    "1",

                "Cooldown":
                    "16 sec"

            }

        },


        /* =================================================
           ABILITY 2 — SMOKE BARRICADE
        ================================================= */

        {
            type: "Ability 2",

            key: "SHIFT",

            name: "Smoke Barricade",

            icon:
                "Assets/Heroes/Cedric/Abilities/smoke-barricade.png",

            preview:
                "Assets/Heroes/Cedric/Abilities/smoke-barricade-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Deploy a durable metal barricade that blocks vision and projectiles while venting debilitating smoke.",

            detailedDescription:
                "Cedric deploys a solid metal barricade that vents smoke around itself, blocking enemy vision and projectiles. Enemies who touch the surrounding smoke are pinged to all allies and temporarily take increased damage from Smoke Vent.",

            stats: {

                "Structure HP":
                    "400",

                "Duration":
                    "8 sec or until destroyed",

                "Smoke Radius":
                    "3 m around wall",

                "Maximum Active":
                    "2",

                "Cooldown":
                    "14 sec"

            },


            sections: [

                {
                    name:
                        "Smoke Contact",

                    color:
                        "white",

                    description:
                        "Enemies who touch the barricade's smoke are exposed to Cedric's team and become more vulnerable to Smoke Vent.",

                    details: {

                        "Ping Duration":
                            "3 sec",

                        "Smoke Vent Damage Taken":
                            "+15%",

                        "Damage Increase Duration":
                            "4 sec"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 3 — OVERBURN PULSE
        ================================================= */

        {
            type: "Ability 3",

            key: "F",

            name: "Overburn Pulse",

            icon:
                "Assets/Heroes/Cedric/Abilities/overburn-pulse.png",

            preview:
                "Assets/Heroes/Cedric/Abilities/overburn-pulse-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Overcharge every active smoke structure while empowering Cedric and nearby allies.",

            detailedDescription:
                "Cedric ignites all active smoke devices and rallies nearby allies for 4 seconds. Smoke Vents become more lethal, Smoke Barricades gain additional durability, nearby allies deal increased damage, and Cedric gains increased Movement Speed. The effect radiates from Cedric and each active smoke structure.",

            stats: {

                "Duration":
                    "4 sec",

                "Area of Effect":
                    "5 m around Cedric and each smoke structure",

                "Cooldown":
                    "20 sec"

            },


            sections: [

                {
                    name:
                        "Smoke Vent Overburn",

                    color:
                        "orange",

                    description:
                        "Smoke Vents burn hotter and attack more frequently for the duration.",

                    details: {

                        "Damage Increase":
                            "+50%",

                        "Damage":
                            "30/sec → 45/sec",

                        "Flare Rate Increase":
                            "+25%",

                        "Burst Interval":
                            "2 sec → 1.5 sec"

                    }

                },


                {
                    name:
                        "Smoke Barricade Reinforcement",

                    color:
                        "orange",

                    description:
                        "Smoke Barricades temporarily gain additional durability.",

                    details: {

                        "Bonus HP":
                            "+100"

                    }

                },


                {
                    name:
                        "Rally",

                    color:
                        "yellow",

                    description:
                        "Nearby allies gain increased damage while Cedric gains additional Movement Speed.",

                    details: {

                        "Ally Damage":
                            "+10%",

                        "Cedric Movement Speed":
                            "+20%"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — IRONCLAD BLACKOUT
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Ironclad Blackout",

            icon:
                "Assets/Heroes/Cedric/Abilities/ironclad-blackout.png",

            preview:
                "Assets/Heroes/Cedric/Abilities/ironclad-blackout-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Deploy a massive armored smoke-core furnace that turns the surrounding area into Cedric's fortified domain.",

            detailedDescription:
                "Cedric slams his gauntlets together and deploys a massive armored smoke-core furnace for 8 seconds. The furnace immediately creates an Advanced Smoke Vent while Cedric becomes dramatically harder to displace or kill. Enemies trapped inside the smoke field are Slowed and deal reduced damage. Cedric remains free to attack and use abilities throughout the Ultimate. When the furnace expires, it implodes and pulls nearby enemies toward its center.",

            stats: {

                "Duration":
                    "8 sec",

                "Cedric Damage Resistance":
                    "+50%",

                "Knockback Immunity":
                    "Yes",

                "Enemy Slow":
                    "10%",

                "Enemy Outgoing Damage Reduction":
                    "10%",

                "Expiration Effect":
                    "Implodes and pulls enemies toward center",

                "Ultimate Energy Cost":
                    "3900"

            },


            sections: [

                {
                    name:
                        "Advanced Smoke Vent",

                    color:
                        "orange",

                    description:
                        "Ironclad Blackout instantly deploys an Advanced Smoke Vent with increased durability and burn output. Its attacks also Slow enemies on hit.",

                    details: {

                        "Structure HP":
                            "300",

                        "Damage":
                            "60/sec",

                        "Burst Damage":
                            "30",

                        "Burst Interval":
                            "1.5 sec",

                        "Slows on Hit":
                            "Yes"

                    }

                },


                {
                    name:
                        "Blackout Field",

                    color:
                        "white",

                    description:
                        "The furnace fills the surrounding area with suppressive smoke before violently collapsing inward when the Ultimate ends.",

                    details: {

                        "Enemy Slow":
                            "10%",

                        "Enemy Damage Reduction":
                            "10%",

                        "Expiration":
                            "Pulls all enemies toward the center"

                    }

                }

            ]

        }

    ]

}

];
