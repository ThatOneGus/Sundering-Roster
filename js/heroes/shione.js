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
       ART
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
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 8,

        survivability: 5,

        crowdControl: 9,

        mobility: 6,

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
       ABILITIES
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
                "Switch between Air, Nature, and Light, completely changing Shione's Primary Fire and three core abilities.",

            detailedDescription:
                "Shione can shift between Air, Nature, and Light Stances. Each elemental stance replaces her Primary Fire, Ability 1, Ability 2, and Ability 3 with a unique elemental version. Elementalist has a 3-second cooldown between stance changes.",

            stats: {

                "Available Stances":
                    "Air / Nature / Light",

                "Stance Switch Cooldown":
                    "3 sec",

                "Primary Fire Changes":
                    "Yes",

                "Ability 1 Changes":
                    "Yes",

                "Ability 2 Changes":
                    "Yes",

                "Ability 3 Changes":
                    "Yes"

            },


            sections: [

                {
                    name:
                        "Air Stance",

                    color:
                        "teal",

                    description:
                        "Air focuses on fast projectiles, displacement, Slows, and team-wide Movement Speed.",

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
                        "Nature Stance",

                    color:
                        "green",

                    description:
                        "Nature specializes in Poison, Roots, area sustain, and increased healing.",

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
                        "Light Stance",

                    color:
                        "yellow",

                    description:
                        "Light emphasizes burst damage, teleportation, Blinds, cooldown utility, and Crowd Control Immunity.",

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
           AIR — PRIMARY
        ================================================= */

        {
            type: "Air Stance — Primary Fire",

            key: "M1",

            name: "Air Cutter",

            icon:
                "Assets/Heroes/Shione/Abilities/air-cutter.png",

            preview:
                "Assets/Heroes/Shione/Abilities/air-cutter-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire fast-moving wind projectiles at enemies.",

            detailedDescription:
                "While in Air Stance, Shione fires fast-traveling projectiles of compressed wind.",

            stats: {

                "Damage":
                    "38",

                "Fire Rate":
                    "3 shots/sec",

                "Projectile Speed":
                    "150 m/s"

            }

        },


        /* =================================================
           AIR — ABILITY 1
        ================================================= */

        {
            type: "Air Stance — Ability 1",

            key: "M2",

            name: "Gale Pierce",

            icon:
                "Assets/Heroes/Shione/Abilities/gale-pierce.png",

            preview:
                "Assets/Heroes/Shione/Abilities/gale-pierce-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Launch a piercing spear of compressed wind that damages and Slows every enemy struck.",

            detailedDescription:
                "Shione launches a concentrated spear of wind that pierces through all enemies in its path. Enemies struck take damage and are Slowed.",

            stats: {

                "Damage":
                    "95",

                "Pierces Enemies":
                    "Yes",

                "Slow":
                    "25%",

                "Slow Duration":
                    "2 sec",

                "Cooldown":
                    "8 sec"

            }

        },


        /* =================================================
           AIR — ABILITY 2
        ================================================= */

        {
            type: "Air Stance — Ability 2",

            key: "E",

            name: "Tempest Zone",

            icon:
                "Assets/Heroes/Shione/Abilities/tempest-zone.png",

            preview:
                "Assets/Heroes/Shione/Abilities/tempest-zone-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Create a swirling storm that damages enemies and launches them upward.",

            detailedDescription:
                "Shione creates a concentrated storm at a target area. Enemies caught in the Tempest take damage and are launched upward.",

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


        /* =================================================
           AIR — ABILITY 3
        ================================================= */

        {
            type: "Air Stance — Ability 3",

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
                "Shione channels the speed of the wind into herself and nearby allies, increasing their Movement Speed for several seconds.",

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

        },


        /* =================================================
           NATURE — PRIMARY
        ================================================= */

        {
            type: "Nature Stance — Primary Fire",

            key: "M1",

            name: "Leaf Blade",

            icon:
                "Assets/Heroes/Shione/Abilities/leaf-blade.png",

            preview:
                "Assets/Heroes/Shione/Abilities/leaf-blade-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire a spread of three sharpened leaves.",

            detailedDescription:
                "While in Nature Stance, Shione launches three sharpened leaves as a single attack.",

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


        /* =================================================
           NATURE — ABILITY 1
        ================================================= */

        {
            type: "Nature Stance — Ability 1",

            key: "M2",

            name: "Thornlash",

            icon:
                "Assets/Heroes/Shione/Abilities/thornlash.png",

            preview:
                "Assets/Heroes/Shione/Abilities/thornlash-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Launch explosive poisonous thorns that damage and Poison enemies.",

            detailedDescription:
                "Shione launches a cluster of poisonous thorns that explode on impact. The initial hit and explosion both deal damage, while affected enemies are Poisoned afterward.",

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


        /* =================================================
           NATURE — ABILITY 2
        ================================================= */

        {
            type: "Nature Stance — Ability 2",

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
                "Shione launches a living vine forward. The first enemy hit takes damage and is Rooted in place.",

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


        /* =================================================
           NATURE — ABILITY 3
        ================================================= */

        {
            type: "Nature Stance — Ability 3",

            key: "SHIFT",

            name: "Nature's Blessing",

            icon:
                "Assets/Heroes/Shione/Abilities/natures-blessing.png",

            preview:
                "Assets/Heroes/Shione/Abilities/natures-blessing-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Passively increase nearby healing, then activate the Blessing to continuously heal allies around Shione.",

            detailedDescription:
                "While Shione remains in Nature Stance, nearby allies passively receive increased healing. Activating Nature's Blessing causes Shione to radiate restorative energy for 10 seconds, continuously healing allies within range.",

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
                        "Passive — Verdant Aura",

                    color:
                        "green",

                    description:
                        "While in Nature Stance, nearby allies receive increased healing from all sources.",

                    details: {

                        "Healing Received":
                            "+8%",

                        "Radius":
                            "10 m"

                    }

                },


                {
                    name:
                        "Active — Restorative Bloom",

                    color:
                        "yellow",

                    description:
                        "Activating Nature's Blessing continuously restores nearby allies.",

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

        },


        /* =================================================
           LIGHT — PRIMARY
        ================================================= */

        {
            type: "Light Stance — Primary Fire",

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
                "While in Light Stance, Shione fires high-damage instantaneous beams of concentrated light using a hitscan weapon.",

            stats: {

                "Damage":
                    "65",

                "Fire Rate":
                    "2 shots/sec",

                "Projectile":
                    "Hitscan"

            }

        },


        /* =================================================
           LIGHT — ABILITY 1
        ================================================= */

        {
            type: "Light Stance — Ability 1",

            key: "M2",

            name: "Solar Beam",

            icon:
                "Assets/Heroes/Shione/Abilities/solar-beam.png",

            preview:
                "Assets/Heroes/Shione/Abilities/solar-beam-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire a concentrated multi-hit beam that deals increased damage to wounded enemies.",

            detailedDescription:
                "Shione fires an intensely focused beam of light. Solar Beam strikes multiple times before delivering a powerful final hit. Enemies below half Health take increased damage.",

            stats: {

                "Damage":
                    "12 × 4 + 70",

                "Base Total Damage":
                    "118",

                "Damage Increase Below Half Health":
                    "+30%",

                "Cooldown":
                    "9 sec"

            },


            sections: [

                {
                    name:
                        "Execution Light",

                    color:
                        "yellow",

                    description:
                        "Solar Beam becomes more powerful against enemies below half Health.",

                    details: {

                        "Health Requirement":
                            "Below 50% HP",

                        "Damage Increase":
                            "+30%"

                    }

                }

            ]

        },


        /* =================================================
           LIGHT — ABILITY 2
        ================================================= */

        {
            type: "Light Stance — Ability 2",

            key: "E",

            name: "Flashpoint",

            icon:
                "Assets/Heroes/Shione/Abilities/flashpoint.png",

            preview:
                "Assets/Heroes/Shione/Abilities/flashpoint-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Teleport instantly while leaving behind a radiant explosion that damages and Blinds enemies.",

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


        /* =================================================
           LIGHT — ABILITY 3
        ================================================= */

        {
            type: "Light Stance — Ability 3",

            key: "SHIFT",

            name: "Light's Blessing",

            icon:
                "Assets/Heroes/Shione/Abilities/lights-blessing.png",

            preview:
                "Assets/Heroes/Shione/Abilities/lights-blessing-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Bless nearby allies with faster ability recovery and brief Crowd Control Immunity.",

            detailedDescription:
                "Shione blesses nearby allies with divine light, reducing their Ability cooldowns for several seconds. At the beginning of the Blessing, affected allies briefly gain Crowd Control Immunity.",

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
                        "Allies are temporarily protected from Crowd Control when Light's Blessing first activates.",

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
                        "Affected allies recover their abilities faster for the full Blessing duration.",

                    details: {

                        "Cooldown Reduction":
                            "15%",

                        "Duration":
                            "6 sec"

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
                "Create a massive elemental field that cycles through Air, Nature, and Light before detonating in a devastating final explosion.",

            detailedDescription:
                "Shione creates a massive elemental field that evolves through three consecutive phases: Air Surge, Nature's Grasp, and Lightflare. Each phase applies a different form of pressure and Crowd Control. When the final phase ends, the entire field detonates, dealing base damage plus additional damage based on how many phases each enemy endured.",

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

                /* =============================================
                   PHASE 1 — AIR
                ============================================= */

                {
                    name:
                        "Phase 1 — Air Surge",

                    color:
                        "teal",

                    description:
                        "From 0 to 2.5 seconds, the field becomes a violent wind vortex that pulls enemies inward, damages them, interferes with projectiles, and makes enemies more vulnerable.",

                    details: {

                        "Phase Duration":
                            "0–2.5 sec",

                        "Damage":
                            "45 HP/s",

                        "Forced Movement":
                            "Steadily toward center",

                        "Projectile Speed Reduction":
                            "40%",

                        "Enemy Vulnerability":
                            "+10% damage taken"

                    }

                },


                /* =============================================
                   PHASE 2 — NATURE
                ============================================= */

                {
                    name:
                        "Phase 2 — Nature's Grasp",

                    color:
                        "green",

                    description:
                        "From 2.5 to 5 seconds, the field becomes Poisoned Ground. Enemies who remain inside long enough are Rooted, then suffer a burst of Nature damage when the Root ends.",

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


                /* =============================================
                   PHASE 3 — LIGHT
                ============================================= */

                {
                    name:
                        "Phase 3 — Lightflare",

                    color:
                        "yellow",

                    description:
                        "From 5 to 7 seconds, the field erupts with overwhelming light. Enemies are Blinded when the phase begins before taking a massive burst of Light damage at its conclusion.",

                    details: {

                        "Phase Duration":
                            "5–7 sec",

                        "Blind Duration":
                            "1.5 sec",

                        "Final Phase Damage":
                            "150 AoE"

                    }

                },


                /* =============================================
                   FINAL EXPLOSION
                ============================================= */

                {
                    name:
                        "Final Explosion",

                    color:
                        "white",

                    description:
                        "When Elemental Convergence ends, all three elemental forces collapse together. Every enemy caught in the detonation takes base damage plus additional damage based on the number of phases they experienced.",

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

    ]

});
