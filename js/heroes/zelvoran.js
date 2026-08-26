/* =========================================================
   ZEL'VORAN
========================================================= */

window.heroes = window.heroes || [];

window.heroes.push({

    name: "Zel'voran",

    title: "The Cataclysm",

    role: "Vanguard",

    secondaryRoles: [
        "Bludgeon",
        "Warden"
    ],

    region: "TBD",


    /* =====================================================
       BASE ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Zelvoran/thumbnail.png",

    heroArt:
        "Assets/Heroes/Zelvoran/hero-art.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "A towering infernal force who thrives in the heart of battle, Zel'voran grows more dangerous the longer enemies remain near him. By converting blocked damage and nearby foes into Scorch, he transforms himself into a walking furnace before unleashing the full power of his draconic form.",


    /* =====================================================
       BASE COMBAT PROFILE

       Used as fallback.
    ===================================================== */

    profile: {

        damage: 8,

        survivability: 10,

        crowdControl: 8,

        mobility: 3,

        support: 2,

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
                "Assets/Heroes/Zelvoran/thumbnail.png",

            splash:
                "Assets/Heroes/Zelvoran/hero-art.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        {
            title: "Dragon Form Study",

            image:
                "Assets/Heroes/Zelvoran/Concept-Art/dragon-form-study.png",

            description:
                "Exploration of Zel'voran's transformation during Cataclysm Core."
        }
        */

    ],


    /* =====================================================
       SHARED ABILITIES

       These appear regardless of selected form.
    ===================================================== */

    abilities: [


        /* =================================================
           ULTIMATE — CATACLYSM CORE
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Cataclysm Core",

            icon:
                "Assets/Heroes/Zelvoran/Abilities/cataclysm-core.png",

            preview:
                "Assets/Heroes/Zelvoran/Abilities/cataclysm-core-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Transform into Dragon-Form, gaining massive Health, Crowd Control Immunity, and an enhanced infernal moveset.",

            detailedDescription:
                "Zel'voran unleashes his Dragon-Form for 10 seconds, increasing his maximum Health to 1200 and becoming Crowd Control Immune. During Dragon-Form, his normal abilities are replaced by enhanced versions of Infernal Heart, Infernal Claw, Infernal Spit, and Volcanic Rupture. When the transformation ends, Zel'voran releases a massive explosion and converts a portion of all damage dealt during Cataclysm Core into Bonus Health.",

            stats: {

                "Duration":
                    "10 sec",

                "Maximum Health":
                    "1200 HP",

                "Crowd Control Immunity":
                    "Yes",

                "Final Explosion Radius":
                    "10 m",

                "Final Explosion Damage":
                    "100",

                "Bonus Health Conversion":
                    "10% of all damage dealt during Dragon-Form",

                "Ultimate Cost":
                    "3400"

            },


            sections: [

                {
                    name:
                        "Dragon Transformation",

                    color:
                        "red",

                    description:
                        "Zel'voran transforms into his true draconic form, greatly increasing his durability and replacing his normal combat abilities with empowered versions.",

                    details: {

                        "Duration":
                            "10 sec",

                        "Maximum Health":
                            "1200 HP",

                        "Crowd Control Immunity":
                            "Yes"

                    }

                },


                {
                    name:
                        "Final Cataclysm",

                    color:
                        "orange",

                    description:
                        "When Dragon-Form ends, Zel'voran violently releases the accumulated heat of Cataclysm Core, damaging and Shoving nearby enemies away.",

                    details: {

                        "Explosion Damage":
                            "100",

                        "Explosion Radius":
                            "10 m",

                        "Shove":
                            "Away from Zel'voran"

                    }

                },


                {
                    name:
                        "Infernal Conversion",

                    color:
                        "yellow",

                    description:
                        "After the transformation ends, Zel'voran converts a portion of all damage dealt during Cataclysm Core into Bonus Health.",

                    details: {

                        "Bonus Health":
                            "10% of all damage dealt during Dragon-Form"

                    }

                }

            ]

        }

    ],


    /* =====================================================
       FORMS
    ===================================================== */

    forms: [


        /* =================================================
           BASE FORM
        ================================================= */

        {
            id: "base",

            name: "Base Form",

            color: "orange",

            heroArt:
                "Assets/Heroes/Zelvoran/hero-art.png",


            profile: {

                damage: 8,

                survivability: 10,

                crowdControl: 8,

                mobility: 3,

                support: 2,

                range: 4

            },


            abilities: [


                /* =========================================
                   PASSIVE — INFERNAL HEART
                ========================================= */

                {
                    type: "Passive",

                    key: "PASSIVE",

                    name: "Infernal Heart",

                    icon:
                        "Assets/Heroes/Zelvoran/Abilities/infernal-heart.png",

                    preview:
                        "Assets/Heroes/Zelvoran/Abilities/infernal-heart-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Generate Scorch near enemies and by blocking damage, empowering Zel'voran as his heat rises.",

                    detailedDescription:
                        "Zel'voran generates Scorch while standing near enemies or blocking damage. At 50 Scorch, he begins radiating heat and gains Bonus Health and increased Attack Speed. At maximum Scorch, a swirling vortex of fire surrounds him, continuously damaging and Slowing nearby enemies.",

                    stats: {

                        "Maximum Scorch":
                            "100",

                        "Scorch per Enemy":
                            "+2/sec per enemy within 10 m",

                        "Scorch from Damage Blocked":
                            "+1 per 100 damage blocked",

                        "Buff Threshold":
                            "50 Scorch",

                        "Scorch Decay":
                            "30/sec"

                    },


                    sections: [

                        {
                            name:
                                "Radiating Heat",

                            color:
                                "orange",

                            description:
                                "At 50 Scorch, Zel'voran begins radiating intense heat and becomes more durable and aggressive.",

                            details: {

                                "Required Scorch":
                                    "50",

                                "Attack Speed":
                                    "+15%",

                                "Bonus Health":
                                    "150"

                            }

                        },


                        {
                            name:
                                "Infernal Vortex",

                            color:
                                "red",

                            description:
                                "At maximum Scorch, Zel'voran creates a swirling vortex of flame around himself.",

                            details: {

                                "Required Scorch":
                                    "100",

                                "Radius":
                                    "3.5 m",

                                "Damage":
                                    "25 HP/s",

                                "Slow":
                                    "15%"

                            }

                        }

                    ]

                },


                /* =========================================
                   PRIMARY — INFERNAL CLAW
                ========================================= */

                {
                    type: "Primary Fire",

                    key: "M1",

                    name: "Infernal Claw",

                    icon:
                        "Assets/Heroes/Zelvoran/Abilities/infernal-claw.png",

                    preview:
                        "Assets/Heroes/Zelvoran/Abilities/infernal-claw-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Rapidly slash enemies in front of Zel'voran.",

                    detailedDescription:
                        "Zel'voran attacks with rapid infernal claw strikes, damaging enemies within a short area directly in front of him.",

                    stats: {

                        "Damage":
                            "40",

                        "Fire Rate":
                            "2.13 attacks/sec",

                        "Range":
                            "4 m"

                    }

                },


                /* =========================================
                   SECONDARY — INFERNAL SPIT
                ========================================= */

                {
                    type: "Secondary Fire",

                    key: "M2",

                    name: "Infernal Spit",

                    icon:
                        "Assets/Heroes/Zelvoran/Abilities/infernal-spit.png",

                    preview:
                        "Assets/Heroes/Zelvoran/Abilities/infernal-spit-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Exhale a sustained cone of flame that damages all enemies caught inside.",

                    detailedDescription:
                        "Zel'voran exhales a short-range cone of continuous flame. Infernal Spit consumes ammo while active. Completely exhausting the meter causes Zel'voran to Burn Out, preventing Infernal Spit from being used again until its ammo fully recharges.",

                    stats: {

                        "Damage":
                            "70 HP/s",

                        "Cone Angle":
                            "45°",

                        "Range":
                            "8 m",

                        "Maximum Ammo":
                            "60",

                        "Ammo Consumption":
                            "15/sec",

                        "Ammo Recharge":
                            "10/sec"

                    },


                    sections: [

                        {
                            name:
                                "Burnout",

                            color:
                                "red",

                            description:
                                "Completely exhausting Infernal Spit's ammo locks the attack until the full meter has regenerated.",

                            details: {

                                "Maximum Ammo":
                                    "60",

                                "Recharge Rate":
                                    "10/sec",

                                "Requirement to Reuse":
                                    "Full ammo restoration"

                            }

                        }

                    ]

                },


                /* =========================================
                   ABILITY 1 — MOLTEN MANTLE
                ========================================= */

                {
                    type: "Ability 1",

                    key: "E",

                    name: "Molten Mantle",

                    icon:
                        "Assets/Heroes/Zelvoran/Abilities/molten-mantle.png",

                    preview:
                        "Assets/Heroes/Zelvoran/Abilities/molten-mantle-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Raise a molten wall that blocks projectiles, Slows enemies, and explodes when destroyed or expired.",

                    detailedDescription:
                        "Zel'voran raises a wall of molten rock that blocks enemy projectiles and Slows enemies who pass through it. When the wall expires or is destroyed, it explodes, damaging and Burning nearby enemies. Damage blocked by Molten Mantle generates Scorch at an increased rate.",

                    stats: {

                        "Wall Duration":
                            "3 sec",

                        "Explosion Damage":
                            "50",

                        "Burn Damage":
                            "15 HP/s",

                        "Burn Duration":
                            "3 sec",

                        "Slow":
                            "20%",

                        "Slow Duration":
                            "2 sec",

                        "Scorch Generation":
                            "+1 per 50 damage blocked",

                        "Cooldown":
                            "12 sec"

                    },


                    sections: [

                        {
                            name:
                                "Molten Barrier",

                            color:
                                "orange",

                            description:
                                "The wall blocks hostile projectiles and generates Scorch rapidly from the damage prevented.",

                            details: {

                                "Duration":
                                    "3 sec",

                                "Scorch":
                                    "+1 per 50 damage blocked",

                                "Enemy Slow":
                                    "20% for 2 sec"

                            }

                        },


                        {
                            name:
                                "Mantle Eruption",

                            color:
                                "red",

                            description:
                                "When Molten Mantle expires or is destroyed, it erupts and Burns nearby enemies.",

                            details: {

                                "Explosion Damage":
                                    "50",

                                "Burn Damage":
                                    "15 HP/s",

                                "Burn Duration":
                                    "3 sec"

                            }

                        }

                    ]

                },


                /* =========================================
                   ABILITY 2 — VOLCANIC RUPTURE
                ========================================= */

                {
                    type: "Ability 2",

                    key: "SHIFT",

                    name: "Volcanic Rupture",

                    icon:
                        "Assets/Heroes/Zelvoran/Abilities/volcanic-rupture.png",

                    preview:
                        "Assets/Heroes/Zelvoran/Abilities/volcanic-rupture-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Send a delayed seismic rupture forward that launches enemies and creates burning Grounded terrain.",

                    detailedDescription:
                        "Zel'voran slams the ground and sends a seismic wave forward. After a delay, the area erupts, damaging and launching enemies upward while interrupting abilities. The eruption leaves behind a burning zone that Burns and Grounds enemies.",

                    stats: {

                        "Eruption Damage":
                            "75",

                        "Eruption Delay":
                            "1 sec",

                        "Zone Duration":
                            "1.5 sec",

                        "Burn Damage":
                            "15 HP/s",

                        "Burn Duration":
                            "3 sec",

                        "Width":
                            "3 m",

                        "Length":
                            "10 m",

                        "Height":
                            "3 m",

                        "Cooldown":
                            "14 sec"

                    },


                    sections: [

                        {
                            name:
                                "Seismic Eruption",

                            color:
                                "orange",

                            description:
                                "The rupture explodes upward after a short warning, launching enemies and interrupting their abilities.",

                            details: {

                                "Damage":
                                    "75",

                                "Delay":
                                    "1 sec",

                                "Launch":
                                    "Yes",

                                "Interrupt":
                                    "Yes"

                            }

                        },


                        {
                            name:
                                "Volcanic Ground",

                            color:
                                "red",

                            description:
                                "The erupted ground remains hazardous, Burning and Grounding enemies inside.",

                            details: {

                                "Zone Duration":
                                    "1.5 sec",

                                "Burn Damage":
                                    "15 HP/s",

                                "Burn Duration":
                                    "3 sec",

                                "Grounded":
                                    "Yes"

                            }

                        }

                    ]

                },


                /* =========================================
                   ABILITY 3 — SEARING GRASP
                ========================================= */

                {
                    type: "Ability 3",

                    key: "F",

                    name: "Searing Grasp",

                    icon:
                        "Assets/Heroes/Zelvoran/Abilities/searing-grasp.png",

                    preview:
                        "Assets/Heroes/Zelvoran/Abilities/searing-grasp-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Pull an enemy to Zel'voran, Stun them, Burn them, and reduce their healing.",

                    detailedDescription:
                        "Zel'voran launches a molten grasp forward. If it connects with an enemy, the target is pulled directly toward him and briefly Stunned. The target is also Burned and receives reduced healing.",

                    stats: {

                        "Damage":
                            "75",

                        "Maximum Distance":
                            "12 m",

                        "Stun Duration":
                            "0.75 sec",

                        "Healing Received Reduction":
                            "30%",

                        "Healing Reduction Duration":
                            "4 sec",

                        "Cooldown":
                            "10 sec"

                    }

                }

            ]

        },


        /* =================================================
           DRAGON-FORM
        ================================================= */

        {
            id: "dragon",

            name: "Dragon-Form",

            subtitle: "Ultimate",

            color: "red",

            heroArt:
                "Assets/Heroes/Zelvoran/Forms/Dragon/hero-art.png",


            profile: {

                damage: 10,

                survivability: 10,

                crowdControl: 9,

                mobility: 4,

                support: 1,

                range: 6

            },


            abilities: [


                /* =========================================
                   DRAGON — INFERNAL HEART
                ========================================= */

                {
                    type: "Dragon Passive",

                    key: "PASSIVE",

                    name: "Infernal Heart",

                    icon:
                        "Assets/Heroes/Zelvoran/Abilities/infernal-heart.png",

                    preview:
                        "Assets/Heroes/Zelvoran/Abilities/infernal-heart-dragon-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Dragon-Form dramatically empowers Infernal Heart's maximum-Scorch fire vortex.",

                    detailedDescription:
                        "While in Dragon-Form, Infernal Heart retains its normal Scorch mechanics, but the vortex created at maximum Scorch becomes larger, more damaging, and significantly stronger at Slowing nearby enemies.",

                    stats: {

                        "Maximum Scorch":
                            "100",

                        "Vortex Damage":
                            "35 HP/s",

                        "Vortex Radius":
                            "5 m",

                        "Vortex Slow":
                            "25%"

                    },


                    sections: [

                        {
                            name:
                                "Dragon Vortex",

                            color:
                                "red",

                            description:
                                "The maximum-Scorch vortex becomes substantially stronger during Cataclysm Core.",

                            details: {

                                "Damage":
                                    "25 HP/s → 35 HP/s",

                                "Radius":
                                    "3.5 m → 5 m",

                                "Slow":
                                    "15% → 25%"

                            }

                        }

                    ]

                },


                /* =========================================
                   DRAGON — INFERNAL CLAW
                ========================================= */

                {
                    type: "Dragon Primary Fire",

                    key: "M1",

                    name: "Infernal Claw",

                    icon:
                        "Assets/Heroes/Zelvoran/Abilities/infernal-claw.png",

                    preview:
                        "Assets/Heroes/Zelvoran/Abilities/infernal-claw-dragon-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Deliver slower but devastating draconic claw strikes.",

                    detailedDescription:
                        "Dragon-Form massively increases the power behind Zel'voran's Infernal Claw. Each attack deals significantly more damage but is performed at a slower rate.",

                    stats: {

                        "Damage":
                            "68",

                        "Fire Rate":
                            "1.6 attacks/sec",

                        "Base Damage":
                            "40 → 68",

                        "Base Fire Rate":
                            "2.13/sec → 1.6/sec"

                    }

                },


                /* =========================================
                   DRAGON — INFERNAL SPIT
                ========================================= */

                {
                    type: "Dragon Secondary Fire",

                    key: "M2",

                    name: "Infernal Spit",

                    icon:
                        "Assets/Heroes/Zelvoran/Abilities/infernal-spit.png",

                    preview:
                        "Assets/Heroes/Zelvoran/Abilities/infernal-spit-dragon-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Exhale a much larger and deadlier torrent of dragonfire.",

                    detailedDescription:
                        "While transformed, Infernal Spit becomes significantly larger and more destructive. The cone deals increased damage, covers a wider angle, reaches farther, and stores additional ammo.",

                    stats: {

                        "Damage":
                            "90 HP/s",

                        "Cone Angle":
                            "65°",

                        "Range":
                            "10 m",

                        "Maximum Ammo":
                            "70",

                        "Damage Increase":
                            "70 HP/s → 90 HP/s",

                        "Angle Increase":
                            "45° → 65°",

                        "Range Increase":
                            "8 m → 10 m",

                        "Ammo Increase":
                            "60 → 70",

                        "Ammo Recharge Rate":
                            "Slower than Base Form — value TBD"

                    }

                },


                /* =========================================
                   DRAGON — VOLCANIC RUPTURE
                ========================================= */

                {
                    type: "Dragon Ability 1",

                    key: "E",

                    name: "Volcanic Rupture",

                    icon:
                        "Assets/Heroes/Zelvoran/Abilities/volcanic-rupture.png",

                    preview:
                        "Assets/Heroes/Zelvoran/Abilities/volcanic-rupture-dragon-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Cause a massive circular volcanic eruption around Zel'voran, with three casts available during Dragon-Form.",

                    detailedDescription:
                        "During Dragon-Form, Volcanic Rupture replaces Molten Mantle's ability slot and becomes a circular seismic eruption centered on Zel'voran. Cataclysm Core grants 3 one-time charges of Dragon Volcanic Rupture. These charges cannot regenerate during the transformation, and each use is separated by a short internal cooldown.",

                    stats: {

                        "Radius":
                            "7 m",

                        "Charges":
                            "3",

                        "Charge Regeneration":
                            "None",

                        "Delay Between Uses":
                            "2.5 sec",

                        "Ability Slot":
                            "Ability 1",

                        "Replaces":
                            "Molten Mantle"

                    },


                    sections: [

                        {
                            name:
                                "Dragon Rupture",

                            color:
                                "orange",

                            description:
                                "The normal forward seismic wave becomes a circular eruption surrounding Zel'voran.",

                            details: {

                                "Base Shape":
                                    "3 m × 10 m forward wave",

                                "Dragon Shape":
                                    "7 m radius around Zel'voran",

                                "Charges":
                                    "3"

                            }

                        },


                        {
                            name:
                                "Cataclysm Charges",

                            color:
                                "red",

                            description:
                                "Dragon Volcanic Rupture uses limited one-time charges rather than its normal cooldown.",

                            details: {

                                "Total Uses":
                                    "3",

                                "Recharge":
                                    "None",

                                "Delay Between Uses":
                                    "2.5 sec"

                            }

                        }

                    ]

                }

            ]

        }

    ]

});
