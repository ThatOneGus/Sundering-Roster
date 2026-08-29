/* =========================================================
   PARAXYS
========================================================= */

window.heroes = window.heroes || [];

window.heroes.push({

    name: "Paraxys",

    title: "The Sand Sovereign",

    role: "Vanguard",

    secondaryRoles: [
        "Warden",
        "Bludgeon"
    ],

    region: "Virelle - Desert",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Paraxys/thumbnail.png",

    heroArt:
        "Assets/Heroes/Paraxys/hero-art.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "A heavily armored desert predator who reshapes the battlefield through living sand, Paraxys establishes territory with Sand Piles before exploiting them for defense, mobility, long-range firepower, and brutal crowd control.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 7,

        survivability: 8,

        crowdControl: 8,

        mobility: 6,

        support: 2,

        range: 8

    },


    /* =====================================================
       SKINS
    ===================================================== */

    skins: [

        {
            name: "Default",

            rarity: "Base",

            thumbnail:
                "Assets/Heroes/Paraxys/thumbnail.png",

            splash:
                "Assets/Heroes/Paraxys/hero-art.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        {
            title: "Chitin Study",

            image:
                "Assets/Heroes/Paraxys/Concept-Art/chitin-study.png",

            description:
                "Exploration of Paraxys's armored anatomy and tail weapon."
        },

        {
            title: "Sand Mound Study",

            image:
                "Assets/Heroes/Paraxys/Concept-Art/sand-mound-study.png",

            description:
                "Early exploration of Paraxys's elevated Sand Siege position."
        }
        */

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — SAND SOVEREIGNTY
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Sand Sovereignty",

            icon:
                "Assets/Heroes/Paraxys/Abilities/sand-sovereignty.png",

            preview:
                "Assets/Heroes/Paraxys/Abilities/sand-sovereignty-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Standing on a Sand Pile grants Paraxys damage reduction and continuous healing.",

            detailedDescription:
                "Paraxys gains defensive benefits while standing on one of his Sand Piles. Sand Piles act as anchors for several other abilities and can be created through Sand Lob or Burrow. Up to 3 Sand Piles may exist at once.",

            stats: {

                "Damage Reduction":
                    "10%",

                "Healing":
                    "2% Max HP/sec",

                "Maximum Sand Piles":
                    "3"

            },


            sections: [

                {
                    name:
                        "Sand Pile",

                    color:
                        "yellow",

                    description:
                        "While standing on a Sand Pile, Paraxys becomes harder to kill and continuously restores Health.",

                    details: {

                        "Damage Reduction":
                            "10%",

                        "Healing":
                            "2% Max HP/sec",

                        "Maximum Active":
                            "3"

                    }

                }

            ]

        },


        /* =================================================
           PRIMARY — CHITIN SLASH
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Chitin Slash",

            icon:
                "Assets/Heroes/Paraxys/Abilities/chitin-slash.png",

            preview:
                "Assets/Heroes/Paraxys/Abilities/chitin-slash-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Perform a three-hit melee combo using Paraxys's claws and stinger.",

            detailedDescription:
                "Paraxys performs a repeating three-hit melee sequence. The first two attacks are claw swipes with different arcs, while the final attack uses his stinger for greater range and applies a brief Slow.",

            stats: {

                "Combo Cycle Time":
                    "1.2 sec",

                "Hits per Combo":
                    "3"

            },


            sections: [

                {
                    name:
                        "Hit 1 — Claw Swipe",

                    color:
                        "orange",

                    description:
                        "A quick forward slash.",

                    details: {

                        "Damage":
                            "24",

                        "Range":
                            "2.5 m"

                    }

                },


                {
                    name:
                        "Hit 2 — Wide Claw Swipe",

                    color:
                        "orange",

                    description:
                        "A wider claw attack with slightly greater reach and damage.",

                    details: {

                        "Damage":
                            "28",

                        "Range":
                            "3 m"

                    }

                },


                {
                    name:
                        "Hit 3 — Tail Sting",

                    color:
                        "red",

                    description:
                        "Paraxys drives his stinger forward, reaching much farther than the claw strikes and briefly Slowing the target.",

                    details: {

                        "Damage":
                            "36",

                        "Range":
                            "5 m",

                        "Slow Duration":
                            "0.25 sec"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 1 — SAND LOB
        ================================================= */

        {
            type: "Ability 1",

            key: "M2",

            name: "Sand Lob",

            icon:
                "Assets/Heroes/Paraxys/Abilities/sand-lob.png",

            preview:
                "Assets/Heroes/Paraxys/Abilities/sand-lob-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Throw a chunk of sand that damages and Blinds enemies before creating a Sand Pile.",

            detailedDescription:
                "Paraxys throws a dense mass of sand in an arc toward a target location. The impact damages nearby enemies and Blinds them. A Sand Pile is created at the impact point.",

            stats: {

                "Impact Damage":
                    "40",

                "Blind Duration":
                    "1.5 sec",

                "Blind Radius":
                    "3 m",

                "Range":
                    "12 m",

                "Creates Sand Pile":
                    "Yes",

                "Cooldown":
                    "10 sec"

            }

        },


        /* =================================================
           ABILITY 2 — SAND SIEGE
        ================================================= */

        {
            type: "Ability 2",

            key: "E",

            name: "Sand Siege",

            icon:
                "Assets/Heroes/Paraxys/Abilities/sand-siege.png",

            preview:
                "Assets/Heroes/Paraxys/Abilities/sand-siege-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Lock Paraxys into a long-range firing stance, becoming significantly stronger when activated from a Sand Pile.",

            detailedDescription:
                "Paraxys extends his tail into a siege configuration and locks himself into a firing stance. While active, he attacks with powerful long-range stinger shots. Activating Sand Siege while standing on a Sand Pile transforms it into an elevated Sand Mound, dramatically increasing his range and fire rate at the cost of movement.",

            stats: {

                "Base Shot Damage":
                    "70",

                "Base Fire Rate":
                    "0.7 shots/sec",

                "Base Range":
                    "30 m",

                "Cooldown":
                    "16 sec"

            },


            sections: [

                {
                    name:
                        "Base Siege",

                    color:
                        "orange",

                    description:
                        "Paraxys braces his tail into a firing stance and attacks at long range.",

                    details: {

                        "Damage":
                            "70 per shot",

                        "Fire Rate":
                            "0.7 shots/sec",

                        "Range":
                            "30 m"

                    }

                },


                {
                    name:
                        "Sand Mound",

                    color:
                        "yellow",

                    description:
                        "Activating Sand Siege while standing on a Sand Pile raises Paraxys onto an elevated mound and strengthens his siege position.",

                    details: {

                        "Elevation":
                            "4 m",

                        "Total Range":
                            "50 m",

                        "Range Increase":
                            "+20 m",

                        "Fire Rate":
                            "0.9 shots/sec",

                        "Fire Rate Increase":
                            "+25%",

                        "Movement":
                            "Disabled",

                        "Rotation":
                            "Free",

                        "Maximum Duration":
                            "6 sec",

                        "Manual End":
                            "Yes"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 3 — BURROW
        ================================================= */

        {
            type: "Ability 3",

            key: "SHIFT",

            name: "Burrow",

            icon:
                "Assets/Heroes/Paraxys/Abilities/burrow.png",

            preview:
                "Assets/Heroes/Paraxys/Abilities/burrow-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Dive underground through a Sand Pile, becoming Untargetable before erupting back onto the battlefield.",

            detailedDescription:
                "Paraxys dives into the nearest Sand Pile. If no suitable Sand Pile is nearby, one is created for him. While Burrowed, Paraxys becomes Untargetable and moves underground at reduced Movement Speed for up to 5 seconds. Resurfacing creates a damaging area eruption. Emerging directly from a Sand Pile increases the damage dealt.",

            stats: {

                "Maximum Burrow Duration":
                    "5 sec",

                "Untargetable":
                    "Yes",

                "Burrow Movement Speed":
                    "60% normal Move Speed",

                "Resurface Damage":
                    "60",

                "Resurface Radius":
                    "5 m",

                "Sand Pile Damage Increase":
                    "+20%",

                "Cooldown":
                    "14 sec"

            },


            sections: [

                {
                    name:
                        "Subterranean",

                    color:
                        "yellow",

                    description:
                        "While underground, Paraxys cannot be targeted and can reposition beneath the battlefield.",

                    details: {

                        "Maximum Duration":
                            "5 sec",

                        "Untargetable":
                            "Yes",

                        "Movement Speed":
                            "60%"

                    }

                },


                {
                    name:
                        "Resurface",

                    color:
                        "orange",

                    description:
                        "Paraxys violently erupts from underground and damages enemies nearby.",

                    details: {

                        "Damage":
                            "60",

                        "Radius":
                            "5 m"

                    }

                },


                {
                    name:
                        "Sand Emergence",

                    color:
                        "red",

                    description:
                        "Resurfacing directly from a Sand Pile makes the eruption more powerful.",

                    details: {

                        "Damage Increase":
                            "+20%",

                        "Enhanced Damage":
                            "72"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 4 — DUNE SNATCH
        ================================================= */

        {
            type: "Ability 4",

            key: "F",

            name: "Dune Snatch",

            icon:
                "Assets/Heroes/Paraxys/Abilities/dune-snatch.png",

            preview:
                "Assets/Heroes/Paraxys/Abilities/dune-snatch-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Lunge forward, seize an enemy, and drag them across the battlefield toward Paraxys's Sand Piles.",

            detailedDescription:
                "Paraxys lunges forward and grabs the first enemy caught. The victim is dragged with him for up to 2 seconds and is Silenced while being carried. Beginning Dune Snatch from a Sand Pile greatly increases the lunge distance. If Paraxys drags the victim into a Sand Pile, they are Rooted.",

            stats: {

                "Base Lunge Distance":
                    "8 m",

                "Sand Pile Lunge Distance":
                    "12 m",

                "Grab Duration":
                    "Up to 2 sec",

                "Silence":
                    "While being dragged",

                "Sand Pile Root Duration":
                    "2 sec",

                "Cooldown":
                    "12 sec"

            },


            sections: [

                {
                    name:
                        "Sand-Powered Lunge",

                    color:
                        "yellow",

                    description:
                        "Using Dune Snatch from a Sand Pile extends Paraxys's initial lunge.",

                    details: {

                        "Normal Distance":
                            "8 m",

                        "Sand Pile Distance":
                            "12 m"

                    }

                },


                {
                    name:
                        "Dragged",

                    color:
                        "orange",

                    description:
                        "The grabbed enemy is forcibly carried with Paraxys and cannot use abilities while being dragged.",

                    details: {

                        "Maximum Duration":
                            "2 sec",

                        "Silenced":
                            "Yes"

                    }

                },


                {
                    name:
                        "Buried Prey",

                    color:
                        "red",

                    description:
                        "Dragging the captured enemy into one of Paraxys's Sand Piles traps them in place.",

                    details: {

                        "Root Duration":
                            "2 sec",

                        "Requirement":
                            "Drag enemy into Sand Pile"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — SHIFTING KINGDOM
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Shifting Kingdom",

            icon:
                "Assets/Heroes/Paraxys/Abilities/shifting-kingdom.png",

            preview:
                "Assets/Heroes/Paraxys/Abilities/shifting-kingdom-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Collapse the battlefield into a massive quicksand basin that grows by consuming Paraxys's existing Sand Piles.",

            detailedDescription:
                "Paraxys plunges his stinger into the ground and causes the desert beneath the battlefield to collapse toward a targeted location. After a brief delay, a massive quicksand basin forms. Enemies caught in its creation are Thrown into the air and damaged. All Sand Piles within 15 meters are dragged into the basin and consumed, increasing its radius and impact damage. Enemies trapped in the quicksand are Slowed and continuously dragged toward the center. Remaining in the innermost area for too long causes an enemy to become Rooted once during the Ultimate.",

            stats: {

                "Target Range":
                    "20 m",

                "Base Radius":
                    "10 m",

                "Duration":
                    "7 sec",

                "Base Impact Damage":
                    "80",

                "Sand Pile Consumption Range":
                    "15 m",

                "Maximum Sand Piles Consumed":
                    "3",

                "Slow":
                    "30%",

                "Central Root Radius":
                    "3 m",

                "Central Root Requirement":
                    "1.5 consecutive sec",

                "Root Duration":
                    "1.5 sec",

                "Root Limit":
                    "Once per enemy per Ultimate",

                "Ultimate Cost":
                    "3700"

            },


            sections: [

                {
                    name:
                        "Kingdom Collapse",

                    color:
                        "orange",

                    description:
                        "When the basin first forms, enemies are violently thrown upward and take immediate damage.",

                    details: {

                        "Base Damage":
                            "80",

                        "Throw":
                            "Yes",

                        "Base Radius":
                            "10 m"

                    }

                },


                {
                    name:
                        "Sand Pile Consumption",

                    color:
                        "yellow",

                    description:
                        "Nearby Sand Piles are dragged into Shifting Kingdom and consumed, making the basin larger and its initial collapse more damaging.",

                    details: {

                        "Consumption Range":
                            "15 m",

                        "Maximum Sand Piles":
                            "3",

                        "Radius per Sand Pile":
                            "+1 m",

                        "Impact Damage per Sand Pile":
                            "+10",

                        "Maximum Radius":
                            "13 m",

                        "Maximum Impact Damage":
                            "110"

                    }

                },


                {
                    name:
                        "Quicksand",

                    color:
                        "yellow",

                    description:
                        "The basin continuously shifts toward its center, Slowing and gradually pulling enemies inward. The pull becomes stronger near the middle.",

                    details: {

                        "Slow":
                            "30%",

                        "Forced Movement":
                            "Toward center",

                        "Pull Strength":
                            "Increases toward center",

                        "Duration":
                            "7 sec"

                    }

                },


                {
                    name:
                        "Dune Prison",

                    color:
                        "red",

                    description:
                        "Enemies who remain near the center for too long are swallowed by the sand and Rooted.",

                    details: {

                        "Central Radius":
                            "3 m",

                        "Required Time":
                            "1.5 consecutive sec",

                        "Root Duration":
                            "1.5 sec",

                        "Trigger Limit":
                            "Once per enemy per Ultimate"

                    }

                }

            ]

        }

    ]

});
