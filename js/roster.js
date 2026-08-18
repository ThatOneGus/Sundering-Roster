/* =========================================================
   ROSTER ELEMENT
========================================================= */

const roster =
    document.getElementById("roster");


/* =========================================================
   RENDER ROSTER
========================================================= */

function renderRoster(list) {

    roster.innerHTML = "";


    if (!list.length) {

        roster.innerHTML = `

            <div style="
                grid-column: 1 / -1;
                padding: 100px;
                text-align: center;
                color: #777;
                letter-spacing: .2em;
            ">

                NO CHARACTERS FOUND

            </div>

        `;

        return;

    }


    list.forEach(hero => {

        const card =
            document.createElement("div");


        card.className =
            "heroCard";


        card.innerHTML = `

            <div class="heroArt">

                <img
                    src="${hero.thumbnail}"
                    alt="${hero.name}"
                >

            </div>


            <div class="heroInfo">

                <div class="heroName">

                    ${hero.name}

                </div>


                <div class="heroTitle">

                    ${hero.title}

                </div>


                <div class="heroRole">

                    ${hero.role}

                </div>

            </div>

        `;


        card.addEventListener(
            "click",
            () => openHero(hero)
        );


        roster.appendChild(card);

    });

}


/* Initial roster load */

renderRoster(heroes);


/* =========================================================
   SEARCH
========================================================= */

const search =
    document.getElementById("search");


search.addEventListener(
    "input",
    () => {

        const query =
            search.value
                .toLowerCase()
                .trim();


        const results =
            heroes.filter(hero => {


                const secondaryRoles =
                    hero.secondaryRoles || [];


                return (

                    hero.name
                        .toLowerCase()
                        .includes(query)

                    ||

                    hero.title
                        .toLowerCase()
                        .includes(query)

                    ||

                    hero.region
                        .toLowerCase()
                        .includes(query)

                    ||

                    hero.role
                        .toLowerCase()
                        .includes(query)

                    ||

                    secondaryRoles.some(
                        role =>
                            role
                                .toLowerCase()
                                .includes(query)
                    )

                );

            });


        renderRoster(results);

    }
);


/* =========================================================
   ROLE FILTERS
========================================================= */

const roleButtons =
    document.querySelectorAll(
        ".roleFilter"
    );


const allButton =
    document.querySelector(
        ".allFilter"
    );


const roleGroups =
    document.querySelectorAll(
        ".roleGroup"
    );


const subclassButtons =
    document.querySelectorAll(
        ".subFilters button"
    );


/* ---------------------------------------------------------
   FILTER HEROES
--------------------------------------------------------- */

function filterHeroes(role) {

    if (role === "all") {

        renderRoster(
            heroes
        );

        return;

    }


    const filtered =
        heroes.filter(hero => {

            const secondaryRoles =
                hero.secondaryRoles || [];


            return (

                hero.role === role

                ||

                secondaryRoles.includes(
                    role
                )

            );

        });


    renderRoster(
        filtered
    );

}


/* ---------------------------------------------------------
   ALL BUTTON
--------------------------------------------------------- */

allButton.addEventListener(
    "click",
    () => {


        roleGroups.forEach(
            group =>
                group.classList.remove(
                    "open"
                )
        );


        roleButtons.forEach(
            button =>
                button.classList.remove(
                    "active"
                )
        );


        subclassButtons.forEach(
            button =>
                button.classList.remove(
                    "active"
                )
        );


        allButton.classList.add(
            "active"
        );


        filterHeroes(
            "all"
        );

    }
);


/* ---------------------------------------------------------
   MAIN ROLE BUTTONS
--------------------------------------------------------- */

roleButtons.forEach(button => {

    /*
        Skip the All button here because it
        has its own event listener above.
    */

    if (
        button.classList.contains(
            "allFilter"
        )
    ) {

        return;

    }


    button.addEventListener(
        "click",
        event => {


            event.stopPropagation();


            const group =
                button.closest(
                    ".roleGroup"
                );


            if (!group) {
                return;
            }


            const wasOpen =
                group.classList.contains(
                    "open"
                );


            /* Close other role dropdowns */

            roleGroups.forEach(
                otherGroup => {

                    if (
                        otherGroup !== group
                    ) {

                        otherGroup.classList.remove(
                            "open"
                        );

                    }

                }
            );


            /*
                Clicking the main class also
                filters the roster.
            */

            filterHeroes(
                button.dataset.role
            );


            roleButtons.forEach(
                otherButton =>
                    otherButton.classList.remove(
                        "active"
                    )
            );


            subclassButtons.forEach(
                otherButton =>
                    otherButton.classList.remove(
                        "active"
                    )
            );


            allButton.classList.remove(
                "active"
            );


            button.classList.add(
                "active"
            );


            group.classList.toggle(
                "open",
                !wasOpen
            );

        }
    );

});


