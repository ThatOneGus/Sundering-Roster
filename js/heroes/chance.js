/* =========================================================
   CHANCE
========================================================= */

window.heroes = window.heroes || [];

window.heroes.push({

    name: "Chance",

    title: "The House Favorite",

    role: "Vanguard",

    secondaryRoles: [
        "Guardian",
        "Warden"
    ],

    region: "TBD",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Chance/thumbnail.png",

    heroArt:
        "Assets/Heroes/Chance/hero-art.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "A risk-loving gambler who bends probability around himself, Chance turns every fight into a game of shifting odds. Between enchanted cards, defensive tricks, random buffs, and chaotic battlefield effects, he thrives when neither team is entirely sure what comes next.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 6,

        survivability: 9,

        crowdControl: 7,

        mobility: 3,

        support: 6,

        range: 6

    },


    /* =====================================================
       SKINS
    ===================================================== */

    skins: [

        {
            name: "Default",

            rarity: "Base",

            thumbnail:
                "Assets/Heroes/Chance/thumbnail.png",

            splash:
                "Assets/Heroes/Chance/hero-art.png"
        },

        {
            name: "Roll The Tides",

            rarity: "Epic",

            thumbnail:
                "Assets/Heroes/Chance/Skins/Roll-The-Tides/thumbnail.png",

            splash:
                "Assets/Heroes/Chance/Skins/Roll-The-Tides/splash.png"
        },

        {
            name: "Royal Flush",

            rarity: "Mythic",

            thumbnail:
                "Assets/Heroes/Chance/Skins/Royal-Flush/thumbnail.png",

            splash:
                "Assets/Heroes/Chance/Skins/Royal-Flush/splash.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        {
            title: "Early Chance Concept",

            image:
                "Assets/Heroes/Chance/Concept-Art/early-concept.png",

            description:
                "Early exploration of Chance's casino-inspired silhouette and enchanted gambling equipment."
        }
        */

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — HOUSE RULES
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "House Rules",

            icon:
                "Assets/Heroes/Chance/Abilities/house-rules.png",

            preview:
                "Assets/Heroes/Chance/Abilities/house-rules-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Using abilities rolls a D6, granting Chance a random temporary effect.",

            detailedDescription:
                "Every time Chance uses an ability, he rolls a Chance Die. The D6 result determines which minor effect activates. House Rules has a 10-second internal cooldown.",

            stats: {

                "Die":
                    "D6",

                "Internal Cooldown":
                    "10 sec"

            },


            sections: [

                {
                    name:
                        "1 — Lucky Draw",

                    color:
                        "blue",

                    description:
                        "Chance temporarily accelerates his ability recovery.",

                    details: {

                        "Cooldown Reduction":
                            "20%",

                        "Duration":
                            "3 sec"

                    }

                },


                {
                    name:
                        "2 — Tough Luck",

                    color:
                        "white",

                    description:
                        "Chance gains temporary Bonus Health.",

                    details: {

                        "Bonus Health":
                            "100"

                    }

                },


                {
                    name:
                        "3 — Fortune's Favor",

                    color:
                        "green",

                    description:
                        "Chance restores a percentage of his maximum Health.",

                    details: {

                        "Healing":
                            "10% Max HP",

                        "Duration":
                            "2 sec"

                    }

                },


                {
                    name:
                        "4 — Payback",

                    color:
                        "violet",

                    description:
                        "The next damage Chance takes is partially reflected back.",

                    details: {

                        "Damage Reflected":
                            "35% of next damage taken"

                    }

                },


                {
                    name:
                        "5 — All In",

                    color:
                        "orange",

                    description:
                        "Chance temporarily deals increased damage.",

                    details: {

                        "Damage Increase":
                            "+15%",

                        "Duration":
                            "4 sec"

                    }

                },


                {
                    name:
                        "6 — High Stakes",

                    color:
                        "red",

                    description:
                        "Chance deals more damage but briefly becomes more vulnerable himself.",

                    details: {

                        "Damage Increase":
                            "+20%",

                        "Incoming Damage Increase":
                            "+20%",

                        "Duration":
                            "2 sec"

                    }

                }

            ]

        },


        /* =================================================
           PRIMARY — CARD SHOT
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Card Shot",

            icon:
                "Assets/Heroes/Chance/Abilities/card-shot.png",

            preview:
                "Assets/Heroes/Chance/Abilities/card-shot-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Rapidly throw enchanted cards, with every sixth card becoming a powerful piercing House Card.",

            detailedDescription:
                "Chance flicks enchanted playing cards from his deck in rapid succession. Every sixth card becomes a glowing gold House Card that pierces enemies. If the House Card hits an enemy, Chance immediately rolls House Rules regardless of its normal trigger timing.",

            stats: {

                "Damage":
                    "35",

                "Projectile Speed":
                    "90 m/s",

                "Fire Rate":
                    "1.2 shots/sec",

                "Ammo":
                    "12",

                "House Card Interval":
                    "Every 6th card",

                "House Card Damage":
                    "55",

                "House Card Projectile Speed":
                    "120 m/s",

                "House Card":
                    "Pierces enemies",

                "House Card Hit":
                    "Immediately rolls House Rules"

            }

        },


        /* =================================================
           ABILITY 1 — FLYING JACKPOT
        ================================================= */

        {
            type: "Ability 1",

            key: "M2",

            name: "Flying Jackpot",

            icon:
                "Assets/Heroes/Chance/Abilities/flying-jackpot.png",

            preview:
                "Assets/Heroes/Chance/Abilities/flying-jackpot-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Throw a roulette shield that bounces between enemies before returning to Chance with a random defensive reward.",

            detailedDescription:
                "Chance throws a spinning roulette shield forward like a discus. The shield can bounce between up to 3 enemies. When it finishes bouncing, either because no additional enemy is available or all 3 bounces are completed, it returns to Chance and grants one random buff. Striking 3 enemies triggers Jackpot instead, granting all three rewards at reduced strength.",

            stats: {

                "Maximum Enemy Bounces":
                    "3",

                "Projectile Speed":
                    "90 m/s",

                "Cooldown":
                    "12 sec"

            },


            sections: [

                {
                    name:
                        "Damage Reduction Reward",

                    color:
                        "blue",

                    details: {

                        "Damage Reduction":
                            "25%",

                        "Duration":
                            "1 sec"

                    }

                },


                {
                    name:
                        "Bonus Health Reward",

                    color:
                        "white",

                    details: {

                        "Bonus Health":
                            "100"

                    }

                },


                {
                    name:
                        "Cooldown Reward",

                    color:
                        "violet",

                    details: {

                        "Cooldown Reduction":
                            "2 sec off all abilities"

                    }

                },


                {
                    name:
                        "Jackpot",

                    color:
                        "yellow",

                    description:
                        "Hitting all 3 enemy bounces guarantees a combined reward instead of selecting one random effect.",

                    details: {

                        "Damage Reduction":
                            "15%",

                        "Bonus Health":
                            "75",

                        "Cooldown Reduction":
                            "1 sec off all abilities"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 2 — HOUSE OF CARDS
        ================================================= */

        {
            type: "Ability 2",

            key: "E",

            name: "House of Cards",

            icon:
                "Assets/Heroes/Chance/Abilities/house-of-cards.png",

            preview:
                "Assets/Heroes/Chance/Abilities/house-of-cards-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Build a temporary card wall that blocks movement and projectiles before exploding outward.",

            detailedDescription:
                "Chance throws down a collapsing card structure at a target location. The House of Cards blocks enemy movement and projectiles for 4 seconds. Allies positioned behind the structure take reduced ranged damage. When the structure collapses naturally or is manually detonated, it shatters outward in an explosive flurry of cards that damages and Shoves nearby enemies.",

            stats: {

                "Duration":
                    "4 sec",

                "Ally Ranged Damage Reduction":
                    "20%",

                "Blocks Enemy Movement":
                    "Yes",

                "Blocks Projectiles":
                    "Yes",

                "Manual Detonation":
                    "Yes",

                "Cooldown":
                    "14 sec"

            },


            sections: [

                {
                    name:
                        "Collapse",

                    color:
                        "red",

                    description:
                        "When the House of Cards collapses or is manually detonated, it explodes outward and Shoves nearby enemies.",

                    details: {

                        "Damage":
                            "TBD",

                        "Shove Distance":
                            "TBD",

                        "Explosion Radius":
                            "TBD"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 3 — LUCKY BREAK
        ================================================= */

        {
            type: "Ability 3",

            key: "SHIFT",

            name: "Lucky Break",

            icon:
                "Assets/Heroes/Chance/Abilities/lucky-break.png",

            preview:
                "Assets/Heroes/Chance/Abilities/lucky-break-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Flip a massive golden coin and receive either powerful healing or another House Rules roll.",

            detailedDescription:
                "Chance spins a massive golden coin into the air. After 1.5 seconds, the coin lands on Heads or Tails, determining which effect activates.",

            stats: {

                "Flip Delay":
                    "1.5 sec",

                "Cooldown":
                    "20 sec"

            },


            sections: [

                {
                    name:
                        "Heads — Second Wind",

                    color:
                        "green",

                    description:
                        "Chance rapidly recovers a large portion of his missing Health.",

                    details: {

                        "Healing":
                            "40% of missing HP",

                        "Duration":
                            "5 sec"

                    }

                },


                {
                    name:
                        "Tails — Risk & Reward",

                    color:
                        "violet",

                    description:
                        "Chance immediately triggers another House Rules die roll.",

                    details: {

                        "Effect":
                            "Immediately roll House Rules"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — HOUSE ALWAYS WINS
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "House Always Wins",

            icon:
                "Assets/Heroes/Chance/Abilities/house-always-wins.png",

            preview:
                "Assets/Heroes/Chance/Abilities/house-always-wins-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Create a Casino Zone that makes Chance extremely durable while repeatedly inflicting random debuffs on enemies inside.",

            detailedDescription:
                "Chance tosses a giant die into the air, creating a 10m Casino Zone after a brief delay. Chance gains Crowd Control Immunity and Bonus Health while inside the effect. Every enemy within the Casino Zone is randomly afflicted by one debuff every 2 seconds for the duration.",

            stats: {

                "Delay":
                    "1 sec",

                "Duration":
                    "8 sec",

                "Radius":
                    "10 m",

                "Crowd Control Immunity":
                    "Yes",

                "Bonus Health":
                    "300",

                "Debuff Interval":
                    "Every 2 sec",

                "Ultimate Cost":
                    "3100"

            },


            sections: [

                {
                    name:
                        "Slowed",

                    color:
                        "blue",

                    details: {

                        "Slow":
                            "30%",

                        "Duration":
                            "3 sec"

                    }

                },


                {
                    name:
                        "Silenced",

                    color:
                        "violet",

                    details: {

                        "Duration":
                            "1.5 sec"

                    }

                },


                {
                    name:
                        "Weakened",

                    color:
                        "orange",

                    details: {

                        "Outgoing Damage Reduction":
                            "25%"

                    }

                },


                {
                    name:
                        "Blinded",

                    color:
                        "white",

                    details: {

                        "Duration":
                            "1.5 sec"

                    }

                },


                {
                    name:
                        "Rooted",

                    color:
                        "red",

                    details: {

                        "Duration":
                            "2 sec"

                    }

                }

            ]

        }

    ]

});
