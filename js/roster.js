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


/* =========================================================
   FILTER HEROES
========================================================= */

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


/* =========================================================
   ALL BUTTON
========================================================= */

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


        updateRoleURL(
            null
        );

    }
);


/* =========================================================
   MAIN ROLE BUTTONS
========================================================= */

roleButtons.forEach(button => {

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


            /* Close other dropdowns */

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


            /* Filter roster */

            const role =
                button.dataset.role;


            filterHeroes(
                role
            );


            /* Clear active states */

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


            /* Activate selected role */

            button.classList.add(
                "active"
            );


            /* Open or close dropdown */

            group.classList.toggle(
                "open",
                !wasOpen
            );


            /* Update URL */

            updateRoleURL(
                role
            );

        }
    );

});


/* =========================================================
   SUBCLASS BUTTONS
========================================================= */

subclassButtons.forEach(button => {

    button.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            const role =
                button.dataset.role;


            /* Filter */

            filterHeroes(
                role
            );


            /* Clear active state */

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


            /* Activate subclass */

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


                /*
                    Also highlight the parent
                    major role.
                */

                const parentButton =
                    group.querySelector(
                        ".roleFilter"
                    );


                if (parentButton) {

                    parentButton.classList.add(
                        "active"
                    );

                }

            }


            /* Update URL */

            updateRoleURL(
                role
            );

        }
    );

});


/* =========================================================
   CLICK OUTSIDE DROPDOWNS
========================================================= */

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
   UPDATE ROLE URL
========================================================= */

function updateRoleURL(role) {

    const url =
        new URL(
            window.location.href
        );


    if (role) {

        url.searchParams.set(
            "role",
            role
        );

    }

    else {

        url.searchParams.delete(
            "role"
        );

    }


    window.history.replaceState(
        {},
        "",
        url
    );

}


/* =========================================================
   APPLY ROLE FROM URL
========================================================= */

function applyRoleFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const requestedRole =
        params.get(
            "role"
        );


    /* ---------------------------------------------------------
       VALID ROLES
    --------------------------------------------------------- */

    const validRoles = [

        "Vanguard",
        "Guardian",
        "Warden",
        "Bludgeon",

        "Striker",
        "Brawler",
        "Marksman",
        "Hunter",
        "Ravager",
        "Disruptor",

        "Catalyst",
        "Lifeline",
        "Playmaker",
        "Utility",
        "Controller"

    ];


    /* ---------------------------------------------------------
       DEFAULT TO ALL
    --------------------------------------------------------- */

    if (
        !requestedRole ||
        !validRoles.includes(
            requestedRole
        )
    ) {

        renderRoster(
            heroes
        );


        allButton.classList.add(
            "active"
        );


        return;
    }


    /* ---------------------------------------------------------
       FILTER ROSTER
    --------------------------------------------------------- */

    filterHeroes(
        requestedRole
    );


    /* ---------------------------------------------------------
       CLEAR ACTIVE FILTERS
    --------------------------------------------------------- */

    allButton.classList.remove(
        "active"
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


    /* ---------------------------------------------------------
       MAIN ROLE?
    --------------------------------------------------------- */

    const mainRoleButton =
        Array.from(
            roleButtons
        )
        .find(
            button =>
                button.dataset.role ===
                requestedRole
        );


    if (
        mainRoleButton &&
        !mainRoleButton.classList.contains(
            "allFilter"
        )
    ) {

        mainRoleButton.classList.add(
            "active"
        );

        return;
    }


    /* ---------------------------------------------------------
       SUBCLASS?
    --------------------------------------------------------- */

    const subclassButton =
        Array.from(
            subclassButtons
        )
        .find(
            button =>
                button.dataset.role ===
                requestedRole
        );


    if (!subclassButton) {
        return;
    }


    subclassButton.classList.add(
        "active"
    );


    const group =
        subclassButton.closest(
            ".roleGroup"
        );


    if (!group) {
        return;
    }


    const parentButton =
        group.querySelector(
            ".roleFilter"
        );


    if (parentButton) {

        parentButton.classList.add(
            "active"
        );

    }

}


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
   CHARACTER TABS
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
   COMBAT PROFILE ELEMENTS
