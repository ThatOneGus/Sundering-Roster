/* =========================================================
   ZEL'VORAN
========================================================= */

window.heroes = window.heroes || [];

window.heroes.push({

    name: "Zel'voran",

    title: "The Fallen Dragon King",

    role: "Vanguard",

    secondaryRoles: [
        "Bludgeon",
        "Warden"
    ],

    region: "Nocturne",


    /* =====================================================
       ART
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
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 6,

        survivability: 10,

        crowdControl: 8,

        mobility: 3,

        support: 1,

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
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — INFERNAL HEART
        ================================================= */

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
                "Generate Scorch near enemies and by blocking damage, empowering Zel'voran with Bonus Health, Attack Speed, and eventually a damaging fire vortex.",

            detailedDescription:
                "Zel'voran generates Scorch while standing near enemies and blocking incoming damage. At 50 Scorch, Infernal Heart begins radiating intense heat, granting Bonus Health and increased Attack Speed. At maximum Scorch, Zel'voran creates a swirling vortex of flame around himself that damages and Slows nearby enemies. Scorch rapidly decays when it is no longer being maintained.",

            stats: {

                "Maximum Scorch":
                    "100",

                "Scorch per Enemy":
                    "+2/sec per enemy within 10 m",

                "Scorch from Damage Blocked":
                    "+1 per 100 damage blocked",

                "Empower Threshold":
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
                        "At 50 Scorch, Zel'voran begins radiating infernal heat and gains increased durability and Attack Speed.",

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
                        "At maximum Scorch, a swirling vortex of flame forms around Zel'voran, continuously damaging and Slowing enemies nearby.",

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


        /* =================================================
           PRIMARY — INFERNAL CLAW
        ================================================= */

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
                "Rapidly slash enemies in a short area in front of Zel'voran.",

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


        /* =================================================
           SECONDARY — INFERNAL SPIT
        ================================================= */

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
                "Exhale a sustained cone of flame, damaging all enemies caught within it.",

            detailedDescription:
                "Zel'voran exhales a short-range cone of continuous flame that damages enemies over time. Infernal Spit consumes ammo while active. If Zel'voran completely exhausts the ammo supply, the attack Burns Out and cannot be used again until the entire ammo meter has recharged.",

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
                    "10/sec",

                "Burnout":
                    "Requires full recharge if completely emptied"

            },


            sections: [

                {
                    name:
                        "Burnout",

                    color:
                        "red",

                    description:
                        "Fully exhausting Infernal Spit's ammo temporarily locks the attack until all ammo has regenerated.",

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


        /* =================================================
           ABILITY 1 — MOLTEN MANTLE
        ================================================= */

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
                "Raise a temporary wall of molten rock that blocks projectiles, Slows enemies, and explodes when destroyed or expired.",

            detailedDescription:
                "Zel'voran raises a wall of molten rock that blocks enemy projectiles and Slows enemies who pass through it. When the wall expires or is destroyed, it violently erupts, damaging and Burning nearby enemies. Damage blocked by Molten Mantle generates Scorch at an increased rate.",

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

                "Scorch from Damage Blocked":
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
                        "Molten Mantle blocks hostile projectiles and generates Scorch more efficiently than Zel'voran's normal passive blocking conversion.",

                    details: {

                        "Duration":
                            "3 sec",

                        "Scorch Generation":
                            "+1 per 50 damage blocked",

                        "Enemies Passing Through":
                            "Slowed by 20% for 2 sec"

                    }

                },


                {
                    name:
                        "Mantle Eruption",

                    color:
                        "red",

                    description:
                        "When Molten Mantle expires or is destroyed, it erupts and Burns enemies caught nearby.",

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


        /* =================================================
           ABILITY 2 — VOLCANIC RUPTURE
        ================================================= */

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
                "Send a seismic wave forward that erupts after a delay, launching enemies and leaving behind a burning Grounded zone.",

            detailedDescription:
                "Zel'voran slams the ground and sends a seismic wave forward. After a short delay, the affected area erupts, damaging and launching enemies upward while interrupting their abilities. The eruption leaves behind a burning zone that Burns and Grounds enemies inside it.",

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

                "Grounded":
                    "Yes",

                "Interrupts Abilities":
                    "Yes",

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
                        "After a brief warning, the rupture explodes upward and interrupts enemies caught within it.",

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
                        "The erupted area remains dangerous for a short duration, Burning and Grounding enemies caught inside.",

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


        /* =================================================
           ABILITY 3 — SEARING GRASP
        ================================================= */

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
                "Launch a molten grasp that pulls an enemy to Zel'voran, Stuns them, Burns them, and reduces their healing.",

            detailedDescription:
                "Zel'voran launches a molten grasp forward. If it strikes an enemy, the target is violently pulled toward Zel'voran and briefly Stunned. The target is also Burned and suffers reduced healing received for a short duration.",

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

            },


            sections: [

                {
                    name:
                        "Infernal Capture",

                    color:
                        "red",

                    description:
                        "Enemies struck by Searing Grasp are pulled directly toward Zel'voran and briefly Stunned.",

                    details: {

                        "Damage":
                            "75",

                        "Maximum Range":
                            "12 m",

                        "Stun Duration":
                            "0.75 sec"

                    }

                },


                {
                    name:
                        "Searing Wound",

                    color:
                        "orange",

                    description:
                        "The captured enemy is Burned and temporarily receives significantly less healing.",

                    details: {

                        "Healing Received":
                            "-30%",

                        "Healing Reduction Duration":
                            "4 sec",

                        "Burned":
                            "Yes"

                    }

                }

            ]

        },


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
                "Transform into Dragon-Form, gaining massive Health, CC Immunity, and enhanced versions of Zel'voran's core abilities.",

            detailedDescription:
                "Zel'voran unleashes his Dragon-Form for 10 seconds, gaining greatly increased maximum Health and Crowd Control Immunity. During Dragon-Form, Infernal Heart, Infernal Claw, Infernal Spit, and Volcanic Rupture are transformed into stronger versions. Volcanic Rupture replaces Molten Mantle's ability slot during the transformation and gains 3 limited-use charges. When Cataclysm Core ends, Zel'voran releases a massive explosion that Shoves enemies away and grants Bonus Health based on the total damage he dealt during Dragon-Form.",

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

                /* =============================================
                   DRAGON INFERNAL HEART
                ============================================= */

                {
                    name:
                        "Dragon-Form — Infernal Heart",

                    color:
                        "red",

                    description:
                        "Infernal Heart's maximum-Scorch vortex becomes dramatically larger and more dangerous while Zel'voran is transformed.",

                    details: {

                        "Fire Vortex Damage":
                            "25 HP/s → 35 HP/s",

                        "Fire Vortex Radius":
                            "3.5 m → 5 m",

                        "Fire Vortex Slow":
                            "15% → 25%"

                    }

                },


                /* =============================================
                   DRAGON INFERNAL CLAW
                ============================================= */

                {
                    name:
                        "Dragon-Form — Infernal Claw",

                    color:
                        "orange",

                    description:
                        "Zel'voran's claws become much heavier and more destructive, trading attack speed for greatly increased damage.",

                    details: {

                        "Damage":
                            "40 → 68",

                        "Fire Rate":
                            "2.13/sec → 1.6/sec"

                    }

                },


                /* =============================================
                   DRAGON INFERNAL SPIT
                ============================================= */

                {
                    name:
                        "Dragon-Form — Infernal Spit",

                    color:
                        "yellow",

                    description:
                        "Dragon-Form allows Zel'voran to exhale a larger and more destructive torrent of flame for longer periods.",

                    details: {

                        "Damage":
                            "70 HP/s → 90 HP/s",

                        "Cone Angle":
                            "45° → 65°",

                        "Range":
                            "8 m → 10 m",

                        "Maximum Ammo":
                            "60 → 70"

                    }

                },


                /* =============================================
                   DRAGON VOLCANIC RUPTURE
                ============================================= */

                {
                    name:
                        "Dragon-Form — Volcanic Rupture",

                    color:
                        "violet",

                    description:
                        "Volcanic Rupture becomes a circular eruption centered on Zel'voran. It replaces Molten Mantle's ability slot and can be cast up to 3 times during Cataclysm Core.",

                    details: {

                        "Area":
                            "7 m radius around Zel'voran",

                        "Charges":
                            "3",

                        "Recharge":
                            "Charges cannot regenerate",

                        "Delay Between Uses":
                            "2.5 sec",

                        "Ability Slot":
                            "Replaces Molten Mantle during Dragon-Form"

                    }

                },


                /* =============================================
                   FINAL CATACLYSM
                ============================================= */

                {
                    name:
                        "Final Cataclysm",

                    color:
                        "white",

                    description:
                        "When Dragon-Form ends, Zel'voran violently releases the accumulated heat of Cataclysm Core, damaging and Shoving nearby enemies away. He then converts part of all damage dealt during the transformation into Bonus Health.",

                    details: {

                        "Explosion Damage":
                            "100",

                        "Explosion Radius":
                            "10 m",

                        "Shove":
                            "Away from Zel'voran",

                        "Bonus Health":
                            "10% of damage dealt during Cataclysm Core"

                    }

                }

            ]

        }

    ]

});
