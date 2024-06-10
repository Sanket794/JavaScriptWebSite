const createHtmlStructure = () => {
    const container = document.createElement('div');
    container.className = 'container';

    // Navbar
    const navbar = document.createElement('div');
    navbar.className = 'navbar';

    const logoLink = document.createElement('a');
    logoLink.href = '';
    logoLink.className = 'logo-link';
    logoLink.innerHTML = 'E<span>commerce</span>';
    navbar.appendChild(logoLink);

    const ul = document.createElement('ul');
    ul.className = 'right';

    const box = document.createElement('div');
    box.className = 'box';

    const navItems = [
        { text: 'Home', href: '' },
        { text: 'Shop', href: '' },
        { text: 'Blog', href: '' },
        { text: 'About', href: '' },
        { text: 'Contact Us', href: '' },
        { iconClass: 'fas fa-search', href: '' },
        { iconClass: 'fas fa-shopping-bag', href: '' },
    ];

    navItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-links';
        const a = document.createElement('a');
        a.href = item.href;
        if (item.text) {
            a.textContent = item.text;
        } else {
            const icon = document.createElement('i');
            icon.className = item.iconClass;
            a.appendChild(icon);
        }
        li.appendChild(a);
        box.appendChild(li);
    });

    ul.appendChild(box);
    navbar.appendChild(ul);

    const menuToggle = document.createElement('a');
    menuToggle.href = '#';
    menuToggle.className = 'menu-toggle';
    const menuIcon = document.createElement('i');
    menuIcon.className = 'fas fa-bars';
    menuToggle.appendChild(menuIcon);
    navbar.appendChild(menuToggle);

    container.appendChild(navbar);

    // Back Image
    const backImage = document.createElement('div');
    backImage.className = 'backImage';
    const backImg = document.createElement('img');
    backImg.className = 'back';
    backImg.src = 'img/back.jpg';
    backImg.alt = '';
    backImage.appendChild(backImg);

    const containText = document.createElement('div');
    containText.className = 'containText';

    const para1 = document.createElement('p');
    para1.className = 'para';
    para1.textContent = 'NEW ARRIVALS';
    containText.appendChild(para1);

    const heading = document.createElement('h1');
    heading.className = 'heading';
    containText.appendChild(heading);

    const para2 = document.createElement('p');
    para2.className = 'para';
    para2.textContent = 'Shoomativ offer your very comfortable time on walking and exercise';
    containText.appendChild(para2);

    const shopNow = document.createElement('a');
    shopNow.href = '#';
    shopNow.className = 'shopNow';
    shopNow.textContent = 'Shop Now';
    containText.appendChild(shopNow);

    backImage.appendChild(containText);
    container.appendChild(backImage);

    // Brands
    const brands = document.createElement('div');
    brands.className = 'brands';
    const brandImages = ['img/brand/1.png', 'img/brand/4.png', 'img/brand/2.png', 'img/brand/3.png', 'img/brand/3.webp'];

    brandImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.className = 'brand';
        brands.appendChild(img);
    });

    container.appendChild(brands);

    // Content
    const content = document.createElement('div');
    content.className = 'content';

    const contentItems = [
        { className: 'img1', text: 'Stream Rare Sneakers', align: 'left', shopClass: 'shop1' },
        { className: 'img5', text: 'Awesome Blank Outfit', align: 'center', shopClass: 'shop5' },
        { className: 'img3', text: 'Sportwear up to 50%', align: 'right', shopClass: 'shop3' },
    ];

    contentItems.forEach(item => {
        const imgDiv = document.createElement('div');
        imgDiv.className = `imge ${item.className}`;

        const con = document.createElement('div');
        con.className = 'con';

        const h2 = document.createElement('h2');
        h2.style.textAlign = item.align;
        h2.textContent = item.text;
        con.appendChild(h2);

        for (let i = 0; i < 4; i++) {
            con.appendChild(document.createElement('br'));
        }

        const p = document.createElement('p');
        p.className = `shop56 ${item.shopClass}`;

        const a = document.createElement('a');
        a.href = '#';
        a.textContent = 'SHOP NOW';
        p.appendChild(a);
        con.appendChild(p);

        imgDiv.appendChild(con);

        const color = document.createElement('div');
        color.className = 'color';
        imgDiv.appendChild(color);

        content.appendChild(imgDiv);
    });

    container.appendChild(content);

    // Features
    const createFeatureSection = (headerClass, imagePathPrefix) => {
        const features = document.createElement('div');
        features.className = 'features';

        const centerFeat = document.createElement('div');
        centerFeat.className = 'center_feat';

        const header = document.createElement('div');
        header.className = headerClass;
        centerFeat.appendChild(header);

        const underline = document.createElement('div');
        underline.className = 'underline';
        centerFeat.appendChild(underline);

        const paragraph = document.createElement('div');
        paragraph.className = 'paragraph';
        paragraph.textContent = 'Here you can check out our new products with fair price on Ecommmerce';
        centerFeat.appendChild(paragraph);

        features.appendChild(centerFeat);

        const featureContent = document.createElement('div');
        featureContent.className = 'featureContent';

        for (let i = 1; i <= 4; i++) {
            const showBox = document.createElement('div');
            showBox.className = 'showBox';

            const img = document.createElement('img');
            img.src = `img/${imagePathPrefix}/${i}.jpg`;
            img.alt = '';
            img.className = 'featImg';
            showBox.appendChild(img);

            const aboutFeat = document.createElement('div');
            aboutFeat.className = 'aboutFeat';

            const star = document.createElement('div');
            star.className = 'star';
            for (let j = 0; j < 5; j++) {
                const starIcon = document.createElement('i');
                starIcon.className = 'fas fa-star';
                star.appendChild(starIcon);
            }
            aboutFeat.appendChild(star);

            const makePara1 = document.createElement('p');
            makePara1.className = 'makePara';
            makePara1.textContent = 'Sport Boots';
            aboutFeat.appendChild(makePara1);

            const makePara2 = document.createElement('p');
            makePara2.className = 'makePara';
            makePara2.innerHTML = '<b>$92</b>';
            aboutFeat.appendChild(makePara2);

            const btn = document.createElement('p');
            btn.className = 'btn BuyNew';
            const buyLink = document.createElement('a');
            buyLink.href = '#';
            buyLink.innerHTML = '<b>BUY NOW</b>';
            btn.appendChild(buyLink);
            aboutFeat.appendChild(btn);

            showBox.appendChild(aboutFeat);
            featureContent.appendChild(showBox);
        }

        features.appendChild(featureContent);
        return features;
    };

    container.appendChild(createFeatureSection('header', 'featured'));
    container.appendChild(createFeatureSection('header1', 'clothes'));
    container.appendChild(createFeatureSection('header3', 'watches'));
    container.appendChild(createFeatureSection('header4', 'shoes'));

    // Contain Content
    const containContent = document.createElement('div');
    containContent.className = 'containContent';

    const mainContent = document.createElement('div');
    mainContent.className = 'mainContent';

    const containParagraph = document.createElement('p');
    containParagraph.className = 'containParagraph';
    containParagraph.textContent = "MID SEASON'S SALE";
    mainContent.appendChild(containParagraph);

    const containHeading = document.createElement('h1');
    containHeading.className = 'containHeading';
    containHeading.textContent = 'Autumn Collection UP TO 20% OFF';
    mainContent.appendChild(containHeading);

    const containBtn = document.createElement('p');
    containBtn.className = 'containBtn';
    const containAnchor = document.createElement('a');
    containAnchor.href = '';
    containAnchor.className = 'conatinAnchor';
    containAnchor.innerHTML = '<b>SHOP NOW</b>';
    containBtn.appendChild(containAnchor);
    mainContent.appendChild(containBtn);

    containContent.appendChild(mainContent);
    containContent.appendChild(createFeatureSection('header1', 'clothes'));
    container.appendChild(containContent);

    document.body.appendChild(container);
};

createHtmlStructure();