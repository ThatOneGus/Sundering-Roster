/* =========================================================
   SHIONE
========================================================= */

window.heroes = window.heroes || [];

window.heroes.push({

    name: "Shione",

    title: "The Elementalist",

    role: "Striker",

    secondaryRoles: [
        "Ravager",
        "Disruptor"
    ],

    region: "Solari",


    /* =====================================================
       BASE ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Shione/IMG_6761.png",

    heroArt:
        "Assets/Heroes/Shione/IMG_6543.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "A gifted Elementalist from Solari, Shione shifts seamlessly between Air, Nature, and Light to reshape the battlefield. Each stance completely changes her offensive tools and utility, allowing her to adapt between mobility, sustain, control, and burst damage as the fight demands.",


    /* =====================================================
       BASE COMBAT PROFILE

       Used as fallback if a form does not define one.
    ===================================================== */

    profile: {

        damage: 8,

        survivability: 5,

        crowdControl: 8,

        mobility: 4,

        support: 6,

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
                "Assets/Heroes/Shione/thumbnail.png",

            splash:
                "Assets/Heroes/Shione/hero-art.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        {
            title: "Elemental Stance Study",

            image:
                "Assets/Heroes/Shione/Concept-Art/elemental-stance-study.png",

            description:
                "Exploration of Shione's Air, Nature, and Light visual identities."
        }
        */

    ],


    /* =====================================================
       SHARED ABILITIES

       These appear in every form.
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — ELEMENTALIST
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Elementalist",

            icon:
                "Assets/Heroes/Shione/Abilities/elementalist.png",

            preview:
                "Assets/Heroes/Shione/Abilities/elementalist-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Switch between Air, Nature, and Light, changing Shione's Primary Fire and three core abilities.",

            detailedDescription:
                "Shione can switch between Air, Nature, and Light Stances. Each stance replaces her Primary Fire, Ability 1, Ability 2, and Ability 3 with a unique elemental version.",

            stats: {

                "Available Stances":
                    "Air / Nature / Light",

                "Stance Switch Cooldown":
                    "3 sec"

            },


            sections: [

                {
                    name:
                        "Air",

                    color:
                        "teal",

                    description:
                        "Air focuses on projectile pressure, displacement, Slows, and team mobility.",

                    details: {

                        "Primary":
                            "Air Cutter",

                        "Ability 1":
                            "Gale Pierce",

                        "Ability 2":
                            "Tempest Zone",

                        "Ability 3":
                            "Sky's Blessing"

                    }

                },


                {
                    name:
                        "Nature",

                    color:
                        "green",

                    description:
                        "Nature focuses on Poison, Roots, sustain, and increased healing.",

                    details: {

                        "Primary":
                            "Leaf Blade",

                        "Ability 1":
                            "Thornlash",

                        "Ability 2":
                            "Vine Grasp",

                        "Ability 3":
                            "Nature's Blessing"

                    }

                },


                {
                    name:
                        "Light",

                    color:
                        "yellow",

                    description:
                        "Light focuses on burst damage, teleportation, Blinds, cooldown utility, and Crowd Control Immunity.",

                    details: {

                        "Primary":
                            "Light Shot",

                        "Ability 1":
                            "Solar Beam",

                        "Ability 2":
                            "Flashpoint",

                        "Ability 3":
                            "Light's Blessing"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — ELEMENTAL CONVERGENCE
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Elemental Convergence",

            icon:
                "Assets/Heroes/Shione/Abilities/elemental-convergence.png",

            preview:
                "Assets/Heroes/Shione/Abilities/elemental-convergence-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Create a massive elemental field that cycles through Air, Nature, and Light before detonating.",

            detailedDescription:
                "Shione creates a massive elemental field that evolves through three consecutive phases: Air Surge, Nature's Grasp, and Lightflare. Each phase applies a different form of pressure and Crowd Control. When the final phase ends, the field detonates, dealing base damage plus additional damage based on how many phases each enemy endured.",

            stats: {

                "Radius":
                    "10 m",

                "Total Duration":
                    "7 sec",

                "Final Explosion Base Damage":
                    "180",

                "Ultimate Cost":
                    "4000"

            },


            sections: [

                {
                    name:
                        "Phase 1 — Air Surge",

                    color:
                        "teal",

                    description:
                        "From 0 to 2.5 seconds, enemies are steadily pulled toward the center while the field damages them and interferes with projectile travel.",

                    details: {

                        "Phase Duration":
                            "0–2.5 sec",

                        "Damage":
                            "45 HP/s",

                        "Forced Movement":
                            "Toward center",

                        "Projectile Speed Reduction":
                            "40%",

                        "Enemy Vulnerability":
                            "+10% damage taken"

                    }

                },


                {
                    name:
                        "Phase 2 — Nature's Grasp",

                    color:
                        "green",

                    description:
                        "From 2.5 to 5 seconds, the field becomes Poisoned Ground. Enemies remaining inside are Rooted and take additional damage when the Root ends.",

                    details: {

                        "Phase Duration":
                            "2.5–5 sec",

                        "Root Requirement":
                            "Remain inside for 1 sec",

                        "Root Duration":
                            "1.25 sec",

                        "Poisoned Ground Damage":
                            "35 HP/s",

                        "Damage when Root Expires":
                            "85"

                    }

                },


                {
                    name:
                        "Phase 3 — Lightflare",

                    color:
                        "yellow",

                    description:
                        "From 5 to 7 seconds, enemies are Blinded at the beginning of the phase and take a large burst of Light damage when it ends.",

                    details: {

                        "Phase Duration":
                            "5–7 sec",

                        "Blind Duration":
                            "1.5 sec",

                        "Final Phase Damage":
                            "150"

                    }

                },


                {
                    name:
                        "Final Explosion",

                    color:
                        "white",

                    description:
                        "When Elemental Convergence ends, all elemental effects collapse together and detonate.",

                    details: {

                        "Base Damage":
                            "180",

                        "1 Phase Endured":
                            "+60",

                        "2 Phases Endured":
                            "+100",

                        "All 3 Phases Endured":
                            "+200",

                        "Maximum Explosion Damage":
                            "380"

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
           AIR FORM
        ================================================= */

        {
            id: "air",

            name: "Air",

            color: "teal",

            heroArt:
                "Assets/Heroes/Shione/IMG_6543.png",


            profile: {

                damage: 7,

                survivability: 4,

                crowdControl: 8,

                mobility: 9,

                support: 7,

                range: 8

            },


            abilities: [


                /* =========================================
                   AIR CUTTER
                ========================================= */

                {
                    type: "Primary Fire",

                    key: "M1",

                    name: "Air Cutter",

                    icon:
                        "Assets/Heroes/Shione/Abilities/air-cutter.png",

                    preview:
                        "Assets/Heroes/Shione/Abilities/air-cutter-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Fire fast-traveling wind projectiles.",

                    detailedDescription:
                        "Shione fires compressed wind projectiles at high speed.",

                    stats: {

                        "Damage":
                            "38",

                        "Fire Rate":
                            "3 shots/sec",

                        "Projectile Speed":
                            "150 m/s"

                    }

                },


                /* =========================================
                   GALE PIERCE
                ========================================= */

                {
                    type: "Ability 1",

                    key: "M2",

                    name: "Gale Pierce",

                    icon:
                        "Assets/Heroes/Shione/Abilities/gale-pierce.png",

                    preview:
                        "Assets/Heroes/Shione/Abilities/gale-pierce-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Launch a piercing spear of compressed wind that Slows enemies.",

                    detailedDescription:
                        "Shione launches a compressed spear of wind that pierces through every enemy in its path. Enemies struck are Slowed.",

                    stats: {

                        "Damage":
                            "95",

                        "Pierces":
                            "All enemies hit",

                        "Slow":
                            "25%",

                        "Slow Duration":
                            "2 sec",

                        "Cooldown":
                            "8 sec"

                    }

                },


                /* =========================================
                   TEMPEST ZONE
                ========================================= */

                {
                    type: "Ability 2",

                    key: "E",

                    name: "Tempest Zone",

                    icon:
                        "Assets/Heroes/Shione/Abilities/tempest-zone.png",

                    preview:
                        "Assets/Heroes/Shione/Abilities/tempest-zone-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Create a swirling storm that launches enemies upward.",

                    detailedDescription:
                        "Shione creates a swirling storm that damages enemies on impact and launches them upward.",

                    stats: {

                        "Impact Damage":
                            "45",

                        "Knock-up Duration":
                            "0.8 sec",

                        "Radius":
                            "4 m",

                        "Cooldown":
                            "11 sec"

                    }

                },


                /* =========================================
                   SKY'S BLESSING
                ========================================= */

                {
                    type: "Ability 3",

                    key: "SHIFT",

                    name: "Sky's Blessing",

                    icon:
                        "Assets/Heroes/Shione/Abilities/skys-blessing.png",

                    preview:
                        "Assets/Heroes/Shione/Abilities/skys-blessing-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Empower Shione and nearby allies with increased Movement Speed.",

                    detailedDescription:
                        "Shione blesses herself and nearby allies with the speed of the wind.",

                    stats: {

                        "Movement Speed":
                            "+16%",

                        "Duration":
                            "6 sec",

                        "Radius":
                            "15 m",

                        "Cooldown":
                            "15 sec"

                    }

                }

            ]

        },


        /* =================================================
           NATURE FORM
        ================================================= */

        {
            id: "nature",

            name: "Nature",

            color: "green",

            heroArt:
                "Assets/Heroes/Shione/IMG_6543.png",


            profile: {

                damage: 6,

                survivability: 6,

                crowdControl: 8,

                mobility: 4,

                support: 10,

                range: 7

            },


            abilities: [


                /* =========================================
                   LEAF BLADE
                ========================================= */

                {
                    type: "Primary Fire",

                    key: "M1",

                    name: "Leaf Blade",

                    icon:
                        "Assets/Heroes/Shione/Abilities/leaf-blade.png",

                    preview:
                        "Assets/Heroes/Shione/Abilities/leaf-blade-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Fire three sharpened leaves in a single attack.",

                    detailedDescription:
                        "Shione fires three sharp leaves toward her target.",

                    stats: {

                        "Damage":
                            "24",

                        "Leaves per Attack":
                            "3",

                        "Fire Rate":
                            "1.15 attacks/sec",

                        "Projectile Speed":
                            "130 m/s"

                    }

                },


                /* =========================================
                   THORNLASH
                ========================================= */

                {
                    type: "Ability 1",

                    key: "M2",

                    name: "Thornlash",

                    icon:
                        "Assets/Heroes/Shione/Abilities/thornlash.png",

                    preview:
                        "Assets/Heroes/Shione/Abilities/thornlash-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Launch explosive poisonous thorns that Poison enemies.",

                    detailedDescription:
                        "Shione launches poisonous thorns that explode on impact. Enemies struck take impact and explosion damage before becoming Poisoned.",

                    stats: {

                        "Impact Damage":
                            "60",

                        "Explosion Damage":
                            "25",

                        "Explosion Radius":
                            "3 m",

                        "Poison Damage":
                            "18 HP/s",

                        "Poison Duration":
                            "4 sec",

                        "Cooldown":
                            "8 sec"

                    }

                },


                /* =========================================
                   VINE GRASP
                ========================================= */

                {
                    type: "Ability 2",

                    key: "E",

                    name: "Vine Grasp",

                    icon:
                        "Assets/Heroes/Shione/Abilities/vine-grasp.png",

                    preview:
                        "Assets/Heroes/Shione/Abilities/vine-grasp-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Fire a living vine that damages and Roots the first enemy struck.",

                    detailedDescription:
                        "Shione fires a living vine forward. The first enemy hit takes damage and is Rooted.",

                    stats: {

                        "Damage":
                            "40",

                        "Root Duration":
                            "1.75 sec",

                        "Range":
                            "18 m",

                        "Cooldown":
                            "12 sec"

                    }

                },


                /* =========================================
                   NATURE'S BLESSING
                ========================================= */

                {
                    type: "Ability 3",

                    key: "SHIFT",

                    name: "Nature's Blessing",

                    icon:
                        "Assets/Heroes/Shione/Abilities/natures-blessing.png",

                    preview:
                        "Assets/Heroes/Shione/Abilities/natures-blessing-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Increase nearby healing passively, then activate to continuously heal allies around Shione.",

                    detailedDescription:
                        "While in Nature Stance, nearby allies receive increased healing. Activating Nature's Blessing causes Shione to radiate restorative energy and continuously heal allies around her.",

                    stats: {

                        "Passive Healing Increase":
                            "+8%",

                        "Passive Radius":
                            "10 m",

                        "Active Healing":
                            "25 HP/s",

                        "Active Duration":
                            "10 sec",

                        "Active Radius":
                            "10 m",

                        "Cooldown":
                            "24 sec"

                    },


                    sections: [

                        {
                            name:
                                "Passive",

                            color:
                                "green",

                            description:
                                "Nearby allies receive increased healing while Shione remains in Nature Stance.",

                            details: {

                                "Healing Received":
                                    "+8%",

                                "Radius":
                                    "10 m"

                            }

                        },


                        {
                            name:
                                "Active",

                            color:
                                "yellow",

                            description:
                                "Shione radiates restorative energy around herself.",

                            details: {

                                "Healing":
                                    "25 HP/s",

                                "Duration":
                                    "10 sec",

                                "Radius":
                                    "10 m"

                            }

                        }

                    ]

                }

            ]

        },


        /* =================================================
           LIGHT FORM
        ================================================= */

        {
            id: "light",

            name: "Light",

            color: "yellow",

            heroArt:
                "Assets/Heroes/Shione/IMG_6543.png",


            profile: {

                damage: 9,

                survivability: 5,

                crowdControl: 7,

                mobility: 9,

                support: 8,

                range: 8

            },


            abilities: [


                /* =========================================
                   LIGHT SHOT
                ========================================= */

                {
                    type: "Primary Fire",

                    key: "M1",

                    name: "Light Shot",

                    icon:
                        "Assets/Heroes/Shione/Abilities/light-shot.png",

                    preview:
                        "Assets/Heroes/Shione/Abilities/light-shot-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Fire powerful instantaneous shots of concentrated light.",

                    detailedDescription:
                        "Shione fires concentrated light using an instantaneous hitscan attack.",

                    stats: {

                        "Damage":
                            "65",

                        "Fire Rate":
                            "2 shots/sec",

                        "Projectile":
                            "Hitscan"

                    }

                },


                /* =========================================
                   SOLAR BEAM
                ========================================= */

                {
                    type: "Ability 1",

                    key: "M2",

                    name: "Solar Beam",

                    icon:
                        "Assets/Heroes/Shione/Abilities/solar-beam.png",

                    preview:
                        "Assets/Heroes/Shione/Abilities/solar-beam-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Fire a concentrated beam that deals increased damage to enemies below half Health.",

                    detailedDescription:
                        "Shione fires an intensely focused beam of light. Solar Beam strikes multiple times before delivering a powerful final hit. Enemies below half Health take increased damage.",

                    stats: {

                        "Damage":
                            "12 × 4 + 70",

                        "Base Total Damage":
                            "118",

                        "Damage Increase Below 50% HP":
                            "+30%",

                        "Cooldown":
                            "9 sec"

                    }

                },


                /* =========================================
                   FLASHPOINT
                ========================================= */

                {
                    type: "Ability 2",

                    key: "E",

                    name: "Flashpoint",

                    icon:
                        "Assets/Heroes/Shione/Abilities/flashpoint.png",

                    preview:
                        "Assets/Heroes/Shione/Abilities/flashpoint-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Teleport instantly and leave behind a radiant explosion that Blinds enemies.",

                    detailedDescription:
                        "Shione instantly teleports to a targeted location. Her previous position erupts in radiant energy, damaging and Blinding nearby enemies.",

                    stats: {

                        "Teleport Range":
                            "18 m",

                        "Explosion Damage":
                            "70",

                        "Explosion Radius":
                            "5 m",

                        "Blind Duration":
                            "2 sec",

                        "Cooldown":
                            "13 sec"

                    }

                },


                /* =========================================
                   LIGHT'S BLESSING
                ========================================= */

                {
                    type: "Ability 3",

                    key: "SHIFT",

                    name: "Light's Blessing",

                    icon:
                        "Assets/Heroes/Shione/Abilities/lights-blessing.png",

                    preview:
                        "Assets/Heroes/Shione/Abilities/lights-blessing-preview.mp4",

                    previewType:
                        "video",

                    shortDescription:
                        "Grant nearby allies faster cooldown recovery and brief Crowd Control Immunity.",

                    detailedDescription:
                        "Shione blesses nearby allies with divine light. Affected allies gain Ability Cooldown Reduction for several seconds and Crowd Control Immunity during the beginning of the effect.",

                    stats: {

                        "Ability Cooldown Reduction":
                            "15%",

                        "Duration":
                            "6 sec",

                        "Crowd Control Immunity":
                            "First 1.25 sec",

                        "Radius":
                            "6 m",

                        "Cooldown":
                            "20 sec"

                    },


                    sections: [

                        {
                            name:
                                "Divine Protection",

                            color:
                                "white",

                            description:
                                "Affected allies gain brief Crowd Control Immunity when the Blessing begins.",

                            details: {

                                "Crowd Control Immunity":
                                    "Yes",

                                "Duration":
                                    "1.25 sec"

                            }

                        },


                        {
                            name:
                                "Radiant Acceleration",

                            color:
                                "yellow",

                            description:
                                "Affected allies recover their abilities faster for the full duration.",

                            details: {

                                "Cooldown Reduction":
                                    "15%",

                                "Duration":
                                    "6 sec"

                            }

                        }

                    ]

                }

            ]

        }

    ]

});
