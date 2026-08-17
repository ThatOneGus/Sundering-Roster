const roster =
    document.getElementById("roster");


// =========================================================
// RENDER ROSTER
// =========================================================

function renderRoster(list) {

    roster.innerHTML = "";

    if (!list.length) {

        roster.innerHTML = `

            <div style="
                grid-column:1/-1;
                padding:100px;
                text-align:center;
                color:#777;
                letter-spacing:.2em;
            ">

                NO VANGUARDS FOUND

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

            card.innerHTML = `

    <div class="heroArt">

        <img
            src="${hero.thumbnail}"
            alt="${hero.name}"
        >

    </div>

    <div class="heroInfo">

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
            search.value.toLowerCase().trim();


        const results =
            heroes.filter(hero =>

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

                hero.secondaryRoles.some(
                    role =>
                        role
                            .toLowerCase()
                            .includes(query)
                )

            );


        renderRoster(results);

    }
);


/* =========================================================
   ROLE FILTERS
========================================================= */

const roleButtons =
    document.querySelectorAll(".roleFilter");

const allButton =
    document.querySelector(".allFilter");

const roleGroups =
    document.querySelectorAll(".roleGroup");

const subclassButtons =
    document.querySelectorAll(".subFilters button");


/* ---------------------------------------------------------
   FILTER HEROES
--------------------------------------------------------- */

function filterHeroes(role) {

    if (role === "all") {

        renderRoster(heroes);

        return;

    }


    const filtered =
        heroes.filter(hero =>

            hero.role === role ||

            hero.secondaryRoles.includes(role)

        );


    renderRoster(filtered);

}


/* ---------------------------------------------------------
   ALL BUTTON
--------------------------------------------------------- */

allButton.addEventListener(
    "click",
    () => {

        roleGroups.forEach(
            group =>
                group.classList.remove("open")
        );


        roleButtons.forEach(
            button =>
                button.classList.remove("active")
        );


        subclassButtons.forEach(
            button =>
                button.classList.remove("active")
        );


        allButton.classList.add("active");


        filterHeroes("all");

    }
);


/* ---------------------------------------------------------
   MAIN ROLE BUTTONS
--------------------------------------------------------- */

roleButtons.forEach(button => {

    button.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            const group =
                button.closest(".roleGroup");


            const wasOpen =
                group.classList.contains("open");


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
                b =>
                    b.classList.remove("active")
            );


            subclassButtons.forEach(
                b =>
                    b.classList.remove("active")
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


            filterHeroes(role);


            roleButtons.forEach(
                b =>
                    b.classList.remove("active")
            );


            subclassButtons.forEach(
                b =>
                    b.classList.remove("active")
            );


            allButton.classList.remove(
                "active"
            );


            button.classList.add(
                "active"
            );


            const group =
                button.closest(".roleGroup");


            group.classList.add(
                "open"
            );

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
                group.classList.remove("open")
        );

    }
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

        <div class="
            abilityVariant
            ${colorClass}
        ">


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
   HERO MODAL
========================================================= */

const modal =
    document.getElementById("modal");

const closeModal =
    document.getElementById("closeModal");

const detailArt =
    document.getElementById("detailArt");

const detailName =
    document.getElementById("detailName");

const detailTitle =
    document.getElementById("detailTitle");

const detailRole =
    document.getElementById("detailRole");

const detailDescription =
    document.getElementById("detailDescription");

const detailTags =
    document.getElementById("detailTags");

const abilityGrid =
    document.getElementById("abilityGrid");


function openHero(hero) {

    detailArt.innerHTML = `

    <img
        src="${hero.heroArt}"
        alt="${hero.name}"
    >

`;

    detailName.textContent =
        hero.name;

    detailTitle.textContent =
        hero.title;

    detailRole.textContent =
        hero.role;

    detailDescription.textContent =
        hero.description;


    detailTags.innerHTML = "";


    [

        hero.role,

        ...hero.secondaryRoles.filter(
            role =>
                role !== hero.role
        ),

        hero.region

    ].forEach(tag => {

        const element =
            document.createElement("div");

        element.className =
            "tag";

        element.textContent =
            tag;

        detailTags.appendChild(element);

    });


    abilityGrid.innerHTML = "";


    hero.abilities.forEach(
        (ability, index) => {

            const card =
                document.createElement("div");

            card.className =
                "ability";


            /* -------------------------------------------------
               GENERAL STATS
            ------------------------------------------------- */

            const stats =
                renderStats(
                    ability.stats
                );


            /* -------------------------------------------------
               VARIANT STATS
            ------------------------------------------------- */

            let variants = "";


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


            /* -------------------------------------------------
               ABILITY CARD
            ------------------------------------------------- */

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
                            ${ability.key}
                        </div>

                    </div>


                    <button
                        class="previewButton"
                        title="Preview ability"
                    >
                        ▶
                    </button>

                </div>


                <div class="abilityShort">

                    ${ability.shortDescription}

                </div>


                <div class="abilityActions">

                    <button
                        class="abilityAction detailsButton"
                    >
                        View Details
                    </button>


                    <button
                        class="abilityAction previewAction"
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
                                    GENERAL
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

                    openPreview(ability);

                }
            );


            /* -------------------------------------------------
               PREVIEW ACTION
            ------------------------------------------------- */

            const previewAction =
                card.querySelector(
                    ".previewAction"
                );


            previewAction.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    openPreview(ability);

                }
            );


            /* -------------------------------------------------
               DETAILS BUTTON
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


    modal.classList.add("open");

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   ABILITY DETAILS
========================================================= */

function toggleDetails(button) {

    const card =
        button.closest(".ability");


    const details =
        card.querySelector(
            ".abilityDetails"
        );


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


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeHero();

            closePreview();

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
   ABILITY PREVIEW
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
