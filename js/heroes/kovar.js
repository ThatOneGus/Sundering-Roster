/* =========================================================
   KOVAR — HERO DATA
========================================================= */

window.heroes = window.heroes || [];


window.heroes.push({

    /* =====================================================
       CORE INFORMATION
    ===================================================== */

    name:
        "Kovar",

    title:
        "(KVR-4) The Kinetic Experiment",

    region:
        "Ferrumalis",

    role:
        "Striker",

    secondaryRoles: [
        "Marksman",
        "Brawler"
    ],


    /* =====================================================
       BASE STATS
    ===================================================== */

    baseHealth:
        300,

    movementSpeed:
        "6 m/s",


    /* =====================================================
       ASSETS
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Kovar/IMG_7120.png",

    heroArt:
        "Assets/Heroes/Kovar/IMG_7110.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "A Ferrumalian experimental research machine originally constructed to study extreme kinetic phenomena too dangerous for biological researchers. As increasingly sophisticated locomotion, manipulation, observation, and autonomous reasoning systems were added to KVR-4, the apparatus gradually became something else entirely. Kovar now continues his experiments independently. His chassis cannot simply eliminate kinetic force. Instead, its experimental systems capture, redirect, and redistribute momentum, allowing Kovar to turn the forces acting upon him into devastating ranged and close-quarters attacks.",


    /* =====================================================
       GAMEPLAY PROFILE
    ===================================================== */

    profile: {

        damage: 9,

        survivability: 2,

        crowdControl: 5,

        mobility: 7,

        support: 1,

        range: 8

    },


    /* =====================================================
       SKINS
    ===================================================== */

    skins: [

        {
            name:
                "Default",

            rarity:
                "Base",

            thumbnail:
                "Assets/Heroes/Kovar/Skins/Default/thumbnail.png",

            splash:
                "Assets/Heroes/Kovar/Skins/Default/splash.png"
        },


        {
            name:
                "</ANALYZE/>",

            rarity:
                "Legendary",

            skinline:
                "FINAL//BOSS",

            description:
                "A sleek, weaponized reinterpretation of Kovar built around exaggerated boss-fight silhouettes, oversized armor structures, and a dangerously refined chassis.",

            thumbnail:
                "Assets/Heroes/Kovar/Skins/FINAL-BOSS/thumbnail.png",

            splash:
                "Assets/Heroes/Kovar/Skins/FINAL-BOSS/splash.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        {
            name:
                "Kovar Concept",

            image:
                "Assets/Heroes/Kovar/Concept/concept-01.png"
        }

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — CONSERVATION OF FORCE
        ================================================= */

        {
            type:
                "Passive",

            key:
                "Passive",

            name:
                "Conservation of Force",

            icon:
                "Assets/Heroes/Kovar/Abilities/conservation-of-force.png",

            preview:
                "Assets/Heroes/Kovar/Abilities/Previews/conservation-of-force.mp4",

            previewType:
                "video",

            shortDescription:
                "Kovar captures the momentum of sufficiently powerful displacement and converts it into one empowered kinetic action.",

            detailedDescription:
                "Whenever Kovar is Shoved or Thrown at least 2m by a single effect, he is displaced normally but captures the kinetic impulse, gaining Kinetic Force for 4 seconds. Certain abilities can deliberately trigger Conservation of Force. While Kinetic Force is available, Kovar may expend it through one of three actions. Using any one consumes Kinetic Force immediately. Kinetic Force cannot stack or have its duration refreshed.",

            stats: {

                "Required Displacement":
                    "2m",

                "Kinetic Force Duration":
                    "4s",

                "Can Stack":
                    "No",

                "Can Refresh":
                    "No"

            },

            sections: [


                {
                    name:
                        "Accelerator Discharge",

                    color:
                        "orange",

                    description:
                        "Kovar routes Kinetic Force through his Mass Driver, replacing his next Primary with a massive instantaneous blast.",

                    details: {

                        "Damage":
                            100,

                        "Range":
                            "35m",

                        "Width":
                            "1.5m",

                        "Effect":
                            "Hitscan; pierces enemies",

                        "Consumes Kinetic Force":
                            "Yes"

                    }
                },


                {
                    name:
                        "Impact Discharge",

                    color:
                        "red",

                    description:
                        "Kovar routes Kinetic Force through his Piston Strike, replacing his next Secondary with a massive frontal impact.",

                    details: {

                        "Damage":
                            90,

                        "Range":
                            "5m",

                        "Width":
                            "4m",

                        "Effect":
                            "Throws enemies 4m directly away",

                        "Consumes Kinetic Force":
                            "Yes"

                    }
                },


                {
                    name:
                        "Collision Experiment",

                    color:
                        "yellow",

                    description:
                        "Kinetic Force also enables Collision Experiment.",

                    details: {

                        "Ability":
                            "Ability 2",

                        "Requirement":
                            "Kinetic Force",

                        "Consumes Kinetic Force":
                            "Yes"

                    }
                }

            ]

        },


        /* =================================================
           PRIMARY — MASS DRIVER
        ================================================= */

        {
            type:
                "Primary",

            key:
                "Primary",

            name:
                "Mass Driver",

            icon:
                "Assets/Heroes/Kovar/Abilities/mass-driver.png",

            preview:
                "Assets/Heroes/Kovar/Abilities/Previews/mass-driver.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire precise high-velocity Ferrumalian slugs from Kovar's internal accelerator.",

            detailedDescription:
                "Kovar aligns the accelerator running through his upper chassis and launches a dense Ferrumalian slug at extreme velocity. Mass Driver has minimal damage falloff and a narrow projectile, rewarding precise ranged fire. While Kovar has Kinetic Force, Mass Driver is replaced by Accelerator Discharge.",

            stats: {

                "Damage":
                    55,

                "Fire Rate":
                    "1.4 shots/s",

                "Projectile Speed":
                    "180 m/s",

                "Range":
                    "30m",

                "Ammo":
                    8,

                "Reload":
                    "1.6s",

                "Damage Falloff":
                    "Minimal"

            },

            sections: [

                {
                    name:
                        "Kinetic Force",

                    color:
                        "orange",

                    description:
                        "While Kovar has Kinetic Force, Mass Driver is replaced by Accelerator Discharge.",

                    details: {

                        "Replacement":
                            "Accelerator Discharge",

                        "Damage":
                            100,

                        "Range":
                            "35m",

                        "Effect":
                            "Hitscan; pierces enemies"

                    }
                }

            ]

        },


        /* =================================================
           SECONDARY — PISTON STRIKE
        ================================================= */

        {
            type:
                "Secondary",

            key:
                "Secondary",

            name:
                "Piston Strike",

            icon:
                "Assets/Heroes/Kovar/Abilities/piston-strike.png",

            preview:
                "Assets/Heroes/Kovar/Abilities/Previews/piston-strike.mp4",

            previewType:
                "video",

            shortDescription:
                "Drive Kovar's mechanical arm forward in a close-range strike that Shoves enemies.",

            detailedDescription:
                "Kovar routes his accelerator through his arm assembly, violently extending it forward in a mechanical strike. Piston Strike does not consume ammunition. While Kovar has Kinetic Force, Piston Strike is replaced by Impact Discharge.",

            stats: {

                "Damage":
                    65,

                "Range":
                    "4m",

                "Attack Rate":
                    "1 attack/s",

                "Effect":
                    "Shoves enemy 1m",

                "Ammo Cost":
                    "None"

            },

            sections: [

                {
                    name:
                        "Kinetic Force",

                    color:
                        "red",

                    description:
                        "While Kovar has Kinetic Force, Piston Strike is replaced by Impact Discharge.",

                    details: {

                        "Replacement":
                            "Impact Discharge",

                        "Damage":
                            90,

                        "Range":
                            "5m",

                        "Width":
                            "4m",

                        "Effect":
                            "Throws enemies 4m directly away"

                    }
                }

            ]

        },


        /* =================================================
           ABILITY 1 — RECOIL TEST
        ================================================= */

        {
            type:
                "Ability 1",

            key:
                "1",

            name:
                "Recoil Test",

            icon:
                "Assets/Heroes/Kovar/Abilities/recoil-test.png",

            preview:
                "Assets/Heroes/Kovar/Abilities/Previews/recoil-test.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire a kinetic blast that violently Throws Kovar in the opposite direction and deliberately generates Kinetic Force.",

            detailedDescription:
                "Kovar disengages his internal stabilizers and fires a concentrated kinetic discharge in the direction he is aiming, violently Throwing himself in the opposite direction. Because Recoil Test Throws Kovar farther than the required distance, it deliberately triggers Conservation of Force. The launch direction is entirely determined by Kovar's aim. Firing forward launches him backward, firing behind himself launches him forward, and firing toward the ground launches him upward.",

            stats: {

                "Self-Throw Distance":
                    "7m",

                "Blast Damage":
                    40,

                "Blast Range":
                    "5m",

                "Blast Radius":
                    "2.5m",

                "Enemy Shove":
                    "2m",

                "Cooldown":
                    "11s"

            },

            sections: [

                {
                    name:
                        "Conservation of Force",

                    color:
                        "orange",

                    description:
                        "Recoil Test deliberately satisfies Conservation of Force's displacement requirement.",

                    details: {

                        "Triggers Kinetic Force":
                            "Yes",

                        "Kinetic Force Duration":
                            "4s"

                    }
                },

                {
                    name:
                        "Directional Recoil",

                    color:
                        "blue",

                    description:
                        "Kovar's launch direction is always opposite his aim direction.",

                    details: {

                        "Aim Forward":
                            "Launch backward",

                        "Aim Behind":
                            "Launch forward",

                        "Aim Downward":
                            "Launch upward"

                    }
                }

            ]

        },


        /* =================================================
           ABILITY 2 — COLLISION EXPERIMENT
        ================================================= */

        {
            type:
                "Ability 2",

            key:
                "2",

            name:
                "Collision Experiment",

            icon:
                "Assets/Heroes/Kovar/Abilities/collision-experiment.png",

            preview:
                "Assets/Heroes/Kovar/Abilities/Previews/collision-experiment.mp4",

            previewType:
                "video",

            shortDescription:
                "Spend Kinetic Force to launch Kovar directly into an enemy and set up an Experimental Discharge.",

            detailedDescription:
                "Requires Kinetic Force. Kovar selects an enemy within range and routes his captured momentum through his propulsion assembly, turning his own chassis into a projectile and launching directly toward them. Upon collision, Kovar immediately stops and aligns his accelerator toward the airborne target. For the next 0.6 seconds, Kovar receives strong aim assistance toward that enemy while retaining complete control of his aim. Press Primary during this window to fire Experimental Discharge. Kovar is not required to shoot the enemy he launched and may freely redirect his aim toward another target.",

            stats: {

                "Requirement":
                    "Kinetic Force",

                "Maximum Range":
                    "12m",

                "Collision Damage":
                    45,

                "Effect":
                    "Throws struck enemy 4m upward",

                "Aim Assist Window":
                    "0.6s",

                "Cooldown":
                    "8s",

                "Consumes Kinetic Force":
                    "Yes"

            },

            sections: [

                {
                    name:
                        "Experimental Discharge",

                    color:
                        "orange",

                    description:
                        "During the post-collision firing window, press Primary to fire a devastating hitscan discharge.",

                    details: {

                        "Damage":
                            120,

                        "Range":
                            "30m",

                        "Effect":
                            "Hitscan; pierces enemies; no damage falloff",

                        "Target Lock":
                            "Not required",

                        "Aim Control":
                            "Fully retained"

                    }
                }

            ]

        },


        /* =================================================
           ABILITY 3 — VECTOR TRANSFER
        ================================================= */

        {
            type:
                "Ability 3",

            key:
                "3",

            name:
                "Vector Transfer",

            icon:
                "Assets/Heroes/Kovar/Abilities/vector-transfer.png",

            preview:
                "Assets/Heroes/Kovar/Abilities/Previews/vector-transfer.mp4",

            previewType:
                "video",

            shortDescription:
                "Prime Kovar's dampeners to redirect incoming displacement without reducing its distance.",

            detailedDescription:
                "Kovar primes his kinetic dampeners for 1 second. If an enemy attack Shoves or Throws Kovar during this window, Kovar still takes the attack's damage and is displaced the full intended distance, but he may redirect the displacement using his movement input. The incoming effect determines how far Kovar travels. Kovar determines the direction he travels. If the displacement meets Conservation of Force's 2m requirement, Kovar gains Kinetic Force normally. Vector Transfer does not grant Damage Reduction or Crowd Control Immunity.",

            stats: {

                "Duration":
                    "1s",

                "Cooldown":
                    "10s",

                "Damage Reduction":
                    "None",

                "Crowd Control Immunity":
                    "None",

                "Displacement Distance":
                    "Determined by incoming effect",

                "Displacement Direction":
                    "Chosen by Kovar"

            },

            sections: [

                {
                    name:
                        "Redirected Momentum",

                    color:
                        "blue",

                    description:
                        "Vector Transfer changes the direction of incoming displacement without reducing its intended travel distance.",

                    details: {

                        "Distance":
                            "Unchanged",

                        "Direction":
                            "Controlled with movement input",

                        "Can Trigger Conservation of Force":
                            "Yes, if displacement is at least 2m"

                    }
                }

            ]

        },


        /* =================================================
           ABILITY 4 — TERMINAL VELOCITY
        ================================================= */

        {
            type:
                "Ability 4",

            key:
                "4",

            name:
                "Terminal Velocity",

            icon:
                "Assets/Heroes/Kovar/Abilities/terminal-velocity.png",

            preview:
                "Assets/Heroes/Kovar/Abilities/Previews/terminal-velocity.mp4",

            previewType:
                "video",

            shortDescription:
                "Leap through the air and optionally redistribute Kovar's mass downward for a crushing impact.",

            detailedDescription:
                "Kovar shifts the internal mass of his chassis into his lower assembly and performs an explosive mechanical leap. While airborne, reactivate Terminal Velocity to redistribute Kovar's mass downward and crash into the ground. Terminal Velocity does not trigger Conservation of Force.",

            stats: {

                "Leap Distance":
                    "Up to 8m",

                "Maximum Height":
                    "5m",

                "Cooldown":
                    "12s",

                "Triggers Conservation of Force":
                    "No"

            },

            sections: [

                {
                    name:
                        "Impact",

                    color:
                        "red",

                    description:
                        "Reactivate while airborne to crash directly downward.",

                    details: {

                        "Damage":
                            70,

                        "Radius":
                            "4m",

                        "Effect":
                            "Throws enemies 2.5m outward"

                    }
                },

                {
                    name:
                        "Preserve Momentum",

                    color:
                        "orange",

                    description:
                        "If Kovar already has Kinetic Force when Terminal Velocity begins, its remaining duration pauses while he is airborne.",

                    details: {

                        "Requirement":
                            "Kovar already has Kinetic Force",

                        "Timer While Airborne":
                            "Paused",

                        "Timer Resumes":
                            "Immediately upon landing"

                    }
                }

            ]

        },


        /* =================================================
           ULTIMATE — CONTROLLED COLLISION
        ================================================= */

        {
            type:
                "Ultimate",

            key:
                "Ultimate",

            name:
                "Controlled Collision",

            icon:
                "Assets/Heroes/Kovar/Abilities/controlled-collision.png",

            preview:
                "Assets/Heroes/Kovar/Abilities/Previews/controlled-collision.mp4",

            previewType:
                "video",

            shortDescription:
                "Launch Kovar himself across the battlefield at catastrophic velocity, scattering enemies and firing along their resulting trajectories.",

            detailedDescription:
                "Kovar selects a location and aligns every major accelerator within his chassis toward a single calculated trajectory. After a brief preparation, Kovar launches himself toward the selected location at catastrophic velocity. Kovar detonates his remaining momentum upon reaching the selected location or colliding with sufficiently large terrain. Enemies caught in the impact are Thrown outward, with their direction and distance determined by their position relative to Kovar's collision point.",

            stats: {

                "Target Range":
                    "30m",

                "Preparation":
                    "0.8s",

                "Travel Speed":
                    "50 m/s",

                "Impact Damage":
                    150,

                "Impact Radius":
                    "6m",

                "Maximum Enemy Throw":
                    "8m",

                "Ultimate Cost":
                    3800

            },

            sections: [

                {
                    name:
                        "Equal and Opposite",

                    color:
                        "orange",

                    description:
                        "Every enemy Thrown by Controlled Collision generates a kinetic trajectory extending outward along the path they were launched. After 0.75 seconds, Kovar fires along every generated trajectory simultaneously.",

                    details: {

                        "Delay":
                            "0.75s",

                        "Trajectory Damage":
                            75,

                        "Effect":
                            "Hitscan",

                        "Maximum Hits per Enemy":
                            1,

                        "Trajectory Direction":
                            "Matches each enemy's throw path"

                    }
                }

            ]

        }

    ]

});
