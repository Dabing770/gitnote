---
title: "22 Konstruktiot"
source: "https://kurssi.matematiikkakilpailut.fi/22_konstruktio.html"
author: "Olli Järviniemi"
---

<a id="title-block-header"></a>

# 22 Konstruktiot

Tekijä

Olli Järviniemi

<a id="johdanto"></a>

## 22.1 Johdanto

Monet kilpailumatematiikan tehtävät vaativat jonkin tietynlaisen objektin olemassaolon todistamista. Monissa näistä tarkoitus on, että tällainen objekti tulee itse luoda eli **konstruoida**. Tässä tekstissä käsitellään konstruktiotehtäviä.

Konstruktiotehtävät ovat yleisiä erityisesti kombinatoriikassa. Idea konstruoinnista on kuitenkin hyvin yleinen, ja se tulee vastaan kaikissa muissakin kilpailumatematiikan aihealueissa (kuten alla löytyvistä esimerkeistä ja tehtävistä nähdään).

<a id="esimerkkitehtäviä"></a>

## 22.2 Esimerkkitehtäviä

<a id="exr-99"></a>

**Tehtävä 22.1** Osoita, että $9 \times 9$ -ruudukon ruudut voidaan värittää kolmella värillä niin, että jos otetaan minkä tahansa kahden pysty- ja vaakarivin leikkausten neljä ruutua, ne eivät kaikki ole samanvärisiä.

![Tyhjä yhdeksän kertaa yhdeksän ruudun ruudukko, johon on merkitty mustilla ympyröillä neljä ruutua. Ne sijaitsevat kahden pystyrivin ja kahden vaakarivin leikkauskohdissa eli suorakulmion neljänä kärkenä.](22%20Konstruktiot.assets/ruudukko.svg)

*Esimerkiksi ympyröillä merkityt neljä ruutua eivät saa olla kaikki samanvärisiä.*

On houkuttelevaa ryhtyä suoraan hommiin ja yrittää saada tehtyä toimiva väritys. Tehtävä ei ole kuitenkaan aivan helppo, ja ihan vain satunnaisia kokeiluja tekemällä ratkaisu ei löydy. (Lukija voi toki yrittää!) Voi myös yrittää värittää niin pitkälle kuin pystyy ja umpikujaan joutuessa vaihtaa joidenkin ruutujen väriä ja yrittää uudestaan. Tämäkään ei toimi kovin helposti.

Pitää siis miettiä vähän. Miten väritys kannattaa tehdä? Varmaankin jokaista väriä kannattaa käyttää (suunnilleen) saman verran. Vaikuttaa hyvältä, jos jokaisella pysty- ja vaakarivillä on kutakin väriä kolme kappaletta. (Ongelmia tulee helposti, jos yhdellä rivillä on hyvin paljon samaa väriä.)

Lisäksi on järkevää yrittää pitää tilanne mahdollisimman symmetrisenä värien suhteen. Tällöin riittää miettiä vain yhtä väriä ja varmistaa, ettei se luo kiellettyä suorakulmiota.

Näillä ideoilla on luonteva värittää ruudukon kolme alinta riviä seuraavasti:

![Ruudukon kolme alinta vaakariviä väritettynä. Kussakin rivissä on kolme punaista, kolme vihreää ja kolme sinistä ruutua kolmen ruudun ryhminä, ja värilohkot siirtyvät rivi riviltä sivusuunnassa. Ylemmät kuusi riviä ovat vielä värittämättä.](22%20Konstruktiot.assets/pohja.svg)

*Pohja väritykselle*

Huomataan, että tästä lähtien kunkin vaakarivin kolme punaista ruutua tulee laittaa niin, että yksi niistä on ruudukon vasemmassa, toinen keskimmäisessä ja kolmas oikeassa kolmanneksessa (ja vastaavasti myös siniselle ja vihreälle). Luonteva jatko on laittaa seuraavan vaakarivin punaiset ruudut jokaisen kolmanneksen ensimmäiseen ruutuun, seuraavalla vaakarivillä toiseen ruutuun ja sitä seuraavalla kolmansiin ruutuihin. Selkeyden vuoksi väritämme tästä eteenpäin vain punaiset ruudut: muut värit hoidetaan vastaavasti.

![Sama väritys jatkettuna ylöspäin niin, että seuraaville kolmelle riville on sijoitettu vain punaiset ruudut. Ne asettuvat kunkin kolmen ruudun ryhmän sisällä porrastetusti eri kohtiin, muut värit vielä puuttuen.](22%20Konstruktiot.assets/jatko.svg)

*Jatkoa väritykselle*

