const bartholomew = {
    name: "Bartholomew",

    title: "The Royal Butler",

    role: "Striker",

    secondaryRoles: [
        "Marksman"
    ],

    region: "Elaris",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Bartholomew/IMG_6495.png",

    heroArt:
        "Assets/Heroes/Bartholomew/IMG_6494.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "A refined royal servant whose impeccable manners conceal a deadly proficiency with his custom rifle cane. Bartholomew supports his allies from a measured distance, marking priority targets and creating openings with precision gunfire and carefully controlled disruption.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 8,

        survivability: 3,

        crowdControl: 4,

        mobility: 2,

        support: 6,

        range: 10

    },


    /* =====================================================
       SKINS
    ===================================================== */

    skins: [

        {
            name: "Default",

            rarity: "Base",

            thumbnail:
                "Assets/Heroes/Bartholomew/Skins/Default/thumbnail.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        Example:

        {
            title: "Cane Rifle Exploration",

            image:
                "Assets/Heroes/Bartholomew/Concept-Art/cane-rifle.png",

            description:
                "Early explorations of Bartholomew's concealed rifle cane."
        }
        */

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — AT YOUR SERVICE
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "At Your Service",

            icon:
                "Assets/Heroes/Bartholomew/Abilities/at-your-service.png",

            preview:
                "Assets/Heroes/Bartholomew/Abilities/at-your-service-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Damage enemies to Attend them, allowing an ally to consume the Mark for bonus damage.",

            detailedDescription:
                "Enemies damaged by Bartholomew's Cane Rifle or abilities become Attended for 3 seconds. The first allied hero to damage an Attended enemy consumes the Mark and deals additional damage to that enemy. Damaging an already Attended enemy refreshes the Mark's duration.",

            stats: {

                "Mark Duration":
                    "3 sec",

                "Bonus Damage":
                    "25",

                "Mark Duration Refresh":
                    "Yes",

                "Maximum Marks per Enemy":
                    "1"

            }

        },


        /* =================================================
           PRIMARY — CANE RIFLE
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Cane Rifle",

            icon:
                "Assets/Heroes/Bartholomew/Abilities/cane-rifle.png",

            preview:
                "Assets/Heroes/Bartholomew/Abilities/cane-rifle-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire precise semi-automatic shots from Bartholomew's concealed rifle cane.",

            detailedDescription:
                "Bartholomew fires precise semi-automatic shots from the concealed rifle built into his cane. Enemies damaged by Cane Rifle become Attended by At Your Service.",

            stats: {

                "Damage":
                    "53",

                "Fire Rate":
                    "1.4 shots/sec",

                "Projectile":
                    "Hitscan",

                "Damage Falloff":
                    "Begins at 30m, decreasing to 70% at 50m",

                "Ammo":
                    "7",

                "Reload Time":
                    "1.4 sec",

                "Critical Hits":
                    "Yes"

            }

        },


        /* =================================================
           ABILITY 1 — SILVER SERVICE
        ================================================= */

        {
            type: "Ability 1",

            key: "M2",

            name: "Silver Service",

            icon:
                "Assets/Heroes/Bartholomew/Abilities/silver-service.png",

            preview:
                "Assets/Heroes/Bartholomew/Abilities/silver-service-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Flick a silver knife toward an enemy, or embed it in terrain and shoot it to ricochet toward a nearby target.",

            detailedDescription:
                "Bartholomew flicks a silver knife from his cane toward an enemy. Striking an enemy extends their Attended Mark. If the knife strikes terrain instead, it remains embedded for 3 seconds. Bartholomew can shoot the embedded knife to trigger a ricochet toward the nearest enemy within 10m.",

            stats: {

                "Damage":
                    "50",

                "Projectile Speed":
                    "80 m/s",

                "Projectile Range":
                    "20 m",

                "Mark Extension":
                    "5 sec",

                "Embedded Duration":
                    "3 sec",

                "Cooldown":
                    "9 sec"

            },


            sections: [

                {
                    name:
                        "Ricochet",

                    color:
                        "white",

                    description:
                        "Shooting an embedded Silver Service knife causes it to ricochet toward the nearest enemy within range.",

                    details: {

                        "Damage":
                            "35",

                        "Maximum Ricochet Distance":
                            "10 m",

                        "Triggers At Your Service":
                            "Yes",

                        "Maximum Ricochets":
                            "1"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 2 — MEASURED REPOSITION
        ================================================= */

        {
            type: "Ability 2",

            key: "SHIFT",

            name: "Measured Reposition",

            icon:
                "Assets/Heroes/Bartholomew/Abilities/measured-reposition.png",

            preview:
                "Assets/Heroes/Bartholomew/Abilities/measured-reposition-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Sidestep or vault into a new position, empowering Bartholomew's next Cane Rifle shot.",

            detailedDescription:
                "Bartholomew makes a precise adjustment to his position while maintaining perfect composure under fire. Tapping the ability performs a short sidestep, while holding it performs a longer forward vault capable of clearing obstacles. After either movement option, Bartholomew's next Cane Rifle shot gains increased Critical Hit Chance, ignores Damage Falloff, and grants him Bonus Health. The empowered shot expires after 3 seconds if unused.",

            stats: {

                "Critical Hit Chance Bonus":
                    "+25%",

                "Damage Falloff":
                    "None on empowered shot",

                "Bonus Health":
                    "25",

                "Empowered Shot Duration":
                    "3 sec",

                "Cooldown":
                    "7 sec"

            },


            sections: [

                {
                    name:
                        "Tap — Sidestep",

                    color:
                        "teal",

                    description:
                        "Quickly adjust Bartholomew's position in the chosen direction.",

                    details: {

                        "Movement Distance":
                            "3 m"

                    }

                },


                {
                    name:
                        "Hold — Vault",

                    color:
                        "teal",

                    description:
                        "Vault forward, allowing Bartholomew to clear low obstacles.",

                    details: {

                        "Movement Distance":
                            "6 m",

                        "Maximum Obstacle Height":
                            "3 m"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 3 — FORMAL INVITATION
        ================================================= */

        {
            type: "Ability 3",

            key: "E",

            name: "Formal Invitation",

            icon:
                "Assets/Heroes/Bartholomew/Abilities/formal-invitation.png",

            preview:
                "Assets/Heroes/Bartholomew/Abilities/formal-invitation-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Pull enemies toward Bartholomew, Slow them, make them Vulnerable, and Attend them.",

            detailedDescription:
                "Bartholomew tips his cane and gives his targets an invitation they have little choice but to accept. Enemies within a 12m cone are pulled 3m toward Bartholomew, damaged, Slowed, and made Vulnerable. Enemies pulled by Formal Invitation are also Attended by At Your Service.",

            stats: {

                "Damage":
                    "40",

                "Pull Distance":
                    "3 m",

                "Slow":
                    "25%",

                "Slow Duration":
                    "2 sec",

                "Vulnerable":
                    "10% increased damage taken",

                "Vulnerable Duration":
                    "2 sec",

                "Cone Angle":
                    "60°",

                "Range":
                    "12 m",

                "Cooldown":
                    "12 sec"

            }

        },


        /* =================================================
           ULTIMATE — CURTAIN CALL
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Curtain Call",

            icon:
                "Assets/Heroes/Bartholomew/Abilities/curtain-call.png",

            preview:
                "Assets/Heroes/Bartholomew/Abilities/curtain-call-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Load a gilded round and fire four devastating piercing shots that Stagger and Attend every enemy struck.",

            detailedDescription:
                "Bartholomew loads a gilded round into his cane and delivers his final performance. After a 0.75-second casting animation, he fires 4 devastating piercing shots in a straight line. The shots can pierce shields. Enemies struck are Staggered for 1 second and become Attended by At Your Service.",

            stats: {

                "Shots":
                    "4",

                "Damage":
                    "100 + 15% Max Health",

                "Fire Rate":
                    "1 shot/sec",

                "Width":
                    "0.4 m",

                "Projectile Speed":
                    "200 m/s",

                "Cast Time":
                    "0.75 sec",

                "Stagger Duration":
                    "1 sec",

                "Pierces Shields":
                    "Yes",

                "Energy Cost":
                    "4000"

            },


            sections: [

                {
                    name:
                        "An Exceptional Performance",

                    color:
                        "yellow",

                    description:
                        "For 5 seconds after an enemy is Staggered by Curtain Call, allies who damage that Attended enemy gain increased Critical Hit Chance.",

                    details: {

                        "Ally Critical Hit Chance":
                            "+20%",

                        "Window":
                            "5 sec after Stagger"

                    }

                }

            ]

        }

    ]
}
