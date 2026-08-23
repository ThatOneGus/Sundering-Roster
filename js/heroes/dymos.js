/* =========================================================
   DYMOS
========================================================= */

window.heroes = window.heroes || [];

window.heroes.push({

    name: "Dymos",

    title: "The Timelord",

    role: "Striker",

    secondaryRoles: [
        "Disruptor"
    ],

    region: "Solari",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Dymos/IMG_6728.png",

    heroArt:
        "Assets/Heroes/Dymos/IMG_6722.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "A living fracture in the flow of time, Dymos twists causality around his enemies. He marks those who threaten him, repeats damage across displaced moments, rewinds death itself, and can collapse an entire fight back into a previous state.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 7,

        survivability: 6,

        crowdControl: 8,

        mobility: 2,

        support: 3,

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
                "Assets/Heroes/Dymos/thumbnail.png",

            splash:
                "Assets/Heroes/Dymos/hero-art.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        {
            title: "Dymos Concept Art",

            image:
                "Assets/Heroes/Dymos/IMG_6697.png",

            description:
                "Exploration of Dymos's current look."
        },

       {
            title: "Dymos Concept Full Body",

            image:
                "Assets/Heroes/Dymos/IMG_6718.png",

            description:
                "Final Concept art of Dymos's current look."
        },

       {
            title: "Previous Dymos Iteration",

            image:
                "Assets/Heroes/Dymos/Concept-Art/temporal-fracture.png",

            description:
                "Dymos's scraped look."
        }

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — TIMELORD'S FATEWRIT
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Timelord's Fatewrit",

            icon:
                "Assets/Heroes/Dymos/Abilities/timelords-fatewrit.png",

            preview:
                "Assets/Heroes/Dymos/Abilities/timelords-fatewrit-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Mark the last enemy to damage Dymos, punish them with increased ability damage, and accumulate Writs capable of rewinding his death.",

            detailedDescription:
                "Dymos automatically marks the last enemy who damages him. Marked enemies take increased ability damage from Dymos, and if they are eliminated while marked, Dymos refunds a portion of his current cooldowns. Every third enemy hit by an ability or every third kill grants a Writ of Inevitable Return. At 3 Writs, Dymos can automatically rewind himself instead of dying.",

            stats: {

                "Mark Damage Bonus":
                    "+10% ability damage",

                "Mark Duration":
                    "8 sec",

                "Cooldown Refund":
                    "25%",

                "Writ Generation":
                    "Every 3rd enemy hit by an ability or kill",

                "Writ Cap":
                    "3",

                "Writ Trigger Cooldown":
                    "45 sec"

            },


            sections: [

                {
                    name:
                        "Marked Enemy",

                    color:
                        "red",

                    description:
                        "The most recent enemy to damage Dymos becomes marked, taking increased ability damage from him. If they die while marked, Dymos regains cooldown progress.",

                    details: {

                        "Ability Damage Increase":
                            "+10%",

                        "Mark Duration":
                            "8 sec",

                        "Cooldown Refund on Marked Enemy Death":
                            "25%"

                    }

                },


                {
                    name:
                        "Writ of Inevitable Return",

                    color:
                        "violet",

                    description:
                        "Every third enemy hit by an ability or kill grants 1 Writ. Reaching 3 Writs arms Dymos's death rewind.",

                    details: {

                        "Generation":
                            "Every 3rd enemy hit by an ability or kill",

                        "Maximum Writs":
                            "3",

                        "Required to Trigger":
                            "3 Writs"

                    }

                },


                {
                    name:
                        "Inevitable Return",

                    color:
                        "blue",

                    description:
                        "At 3 Writs, if Dymos dies or drops below 1 HP, he rewinds to his position from 3 seconds earlier and returns with 40% Health.",

                    details: {

                        "Rewind Time":
                            "3 sec",

                        "Health Restored":
                            "40% HP",

                        "Trigger":
                            "Death or dropping below 1 HP",

                        "Trigger Cooldown":
                            "45 sec"

                    }

                }

            ]

        },


        /* =================================================
           PRIMARY — ASTRAL RIFTBLADES
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Astral Riftblades",

            icon:
                "Assets/Heroes/Dymos/Abilities/astral-riftblades.png",

            preview:
                "Assets/Heroes/Dymos/Abilities/astral-riftblades-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Launch temporal blades that briefly hover before slashing forward, with a charged attack splitting toward additional targets.",

            detailedDescription:
                "Dymos unleashes temporal blades that briefly float before slashing forward in a jagged motion. The blades have light homing assistance. Holding Primary Fire charges the attack, causing the blade to split mid-air and home toward up to 2 additional targets at reduced damage.",

            stats: {

                "Base Damage":
                    "36 per blade",

                "Homing Assist":
                    "Light tracking within 15° arc",

                "Homing Range":
                    "20 m"

            },


            sections: [

                {
                    name:
                        "Charged Riftblade",

                    color:
                        "violet",

                    description:
                        "Charging Astral Riftblades causes the attack to split in mid-air and seek additional enemies.",

                    details: {

                        "Additional Blades":
                            "2",

                        "Damage per Split Blade":
                            "22",

                        "Additional Targets":
                            "Up to 2"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 1 — TIMEFRACTURE
        ================================================= */

        {
            type: "Ability 1",

            key: "M2",

            name: "Timefracture",

            icon:
                "Assets/Heroes/Dymos/Abilities/timefracture.png",

            preview:
                "Assets/Heroes/Dymos/Abilities/timefracture-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Plant a delayed Temporal Bloom that damages and Stuns enemies, then repeats the effect on the same victims regardless of where they moved.",

            detailedDescription:
                "Dymos plants a Temporal Bloom at a target location. After a short delay, it erupts, damaging and Stunning nearby enemies. Two seconds after the first eruption connects, the same effect repeats on every enemy originally hit regardless of their current position.",

            stats: {

                "Initial Eruption Delay":
                    "1.5 sec",

                "Damage per Eruption":
                    "60",

                "Stun Duration":
                    "1 sec",

                "Repeat Delay":
                    "2 sec after first hit",

                "Cooldown":
                    "15 sec"

            },


            sections: [

                {
                    name:
                        "Temporal Repeat",

                    color:
                        "blue",

                    description:
                        "Enemies hit by the first eruption are struck again after a delay even if they have moved away from the original location.",

                    details: {

                        "Repeat Delay":
                            "2 sec",

                        "Repeat Damage":
                            "60",

                        "Repeat Stun":
                            "1 sec",

                        "Requires Original Hit":
                            "Yes"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 2 — TEMPORAL RIFT
        ================================================= */

        {
            type: "Ability 2",

            key: "E",

            name: "Temporal Rift",

            icon:
                "Assets/Heroes/Dymos/Abilities/temporal-rift.png",

            preview:
                "Assets/Heroes/Dymos/Abilities/temporal-rift-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Freeze the flow of time in an area, slowing enemies while accelerating allied cooldowns and priming affected enemies for bonus damage.",

            detailedDescription:
                "Dymos sends out a pulse that distorts time in a targeted area. Enemies inside suffer reduced Movement Speed and Attack Speed while allies inside gain increased cooldown recovery. When the distortion ends, affected enemies remain temporally unstable, causing the next attack against them to deal increased damage.",

            stats: {

                "Duration":
                    "3 sec",

                "Radius":
                    "6 m",

                "Enemy Movement Speed Reduction":
                    "40%",

                "Enemy Attack Speed Reduction":
                    "40%",

                "Ally Cooldown Reduction":
                    "20%",

                "Cooldown":
                    "18 sec"

            },


            sections: [

                {
                    name:
                        "Temporal Instability",

                    color:
                        "red",

                    description:
                        "After the Rift ends, affected enemies briefly take increased damage from the next attack that hits them.",

                    details: {

                        "Bonus Damage":
                            "+30%",

                        "Window":
                            "2 sec",

                        "Triggers On":
                            "Next attack"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — CHRONO COLLAPSE
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Chrono Collapse",

            icon:
                "Assets/Heroes/Dymos/Abilities/chrono-collapse.png",

            preview:
                "Assets/Heroes/Dymos/Abilities/chrono-collapse-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Mark nearby enemies, then rewind their position and Health while punishing movement and healing performed during the mark.",

            detailedDescription:
                "Dymos marks all enemies within a large radius. After 4 seconds, every marked enemy is rewound to the position and Health they had when the mark began. They also take additional burst damage based on how far they moved and how much healing they received during the marked period.",

            stats: {

                "Delay":
                    "1.5 sec",

                "Mark Radius":
                    "14 m",

                "Mark Duration":
                    "4 sec",

                "Rewind":
                    "Position and HP restored to 4 sec prior",

                "Ultimate Cost":
                    "4000"

            },


            sections: [

                {
                    name:
                        "Movement Punishment",

                    color:
                        "blue",

                    description:
                        "Marked enemies take additional damage based on the distance they traveled during Chrono Collapse.",

                    details: {

                        "Damage":
                            "15 per 5 m moved"

                    }

                },


                {
                    name:
                        "Healing Punishment",

                    color:
                        "green",

                    description:
                        "Healing received during Chrono Collapse is converted into additional burst damage when the rewind occurs.",

                    details: {

                        "Damage":
                            "25 per 50 HP healed"

                    }

                },


                {
                    name:
                        "Rewind",

                    color:
                        "violet",

                    description:
                        "When the mark expires, affected enemies return to their position and Health state from the beginning of the mark.",

                    details: {

                        "Rewind Time":
                            "4 sec",

                        "Position Rewind":
                            "Yes",

                        "Health Rewind":
                            "Yes"

                    }

                }

            ]

        }

    ]

});