Ylimmille kolmelle vaakariville ei käytännössä ole vaihtoehtoja. Jos seuraavalla vaakarivillä yksi punainen ruutu on pystyrivillä $1$, tulee kahden muun olla pystyriveillä $5$ ja $9$ tai $6$ ja $8$. Nämä vaihtoehdot ovat melko samanlaisia toisiinsa nähden, joten valitaan vaikkapa ensimmäinen.

Enää ei ole vaikea keksiä, miten kaksi muuta vaakariviä tulee värittää (vaihtoehtoja ei tosiaankaan ole montaa). Tässä ratkaisu.

![Ruudukko, jossa kaikkien yhdeksän rivin punaiset ruudut on sijoitettu paikoilleen. Jokaisella pysty- ja vaakarivillä on täsmälleen kolme punaista ruutua, eivätkä ne muodosta kiellettyä suorakulmiota.](22%20Konstruktiot.assets/valmis.svg)

*Punaisten ruutujen väritys on valmis.*

Ja kuten todettiin, muut värit hoidetaan samalla tavalla.

![Valmis väritys, jossa myös vihreät ja siniset ruudut on lisätty punaisten tapaan. Jokaisella pysty- ja vaakarivillä on kolme kutakin väriä, eikä minkään kahden rivin ja kahden sarakkeen leikkaus ole yksivärinen.](22%20Konstruktiot.assets/kokonainen.svg)

*Kokonainen väritys*

**Kommentti.** Tarinan opetus on, että konstruktioita ei yleensä haeta ihan tyhjästä. Kohtuullisen helpotkin ideat, kuten ”värejä kannattaa käyttää yhtä paljon” ja ”tehdään symmetrinen väritys”, ovat toisaalta hyviä arvauksia ja toisaalta vähentävät eri mahdollisuuksia valtavasti.

<a id="exr-poly"></a>

**Tehtävä 22.2** Onko olemassa polynomia $P(x)$, jonka kertoimet ovat reaalilukuja ja jolla on seuraavat ominaisuudet?

1. Vähintään yksi polynomin $P(x)$ kertoimista on negatiivinen.
2. Kun $n$ on ykköstä suurempi kokonaisluku, polynomin $Q(x) = P(x)^n$ jokainen kerroin on positiivinen (tai nolla).

Huomataan, että jos (ii) pätee arvoilla $n = 2$ ja $n = 3$, niin se pätee kaikilla $n$. Esimerkiksi arvolla $n = 5$ väitteen saa tällöin siitä, että $P(x)^5 = P(x)^2P(x)^3$ on tulo kahdesta polynomista, joiden kertoimet ovat positiivisia, joten myös tulon kertoimet ovat positiivisia.

Lähdetään sitten etsimään tällaista polynomia. Tutkitaan pieniä tapauksia. $P(x)$ ei selvästikään voi olla vakiopolynomi.

Jos $P$ on ensimmäisen asteen polynomi $ax+b$, niin $$P(x)^2 = a^2x^2 + 2abx + b^2.$$ Koska polynomin $P(x)^2$ kertoimien pitää olla positiivisia ja termin $x$ kerroin on $2ab$, täytyy lukujen $a$ ja $b$ olla samanmerkkisiä. Jotta $P(x)$:llä on negatiivinen kerroin, tulee molempien olla negatiivisia. Mutta nyt polynomin $P(x)^3$ kertoimet ovat negatiivisia.

Ennen kuin edetään pidemmälle on hyvä huomata, että jos polynomin $P(x)$ korkeimman asteen termin kerroin on $s$ ja vakiotermi on $t$, niin polynomin $P(x)^3$ korkeimman asteen termin kerroin on $s^3$ ja vakiotermi on $t^3$. Täten näiden kertoimien tulee olla positiivisia.

Jos $P(x)$ on toisen asteen polynomi $P(x) = ax^2 + bx + c$, tulee edellisen nojalla lukujen $a$ ja $c$ olla positiivisia ja luvun $b$ negatiivinen. Nyt kuitenkin nähdään, että polynomin $P(x)^2$ termin $x^3$ kerroin on $2ab$ ja siten negatiivinen.

Jos $P(x)$ on kolmannen asteen polynomi $P(x) = ax^3 + bx^2 + cx + d$, niin taas lukujen $a$ ja $d$ tulee olla positiivisia. Jos $b$ on negatiivinen, on polynomin $P(x)^2$ termin $x^5$ kerroin $2ab$ ja siten negatiivinen. Jos $c$ on negatiivinen, on polynomin $P(x)^2$ termin $x$ kerroin $2cd$, mikä ei myöskään käy.

Vastaavalla idealla huomataan, että yleisesti polynomin $P(x)$ toiseksi korkeimman asteen termin ja termin $x$ kertoimien tulee olla positiivisia.

