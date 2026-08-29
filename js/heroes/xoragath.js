/* =========================================================
   XORAGATH
========================================================= */

window.heroes = window.heroes || [];

window.heroes.push({

    name: "Xoragath",

    title: "The Devouring Singularity",

    role: "Striker",

    secondaryRoles: [
        "Brawler",
        "Ravager"
    ],

    region: "Nocturne",


    /* =====================================================
       BASE STATS
    ===================================================== */

    baseStats: {

        health:
            350,

        movementSpeed:
            "6 m/s"

    },


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Xoragath/thumbnail.png",

    heroArt:
        "Assets/Heroes/Xoragath/hero-art.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "An incomprehensible celestial aberration driven by one recognizable instinct: consume. Xoragath distorts space around its body, dragging enemies and matter inward before erasing anything unfortunate enough to fall within reach.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 9,

        survivability: 8,

        crowdControl: 8,

        mobility: 7,

        support: 1,

        range: 3

    },


    /* =====================================================
       SKINS
    ===================================================== */

    skins: [

        {
            name: "Default",

            rarity: "Base",

            thumbnail:
                "Assets/Heroes/Xoragath/thumbnail.png",

            splash:
                "Assets/Heroes/Xoragath/hero-art.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        {
            title: "Predatory Anatomy Study",

            image:
                "Assets/Heroes/Xoragath/Concept-Art/predatory-anatomy.png",

            description:
                "Exploration of Xoragath's impossible animal-like anatomy and gravitational maws."
        },

        {
            title: "Singularity Study",

            image:
                "Assets/Heroes/Xoragath/Concept-Art/singularity-study.png",

            description:
                "Visual development for the Event Horizon and Abyss Incarnate."
        }
        */

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — INSATIABLE
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Insatiable",

            icon:
                "Assets/Heroes/Xoragath/Abilities/insatiable.png",

            preview:
                "Assets/Heroes/Xoragath/Abilities/insatiable-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Eliminations restore Health and grant stacking combat buffs, while Xoragath can consume enemy objects and tear through Bonus Health.",

            detailedDescription:
                "Whenever Xoragath lands a KO on an enemy, it restores Health and gains temporary Attack Speed, Movement Speed, and Lifesteal. These bonuses stack up to their maximum values and last for 6 seconds. Xoragath can also consume certain enemy-created objects and entities simply by moving directly over them, immediately destroying eligible deployables, summons, traps, or constructs and restoring Health. Enemy Bonus Health is treated as consumable matter, causing Xoragath to deal increased damage against it.",

            stats: {

                "KO Healing":
                    "20",

                "Attack Speed per Stack":
                    "+10%",

                "Movement Speed per Stack":
                    "+15%",

                "Lifesteal per Stack":
                    "+10%",

                "Maximum Attack Speed":
                    "+50%",

                "Maximum Movement Speed":
                    "+60%",

                "Maximum Lifesteal":
                    "50%",

                "Buff Duration":
                    "6 sec",

                "Object Consumption Healing":
                    "30 HP",

                "Damage to Bonus Health":
                    "+20%"

            },


            sections: [

                {
                    name:
                        "Feeding Frenzy",

                    color:
                        "red",

                    description:
                        "Each KO restores Xoragath and causes its predatory momentum to intensify. Multiple eliminations stack the bonuses.",

                    details: {

                        "Healing":
                            "20 HP",

                        "Attack Speed":
                            "+10% per stack",

                        "Maximum Attack Speed":
                            "+50%",

                        "Movement Speed":
                            "+15% per stack",

                        "Maximum Movement Speed":
                            "+60%",

                        "Lifesteal":
                            "+10% per stack",

                        "Maximum Lifesteal":
                            "50%",

                        "Duration":
                            "6 sec"

                    }

                },


                {
                    name:
                        "Consume Matter",

                    color:
                        "violet",

                    description:
                        "Xoragath can erase eligible enemy-created objects by physically moving over them.",

                    details: {

                        "Eligible Deployables":
                            "Consumable",

                        "Eligible Summons":
                            "Consumable",

                        "Eligible Traps":
                            "Consumable",

                        "Eligible Constructs":
                            "Consumable",

                        "Healing":
                            "30 HP",

                        "Large / Ultimate Objects":
                            "Cannot be consumed"

                    }

                },


                {
                    name:
                        "Consumable Vitality",

                    color:
                        "white",

                    description:
                        "Xoragath treats enemy Bonus Health as additional matter waiting to be consumed.",

                    details: {

                        "Damage to Bonus Health":
                            "+20%"

                    }

                }

            ]

        },


        /* =================================================
           PRIMARY — GRAVITATIONAL MAW
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Gravitational Maw",

            icon:
                "Assets/Heroes/Xoragath/Abilities/gravitational-maw.png",

            preview:
                "Assets/Heroes/Xoragath/Abilities/gravitational-maw-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Collapse space directly ahead, damaging nearby enemies and dragging them closer with every strike.",

            detailedDescription:
                "A portion of Xoragath's form violently distorts, causing space directly ahead of it to collapse inward. Enemies caught within the cone take damage and are slightly Pulled toward Xoragath on every hit.",

            stats: {

                "Damage":
                    "42",

                "Attack Rate":
                    "1.5 attacks/sec",

                "Range":
                    "5 m",

                "Area":
                    "70° cone",

                "Pull per Hit":
                    "0.5 m"

            }

        },


        /* =================================================
           SECONDARY — DEVOURING REACH
        ================================================= */

        {
            type: "Secondary Fire",

            key: "M2",

            name: "Devouring Reach",

            icon:
                "Assets/Heroes/Xoragath/Abilities/devouring-reach.png",

            preview:
                "Assets/Heroes/Xoragath/Abilities/devouring-reach-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Extend Xoragath's form toward an enemy, dragging them closer and consuming their Bonus Health.",

            detailedDescription:
                "Xoragath's body violently extends toward a target before collapsing back into itself. Enemies struck take damage and are Pulled toward Xoragath. If the target possesses Bonus Health, Devouring Reach consumes part of it and restores Xoragath for the same amount.",

            stats: {

                "Damage":
                    "70",

                "Range":
                    "8 m",

                "Pull Distance":
                    "2 m",

                "Attack Cooldown":
                    "1.2 sec",

                "Maximum Bonus Health Consumed":
                    "40"

            },


            sections: [

                {
                    name:
                        "Devour Bonus Health",

                    color:
                        "violet",

                    description:
                        "Targets with Bonus Health lose part of it when struck, directly restoring Xoragath.",

                    details: {

                        "Maximum Bonus Health Consumed":
                            "40",

                        "Healing":
                            "Equal to Bonus Health consumed"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 1 — NOTHING REMAINS
        ================================================= */

        {
            type: "Ability 1",

            key: "E",

            name: "Nothing Remains",

            icon:
                "Assets/Heroes/Xoragath/Abilities/nothing-remains.png",

            preview:
                "Assets/Heroes/Xoragath/Abilities/nothing-remains-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Open an impossible void that consumes incoming enemy projectiles and restores Health.",

            detailedDescription:
                "Xoragath briefly opens an impossible void somewhere within its form. For 1.25 seconds, enemy projectiles entering a wide area in front of Xoragath are consumed and erased. Each projectile consumed restores a small amount of Health. Non-projectile attacks are unaffected.",

            stats: {

                "Duration":
                    "1.25 sec",

                "Coverage":
                    "120° frontal area",

                "Maximum Projectiles Consumed":
                    "6",

                "Healing per Projectile":
                    "5 HP",

                "Maximum Healing":
                    "30 HP",

                "Non-Projectile Attacks":
                    "Unaffected",

                "Cooldown":
                    "13 sec"

            }

        },


        /* =================================================
           ABILITY 2 — COLLAPSE
        ================================================= */

        {
            type: "Ability 2",

            key: "SHIFT",

            name: "Collapse",

            icon:
                "Assets/Heroes/Xoragath/Abilities/collapse.png",

            preview:
                "Assets/Heroes/Xoragath/Abilities/collapse-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Contract nearby space, violently dragging enemies inward and punishing anyone pulled directly into Xoragath.",

            detailedDescription:
                "After a brief delay, space suddenly contracts around Xoragath. Nearby enemies take damage and are violently Pulled inward before being Slowed. Enemies who collide directly with Xoragath during the pull take additional damage.",

            stats: {

                "Delay":
                    "0.4 sec",

                "Radius":
                    "7 m",

                "Damage":
                    "55",

                "Pull Distance":
                    "3 m",

                "Slow":
                    "25%",

                "Slow Duration":
                    "2 sec",

                "Collision Bonus Damage":
                    "25",

                "Cooldown":
                    "11 sec"

            },


            sections: [

                {
                    name:
                        "Direct Consumption",

                    color:
                        "red",

                    description:
                        "Enemies dragged completely into Xoragath suffer additional damage on collision.",

                    details: {

                        "Additional Damage":
                            "25",

                        "Requirement":
                            "Collide with Xoragath during pull",

                        "Maximum Combined Damage":
                            "80"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 3 — UNMAKE
        ================================================= */

        {
            type: "Ability 3",

            key: "F",

            name: "Unmake",

            icon:
                "Assets/Heroes/Xoragath/Abilities/unmake.png",

            preview:
                "Assets/Heroes/Xoragath/Abilities/unmake-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Tear Bonus Health and positive buffs directly out of an enemy's existence.",

            detailedDescription:
                "Xoragath targets a nearby enemy and consumes something directly from their existence. Unmake removes Bonus Health and one removable positive buff from the target while dealing damage. Xoragath restores Health based on the Bonus Health consumed. If the target has neither Bonus Health nor a removable positive buff, Unmake deals increased damage instead.",

            stats: {

                "Target Range":
                    "6 m",

                "Base Damage":
                    "50",

                "Maximum Bonus Health Removed":
                    "75",

                "Positive Buffs Removed":
                    "1 removable buff",

                "Healing":
                    "50% of Bonus Health consumed",

                "Fallback Damage":
                    "80",

                "Cooldown":
                    "15 sec"

            },


            sections: [

                {
                    name:
                        "Unmake Vitality",

                    color:
                        "red",

                    description:
                        "Xoragath tears away an enemy's Bonus Health and converts part of it into its own Health.",

                    details: {

                        "Maximum Bonus Health Removed":
                            "75",

                        "Healing Conversion":
                            "50%",

                        "Maximum Healing":
                            "37.5 HP"

                    }

                },


                {
                    name:
                        "Unmake Power",

                    color:
                        "violet",

                    description:
                        "One removable positive buff is stripped from the target.",

                    details: {

                        "Buffs Removed":
                            "1",

                        "Requirement":
                            "Must be removable"

                    }

                },


                {
                    name:
                        "Nothing to Consume",

                    color:
                        "white",

                    description:
                        "If the target has neither Bonus Health nor a removable positive buff, Unmake deals increased direct damage.",

                    details: {

                        "Damage":
                            "80"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 4 — ABERRANT PASSAGE
        ================================================= */

        {
            type: "Ability 4",

            key: "CTRL",

            name: "Aberrant Passage",

            icon:
                "Assets/Heroes/Xoragath/Abilities/aberrant-passage.png",

            preview:
                "Assets/Heroes/Xoragath/Abilities/aberrant-passage-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Fold Xoragath's body through nearby space, pulling enemies at both the departure and arrival points.",

            detailedDescription:
                "Xoragath collapses its physical presence and forces itself through nearby space. After a short delay, its current form folds inward and reappears at the selected location. The movement is not visually represented as a traditional teleport; an impossible distortion briefly connects the departure and destination points. Enemies near the departure point are Pulled inward, while enemies near the destination take damage and are Pulled toward Xoragath.",

            stats: {

                "Maximum Distance":
                    "8 m",

                "Cast Delay":
                    "0.35 sec",

                "Effect Radius":
                    "4 m",

                "Departure Pull":
                    "1.5 m",

                "Arrival Damage":
                    "45",

                "Arrival Pull":
                    "1.5 m",

                "Cooldown":
                    "12 sec"

            },


            sections: [

                {
                    name:
                        "Departure Distortion",

                    color:
                        "violet",

                    description:
                        "The collapsing space left behind by Xoragath briefly drags nearby enemies toward its former position.",

                    details: {

                        "Radius":
                            "4 m",

                        "Pull":
                            "1.5 m"

                    }

                },


                {
                    name:
                        "Arrival Distortion",

                    color:
                        "red",

                    description:
                        "Xoragath violently reforms at the chosen location, damaging enemies and pulling them closer.",

                    details: {

                        "Damage":
                            "45",

                        "Radius":
                            "4 m",

                        "Pull":
                            "1.5 m"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — ABYSS INCARNATE
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Abyss Incarnate",

            icon:
                "Assets/Heroes/Xoragath/Abilities/abyss-incarnate.png",

            preview:
                "Assets/Heroes/Xoragath/Abilities/abyss-incarnate-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Collapse into a living singularity that expands across the battlefield, dragging enemies toward its lethal Event Horizon.",

            detailedDescription:
                "Xoragath tears open the veil of reality and relinquishes its physical shape, collapsing inward into a living singularity for 6 seconds. The singularity gradually expands during its first 3 seconds. Enemies within the gravitational field are continuously Pulled toward the center, with the force becoming stronger as they approach Xoragath. When Abyss Incarnate ends, Xoragath violently reforms at the singularity's center.",

            stats: {

                "Cast Time":
                    "1 sec",

                "Duration":
                    "6 sec",

                "Maximum Radius":
                    "10 m",

                "Expansion Time":
                    "3 sec",

                "Outer Field Slow":
                    "50%",

                "Outer Field Damage":
                    "20–50 HP/s",

                "Base Pull Speed":
                    "2.1 m/s",

                "Event Horizon Radius":
                    "2 m",

                "Consumption Window":
                    "0.5 sec",

                "Ultimate Cost":
                    "4500"

            },


            sections: [

                {
                    name:
                        "Expanding Singularity",

                    color:
                        "violet",

                    description:
                        "The gravitational field grows continuously during the first half of Abyss Incarnate.",

                    details: {

                        "Starting Radius":
                            "Begins small",

                        "Maximum Radius":
                            "10 m",

                        "Expansion Time":
                            "3 sec",

                        "Total Duration":
                            "6 sec"

                    }

                },


                {
                    name:
                        "Outer Field",

                    color:
                        "blue",

                    description:
                        "Enemies caught within the singularity are heavily Slowed, continuously damaged, and dragged toward its center. Damage increases as enemies move closer.",

                    details: {

                        "Slow":
                            "50%",

                        "Damage":
                            "20–50 HP/s",

                        "Damage Scaling":
                            "Increases with proximity",

                        "Pull Speed":
                            "2.1 m/s",

                        "Pull Strength":
                            "Increases near center"

                    }

                },


                {
                    name:
                        "Event Horizon",

                    color:
                        "red",

                    description:
                        "The innermost region of the singularity becomes the Event Horizon. Enemies who fully cross into it are consumed after a brief window.",

                    details: {

                        "Radius":
                            "2 m",

                        "Effect":
                            "Executes enemies who fully enter",

                        "Consumption Window":
                            "0.5 sec"

                    }

                },


                {
                    name:
                        "Reformation",

                    color:
                        "white",

                    description:
                        "When Abyss Incarnate ends, the singularity collapses and Xoragath reforms at its center.",

                    details: {

                        "Reformation Location":
                            "Singularity center"

                    }

                }

            ]

        }

    ]

});
