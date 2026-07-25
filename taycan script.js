<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Porsche - JS</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <header class="position-fixed top-0 start-0 w-100 px-4 py-3 porsche-fixed-header">
        <div class="d-flex justify-content-between align-items-center">
            <button class="btn text-white d-flex align-items-center gap-2 menu-btn border-0 shadow-none" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#porscheMenu" aria-controls="porscheMenu">
                <i class="fa-solid fa-bars fs-4"></i>
                <span class="d-none d-sm-inline">Menu</span>
            </button>
            <div class="logo">
                <h2 class="porsche-brand text-white text-uppercase tracking-widest m-0 fs-3">PORSCHE</h2>
            </div>
            <div class="region-selector d-flex align-items-center">
                <img src="https://flagcdn.com/w40/eg.png" alt="Egypt Flag" class="rounded-circle flag-icon" width="28"
                    height="28">
            </div>
        </div>
    </header>

    <div class="hero-section position-relative vh-100 overflow-hidden">
        <video id="heroVideo" autoplay muted loop playsinline
            class="bg-video position-absolute top-0 start-0 w-100 h-100">
            <source src="images/Recording 2026-07-22 153134.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="bg-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <main
            class="h-100 d-flex flex-column justify-content-end align-items-center text-center text-white pb-5 px-3 position-relative">
            <div class="hero-content max-width-lg">
                <h1 class="hero-title display-3 fw-medium mb-4">
                    More freedom<br>per revolution.
                </h1>
                <p class="hero-description fs-5 fw-light opacity-90 mx-auto">
                    The sportiest and lightest open-top 911. Manual shift. High-revving. Highly emotional. The 911 GT3
                    S/C combines maximum dynamics with limitless driving pleasure – at up to 9,000 1/min. For an
                    unbridled feeling of freedom.
                </p>
                <div class="mt-4">
                    <button id="scrollBtn" class="btn btn-circle-icon text-white rounded-circle" type="button">
                        <i class="fa-solid fa-arrow-down"></i>
                    </button>
                </div>
            </div>
        </main>
    </div>

    <div class="offcanvas offcanvas-start porsche-sidebar" tabindex="-1" id="porscheMenu"
        aria-labelledby="porscheMenuLabel">
        <div class="offcanvas-header justify-content-end p-4">
            <button type="button" class="btn-close text-reset shadow-none" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <div class="offcanvas-body p-0 d-flex h-100">
            <div class="main-menu-col p-4 w-50">
                <ul class="list-unstyled menu-list m-0">

                    <li>
                        <a href="#" class="menu-item active d-flex justify-content-between align-items-center">
                            <span>Vehicle Purchase</span>
                            <i class="fa-solid fa-chevron-right icon-arrow"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#model" class="menu-item d-flex justify-content-between align-items-center">
                            <span>Models</span>
                            <i class="fa-solid fa-chevron-right icon-arrow"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="menu-item d-flex justify-content-between align-items-center">
                            <span>Services</span>
                            <i class="fa-solid fa-chevron-right icon-arrow"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="menu-item d-flex justify-content-between align-items-center">
                            <span>Experience</span>
                            <i class="fa-solid fa-chevron-right icon-arrow"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="menu-item d-flex justify-content-between align-items-center">
                            <span>Find a Dealer</span>
                            <i class="fa-solid fa-chevron-right icon-arrow"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="sub-menu-col p-4 w-50 flex-grow-1">
                <ul class="list-unstyled sub-menu-list m-0">
                    <li>
                        <a href="#" class="sub-menu-item active d-inline-block">Configure</a>
                    </li>
                    <li><a href="#" class="sub-menu-item">Compare Models</a></li>
                    <li><a href="#" class="sub-menu-item">Find New and Pre-owned Vehicles</a></li>
                    <li><a href="#" class="sub-menu-item">Saved Vehicles</a></li>
                    <li><a href="#" class="sub-menu-item">E-Mobility& E-Performance</a></li>
                </ul>
            </div>
        </div>
    </div>

    <section id="model" class="models-section py-5 bg-white text-dark">
        <div class="container py-4">
            <div class="row g-4 mb-5">
                <div class="col-12 col-md-4">
                    <a href="macan.html" class="text-decoration-none">
                        <div class="card border-0 shadow-lg rounded-4 h-100 overflow-hidden position-relative">
                            <img src="Images/6080.png" alt="Macan Electric" class="w-100 h-100 object-fit-cover">
                            <div
                                class="card-overlay position-absolute bottom-0 start-0 w-100 p-4 d-flex justify-content-between align-items-end">
                                <h4 class="text-white fw-medium m-0 fs-5">Macan Electric.</h4>
                                <span
                                    class="btn btn-circle-arrow rounded-circle text-white d-flex align-items-center justify-content-center">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-md-4">
                    <a href="taycan.html" class="text-decoration-none">
                        <div class="card border-0 shadow-lg rounded-4 h-100 overflow-hidden position-relative">
                            <img src="images/6050.png" alt="Taycan" class="w-100 h-100 object-fit-cover">
                            <div
                                class="card-overlay position-absolute bottom-0 start-0 w-100 p-4 d-flex justify-content-between align-items-end">
                                <h4 class="text-white fw-medium m-0 fs-5 lh-sm">Taycan. Now with E-Shift.</h4>
                                <span
                                    class="btn btn-circle-arrow rounded-circle text-white d-flex align-items-center justify-content-center flex-shrink-0 ms-2">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-md-4">
                    <a href="cayenne.html" class="text-decoration-none">
                        <div class="card border-0 shadow-lg rounded-4 h-100 overflow-hidden position-relative">
                            <img src="images/6070.png" alt="Cayenne Coupé" class="w-100 h-100 object-fit-cover">
                            <div
                                class="card-overlay position-absolute bottom-0 start-0 w-100 p-4 d-flex justify-content-between align-items-end">
                                <h4 class="text-white fw-medium m-0 fs-5 lh-sm">The new Cayenne Coupé Electric.</h4>
                                <span
                                    class="btn btn-circle-arrow rounded-circle text-white d-flex align-items-center justify-content-center flex-shrink-0 ms-2">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <section id="journeySection" class="journey-section py-4">
                <div class="container py-2">
                    <h2 class="journey-title display-4 fw-medium mb-3">Your Porsche journey starts now.</h2>

                    <div class="row g-4 mb-4">
                        <div class="col-12 col-md-6">
                            <div class="porsche-model-card position-relative rounded-4 overflow-hidden">
                                <img src="images/5550.jpg" alt="911" class="card-bg-img w-100 h-100 object-fit-cover">
                                <div
                                    class="card-content position-absolute top-0 start-0 w-100 h-100 p-4 d-flex flex-column justify-content-between">
                                    <div class="text-center pt-2">
                                        <h2 class="model-logo">911</h2>
                                    </div>
                                    <div class="card-bottom">
                                        <div class="mb-2"><span class="porsche-badge">Gasoline</span></div>
                                        <div class="d-flex justify-content-between align-items-end">
                                            <p class="model-desc m-0 text-white-50">Iconic sports car with rear engine;
                                                2 doors, 2+2 seats.</p>
                                            <a href="#" class="btn-explore-hover text-decoration-none text-white">
                                                <span class="explore-text">Explore</span>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="porsche-model-card position-relative rounded-4 overflow-hidden">
                                <img src="images/5520.jpg" alt="718" class="card-bg-img w-100 h-100 object-fit-cover">
                                <div
                                    class="card-content position-absolute top-0 start-0 w-100 h-100 p-4 d-flex flex-column justify-content-between">
                                    <div class="text-center pt-2">
                                        <h2 class="model-logo">718</h2>
                                    </div>
                                    <div class="card-bottom">
                                        <div class="mb-2"><span class="porsche-badge badge-info">Model unavailable for
                                                order. Explore available inventory.</span></div>
                                        <div class="d-flex justify-content-between align-items-end">
                                            <p class="model-desc m-0 text-white-50">Precise mid-engine sports car; 2
                                                doors, 2 seats.</p>
                                            <a href="#" class="btn-explore-hover text-decoration-none text-white">
                                                <span class="explore-text">Explore</span>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-4 mb-4">
                        <div class="col-12 col-md-6">
                            <div class="porsche-model-card position-relative rounded-4 overflow-hidden">
                                <img src="images/6070.png" alt="Cayenne"
                                    class="card-bg-img w-100 h-100 object-fit-cover">
                                <div
                                    class="card-content position-absolute top-0 start-0 w-100 h-100 p-4 d-flex flex-column justify-content-between">
                                    <div class="text-center pt-2">
                                        <h2 class="model-logo">Cayenne</h2>
                                    </div>
                                    <div class="card-bottom">
                                        <div class="mb-2"><span class="porsche-badge">Hybrid / Gasoline</span></div>
                                        <div class="d-flex justify-content-between align-items-end">
                                            <p class="model-desc m-0 text-white-50">The versatile performance SUV.</p>
                                            <a href="#" class="btn-explore-hover text-decoration-none text-white">
                                                <span class="explore-text">Explore</span>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="porsche-model-card position-relative rounded-4 overflow-hidden">
                                <img src="images/6050.png" alt="Taycan"
                                    class="card-bg-img w-100 h-100 object-fit-cover">
                                <div
                                    class="card-content position-absolute top-0 start-0 w-100 h-100 p-4 d-flex flex-column justify-content-between">
                                    <div class="text-center pt-2">
                                        <h2 class="model-logo">Taycan</h2>
                                    </div>
                                    <div class="card-bottom">
                                        <div class="mb-2"><span class="porsche-badge">Electric</span></div>
                                        <div class="d-flex justify-content-between align-items-end">
                                            <p class="model-desc m-0 text-white-50">Pure electric sports sedan.</p>
                                            <a href="#" class="btn-explore-hover text-decoration-none text-white">
                                                <span class="explore-text">Explore</span>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-4">
                        <div class="col-12 col-md-6">
                            <div class="porsche-model-card position-relative rounded-4 overflow-hidden">
                                <img src="images/6080.png" alt="Macan" class="card-bg-img w-100 h-100 object-fit-cover">
                                <div
                                    class="card-content position-absolute top-0 start-0 w-100 h-100 p-4 d-flex flex-column justify-content-between">
                                    <div class="text-center pt-2">
                                        <h2 class="model-logo">Macan</h2>
                                    </div>
                                    <div class="card-bottom">
                                        <div class="mb-2"><span class="porsche-badge">Electric</span></div>
                                        <div class="d-flex justify-content-between align-items-end">
                                            <p class="model-desc m-0 text-white-50">Compact luxury electric SUV.</p>
                                            <a href="#" class="btn-explore-hover text-decoration-none text-white">
                                                <span class="explore-text">Explore</span>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="porsche-model-card position-relative rounded-4 overflow-hidden">
                                <img src="images/5530.jpg" alt="Panamera"
                                    class="card-bg-img w-100 h-100 object-fit-cover">
                                <div
                                    class="card-content position-absolute top-0 start-0 w-100 h-100 p-4 d-flex flex-column justify-content-between">
                                    <div class="text-center pt-2">
                                        <h2 class="model-logo">Panamera</h2>
                                    </div>
                                    <div class="card-bottom">
                                        <div class="mb-2"><span class="porsche-badge">Hybrid</span></div>
                                        <div class="d-flex justify-content-between align-items-end">
                                            <p class="model-desc m-0 text-white-50">Luxurious sports saloon car.</p>
                                            <a href="#" class="btn-explore-hover text-decoration-none text-white">
                                                <span class="explore-text">Explore</span>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section class="py-5 bg-white">
                <div class="container">
                    <div class="porsche-banner-card overflow-hidden rounded-4 shadow-lg position-relative">
                        <div class="row g-0 align-items-stretch">
                            <div
                                class="col-lg-5 banner-content-col p-5 d-flex flex-column justify-content-center text-white">
                                <h2 class="display-6 fw-medium mb-3">Find your new or pre-owned Porsche.</h2>
                                <p class="text-white-50 mb-4 fs-6 lh-base">
                                    A Porsche is as individual as its owner. It is always an expression of one's own
                                    personality. We help you find your personal dream vehicle from authorised Porsche
                                    Centres.
                                </p>
                                <div>
                                    <a href="#"
                                        class="btn btn-light rounded-pill px-4 py-3 fw-medium text-dark banner-btn shadow-sm">
                                        Find your Porsche
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-7 banner-img-col position-relative overflow-hidden">
                                <img src="images/filters_format.webp" alt="Find your Porsche"
                                    class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover banner-image">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-5 bg-white discover-section">
                <div class="container py-4">
                    <h2 class="text-center text-dark mb-5 fw-medium section-title"
                        style="font-size: 2.5rem; letter-spacing: -1.5px;">Discover</h2>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6">
                            <div class="card discover-card position-relative overflow-hidden border-0 shadow-sm">
                                <img src="images/11109.webp" alt="E-Performance"
                                    class="card-bg-img w-100 h-100 position-absolute top-0 start-0 object-fit-cover">
                                <div
                                    class="card-content d-flex flex-column justify-content-between p-4 h-100 position-relative">
                                    <div class="top-content"></div>
                                    <div class="bottom-content d-flex justify-content-between align-items-end">
                                        <div>
                                            <h3 class="h5 fw-bold text-white mb-0 lh-base">E-Performance
                                                -<br>Sustainable Mobility</h3>
                                        </div>
                                        <a href="#"
                                            class="btn btn-circle-arrow rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none flex-shrink-0">
                                            <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="card discover-card position-relative overflow-hidden border-0 shadow-sm">
                                <img src="images/1110.webp" alt="Porsche Tequipment"
                                    class="card-bg-img w-100 h-100 position-absolute top-0 start-0 object-fit-cover">
                                <div
                                    class="card-content d-flex flex-column justify-content-between p-4 h-100 position-relative">
                                    <div class="top-content"></div>
                                    <div class="bottom-content d-flex justify-content-between align-items-end">
                                        <div>
                                            <h3 class="h5 fw-bold text-white mb-0 lh-base">Porsche Tequipment</h3>
                                        </div>
                                        <a href="#"
                                            class="btn btn-circle-arrow rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none flex-shrink-0">
                                            <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="card discover-card position-relative overflow-hidden border-0 shadow-sm">
                                <img src="images/1111.jpg" alt="Porsche Exclusive Manufaktur"
                                    class="card-bg-img w-100 h-100 position-absolute top-0 start-0 object-fit-cover">
                                <div
                                    class="card-content d-flex flex-column justify-content-between p-4 h-100 position-relative">
                                    <div class="top-content"></div>
                                    <div class="bottom-content d-flex justify-content-between align-items-end">
                                        <div>
                                            <h3 class="h5 fw-bold text-white mb-0 lh-base">Porsche
                                                Exclusive<br>Manufaktur</h3>
                                        </div>
                                        <a href="#"
                                            class="btn btn-circle-arrow rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none flex-shrink-0">
                                            <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <script src="js/bootstrap.bundle.min.js"></script>
            <script src="main.js"></script>
</body>

</html>