Entä jos $P(x)$ on neljännen asteen polynomi $ax^4 + bx^3 + cx^2 + dx + e$? Näistä kertoimien $a, b, d$ ja $e$ kertoimien tulee olla positiivisia ja $c$:n negatiivinen. Laskeminen alkaa mennä työlääksi. Huomataan kuitenkin, että tämä toimii, kunhan kertoimet valitsee sopivasti: esimerkiksi $$P(x) = x^4 + x^3 - \frac{1}{1000}x^2 + x + 1$$ kelpaa. Miksi? Kun polynomia $P(x) \cdot P(x)$ kerrotaan auki, aina, kun jonkin termin $x^k$ kertoimeen tulee negatiivisuutta polynomin $P(x)$ termin $-x^2/1000$ takia, tulee sinne myös positiivisuutta joistain muista termeistä. Summasta tulee positiivinen, koska kerroin $-1/1000$ on niin pieni. (Jos ei näe tätä muuten, voi tämän tarkistaa laskemalla.) Vastaavasti polynomin $P(x)^3$ kertoimet ovat positiivisia.

**Kommentti.** Ratkaisussa on pari tärkeää pointtia. Ensinnäkin ratkaisussa mietitään aktiivisesti kysymystä ”Mitä ominaisuuksia toimivalla konstruktiolla on?” Ihan aluksi tehtiin reduktio tapauksiin $n = 2$ ja $n = 3$, ja pikkuhiljaa todettiin, että tiettyjen polynomin $P(x)$ kertoimien tulee olla positiivisia. Aivan kuten ensimmäisessä tehtävässä ja sen ratkaisussa, tällaiset kohtalaisen helpot ideat rajaavat huomattavasti sitä, millaisia polynomeja lähdetään etsimään, ja konstruktion keksiminen onnistuu.

Toinen pointti: Joku voisi kokea epätoivoa sen jälkeen, kun on todettu, ettei mikään enintään kolmannen asteen polynomi toimi ja alkaa miettiä, ettei mikään polynomi kelpaa. On vaikea antaa yleispätevää ohjetta sille, missä kohtaa kannattaa kääntää suuntaa.

Tässä ongelmassa keksittiin aina melko helppo syy sille, mikseivät edelliset konstruktiot toimineet (”tuon ja tuon kertoimen tulee olla positiivisia”). Uskoi konstruktion olemassaoloon tai ei, on hyvä idea yrittää keksiä konstruktioita ja miettiä, mikä tarkalleen on syynä sille, että ne eivät toimi. Jos konstruktiota ei todella ole olemassa, tätä kautta voi selvittää miksi. Joskus kuitenkin voi käydä niin, että esteet konstruktion luomiselle loppuvat ja konstruktio löytyy, kuten kävi tässä tehtävässä.

<a id="exr-jono"></a>

**Tehtävä 22.3** Osoita, että on olemassa positiivisten kokonaislukujen jono $x_1, x_2, \ldots$, jolla on seuraava ominaisuus: jokaisella positiivisella kokonaisluvulla $k$ on olemassa täsmälleen yksi pari positiivisia kokonaislukuja $i$ ja $j$, joilla $x_i - x_j = k$.

Ratkaisun idea lyhyesti: Meillä on tolkuttomasti valinnanvaraa siinä, millaisen jonon luomme. Annettu ehto puolestaan ei ole kovin rajoittava. Rohkeasti ”tekemällä vaan” saadaan luotua halutunlainen jono.

Itse ratkaisuun. Muodostetaan jonolle alku vaikka seuraavasti: $$x_1 = 1, x_2 = 10, x_3 = 100, x_4 = 1000.$$ Lisätään sitten jonoon yksitellen lisää alkioita. Haluamme taata seuraavat kaksi asiaa:

1. Mitään lukua ei voida esittää yli yhdellä tavalla jonon alkioiden erotuksena.
2. Jokainen luku voidaan esittää jonon alkioiden erotuksena.

Nämä ehdot saadaan toteutettua lisäämällä jonoon seuraavalla logiikalla lisää lukuja:

Olkoon $m$ pienin positiivinen kokonaisluku, joka ei toistaiseksi ole minkään kahden jonon alkion erotus ja olkoon $M$ suurin luku, joka toistaiseksi esiintyy jonossa. Lisätään jonon perään hyvin iso luku, esimerkiksi $1000M$, ja sitten $1000M + m$.

Ajatus on, että nyt luku $m$ voidaan esittää kahden jonon alkion erotuksena: $(1000M + m) - 1000M = m$. Uudet luvut valittiin suuriksi sillä ajatuksella, ettei mitään muuta lukua voida esittää yli yhdellä tavalla jonon lukujen erotuksena. Tarkistetaan tämä.