/* ---------------------------------------------------------
   SUBCLASS BUTTONS
--------------------------------------------------------- */

subclassButtons.forEach(button => {

    button.addEventListener(
        "click",
        event => {


            event.stopPropagation();


            const role =
                button.dataset.role;


            filterHeroes(
                role
            );


            roleButtons.forEach(
                otherButton =>
                    otherButton.classList.remove(
                        "active"
                    )
            );


            subclassButtons.forEach(
                otherButton =>
                    otherButton.classList.remove(
                        "active"
                    )
            );


            allButton.classList.remove(
                "active"
            );


            button.classList.add(
                "active"
            );


            const group =
                button.closest(
                    ".roleGroup"
                );


            if (group) {

                group.classList.add(
                    "open"
                );

            }

        }
    );

});


/* ---------------------------------------------------------
   CLICK OUTSIDE DROPDOWNS
--------------------------------------------------------- */

document.addEventListener(
    "click",
    () => {

        roleGroups.forEach(
            group =>
                group.classList.remove(
                    "open"
                )
        );

    }
);


/* =========================================================
   HERO MODAL ELEMENTS
========================================================= */

const modal =
    document.getElementById(
        "modal"
    );


const closeModal =
    document.getElementById(
        "closeModal"
    );


const detailArt =
    document.getElementById(
        "detailArt"
    );


const detailName =
    document.getElementById(
        "detailName"
    );


const detailTitle =
    document.getElementById(
        "detailTitle"
    );


const detailRole =
    document.getElementById(
        "detailRole"
    );


const detailDescription =
    document.getElementById(
        "detailDescription"
    );


const detailTags =
    document.getElementById(
        "detailTags"
    );


const abilityGrid =
    document.getElementById(
        "abilityGrid"
    );


/* =========================================================
   CHARACTER TAB ELEMENTS
========================================================= */

const characterTabs =
    document.querySelectorAll(
        ".characterTab"
    );


const characterPanels =
    document.querySelectorAll(
        ".characterPanel"
    );


/* =========================================================
   NEW CHARACTER SECTION ELEMENTS
========================================================= */

const difficultyDisplay =
    document.getElementById(
        "difficultyDisplay"
    );


const skinsGrid =
    document.getElementById(
        "skinsGrid"
    );


const conceptGrid =
    document.getElementById(
        "conceptGrid"
    );


/* =========================================================
   ABILITY STAT RENDERER
========================================================= */

function renderStats(stats) {

    if (!stats) {
        return "";
    }


    return Object.entries(
        stats
    )
        .map(
            ([label, value]) => `

                <div class="stat">


                    <div class="statLabel">

                        ${label}

                    </div>


                    <div class="statValue">

                        ${value}

                    </div>


                </div>

            `
        )
        .join("");

}


/* =========================================================
   ABILITY VARIANT RENDERER
========================================================= */

function renderVariant(
    variant,
    icon,
    colorClass
) {

    if (!variant) {
        return "";
    }


    const stats =
        renderStats(
            variant.details
        );


    return `

        <div
            class="
                abilityVariant
                ${colorClass}
            "
        >


            <div class="variantHeader">


                <span class="variantIcon">

                    ${icon}

                </span>


                <span class="variantName">

                    ${variant.name}

                </span>


            </div>


            ${
                variant.description

                    ? `

                        <div class="variantDescription">

                            ${variant.description}

                        </div>

                    `

                    : ""
            }


            ${
                stats

                    ? `

                        <div class="abilityStats">

                            ${stats}

                        </div>

                    `

                    : ""
            }


        </div>

    `;

}


/* =========================================================
   DIFFICULTY RENDERER
========================================================= */

