window.heroes = window.heroes || [];

window.heroes.push({
    name: "Corvin & Silas",

    title: "The Bound Twins",

    role: "Striker",

    secondaryRoles: [
        "Ravager",
        "Marksman"
    ],

    region: "Nocturne",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Corvin-Silas/IMG_6658.png",

    heroArt:
        "Assets/Heroes/Corvin-Silas/hero-art.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "Two angelic demonkin bound by a single shared existence. Corvin and Silas fight simultaneously, combining Corvin's aggressive close-range firepower with Silas's precision while constantly shifting control between one another.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 9,

        survivability: 3,

        crowdControl: 6,

        mobility: 4,

        support: 3,

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
                "Assets/Heroes/Corvin-Silas/Skins/Default/thumbnail.png"
        },

        {
            name: "Twin Tides",

            rarity: "Epic",

            thumbnail:
                "Assets/Heroes/Corvin-Silas/Skins/Twin-Tides/thumbnail.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [
        
        Example:

        {
            title: "Twin Design Exploration",

            image:
                "Assets/Heroes/Corvin-Silas/Concept-Art/twin-design.png",

            description:
                "Early exploration of Corvin and Silas as a permanently linked pair."
        }

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — TWIN BOND
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Twin Bond",

            icon:
                "Assets/Heroes/Corvin-Silas/Abilities/twin-bond.png",

            preview:
                "Assets/Heroes/Corvin-Silas/Abilities/twin-bond-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Corvin and Silas fight simultaneously, sharing one Health Pool while the off-twin mirrors the active twin.",

            detailedDescription:
                "Corvin and Silas are permanently bound to one another and remain on the battlefield simultaneously. The player directly controls one twin at a time while the other automatically mirrors their movement and basic attacks. The twins cannot move more than 10m apart. If they exceed this distance, the off-twin automatically moves toward the active twin and both begin taking escalating Separation Damage.",

            stats: {

                "Maximum Separation":
                    "10 m",

                "Control":
                    "One twin directly controlled at a time",

                "Off-Twin Behavior":
                    "Automatically follows and mirrors basic attacks"

            },


            sections: [

                {
                    name:
                        "Shared Health Pool",

                    color:
                        "violet",

                    description:
                        "Both twins share the same Health Pool. Damage dealt to either twin contributes to the same shared HP total, and eliminating the shared Health Pool eliminates both twins.",

                    details: {

                        "Health Pool":
                            "Shared between both twins",

                        "Active Twin Damage Share":
                            "70%",

                        "Off-Twin Damage Share":
                            "30%",

                        "At 0 HP":
                            "Both twins are eliminated"

                    }

                },


                {
                    name:
                        "Separation",

                    color:
                        "violet",

                    description:
                        "The twins cannot safely remain more than 10m apart. Exceeding their maximum separation causes the off-twin to path back toward the active twin while both suffer increasingly severe damage.",

                    details: {

                        "Maximum Separation":
                            "10 m",

                        "Initial Separation Damage":
                            "15 HP/sec",

                        "Damage Increase":
                            "+20 HP/sec every second",

                        "Damage Ends":
                            "Immediately upon returning within 10 m"

                    }

                }

            ]

        },


        /* =================================================
           PRIMARY — TWINFIRE BARRAGE
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Twinfire Barrage",

            icon:
                "Assets/Heroes/Corvin-Silas/Abilities/twinfire-barrage.png",

            preview:
                "Assets/Heroes/Corvin-Silas/Abilities/twinfire-barrage-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire with both twins simultaneously, combining Silas's precision shots with Corvin's close-range bursts.",

            detailedDescription:
                "Both twins fire simultaneously at the active twin's target. The player only aims and fires with the active twin, while the off-twin automatically attacks the same target. Silas uses slower, precise shots with greater effective range while Corvin fires rapid three-shot bursts with increased spread.",

            stats: {

                "Firing Behavior":
                    "Both twins fire simultaneously",

                "Aiming":
                    "Controlled through active twin",

                "Off-Twin Target":
                    "Active twin's target"

            },


            sections: [

                {
                    name:
                        "Silas — Precision Fire",

                    color:
                        "red",

                    description:
                        "Silas fires precise hitscan shots with greater effective range.",

                    details: {

                        "Damage":
                            "30",

                        "Fire Rate":
                            "2 shots/sec",

                        "Projectile":
                            "Hitscan",

                        "Falloff":
                            "Starts at 20m, decreasing to 70% at 30m",

                        "Critical Hits":
                            "Yes"

                    }

                },


                {
                    name:
                        "Corvin — Burst Fire",

                    color:
                        "blue",

                    description:
                        "Corvin fires aggressive three-shot bursts with slightly increased spread compared to Silas.",

                    details: {

                        "Damage":
                            "15 per shot",

                        "Shots per Burst":
                            "3",

                        "Maximum Burst Damage":
                            "45",

                        "Burst Interval":
                            "0.15 sec",

                        "Time Between Bursts":
                            "0.55 sec",

                        "Projectile":
                            "Hitscan",

                        "Falloff":
                            "Starts at 15m, decreasing to 65% at 25m",

                        "Critical Hits":
                            "Yes",

                        "Spread":
                            "Slightly increased"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 1 — HALO & HORNS
        ================================================= */

        {
            type: "Ability 1",

            key: "M2",

            name: "Halo & Horns",

            icon:
                "Assets/Heroes/Corvin-Silas/Abilities/halo-and-horns.png",

            preview:
                "Assets/Heroes/Corvin-Silas/Abilities/halo-and-horns-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Perform an active-twin-specific attack that empowers the other twin against affected enemies.",

            detailedDescription:
                "Corvin and Silas perform a coordinated attack determined by which twin is currently active. Silas uses Halo to strike and Slow a distant target while empowering Corvin's attacks against them. Corvin uses Horns to blast enemies away at close range while temporarily granting Silas piercing shots.",

            stats: {

                "Cooldown":
                    "10 sec",

                "Empowerment Duration":
                    "4 sec"

            },


            sections: [

                {
                    name:
                        "Silas — Halo",

                    color:
                        "red",

                    description:
                        "Silas fires a precise beam of demonic energy at an enemy. The target is Slowed and becomes vulnerable to additional Burn Damage from Corvin's attacks for 4 seconds.",

                    details: {

                        "Damage":
                            "50",

                        "Range":
                            "30 m",

                        "Projectile":
                            "Hitscan",

                        "Slow":
                            "25%",

                        "Slow Duration":
                            "2 sec",

                        "Corvin Bonus Burn Damage":
                            "+10 per shot",

                        "Corvin Empowerment Duration":
                            "4 sec"

                    }

                },


                {
                    name:
                        "Corvin — Horns",

                    color:
                        "blue",

                    description:
                        "Corvin unleashes a concentrated blast of demonic force that Shoves enemies away. For 4 seconds afterward, Silas's attacks pierce through enemies.",

                    details: {

                        "Damage":
                            "50",

                        "Range":
                            "15 m",

                        "Cone":
                            "60°",

                        "Shove Distance":
                            "4 m",

                        "Silas Piercing":
                            "Yes",

                        "Pierced Target Damage":
                            "75% of original shot",

                        "Silas Empowerment Duration":
                            "4 sec"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 2 — ORBIT BREAKER
        ================================================= */

        {
            type: "Ability 2",

            key: "E",

            name: "Orbit Breaker",

            icon:
                "Assets/Heroes/Corvin-Silas/Abilities/orbit-breaker.png",

            preview:
                "Assets/Heroes/Corvin-Silas/Abilities/orbit-breaker-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Send the off-twin orbiting around the active twin, creating a damaging and empowering tether before releasing a shockwave.",

            detailedDescription:
                "The off-twin rapidly circles the active twin, creating an energized tether between them. The tether damages and Slows enemies it passes through while granting Bonus Health to allies. After completing the orbit, the active twin releases a shockwave centered on themselves that damages enemies and grants Bonus Health to allies.",

            stats: {

                "Cast Duration":
                    "1 sec",

                "Cooldown":
                    "12 sec"

            },


            sections: [

                {
                    name:
                        "Twin Tether",

                    color:
                        "violet",

                    description:
                        "As the off-twin circles the active twin, the energy connecting them damages enemies and grants temporary Bonus Health to allies it passes through.",

                    details: {

                        "Circle Radius":
                            "8 m",

                        "Damage":
                            "50",

                        "Slow":
                            "20%",

                        "Slow Duration":
                            "2 sec",

                        "Ally Bonus Health":
                            "50",

                        "Bonus Health Duration":
                            "3 sec",

                        "Bonus Health Decay":
                            "25 HP/sec"

                    }

                },


                {
                    name:
                        "Shockwave",

                    color:
                        "violet",

                    description:
                        "After the orbit is completed, the active twin releases an 8m shockwave around themselves.",

                    details: {

                        "Damage":
                            "60",

                        "Radius":
                            "8 m",

                        "Ally Bonus Health":
                            "50",

                        "Bonus Health Duration":
                            "3 sec"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 3 — SWITCHING SIDES
        ================================================= */

        {
            type: "Ability 3",

            key: "SHIFT",

            name: "Switching Sides",

            icon:
                "Assets/Heroes/Corvin-Silas/Abilities/switching-sides.png",

            preview:
                "Assets/Heroes/Corvin-Silas/Abilities/switching-sides-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Instantly swap control between Corvin and Silas, releasing bursts from both twins and empowering the newly active twin.",

            detailedDescription:
                "Corvin and Silas instantly swap which twin is under the player's direct control. The previously active twin becomes the off-twin while the other becomes active. Both twins simultaneously release a psychic-demonic burst from their respective locations. Additional effects are determined by which twin becomes active.",

            stats: {

                "Burst Damage":
                    "30",

                "Burst Radius":
                    "5 m",

                "Cooldown":
                    "6 sec"

            },


            sections: [

                {
                    name:
                        "Corvin → Silas",

                    color:
                        "red",

                    description:
                        "Silas becomes the active twin. Enemies caught in either burst are Slowed and Silas temporarily gains increased Attack Speed.",

                    details: {

                        "Enemy Slow":
                            "15%",

                        "Slow Duration":
                            "2 sec",

                        "Silas Attack Speed":
                            "+25%",

                        "Attack Speed Duration":
                            "3 sec"

                    }

                },


                {
                    name:
                        "Silas → Corvin",

                    color:
                        "blue",

                    description:
                        "Corvin becomes the active twin. Enemies caught in either burst are Shoved away and Corvin temporarily gains Damage Reduction.",

                    details: {

                        "Shove Distance":
                            "3 m",

                        "Corvin Damage Reduction":
                            "20%",

                        "Damage Reduction Duration":
                            "3 sec"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — JUDGMENT'S ASCENT
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Judgment's Ascent",

            icon:
                "Assets/Heroes/Corvin-Silas/Abilities/judgments-ascent.png",

            preview:
                "Assets/Heroes/Corvin-Silas/Abilities/judgments-ascent-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Ascend and merge the twins into a flying angelic-demonic entity that rains explosive projectiles onto the battlefield.",

            detailedDescription:
                "Corvin and Silas ascend into the air, spiraling upward around one another before merging into a single monstrous angelic-demonic entity. Upon activation, both twins become Crowd Control Immune and gain Free Flight. After ascending, they merge and remain airborne for 6 seconds, continuously firing explosive projectiles toward the targeted area. When Judgment's Ascent ends, the twins separate in midair and descend back toward the battlefield.",

            stats: {

                "Merged Duration":
                    "6 sec",

                "Crowd Control Immunity":
                    "Yes",

                "Movement":
                    "Free Flight",

                "Energy Cost":
                    "3200"

            },


            sections: [

                {
                    name:
                        "Merged Form",

                    color:
                        "violet",

                    description:
                        "While merged, Corvin and Silas continuously bombard the targeted area with rapid explosive projectiles that Slow enemies struck.",

                    details: {

                        "Duration":
                            "6 sec",

                        "Projectile Damage":
                            "30",

                        "Explosion Radius":
                            "3 m",

                        "Fire Interval":
                            "0.2 sec",

                        "Projectile Speed":
                            "160 m/s",

                        "Slow":
                            "30%",

                        "Slow Duration":
                            "1.5 sec",

                        "Crowd Control Immunity":
                            "Yes",

                        "Flight":
                            "Free Flight"

                    }

                }

            ]

        }

    ]

});
