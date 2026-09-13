---
title: "04 Algebrallinen manipulaatio"
source: "https://kurssi.matematiikkakilpailut.fi/04_algebrallinen_manipulaatio.html"
author: "Olli Järviniemi"
---

<a id="title-block-header"></a>

# 4 Algebrallinen manipulaatio

Tekijä

Olli Järviniemi

<a id="johdanto"></a>

## 4.1 Johdanto

Moni algebran tehtävä vaatii jonkin verran laskemista ja erilaisten lausekkeiden käsittelyä. Tavat, joilla lausekkeita manipuloidaan, eivät synny tyhjästä. Tässä tekstissä esitetään yleisimpiä menetelmiä ja ideoita sekä pari valikoitua esimerkkiä.

<a id="aukikertomista-ja-tekijöihinjakoa"></a>

## 4.2 Aukikertomista ja tekijöihinjakoa

Polynomien yhteen- ja kertolaskun oletetaan olevan lukijalle jossain määrin tuttuja.

Nostetaan erityisesti esiin polynomien kertolaskun ytimessä oleva ominaisuus $a(b+c) = ab + ac$.<a id="fnref1"></a>[^1](#fn1) Yleensä kaavaa käytetään **auki kertomiseen**: jos nähdään lauseke muotoa $a(b+c)$, kerrotaan se auki muotoon $ab + ac$. Tämä ei vaadi luovuutta, vaan ainoastaan rutiininomaista laskemista. Kun on hieman rutiinia, ei esimerkiksi ole kovin vaikeaa kertoa polynomia $(a+b)^2$ auki ja huomata, että

<a id="fn1"></a>

^1 Tämän ominaisuuden voi perustella seuraavasti: Jos minulla on $b+c$ kappaletta $a$ euron seteleitä, niin yhteensä minulla on $a(b+c)$ euroa. Toisaalta voin jakaa ne kahteen kasaan, joista toisessa on $b$ kappaletta ja toisessa $c$ kappaletta seteleitä. Ensimmäisessä kasassa on $ab$ euroa ja toisessa $ac$, joten yhteensä niissä on $ab + ac$ euroa. (Perustelu ei tosin oikein toimi, jos $b$ tai $c$ eivät ole kokonaislukuja, mutta ei mennä nyt siihen.)

 $$\begin{eqnarray} (a+b)^2 &=& (a+b)(a+b) \\ &=& a(a+b) + b(a+b) \\ &=& a^2 + ab + ba + b^2 \\ &=& a^2 + 2ab + b^2 \end{eqnarray}$$

Sen sijaan tilanteet, joissa ideaa käytetään toiseen suuntaan, vaativat muutakin kuin rutiininomaista laskemista. Tätä auki kertomisen vastakohtaa kutsutaan **tekijöihinjaoksi**. Tutkitaan esimerkiksi seuraavaa lauseketta: $$b^2 + cd + a^2 + c^2 + ab + cd + d^2 + ab.$$ Nopealla vilkaisulla tämä lauseke vaikuttaa vain satunnaiselta kasalta erinäisiä termejä summattuna yhteen. Jos kuitenkin pitää silmät auki, voi huomata että ryhmittelemällä termit uudelleen lauseke voidaan kirjoittaa muotoon $$a^2 + 2ab + b^2 + c^2 + 2cd + d^2.$$ Tämä puolestaan voidaan kirjoittaa yllä esitetyn muistikaavan nojalla muotoon $$(a+b)^2 + (c+d)^2.$$ Tämä on todennäköisesti paljon hyödyllisempi tapa kirjoittaa lauseke.

Tekijöihinjaon voi siis ajatella olevan vaikeampaa kuin auki kertominen. Ei tule kuitenkaan ajatella, että tekijöihinjako olisi ”tärkeämpää” kuin peruslaskut, vaikeita asioita kun ei voi tehdä ilman, että perusasiat ovat kunnossa. Usein esimerkiksi käy niin, että lauseke pitää aluksi kertoa auki (”hajottaa palasiksi”) ja sitten suorittaa tekijöihinjakoa (”koota yhteen”) niin, että saadaan erilainen (ja hyödyllisempi) esitystapa kuin aluksi.

<a id="yleisimpiä-tekijöihinjakoja"></a>

## 4.3 Yleisimpiä tekijöihinjakoja

**Binomin neliö.** Yllä esitettiin tekijöihinjako $$a^2 + 2ab + b^2 = (a + b)^2.$$ Vastaavasti saadaan perusteltua, että $$a^2 - 2ab + b^2 = (a-b)^2.$$

**Neliöiden erotus.** Helppo lasku antaa, että $$x^2 - y^2 = (x-y)(x+y).$$

**Potenssien erotus.** Edellistä esimerkkiä jatkaen $n$:nsien potenssien erotus $x^n - y^n$ jakautuu tekijöihin, joista yksi termi on $x-y$. Esimerkiksi $$x^3 - y^3 = (x-y)(x^2 + xy + y^2),$$ $$x^5 - y^5 = (x-y)(x^4 + x^3y + x^2y^2 + xy^3 + y^4),$$ ja yleisesti $$x^n - y^n = (x-y)(x^{n-1} + x^{n-2}y + \ldots + xy^{n-2} + y^{n-1}).$$ On kuitenkin mahdollista, että tekijöihinjakoa voi vielä jatkaa. Esimerkiksi tapauksessa $n = 4$ lausekkeen $x^4 - y^4$ voi jakaa kolmen tekijän tuloksi käyttämällä neliöiden erotusta kahdesti: $$x^4 - y^4 = (x^2 - y^2)(x^2 + y^2) = (x-y)(x+y)(x^2 + y^2).$$

**Potenssien summa.** Huomataan, että jos $n$ on pariton, niin $x^n + y^n = x^n - (-y)^n$. Täten $x^n + y^n$ voidaan jakaa tekijöihin käyttämällä yllä esitettyjä tekijöihinjakoja. Esimerkiksi $$\begin{eqnarray} x^3 + y^3 &=& x^3 - (-y)^3 \\ &=& (x - (-y))(x^2 + x(-y) + (-y)^2)\\ &=& (x+y)(x^2 - xy + y^2). \end{eqnarray}$$

**Polynomien nollakohdat.** Jos $P(x)$ on polynomi, jolla on nollakohta $a$, niin $P(x)$ voidaan jakaa tekijöihin, joista yksi tekijä on $x-a$. Tutkitaan esimerkiksi polynomia $P(x) = 3x^3 - x - 2$. Sillä on nollakohtanaan $a = 1$. Voidaankin kirjoittaa $$3x^3 + x - 2 = (x-1)(3x^2 + 3x + 2).$$ (Tätä ns. polynomien jakoyhtälöä käsitellään tarkemmin polynomeja käsittelevissä teksteissä.)

**Harjoitustehtävä.** Jos ihmettelet jotakin esitettyä tekijöihinjakoa, varmista yhtälön paikkansapitävyys auki kertomalla.

<a id="esimerkkitehtäviä"></a>

## 4.4 Esimerkkitehtäviä

<a id="exr-a3b3"></a>

**Tehtävä 4.1** Lukujen $a$ ja $b$ summa $a+b$ on $3$ ja tulo $ab$ on $1$. Mitä on $a^3 + b^3$?

Luonteva idea on yrittää ensiksi ratkaista $a$ ja $b$ annetuista yhtälöistä $a+b = 3$ ja $ab = 1$ ja sitten laskea $a^3 + b^3$. Tämä on mahdollista, mutta se on aika vaikeaa ja työlästä.<a id="fnref2"></a>[^2](#fn2)

<a id="fn2"></a>

^2 Tämän voi nähdä siitä, että ensimmäisestä yhtälöstä saadaan $b = 3-a$, ja sijoittamalla tämä yhtälöön $ab = 1$ saadaan toisen asteen yhtälö luvulle $a$. Mutta lausekkeet ovat ikävän näköisiä, joten olisi työlästä laskea $a^3$ ja $b^3$ ja summata ne yhteen.

Yritetään sen sijaan rakentaa erilaisia lausekkeita käyttämällä tietoa luvuista $a+b$ ja $ab$. Huomataan esimerkiksi, että neliöimällä yhtälö $a+b = 3$ saadaan $$(a+b)^2 = 9,$$ eli $$a^2 + 2ab + b^2 = 9.$$ Tiedämme lausekkeen keskellä olevan termin $2ab$ arvon: se on $2 \cdot 1 = 2$. Saadaan $$a^2 + b^2 = 9 - 2 = 7.$$ Nyt siis tiedämme lukujen $a+b$ ja $ab$ lisäksi myös luvun $a^2 + b^2$ arvon. Edistystä!

Harmi kyllä tehtävässä kysyttiin, paljonko on $a^3 + b^3$, ei $a^2 + b^2$. Voidaan kuitenkin yrittää rakentaa lisää lausekkeita nykyisistä. Miten saamme muodostettua lausekkeen $a^3 + b^3$? Tähän on parikin tapaa. Yksi tapa on tutkia lauseketta $(a^2 + b^2)(a+b)$. Pätee siis $$(a^2 + b^2)(a+b) = 7 \cdot 3 = 21.$$ Kertomalla vasen puoli auki saadaan $$a^3 + a^2b + ab^2 + b^3 = 21.$$ Haluttu lauseke $a^3 + b^3$ löytyy vasemmalta puolelta, mutta lisäksi sieltä löytyy termit $a^2b + ab^2$. Kuinka suuri se on? Käyttämällä tekijöihinjakoa huomataan, että $$a^2b + ab^2 = ab(a+b) = 1 \cdot 3 = 3.$$ Täten $$a^3 + b^3 = 21 - 3 = 18,$$ eli vastaus tehtävään on $18$.

 Kommentti

Lausekkeen $a^3 + b^3$ olisi saanut muodostettua myös toisella tavalla korottamalla yhtälö $a+b = 3$ kolmanteen potenssiin ja sieventämällä yhtälöä $(a+b)^3 = 3^3$. Tästä kuitenkin päädyttäisiin vastaavanlaiseen ratkaisuun kuin yllä.

Seuraava tehtävä on hieman vaikeampi.

<a id="exr-abc-aritm-jono"></a>

**Tehtävä 4.2** Luvuilla $a, b$ ja $c$ pätee $$(2b-a)^2 + (2 b-c)^2 = 2(2b^2 - ac).$$ Osoita, että $a, b$ ja $c$ muodostavat aritmeettisen lukujonon.

(Aritmeettinen lukujono on lukujono, jossa peräkkäisten jäsenten erotus on vakio. Esimerkiksi jono $5, 8, 11, 14$ on aritmeettinen lukujono, koska seuraava luku on aina kolme suurempi kuin edellinen.)

Kolmen luvun tapauksessa lukujono on aritmeettinen, jos keskimmäinen luku on kahden muun keskiarvo. Haluamme siis todistaa, että $$b = \frac{a+c}{2}.$$ Annetusta yhtälöstä ei tunnu olevan sellaisenaan apua tämän yhtälön todistamiseksi (sehän tehtävän vaikeus onkin). Yritetään kirjoittaa se johonkin kätevämpään muotoon. Kerrotaan siis annetun yhtälön molemmat puolet auki. Esimerkiksi $$\begin{eqnarray} (2b-a)^2 &=& (2b-a)(2b-a) \\ &=& 4b^2 - 2ab - 2ab + a^2 \\ &=& 4b^2 - 4ab + a^2, \end{eqnarray}$$ ja vastaavasti $$(2b-c)^2 = 4b^2 - 4bc + c^2,$$ joiden avulla saadaan kerrottua auki vasen puoli. Oikea puoli on helppo kertoa auki. Saadaan siis yhtälö $$4b^2 - 4ab + a^2 + 4b^2 - 4bc + c^2 = 4b^2 - 2ac.$$ On luontevaa siirtää kaikki termit samalle puolelle yhtälöä. Tehdään tämä ja sievennetään: $$4b^2 - 4ab - 4bc + a^2 + c^2 + 2ac = 0.$$ Nyt tarvitaan hoksottimia. Huomataan tekijöihinjako: $$4b^2 - 4ab - 4bc + (a+c)^2 = 0.$$ Seuraava askel on vaikein. Auttaa muistaa, että haluamme todistaa, että $b = (a+c)/2$ eli $2b = a+c$. Tämän avulla huomataan, että yhtälössä on oikeastaan edelleen mahdollisuus tekijöihinjakoon. Yhtälön voi nimittäin kirjoittaa muotoon $$(2b)^2 - 2 \cdot (2b) \cdot (a+c) + (a+c)^2 = 0,$$ eli binomin neliöllä $$(2b - (a+c))^2 = 0.$$ Luvun neliö on nolla vain jos luku itse on nolla, eli saamme $2b - (a+c) = 0$ eli $b = (a+c)/2$, mikä oli todistettavana.

 Kommentti

Ratkaisun voi tiivistää yhteen virkkeeseen: annettu yhtälö voidaan kirjoittaa uudelleen muotoon $(2b - (a+c))^2 = 0$, mistä väite seuraa. Kävipä tuuri, että vain kirjoittamalla yhtälön eri muotoon saatiin suoraan haluttu väite!

Ei, kyseessä ei ole tuuri.

Näin on tavallaan pakko käydä, jotta tehtävänannon väite pitäisi paikkansa. Yhtälöiden välillä pitää tietysti olla jokin yhteys: ei minkä tahansa yhtälön ratkaisut ole myös yhtälön $2b = a+c$ ratkaisuja. On oikeastaan aika vaikea keksiä tällaisia yhtälöitä. Tehtävässä nähty $(2b - (a+c))^2 = 0$ on yksi esimerkki. Toinen hieman erilainen esimerkki on $(a^2 + 1)(2b - (a+c)) = 0$, jossa ensimmäinen tulontekijä ei koskaan ole $0$ (koska minkä tahansa reaaliluvun neliö on vähintään nolla). Mutta kaikissa näissä esimerkeissä yksi tulontekijä on $2b - (a+c)$ ja on selvää, että yhtälön ratkaisut ovat myös yhtälön $2b = a + c$ ratkaisuja.

Tehtävän opetus on siis se, että aluksi hieman yllättävissä tuloksissa voi lopulta olla kyse jostain ”ilmiselvästä”, mikä paljastuu tekemällä sopivat algebralliset manipulaatiot.

<a id="tehtäviä"></a>

## 4.5 Tehtäviä

Alla on muutama tehtävä, jotka käsittelevät suoraan algebrallista manipulaatiota. Tietysti koska kyseessä on perustaito, tarvitaan sitä myös lukemattomia kertoja myöhemmissä tehtävissä ja kisoissa.

**Tehtävä 1.** Luvuista $a$ ja $b$ tiedetään, että $a + b = 3$ ja $ab = 1$. Paljonko on $\frac{a}{b} + \frac{b}{a}$?

**Tehtävä 2.** Luvuista $a, b$ ja $c$ tiedetään, että $a+b+c = 3$ ja $ab + bc + ca = 2$. Paljonko on $a^2 + b^2 + c^2$?

**Tehtävä 3.** Osoita, että jos $a$ ja $b$ ovat positiivisia kokonaislukuja, niin $$\frac{a^2 - b^2 + 2a + 1}{a + b + 1}$$ on kokonaisluku.

**Tehtävä 4.** Osoita, että $\sqrt{7 + 4\sqrt{3}} - \sqrt{3}$ on kokonaisluku.

**Tehtävä 5.** Positiiviset kokonaisluvut $a$ ja $b$ ovat sellaisia, että $\sqrt{a} + \sqrt{b}$ on kokonaisluku. Osoita, että $\sqrt{a}$ ja $\sqrt{b}$ ovat kokonaislukuja.

**Tehtävä 6.** Olkoon $x > 0$ sellainen luku, että $x + \frac{1}{x}$ on kokonaisluku. Osoita, että myös $x^{10} + \frac{1}{x^{10}}$ on kokonaisluku.

---

原文：[https://kurssi.matematiikkakilpailut.fi/04_algebrallinen_manipulaatio.html](https://kurssi.matematiikkakilpailut.fi/04_algebrallinen_manipulaatio.html)