function renderDifficulty(hero) {

    const difficulty =
        hero.difficulty;


    if (!difficulty) {

        difficultyDisplay.innerHTML = `

            <div class="emptySection">

                Difficulty data unavailable.

            </div>

        `;

        return;

    }


    const rows = [

        {
            label:
                "Mechanics",

            value:
                difficulty.mechanics
        },

        {
            label:
                "Skill Floor",

            value:
                difficulty.skillfloor
        },

        {
            label:
                "Decision Making",

            value:
                difficulty.decisionMaking
        }

    ];


    difficultyDisplay.innerHTML = `


        ${rows.map(row => {


            /*
                Clamp the value between 0 and 10
                so bad data can't break the bar.
            */

            const value =
                Math.max(
                    0,
                    Math.min(
                        10,
                        Number(row.value) || 0
                    )
                );


            return `

                <div class="difficultyRow">


                    <div class="difficultyLabel">

                        ${row.label}

                    </div>


                    <div class="difficultyTrack">

                        <div
                            class="difficultyFill"
                            style="
                                width:
                                ${value * 10}%;
                            "
                        >
                        </div>

                    </div>


                    <div class="difficultyNumber">

                        ${value}

                    </div>


                </div>

            `;

        }).join("")}


        <div class="difficultyOverall">

            ${difficulty.label || "Unrated"}

        </div>


    `;

}


/* =========================================================
   SKINS RENDERER
========================================================= */

