const heroes = [

    /* =====================================================
       ALEJANDRO
    ===================================================== */

    {

        name: "Alejandro",

        title: "The Crown Prince of Elaris",

        role: "Catalyst",

        secondaryRoles: [
            "Playmaker",
            "Controller"
        ],

        region: "Elaris",

        symbol: "A",

        description:
            "Firstborn to the royal family of Elaris, Alejandro was groomed for leadership from the moment he could speak. With a silver tongue and unmatched charisma, he became the face of diplomacy, often venturing far from the kingdom’s borders to strengthen alliances... or so he says.",


        abilities: [

            /* -------------------------------------------------
               PASSIVE
            ------------------------------------------------- */

            {

                type: "Passive",

                key: "PASSIVE",

                name: "Blooming Influence",

                icon:
                    "assets/heroes/alejandro/abilities/blooming-influence.png",

                preview:
                    "assets/heroes/alejandro/abilities/blooming-influence-preview.mp4",

                previewType:
                    "video",

                shortDescription:
                    "Alejandro charms enemies who try to hit him with Hard CC as long as they are within range of his Seeds.",

                detailedDescription:
                    `Enemies who stay within range of a Seed for 2s become Beguiled.

Beguiled enemies are revealed to allies.

If Beguiled enemies hit Alejandro with a form of Hard CC, they are Charmed in return and are left vulnerable while walking.

Beguile ends if they leave the Seed’s influence radius.`,

                stats: {

                    "Range":
                        "20m",
                    
                    "Vulnerability":
                        "10%",

                    "Charm Duration":
                        "1 sec",

                    "Cooldown":
                        "15 sec",

                    "Special":
                        "Enemies hit with exploding Seeds reduce this cooldown by 2 sec"

                }

            },


            /* -------------------------------------------------
               PRIMARY
            ------------------------------------------------- */

            {

                type: "Primary Fire",

                key: "PRIMARY",

                name: "Blooming Budshot",

                icon:
                    "assets/heroes/alejandro/abilities/primary.png",

                preview:
                    "assets/heroes/alejandro/abilities/primary-preview.mp4",

                previewType:
                    "video",

                shortDescription:
                    "Fire piercing bolts of psychic energy that damage enemies and heal allies. The first bolt to hit an obstacle or terrain will burst.",

                detailedDescription:
                    `Fire piercing bolts of psychic energy from the Bud to damage enemies or heal allies.

4 bolts are fired in quick succession.

The first bolt hit per round does significantly more damage or healing than subsequent bolts hit.

The first bolt to hit obstacles or terrain will explode.

The bolts will instantly Bloom any Seeds hit from Wildroot Surge.`,

                stats: {

                    "Damage/Healing":
                        `First bolt: 20
                        Subsequent bolts: 10`,

                    "Radius":
                        "5 m",

                    "Duration":
                        "6 s",

                    "Projectile Speed":
                        "25 m/s",

                    "Cooldown":
                        "8 s"

                }

            },


            /* -------------------------------------------------
               ABILITY 1
            ------------------------------------------------- */

            {

                type: "Ability 1",

                key: "Q",

                name: "Vanguard's Garden",

                icon:
                    "assets/heroes/alejandro/abilities/ability1.png",

                preview:
                    "assets/heroes/alejandro/abilities/ability1-preview.mp4",

                previewType:
                    "video",

                shortDescription:
                    "Summon a living growth that changes the battlefield.",

                detailedDescription:
                    `Alejandro creates a magical growth at the targeted location.

The growth interacts with enemies and allies according to the ability's current Bloom state.`,

                stats: {

                    "Damage":
                        "80 / 120 / 160 / 200",

                    "Radius":
                        "5 m",

                    "Duration":
                        "6 s",

                    "Projectile Speed":
                        "25 m/s",

                    "Cooldown":
                        "8 s"

                }

            },


            /* -------------------------------------------------
               ABILITY 2
            ------------------------------------------------- */

            {

                type: "Ability 2",

                key: "E",

                name: "Royal Decree",

                icon:
                    "assets/heroes/alejandro/abilities/ability2.png",

                preview:
                    "assets/heroes/alejandro/abilities/ability2-preview.mp4",

                previewType:
                    "video",

                shortDescription:
                    "Command the battlefield with a burst of nature magic.",

                detailedDescription:
                    `Alejandro releases a concentrated burst of natural energy that damages enemies caught within the affected area.`,

                stats: {

                    "Damage":
                        "70 / 105 / 140 / 175",

                    "Radius":
                        "4 m",

                    "Cast Time":
                        "0.4 s",

                    "Cooldown":
                        "10 s"

                }

            },


            /* -------------------------------------------------
               ULTIMATE
            ------------------------------------------------- */

            {

                type: "Ultimate",

                key: "R",

                name: "Elarian Dominion",

                icon:
                    "assets/heroes/alejandro/abilities/ultimate.png",

                preview:
                    "assets/heroes/alejandro/abilities/ultimate-preview.mp4",

                previewType:
                    "video",

                shortDescription:
                    "Transform the battlefield into Alejandro's domain.",

                detailedDescription:
                    `Alejandro unleashes his accumulated power, creating a massive zone of Elarian influence.

The effect scales with his current Bloom.`,

                stats: {

                    "Damage":
                        "150 / 225 / 300",

                    "Radius":
                        "12 m",

                    "Duration":
                        "8 s",

                    "Bloom Scaling":
                        "Yes",

                    "Ultimate Cost":
                        "100"

                }

            }

        ]

    },


    /* =====================================================
       ARI
    ===================================================== */

    {

        name: "Ari",

        title: "The Sunflower Fairy",

        role: "Catalyst",

        secondaryRoles: [
            "Lifeline",
            "Catalyst"
        ],

        region: "Elaris",

        symbol: "A",

        description:
            "A tiny guardian whose warmth can turn even the darkest battlefield into a place of hope.",


        abilities: [

            /* -------------------------------------------------
               PASSIVE
            ------------------------------------------------- */

            {

                type: "Passive",

                key: "PASSIVE",

                name: "Sunlit Spirit",

                icon:
                    "assets/heroes/ari/abilities/passive.png",

                preview:
                    "assets/heroes/ari/abilities/passive-preview.mp4",

                previewType:
                    "video",

                shortDescription:
                    "Ari's healing abilities gain additional effects under the right conditions.",

                detailedDescription:
                    `Ari's restorative abilities interact with her Sunlit Spirit mechanic, allowing her to provide additional utility to allies.`,

                stats: {

                    "Healing":
                        "Ability dependent",

                    "Duration":
                        "Varies",

                    "Cooldown":
                        "Passive"

                }

            },


            /* -------------------------------------------------
               ABILITY 1
            ------------------------------------------------- */

            {

                type: "Ability 1",

                key: "Q",

                name: "Sunbeam",

                icon:
                    "assets/heroes/ari/abilities/ability1.png",

                preview:
                    "assets/heroes/ari/abilities/ability1-preview.mp4",

                previewType:
                    "video",

                shortDescription:
                    "Release a beam of radiant energy that restores an ally.",

                detailedDescription:
                    `Ari channels sunlight into an ally, restoring their health.`,

                stats: {

                    "Healing":
                        "60 / 90 / 120 / 150",

                    "Range":
                        "18 m",

                    "Cast Time":
                        "0.25 s",

                    "Cooldown":
                        "6 s"

                }

            }

        ]

    }

];
