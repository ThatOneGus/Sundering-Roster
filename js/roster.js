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


function filterHeroes(role) {

    if (role === "all") {

        renderRoster(heroes);

        return;

    }


    const filtered =
        heroes.filter(hero => {

            const secondaryRoles =
                hero.secondaryRoles || [];


            return (

                hero.role === role

                ||

                secondaryRoles.includes(role)

            );

        });


    renderRoster(filtered);

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


        filterHeroes("all");

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


            filterHeroes(role);


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


    return Object.entries(stats)
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


    function pointAt(
        index,
        distance
    ) {

        const angle =
            (
                Math.PI * 2 *
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
       GRID
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
       PROFILE POLYGON
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
       PROFILE DOTS
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
       NUMERIC VALUES
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


            let variants =
                "";


            if (
                ability.variants
            ) {

                variants = `

                    <div class="abilityVariants">

                        ${renderVariant(
                            ability.variants.flourishingBud,
                            " ",
                            "flourishing"
                        )}

                        ${renderVariant(
                            ability.variants.wiltingBud,
                            " ",
                            "wilting"
                        )}

                    </div>

                `;

            }


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


            /* -------------------------------------------------
               PREVIEW BUTTON
            ------------------------------------------------- */

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


            /* -------------------------------------------------
               SECOND PREVIEW BUTTON
            ------------------------------------------------- */

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


            /* -------------------------------------------------
               DETAILS
            ------------------------------------------------- */

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


            /* -------------------------------------------------
               ICON FALLBACK
            ------------------------------------------------- */

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
            event.key !== "Escape"
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
