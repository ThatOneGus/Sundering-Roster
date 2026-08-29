/* =========================================================
   VEYRAN
========================================================= */

window.heroes = window.heroes || [];

window.heroes.push({

    name: "Veyran",

    title: "The Vessel of Suffering",

    role: "Vanguard",

    secondaryRoles: [
        "Bludgeon",
        "Guardian"
    ],

    region: "Nocturne",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Veyran/thumbnail.png",

    heroArt:
        "Assets/Heroes/Veyran/hero-art.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "Bound to Akhzul, the Demon of Suffering, Veyran turns pain into protection. The more agony that surrounds him, the stronger Akhzul becomes, granting Veyran unnatural durability while converting enemy suffering into healing, Bonus Health, and terrifying battlefield control.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 6,

        survivability: 9,

        crowdControl: 9,

        mobility: 2,

        support: 8,

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
                "Assets/Heroes/Veyran/thumbnail.png",

            splash:
                "Assets/Heroes/Veyran/hero-art.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        {
            title: "Akhzul Manifestation Study",

            image:
                "Assets/Heroes/Veyran/Concept-Art/akhzul-study.png",

            description:
                "Exploration of Akhzul's spectral anatomy and how he manifests around Veyran."
        }
        */

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — FEAST OF TORMENT
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Feast of Torment",

            icon:
                "Assets/Heroes/Veyran/Abilities/feast-of-torment.png",

            preview:
                "Assets/Heroes/Veyran/Abilities/feast-of-torment-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Akhzul feeds on nearby pain and death, building his own Health pool that appears as Bonus Health for Veyran.",

            detailedDescription:
                "Akhzul, the Demon of Suffering, lives within Veyran and feeds on the pain and death of nearby enemies. Akhzul possesses his own Health pool equal to up to 50% of Veyran's maximum Health. This Health appears as Bonus Health on Veyran. Damaging nearby enemies and witnessing nearby deaths restores Akhzul. If Akhzul's Health reaches 0, he vanishes and abilities requiring his manifestation become unavailable until he has recovered at least 50 HP.",

            stats: {

                "Maximum Akhzul Health":
                    "50% of Veyran's Max HP",

                "Base Maximum Akhzul Health":
                    "275 HP",

                "Damage Trigger Range":
                    "10 m",

                "Akhzul Healing per Damage Trigger":
                    "15 HP",

                "Damage Trigger Internal Cooldown":
                    "0.5 sec per enemy",

                "Enemy Death Range":
                    "12 m",

                "Akhzul Healing per Enemy Death":
                    "50 HP",

                "Manifestation Requirement":
                    "At least 50 HP"

            },


            sections: [

                {
                    name:
                        "Akhzul's Health",

                    color:
                        "violet",

                    description:
                        "Akhzul maintains a separate Health pool that directly appears as Bonus Health for Veyran.",

                    details: {

                        "Maximum":
                            "50% of Veyran's Max HP",

                        "Base Value":
                            "275 HP",

                        "Displayed As":
                            "Bonus Health"

                    }

                },


                {
                    name:
                        "Feeding on Pain",

                    color:
                        "red",

                    description:
                        "Akhzul restores Health when Veyran damages nearby enemies.",

                    details: {

                        "Range":
                            "10 m",

                        "Healing":
                            "+15 Akhzul HP",

                        "Internal Cooldown":
                            "0.5 sec per enemy"

                    }

                },


                {
                    name:
                        "Feeding on Death",

                    color:
                        "red",

                    description:
                        "Deaths near Veyran immediately feed Akhzul a large amount of Health.",

                    details: {

                        "Range":
                            "12 m",

                        "Healing":
                            "+50 Akhzul HP"

                    }

                },


                {
                    name:
                        "Vanished",

                    color:
                        "white",

                    description:
                        "If Akhzul's Health reaches 0, he vanishes and stops providing Bonus Health or empowering manifestation-dependent abilities.",

                    details: {

                        "Vanish Threshold":
                            "0 HP",

                        "Return Threshold":
                            "50 HP",

                        "Manifestation Abilities":
                            "Unavailable while vanished"

                    }

                }

            ]

        },


        /* =================================================
           PRIMARY — MAWREND CLEAVE
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Mawrend Cleave",

            icon:
                "Assets/Heroes/Veyran/Abilities/mawrend-cleave.png",

            preview:
                "Assets/Heroes/Veyran/Abilities/mawrend-cleave-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Perform a heavy melee combo, ending with a spectral claw strike from Akhzul.",

            detailedDescription:
                "Veyran attacks with a heavy jagged weapon in a melee combo. The third strike releases a spectral claw swipe with slightly extended range. If Akhzul is currently manifested, the spectral claw deals additional damage.",

            stats: {

                "Combo Hits":
                    "3",

                "Base Damage":
                    "TBD",

                "Third Hit Range Increase":
                    "TBD",

                "Akhzul Bonus Damage":
                    "TBD"

            },


            sections: [

                {
                    name:
                        "Third Strike",

                    color:
                        "violet",

                    description:
                        "The final strike releases Akhzul's spectral claw, extending the attack beyond Veyran's normal melee reach.",

                    details: {

                        "Extended Range":
                            "Yes",

                        "Bonus Damage if Akhzul is Alive":
                            "Yes"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 1 — HARROWING EMBRACE
        ================================================= */

        {
            type: "Ability 1",

            key: "M2",

            name: "Harrowing Embrace",

            icon:
                "Assets/Heroes/Veyran/Abilities/harrowing-embrace.png",

            preview:
                "Assets/Heroes/Veyran/Abilities/harrowing-embrace-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Summon Akhzul's spectral arms in a line to damage and Snare enemies while restoring Akhzul and protecting nearby allies.",

            detailedDescription:
                "Akhzul's spectral arms erupt from the ground in a short line, damaging and Snaring enemies. If at least one enemy is hit, Akhzul restores Health. If Akhzul is currently manifested, nearby allies also gain temporary Bonus Health.",

            stats: {

                "Snare Duration":
                    "1.25 sec",

                "Damage":
                    "TBD",

                "Akhzul Healing on Hit":
                    "25 HP",

                "Ally Bonus Health":
                    "75",

                "Ally Bonus Health Duration":
                    "4 sec",

                "Ally Radius":
                    "8 m",

                "Cooldown":
                    "TBD"

            },


            sections: [

                {
                    name:
                        "Feed the Demon",

                    color:
                        "red",

                    description:
                        "Landing Harrowing Embrace restores part of Akhzul's Health.",

                    details: {

                        "Requirement":
                            "Hit at least 1 enemy",

                        "Akhzul Healing":
                            "25 HP"

                    }

                },


                {
                    name:
                        "Manifested Protection",

                    color:
                        "violet",

                    description:
                        "If Akhzul is alive, nearby allies gain temporary Bonus Health when Harrowing Embrace connects.",

                    details: {

                        "Bonus Health":
                            "75",

                        "Duration":
                            "4 sec",

                        "Radius":
                            "8 m"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 2 — HARVESTER'S GRASP
        ================================================= */

        {
            type: "Ability 2",

            key: "E",

            name: "Harvester's Grasp",

            icon:
                "Assets/Heroes/Veyran/Abilities/harvesters-grasp.png",

            preview:
                "Assets/Heroes/Veyran/Abilities/harvesters-grasp-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Bind an enemy with Akhzul's chains, converting damage dealt to them into healing for nearby allies.",

            detailedDescription:
                "Veyran targets an enemy and commands Akhzul's spectral skulls to lash them with shadow chains for 3 seconds. The tethered enemy is Tormented, taking damage over time and building Torment stacks. A portion of all damage dealt to the target by any source is converted into healing for allies near Veyran. Reaching maximum Torment causes a burst of psychic damage and grants Bonus Health to allies healed during the tether. If Akhzul is alive, the target is also Slowed during the latch and Feared when it ends.",

            stats: {

                "Cast Range":
                    "10 m",

                "Latch Duration":
                    "3 sec",

                "Damage Conversion to Healing":
                    "30%",

                "Healing Radius":
                    "8 m",

                "Damage Over Time":
                    "TBD",

                "Torment per Second":
                    "TBD",

                "Maximum Torment":
                    "15 stacks",

                "Torment Break Damage":
                    "TBD",

                "Torment Break Bonus Health":
                    "50",

                "Bonus Health Duration":
                    "6 sec",

                "Akhzul Slow":
                    "30%",

                "End Fear Duration":
                    "1 sec",

                "Cooldown":
                    "TBD"

            },


            sections: [

                {
                    name:
                        "Tormented",

                    color:
                        "red",

                    description:
                        "The tethered enemy suffers damage over time while accumulating Torment.",

                    details: {

                        "Duration":
                            "3 sec",

                        "Torment Generation":
                            "Builds each second",

                        "Maximum Torment":
                            "15"

                    }

                },


                {
                    name:
                        "Harvested Suffering",

                    color:
                        "green",

                    description:
                        "Damage dealt to the tethered target by anyone is partially converted into healing for nearby allies.",

                    details: {

                        "Conversion":
                            "30% of damage dealt",

                        "Healing Radius":
                            "8 m around Veyran",

                        "Sources":
                            "Any source"

                    }

                },


                {
                    name:
                        "Torment Break",

                    color:
                        "violet",

                    description:
                        "Reaching maximum Torment causes a psychic burst and rewards allies who were healed by Harvester's Grasp with Bonus Health.",

                    details: {

                        "Requirement":
                            "Reach maximum Torment",

                        "Psychic Damage":
                            "TBD",

                        "Bonus Health":
                            "50",

                        "Bonus Health Duration":
                            "6 sec"

                    }

                },


                {
                    name:
                        "Akhzul Manifested",

                    color:
                        "white",

                    description:
                        "If Akhzul is alive, Harvester's Grasp becomes substantially harder to escape.",

                    details: {

                        "Slow":
                            "30%",

                        "Fear on End":
                            "1 sec"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 3 — WAIL OF THE DAMNED
        ================================================= */

        {
            type: "Ability 3",

            key: "SHIFT",

            name: "Wail of the Damned",

            icon:
                "Assets/Heroes/Veyran/Abilities/wail-of-the-damned.png",

            preview:
                "Assets/Heroes/Veyran/Abilities/wail-of-the-damned-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Manifest Akhzul's true head and unleash a horrifying scream that weakens defenses and Fears enemies who face him.",

            detailedDescription:
                "Akhzul manifests his true head and unleashes a horrific scream through a cone in front of Veyran. Enemies caught within the cone suffer reduced defenses. Enemies directly facing Akhzul are also Feared and forced to flee from Veyran. Wail of the Damned cannot be used unless Akhzul has at least 50 Health.",

            stats: {

                "Cone Angle":
                    "45°",

                "Defense Reduction":
                    "15%",

                "Defense Reduction Duration":
                    "1.5 sec",

                "Fear Duration":
                    "1.25 sec",

                "Akhzul Health Requirement":
                    "50 HP",

                "Cooldown":
                    "TBD"

            },


            sections: [

                {
                    name:
                        "Agonizing Wail",

                    color:
                        "red",

                    description:
                        "All enemies caught in Akhzul's scream temporarily lose part of their defenses.",

                    details: {

                        "Defense Reduction":
                            "-15%",

                        "Duration":
                            "1.5 sec"

                    }

                },


                {
                    name:
                        "Face the Demon",

                    color:
                        "violet",

                    description:
                        "Enemies facing Akhzul when the scream hits are overcome by terror.",

                    details: {

                        "Fear Duration":
                            "1.25 sec",

                        "Forced Movement":
                            "Away from Veyran"

                    }

                },


                {
                    name:
                        "Manifestation Requirement",

                    color:
                        "white",

                    description:
                        "Akhzul must be sufficiently manifested before Veyran can use Wail of the Damned.",

                    details: {

                        "Required Akhzul HP":
                            "50"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 4 — REALM OF SUFFERING
        ================================================= */

        {
            type: "Ability 4",

            key: "F",

            name: "Realm of Suffering",

            icon:
                "Assets/Heroes/Veyran/Abilities/realm-of-suffering.png",

            preview:
                "Assets/Heroes/Veyran/Abilities/realm-of-suffering-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Create a spectral rift that rapidly builds Torment and primes enemies to suffer additional punishment from hard Crowd Control.",

            detailedDescription:
                "Veyran slams the ground and causes Akhzul to unfurl a wailing spectral rift around him for 5 seconds. Enemies inside rapidly build Torment stacks. Leaving the area pauses their accumulation but preserves existing stacks temporarily. At maximum Torment, an enemy begins Suffering. The next hard Crowd Control effect that hits a Suffering enemy consumes the stacks, deals bonus damage, grants nearby allies Bonus Health, and restores Akhzul. If Akhzul is currently manifested, enemies within the Realm also receive reduced healing.",

            stats: {

                "Radius":
                    "7 m",

                "Duration":
                    "5 sec",

                "Torment Generation":
                    "1 stack every 0.1 sec",

                "Maximum Torment":
                    "15",

                "Stack Persistence after Leaving":
                    "4 sec",

                "Suffering Bonus Damage":
                    "TBD",

                "Ally Bonus Health":
                    "50",

                "Ally Bonus Health Radius":
                    "8 m around target",

                "Akhzul Healing":
                    "25 HP",

                "Healing Reduction":
                    "15%",

                "Cooldown":
                    "TBD"

            },


            sections: [

                {
                    name:
                        "Torment",

                    color:
                        "red",

                    description:
                        "Enemies inside Realm of Suffering rapidly accumulate Torment stacks.",

                    details: {

                        "Generation":
                            "1 stack every 0.1 sec",

                        "Maximum":
                            "15 stacks",

                        "Persistence after Leaving":
                            "4 sec"

                    }

                },


                {
                    name:
                        "Suffering",

                    color:
                        "violet",

                    description:
                        "At maximum Torment, the enemy becomes primed for punishment by the next hard Crowd Control effect.",

                    details: {

                        "Required Torment":
                            "15 stacks",

                        "Triggered By":
                            "Stun / Root / Fear / Shove / Throw",

                        "Bonus Damage":
                            "TBD",

                        "Torment Consumed":
                            "Yes"

                    }

                },


                {
                    name:
                        "Shared Agony",

                    color:
                        "green",

                    description:
                        "Triggering Suffering protects nearby allies and restores Akhzul.",

                    details: {

                        "Ally Bonus Health":
                            "50",

                        "Ally Radius":
                            "8 m around affected enemy",

                        "Akhzul Healing":
                            "25 HP"

                    }

                },


                {
                    name:
                        "Manifested Realm",

                    color:
                        "white",

                    description:
                        "If Akhzul is alive, enemies trapped within the Realm receive reduced healing.",

                    details: {

                        "Healing Received":
                            "-15%",

                        "Duration":
                            "While inside Realm"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — ENDLESS SUFFERING UNBOUND
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Endless Suffering Unbound",

            icon:
                "Assets/Heroes/Veyran/Abilities/endless-suffering-unbound.png",

            preview:
                "Assets/Heroes/Veyran/Abilities/endless-suffering-unbound-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Fully manifest Akhzul around Veyran, restoring the demon and empowering Veyran's presence and fear effects.",

            detailedDescription:
                "Akhzul fully manifests around Veyran as a monstrous spectral entity for 8 seconds. Akhzul's Health is immediately restored to full. During the transformation, Veyran grows in size and becomes immune to knockback effects. Nearby enemies continuously suffer damage and reduced healing. Wail of the Damned is empowered, widening its cone and applying Fear to every enemy hit regardless of facing direction. Akhzul's Health cannot be depleted by incoming damage until the Ultimate ends.",

            stats: {

                "Duration":
                    "8 sec",

                "Akhzul Health":
                    "Restored to full",

                "Size Increase":
                    "+25%",

                "Knockback Immunity":
                    "Yes",

                "Aura Radius":
                    "6 m",

                "Aura Damage":
                    "TBD",

                "Enemy Healing Reduction":
                    "20%",

                "Wail Cone":
                    "45° → 90°",

                "Wail Fear Requirement":
                    "All enemies hit",

                "Akhzul Health Loss from Damage":
                    "Disabled during Ultimate",

                "Ultimate Cost":
                    "TBD"

            },


            sections: [

                {
                    name:
                        "Akhzul Unbound",

                    color:
                        "violet",

                    description:
                        "Akhzul fully manifests around Veyran and immediately returns to maximum Health.",

                    details: {

                        "Duration":
                            "8 sec",

                        "Akhzul Health":
                            "Fully restored",

                        "Veyran Size":
                            "+25%",

                        "Knockback Immunity":
                            "Yes"

                    }

                },


                {
                    name:
                        "Aura of Agony",

                    color:
                        "red",

                    description:
                        "Enemies near Veyran continuously suffer damage and reduced healing while Akhzul is fully manifested.",

                    details: {

                        "Radius":
                            "6 m",

                        "Damage":
                            "TBD",

                        "Healing Received":
                            "-20%"

                    }

                },


                {
                    name:
                        "Unbound Wail",

                    color:
                        "orange",

                    description:
                        "Wail of the Damned becomes significantly larger and no longer requires enemies to face Akhzul to be Feared.",

                    details: {

                        "Cone Angle":
                            "45° → 90°",

                        "Fear":
                            "Applies to all enemies hit",

                        "Facing Requirement":
                            "Removed"

                    }

                },


                {
                    name:
                        "Endless Manifestation",

                    color:
                        "white",

                    description:
                        "Akhzul cannot lose manifestation Health from incoming damage while Endless Suffering Unbound is active.",

                    details: {

                        "Akhzul Damage Loss":
                            "Disabled",

                        "Ends":
                            "When Ultimate expires"

                    }

                }

            ]

        }

    ]

});