========================================================= */

const radarChart =
    document.getElementById(
        "radarChart"
    );


const profileStats =
    document.getElementById(
        "profileStats"
    );


/* =========================================================
   SKINS + CONCEPT ART
========================================================= */

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
   COLORED ABILITY SECTION RENDERER
========================================================= */

function renderAbilitySection(
    section
) {

    if (!section) {
        return "";
    }


    const stats =
        renderStats(
            section.details
        );


    const allowedColors = [

        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "violet",
        "pink",
        "white"

    ];


    const requestedColor =
        section.color ||
        "white";


    const color =
        allowedColors.includes(
            requestedColor
        )
            ? requestedColor
            : "white";


    return `

        <div
            class="
                abilityVariant
                variant-${color}
            "
        >

            <div class="variantHeader">

                <span class="variantName">

                    ${section.name}

                </span>

            </div>


            ${
                section.description
                    ? `

                        <div class="variantDescription">

                            ${section.description}

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
   COMBAT PROFILE / RADAR CHART
========================================================= */

function renderCombatProfile(hero) {

    const profile =
        hero.profile;


    if (!profile) {

        radarChart.innerHTML = `

            <div class="emptySection">

                Combat profile unavailable.

            </div>

        `;


        profileStats.innerHTML =
            "";

        return;
    }


    const axes = [

        {
            key: "damage",
            label: "Damage"
        },

        {
            key: "survivability",
            label: "Survivability"
        },

        {
            key: "crowdControl",
            label: "Crowd Control"
        },

        {
            key: "mobility",
            label: "Mobility"
        },

        {
            key: "support",
            label: "Support"
        },

        {
            key: "range",
            label: "Range"
        }

    ];


    const size =
        500;


    const center =
        size / 2;


    const radius =
        155;


    const labelRadius =
        205;


    const levels =
        5;


    /* ---------------------------------------------------------
       POINT CALCULATOR
    --------------------------------------------------------- */

    function pointAt(
        index,
        distance
    ) {

        const angle =
            (
                Math.PI *
                2 *
                index /
                axes.length
            )
            -
            Math.PI / 2;


        return {

            x:
                center +
                Math.cos(angle) *
                distance,

            y:
                center +
                Math.sin(angle) *
                distance

        };

    }


    /* ---------------------------------------------------------
       BACKGROUND GRID
    --------------------------------------------------------- */

    let grid =
        "";


    for (
        let level = 1;
        level <= levels;
        level++
    ) {

        const levelRadius =
            radius *
            (
                level /
                levels
            );


        const points =
            axes
                .map(
                    (_, index) => {

                        const point =
                            pointAt(
                                index,
                                levelRadius
                            );


                        return (
                            `${point.x},${point.y}`
                        );

                    }
                )
                .join(" ");


        grid += `

            <polygon
                points="${points}"
                class="radarGrid"
            />

        `;

    }


    /* ---------------------------------------------------------
       AXIS LINES
    --------------------------------------------------------- */

    const axisLines =
        axes
            .map(
                (_, index) => {

                    const point =
                        pointAt(
                            index,
                            radius
                        );


                    return `

                        <line
                            x1="${center}"
                            y1="${center}"
                            x2="${point.x}"
                            y2="${point.y}"
                            class="radarAxis"
                        />

                    `;

                }
            )
            .join("");


    /* ---------------------------------------------------------
       HERO PROFILE POLYGON
    --------------------------------------------------------- */

    const profilePoints =
        axes
            .map(
                (axis, index) => {

                    const rawValue =
                        Number(
                            profile[
                                axis.key
                            ]
                        ) || 0;


                    const value =
                        Math.max(
                            0,
                            Math.min(
                                10,
                                rawValue
                            )
                        );


                    const distance =
                        radius *
                        (
                            value /
                            10
                        );


                    const point =
                        pointAt(
                            index,
                            distance
                        );


                    return (
                        `${point.x},${point.y}`
                    );

                }
            )
            .join(" ");


    /* ---------------------------------------------------------
       HERO PROFILE DOTS
    --------------------------------------------------------- */

    const profileDots =
        axes
            .map(
                (axis, index) => {

                    const rawValue =
                        Number(
                            profile[
                                axis.key
                            ]
                        ) || 0;


                    const value =
                        Math.max(
                            0,
                            Math.min(
                                10,
                                rawValue
                            )
                        );


                    const point =
                        pointAt(
                            index,
                            radius *
                            (
                                value /
                                10
                            )
                        );


                    return `

                        <circle
                            cx="${point.x}"
                            cy="${point.y}"
                            r="4"
                            class="radarPoint"
                        />

                    `;

                }
            )
            .join("");


    /* ---------------------------------------------------------
       LABELS
    --------------------------------------------------------- */

    const labels =
        axes
            .map(
                (axis, index) => {

                    const point =
                        pointAt(
                            index,
                            labelRadius
                        );


                    let anchor =
                        "middle";


                    if (
                        point.x <
                        center - 20
                    ) {

                        anchor =
                            "end";

                    }

                    else if (
                        point.x >
                        center + 20
                    ) {

                        anchor =
                            "start";

                    }


                    return `

                        <text
                            x="${point.x}"
                            y="${point.y}"
                            text-anchor="${anchor}"
                            dominant-baseline="middle"
                            class="radarLabel"
                        >

                            ${axis.label}

                        </text>

                    `;

                }
            )
            .join("");


    /* ---------------------------------------------------------
       BUILD SVG
    --------------------------------------------------------- */

    radarChart.innerHTML = `

        <svg
            viewBox="0 0 ${size} ${size}"
            class="radarSvg"
            role="img"
            aria-label="${hero.name} combat profile"
        >

            ${grid}

            ${axisLines}


            <polygon
                points="${profilePoints}"
                class="radarProfile"
            />


            ${profileDots}

            ${labels}

        </svg>

    `;


    /* ---------------------------------------------------------
       NUMERIC PROFILE VALUES
    --------------------------------------------------------- */

    profileStats.innerHTML =
        axes
            .map(
                axis => {

                    const rawValue =
                        Number(
                            profile[
                                axis.key
                            ]
                        ) || 0;


                    const value =
                        Math.max(
                            0,
                            Math.min(
                                10,
                                rawValue
                            )
                        );


                    return `

                        <div class="profileStat">

                            <div class="profileStatName">

                                ${axis.label}

                            </div>


                            <div class="profileStatValue">

                                ${value}

                                <span>
                                    / 10
                                </span>

                            </div>

                        </div>

                    `;

                }
            )
            .join("");

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
   RESET CHARACTER TABS
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
       TAGS
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
       COMBAT PROFILE
    --------------------------------------------------------- */

    renderCombatProfile(
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


            const stats =
                renderStats(
                    ability.stats
                );


            /* ---------------------------------------------
               COLORED SECTIONS
            --------------------------------------------- */

            let sections =
                "";


            if (
                ability.sections &&
                ability.sections.length
            ) {

                sections = `

                    <div class="abilityVariants">

                        ${ability.sections
                            .map(
                                section =>
                                    renderAbilitySection(
                                        section
                                    )
                            )
                            .join("")}

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


                    ${sections}


                </div>

            `;


            /* ---------------------------------------------
               TOP PREVIEW BUTTON
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
       OPEN HERO MODAL
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


                if (targetPanel) {

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
        ability.previewType ===
        "video"
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
        ability.previewType ===
        "image"
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


previewClose.addEventListener(
    "click",
    closePreview
);


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
            event.key !==
            "Escape"
        ) {

            return;

        }


        if (
            previewModal.classList.contains(
                "open"
            )
        ) {

            closePreview();

            return;

        }


        if (
            modal.classList.contains(
                "open"
            )
        ) {

            closeHero();

        }

    }
);


/* =========================================================
   INITIAL PAGE LOAD
========================================================= */

/*
    This replaces the old:

        renderRoster(heroes);

    We now check the URL first.

    Examples:

        index.html
        → shows everyone

        index.html?role=Striker
        → shows Strikers

        index.html?role=Ravager
        → shows Ravagers
*/

applyRoleFromURL();
