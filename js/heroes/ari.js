window.heroes = window.heroes || [];

window.heroes.push({
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
                "Previous Ari iterations"
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
    
});