Jos jonossa oli aiemmin luvut $x_1, x_2, \ldots, x_n$, niin uudet erotukset ovat $$1000M - x_1, 1000M - x_2, \ldots, 1000M - x_n$$ ja $$1000M + m - x_1, 1000M + m - x_2, \ldots, 1000M + m - x_n$$ sekä aiemmin mainittu $(1000M + m) - 1000M = m$.

Ensin huomataan, että mikä tahansa uusista erotuksista on suurempi kuin vanhat erotukset $x_i - x_j$ sekä $m$ (poislukien erotus $m$), koska $M$ on niin suuri. Riittää siis tarkistaa, ettei uusien erotusten joukossa ole kahta samaa. Selvästikään mitkään kaksi ensimmäisen rivin lukua eivät ole samoja, kuten eivät myöskään mitkään kaksi toisen rivin lukua. Myöskään $$1000M - x_i = 1000M + m - x_j$$ ei ole mahdollista, koska tästä seuraisi $$x_j - x_i = m,$$ mutta oletimme, että lukua $m$ ei voi esittää erotuksena tällä tavalla.

Toistamalla yllä esitettyä prosessia saadaan yksitellen varmistettua, että jokainen positiivinen kokonaisluku $m$ on kahden jonon luvun erotus varmistaen samalla, ettei mikään luku ole useammalla tavalla jonon lukujen erotus.

**Kommentti.** Luotu lukujono kasvaa hyvin nopeasti, eikä sille ole mitään nättiä kaavaa. Tätä ei kuitenkaan vaadittu. Toimiva konstruktio on toimiva konstruktio.

Ratkaisun idea on tärkeä: jos annetaan valinnanvapautta, niin sitä todella saa ja kannattaa käyttää. Ei ole mitään tarvetta yrittää tutkia ”kivoja” lukujonoja $x_1, x_2, \ldots$, vaan voimme luoda hyvinkin ”rumia” jonoja. (Tehtävään ei edes ole mitään kovin kivoja ratkaisuja.) Kuten ratkaisun alussa todettiin, jono saadaan ”tekemällä vaan”. Konstruktion toimivuuden tarkistaminen vaati hieman työtä, mutta isommilta ongelmilta vältyttiin valitsemalla uudet luvut hyvin suuriksi.

Harvoin tehtävissä on ihan niin paljon valinnanvaraa kuin tässä esimerkissä, mutta ajatus on hyvä pitää mielessä. Voinko ”tehdä vaan”? Jos en, miksi en? Jos kyllä, niin tekee vaan.

<a id="tehtäviä"></a>

## 22.3 Tehtäviä

**Tehtävä 1.** Onko olemassa kolme eri positiivista kokonaislukua, joista minkä tahansa kahden summa on neliöluku?

**Tehtävä 2.** Väritä $10 \times 10$ -ruudukko valkoisella ja mustalla niin, että millä tahansa ruudulla on tasan kaksi mustaa naapuria. (Naapuruus tarkoittaa yhteistä sivua.)

**Tehtävä 3.** Millä kokonaisluvuilla $n$ on olemassa $n$-kulmio, jonka mitä tahansa sivua kohden on olemassa toinen sivu, joka on yhdensuuntainen tämän sivun kanssa?

**Tehtävä 4.** Anna esimerkki kolmiosta, jonka kärkipisteiden koordinaatit ovat kokonaislukuja, pinta-ala on alle $1$ ja kunkin sivun pituus on yli $1$.

**Tehtävä 5.** Osoita, että on olemassa funktio $f: \mathbb{Z}_+ \to \mathbb{Z}_+$, jolla $$f(f(n)) = f(n)$$ ja $$f(n) \neq n$$ kaikilla positiivisilla kokonaisluvuilla $n$. (Tässä $\mathbb{Z}_+$ on positiivisten kokonaislukujen joukko.)

**Tehtävä 6.** Osoita, että yhtälöllä $a^3 + b^4 + c^5 = d^7$ on äärettömän monta ratkaisua positiivisissa kokonaisluvuissa.

**Tehtävä 7.** Olkoon $n$ positiivinen kokonaisluku. Olkoon $p(n)$ tapojen määrä osittaa joukon $\{1, 2, \ldots, n\}$ luvut osiin, kun osien järjestyksellä ei ole väliä.

Esimerkiksi $p(3) = 5$, koska joukko $\{1, 2, 3\}$ voidaan jakaa osiin viidellä tavalla:

- $\{1\}, \{2, 3\}$
- $\{2\}, \{1, 3\}$
- $\{3\}, \{1, 2\}$
- $\{1, 2, 3\}$
- $\{1\}, \{2\}, \{3\}$

Osoita, että kaikilla tarpeeksi suurilla $n$ pätee $p(n) > 100^n$.

---

原文：[https://kurssi.matematiikkakilpailut.fi/22_konstruktio.html](https://kurssi.matematiikkakilpailut.fi/22_konstruktio.html)