function renderSkins(hero) {

    skinsGrid.innerHTML =
        "";


    if (
        !hero.skins ||
        !hero.skins.length
    ) {

        skinsGrid.innerHTML = `

            <div class="emptySection">

                No skins available.

            </div>

        `;

        return;

    }


    hero.skins.forEach(
        skin => {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "skinCard";


            card.innerHTML = `


                <img
                    src="${skin.thumbnail}"
                    alt="${skin.name}"
                >


                <div class="skinInfo">


                    <div class="skinName">

                        ${skin.name}

                    </div>


                    ${
                        skin.rarity

                            ? `

                                <div class="skinRarity">

                                    ${skin.rarity}

                                </div>

                            `

                            : ""
                    }


                </div>


            `;


            skinsGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   CONCEPT ART RENDERER
========================================================= */

function renderConceptArt(hero) {

    conceptGrid.innerHTML =
        "";


    if (
        !hero.conceptArt ||
        !hero.conceptArt.length
    ) {

        conceptGrid.innerHTML = `

            <div class="emptySection">

                No concept art available.

            </div>

        `;

        return;

    }


    hero.conceptArt.forEach(
        concept => {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "conceptCard";


            card.innerHTML = `


                <div class="conceptImage">


                    <img
                        src="${concept.image}"
                        alt="${concept.title}"
                    >


                </div>


                <div class="conceptInfo">


                    <div class="conceptTitle">

                        ${concept.title}

                    </div>


                    ${
                        concept.description

                            ? `

                                <div class="conceptDescription">

                                    ${concept.description}

                                </div>

                            `

                            : ""
                    }


                </div>


            `;


            conceptGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   RESET CHARACTER TAB
========================================================= */

function resetCharacterTabs() {

    characterTabs.forEach(
        tab =>
            tab.classList.remove(
                "active"
            )
    );


    characterPanels.forEach(
        panel =>
            panel.classList.remove(
                "active"
            )
    );


    const overviewTab =
        document.querySelector(
            '[data-tab="overview"]'
        );


    const overviewPanel =
        document.getElementById(
            "overviewPanel"
        );


    if (overviewTab) {

        overviewTab.classList.add(
            "active"
        );

    }


    if (overviewPanel) {

        overviewPanel.classList.add(
            "active"
        );

    }

}


/* =========================================================
   OPEN HERO
========================================================= */

function openHero(hero) {


    /* ---------------------------------------------------------
       RESET TO OVERVIEW
    --------------------------------------------------------- */

    resetCharacterTabs();


    /* ---------------------------------------------------------
       HERO ART
    --------------------------------------------------------- */

    detailArt.innerHTML = `

        <img
            src="${hero.heroArt}"
            alt="${hero.name}"
        >

    `;


    /* ---------------------------------------------------------
       HERO INFORMATION
    --------------------------------------------------------- */

    detailName.textContent =
        hero.name;


    detailTitle.textContent =
        hero.title;


    detailRole.textContent =
        hero.role;


    detailDescription.textContent =
        hero.description;


    /* ---------------------------------------------------------
       HERO TAGS
    --------------------------------------------------------- */

    detailTags.innerHTML =
        "";


    const secondaryRoles =
        hero.secondaryRoles || [];


    [

        hero.role,

        ...secondaryRoles.filter(
            role =>
                role !== hero.role
        ),

        hero.region

    ].forEach(tag => {


        const element =
            document.createElement(
                "div"
            );


        element.className =
            "tag";


        element.textContent =
            tag;


        detailTags.appendChild(
            element
        );

    });


    /* ---------------------------------------------------------
       DIFFICULTY
    --------------------------------------------------------- */

    renderDifficulty(
        hero
    );


    /* ---------------------------------------------------------
       SKINS
    --------------------------------------------------------- */

    renderSkins(
        hero
    );


    /* ---------------------------------------------------------
       CONCEPT ART
    --------------------------------------------------------- */

    renderConceptArt(
        hero
    );


    /* ---------------------------------------------------------
       ABILITIES
    --------------------------------------------------------- */

    abilityGrid.innerHTML =
        "";


    const abilities =
        hero.abilities || [];


    abilities.forEach(
        (ability, index) => {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "ability";


            /* ---------------------------------------------
               GENERAL STATS
            --------------------------------------------- */

            const stats =
                renderStats(
                    ability.stats
                );


            /* ---------------------------------------------
               VARIANTS
            --------------------------------------------- */

            let variants =
                "";


            if (
                ability.variants
            ) {

                variants = `

                    <div class="abilityVariants">


                        ${renderVariant(
                            ability.variants.flourishingBud,
                            "🌸",
                            "flourishing"
                        )}


                        ${renderVariant(
                            ability.variants.wiltingBud,
                            "🌺",
                            "wilting"
                        )}


                    </div>

                `;

            }


            /* ---------------------------------------------
               ABILITY CARD
            --------------------------------------------- */

            card.innerHTML = `


                <div class="abilityTop">


                    <div class="abilityIcon">


                        <img
                            src="${ability.icon}"
                            alt="${ability.name}"
                        >


                        <div
                            class="abilityIconFallback"
                            style="display:none;"
                        >

                            ${index + 1}

                        </div>


                    </div>


                    <div>


                        <div class="abilityType">

                            ${ability.type}

                        </div>


                        <h3>

                            ${ability.name}

                        </h3>


                        <div class="abilityKey">

                            ${ability.key || ""}

                        </div>


                    </div>


                    <button
                        class="previewButton"
                        title="Preview ability"
                        type="button"
                    >

                        ▶

                    </button>


                </div>


                <div class="abilityShort">

                    ${ability.shortDescription || ""}

                </div>


                <div class="abilityActions">


                    <button
                        class="
                            abilityAction
                            detailsButton
                        "
                        type="button"
                    >

                        View Details

                    </button>


                    <button
                        class="
                            abilityAction
                            previewAction
                        "
                        type="button"
                    >

                        Preview

                    </button>


                </div>


                <div class="abilityDetails">


                    ${
                        ability.detailedDescription

                            ? `

                                <div class="detailText">

                                    ${ability.detailedDescription}

                                </div>

                            `

                            : ""
                    }


                    ${
                        stats

                            ? `

                                <div class="abilityGeneralLabel">

                                    General

                                </div>


                                <div class="abilityStats">

                                    ${stats}

                                </div>

                            `

                            : ""
                    }


                    ${variants}


                </div>


            `;


            /* ---------------------------------------------
               PREVIEW BUTTON
            --------------------------------------------- */

            const previewButton =
                card.querySelector(
                    ".previewButton"
                );


            previewButton.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    openPreview(
                        ability
                    );

                }
            );


            /* ---------------------------------------------
               BOTTOM PREVIEW BUTTON
            --------------------------------------------- */

            const previewAction =
                card.querySelector(
                    ".previewAction"
                );


            previewAction.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    openPreview(
                        ability
                    );

                }
            );


            /* ---------------------------------------------
               DETAILS BUTTON
            --------------------------------------------- */

            const detailsButton =
                card.querySelector(
                    ".detailsButton"
                );


            detailsButton.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    toggleDetails(
                        detailsButton
                    );

                }
            );


            /* ---------------------------------------------
               ICON FALLBACK
            --------------------------------------------- */

            const icon =
                card.querySelector(
                    ".abilityIcon img"
                );


            const fallback =
                card.querySelector(
                    ".abilityIconFallback"
                );


            icon.addEventListener(
                "error",
                () => {

                    icon.style.display =
                        "none";


                    fallback.style.display =
                        "flex";

                }
            );


            abilityGrid.appendChild(
                card
            );

        }
    );


    /* ---------------------------------------------------------
       OPEN MODAL
    --------------------------------------------------------- */

    modal.classList.add(
        "open"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CHARACTER TAB SWITCHING
========================================================= */

characterTabs.forEach(
    tab => {


        tab.addEventListener(
            "click",
            () => {


                characterTabs.forEach(
                    otherTab =>
                        otherTab.classList.remove(
                            "active"
                        )
                );


                characterPanels.forEach(
                    panel =>
                        panel.classList.remove(
                            "active"
                        )
                );


                tab.classList.add(
                    "active"
                );


                const targetPanel =
                    document.getElementById(
                        `${tab.dataset.tab}Panel`
                    );


                if (
                    targetPanel
                ) {

                    targetPanel.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================================================
   ABILITY DETAILS
========================================================= */

function toggleDetails(button) {

    const card =
        button.closest(
            ".ability"
        );


    if (!card) {
        return;
    }


    const details =
        card.querySelector(
            ".abilityDetails"
        );


    if (!details) {
        return;
    }


    const isOpen =
        details.classList.toggle(
            "open"
        );


    button.textContent =
        isOpen
            ? "Hide Details"
            : "View Details";

}


/* =========================================================
   CLOSE HERO
========================================================= */

closeModal.addEventListener(
    "click",
    closeHero
);


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeHero();

        }

    }
);


function closeHero() {

    modal.classList.remove(
        "open"
    );


    document.body.style.overflow =
        "";

}


/* =========================================================
   ABILITY PREVIEW ELEMENTS
========================================================= */

const previewModal =
    document.getElementById(
        "previewModal"
    );


const previewMedia =
    document.getElementById(
        "previewMedia"
    );


const previewTitle =
    document.getElementById(
        "previewTitle"
    );


const previewClose =
    document.getElementById(
        "previewClose"
    );


/* =========================================================
   OPEN ABILITY PREVIEW
========================================================= */

function openPreview(ability) {

    previewTitle.textContent =
        ability.name;


    previewMedia.innerHTML =
        "";


    /* ---------------------------------------------------------
       VIDEO
    --------------------------------------------------------- */

    if (
        ability.preview &&
        ability.previewType === "video"
    ) {

        const video =
            document.createElement(
                "video"
            );


        video.src =
            ability.preview;


        video.controls =
            true;


        video.autoplay =
            true;


        video.loop =
            true;


        video.muted =
            true;


        previewMedia.appendChild(
            video
        );

    }


    /* ---------------------------------------------------------
       IMAGE
    --------------------------------------------------------- */

    else if (
        ability.preview &&
        ability.previewType === "image"
    ) {

        const image =
            document.createElement(
                "img"
            );


        image.src =
            ability.preview;


        image.alt =
            ability.name;


        previewMedia.appendChild(
            image
        );

    }


    /* ---------------------------------------------------------
       NO PREVIEW
    --------------------------------------------------------- */

    else {

        previewMedia.innerHTML = `

            <div class="previewFallback">

                PREVIEW NOT AVAILABLE

            </div>

        `;

    }


    previewModal.classList.add(
        "open"
    );

}


/* =========================================================
   CLOSE ABILITY PREVIEW
========================================================= */

function closePreview() {

    previewModal.classList.remove(
        "open"
    );


    previewMedia.innerHTML =
        "";

}


/* Close button */

previewClose.addEventListener(
    "click",
    closePreview
);


/* Click outside preview */

previewModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            previewModal
        ) {

            closePreview();

        }

    }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {

            return;

        }


        /*
            Close the preview first if it's open.
        */

        if (
            previewModal.classList.contains(
                "open"
            )
        ) {

            closePreview();

            return;

        }


        /*
            Otherwise close the character modal.
        */

        if (
            modal.classList.contains(
                "open"
            )
        ) {

            closeHero();

        }

    }
);
