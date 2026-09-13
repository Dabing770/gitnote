---
title: "16 Arviointia ja epäyhtälöitä"
source: "https://kurssi.matematiikkakilpailut.fi/16_arviointi.html"
author: "Olli Järviniemi"
---

<a id="title-block-header"></a>

# 16 Arviointia ja epäyhtälöitä

Tekijä

Olli Järviniemi

<a id="johdanto"></a>

## 16.1 Johdanto

Erilaisiin arviointeihin ja epäyhtälöihin perustuvia tehtäviä on runsaasti, ja vielä useammassa tehtävässä nämä menetelmät esiintyvät välivaiheina.

Näitä aiheita käsitellään parissa muussakin tekstissä: [Polynomit](08%20Polynomit.md)-tekstissä kerrotaan yhden muuttujan polynomiepäyhtälöistä ja [Diofantoksen yhtälöt](15%20Diofantoksen%20yhtälöt.md) -tekstissä erilaiset arviot esitetään yhtenä työkaluna yhtälönratkaisuun.

Tässä tekstissä käsitellään epäyhtälöitä hieman erilaisesta näkökulmasta. Tutkitaan alla olevaa kahta esimerkkitehtävää.

<a id="exr-arv1"></a>

**Tehtävä 16.1** Osoita, että jos $a, b$ ja $c$ ovat reaalilukuja, niin pätee $$a^2 + b^2 + c^2 \ge ab + bc + ca.$$

<a id="exr-arv2"></a>

**Tehtävä 16.2** Osoita, että $$\frac{1}{1} + \frac{1}{2} + \frac{1}{3} + \ldots + \frac{1}{100} \le 6.$$

Molemmista erottaa selvästi, että kyseessä on epäyhtälötehtävä. Tehtävät kuitenkin vaativat hyvin erilaista otetta. Yksi selitys perustuu **yhtäsuuruustapauksiin**. On helppo nähdä, että ensimmäisen tehtävän epäyhtälössä yhtäsuuruus pätee silloin, kun $a = b = c$. Sen sijaan toisessa tehtävässä voisi kuvitella, että summa ei ole täsmälleen kuusi.

Tämä tarkoittaa, että toisessa epäyhtälössä on jonkin verran liikkumatilaa **karkeiden arvioiden**tekemiseen. Ensimmäisessä tehtävässä näin ei ole, vaan ratkaisu rakentuu muiden ideoiden ympärille (voidaan puhua**klassisista epäyhtälöistä**).

Tässä tekstissä tutkitaan epäyhtälöitä tämän vastakkainasettelun näkökulmasta. Käymme ensiksi läpi yllä esitetyt kahden eri ääripään tehtävät. Tämän jälkeen esitetään pari lisäesimerkkiä. Tuttuun tapaan lopusta löytyy taas tehtäviä.

<a id="karkeat-arviot"></a>

## 16.2 Karkeat arviot

<a id="exr-arv3"></a>

**Tehtävä 16.3** Osoita, että $$\frac{1}{1} + \frac{1}{2} + \frac{1}{3} + \ldots + \frac{1}{100} \le 6.$$

Kuten jo mainittiin, summa tuskin on tasan kuusi. Meillä on siis jonkin verran liikkumatilaa (mutta emme tiedä, kuinka paljon).

Idea on kasvattaa summan termejä niin, että summa on helpompi laskea. Esimerkki: $$\frac{1}{1} + \frac{1}{2} + \frac{1}{3} + \ldots + \frac{1}{100} \le 1 + 1 + 1 + \ldots + 1 = 100.$$ Tämä oli tietysti liiankin karkea arvio, onhan luku $100$ paljon suurempi kuin $6$. Yritetään toteuttaa sama idea niin, että kasvatamme summan termejä hillitymmin.

Erityisesti summan pienimpiä lukuja, kuten $1/100$, tuli kasvatettua turhan paljon. Yritetään siis arvioida häntäpään lukujen summaa tarkemmin. Voitaisiin esimerkiksi arvioida, että viimeisen kymmenen luvun summa on alle $$\frac{1}{91} + \frac{1}{92} + \ldots + \frac{1}{100} < \frac{1}{91} + \frac{1}{91} + \ldots + \frac{1}{91} = \frac{10}{91}.$$

Tämä on pienempi kuin $10/90 = 1/9$, eli saimme käsiteltyä summasta kymmenen termiä hintaan $1/9$. Tämä on hyvin pieni osuus annetusta ylärajasta $6$. Lisäksi yllä tehty arvio on melko tarkka – esimerkiksi $1/100$ ja $1/91$ ovat kohtalaisen lähellä toisiaan. Voimme siis olla tyytyväisiä arvioon $$\frac{1}{91} + \ldots + \frac{1}{100} < \frac{1}{9}.$$

Tekemällä saman tempun luvuille $81, \ldots, 90$ saadaan niitä vastaavien lukujen summaksi alle $1/8$. Luvuilla $71, \ldots, 80$ saadaan vastaavasti $1/7$, luvuilla $61, \ldots, 70$ saadaan $1/6$ ja niin edelleen, kunnes luvuilla $11, \ldots, 20$ saadaan $1/2$. Voisimme soveltaa ideaa vielä luvuille $1, \ldots, 10$, mutta tällöin arvio olisi liian karkea, joten tässä kohtaa pitää olla tarkempi.

Saamme siis arvioitua summan olevan alle <a id="eq-arv-1"></a> $$\frac{1}{1} + \frac{1}{2} + \frac{1}{3} + \ldots + \frac{1}{10} + \left(\frac{1}{2} + \frac{1}{3} + \ldots + \frac{1}{9}\right). \qquad(16.1)$$  Sovelletaan tähän samaa ideaa kuin aiemmin, ja arvioidaan esimerkiksi summan ensimmäistä osaa seuraavasti: $$\begin{aligned} &\ \frac{1}{1} + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \frac{1}{6} + \frac{1}{7} + \frac{1}{8} + \frac{1}{9} + \frac{1}{10} \\ < & \ \frac{1}{1} + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \frac{1}{5} + \frac{1}{5} + \frac{1}{5} + \frac{1}{5} + \frac{1}{5} \\ = &1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{6}{5} \\ = &2 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5}. \end{aligned}$$ Tälle voi vaikka laskea tarkan arvon, tai arvioida vielä kerran $$2 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} < 2 + \frac{1}{2} + \frac{1}{3} + \frac{1}{3} + \frac{1}{3} = 3{,}5.$$

Olemme saaneet arvioitua summan [16.1](#eq-arv-1) ensimmäisen osan olevan alle $3{,}5$. Toinen osa on sama kuin ensimmäinen osa, paitsi siitä puuttuu $1$ ja $1/10$, eli se on alle $3{,}5 - 1 - 1/10 = 2{,}4$. Yhteensä summa on siis alle $3{,}5 + 2{,}4 = 5{,}9 < 6$.

**Kommentti.** Tapoja arvioida summaa on tietysti monia. Toinen hyvä idea olisi ottaa summasta aina esimerkiksi jälkimmäinen puolikas luvuista ja arvioida niiden summaa. (Tätä kautta saa melko vähillä laskuilla summalle ylärajaksi noin $7$.)

Tarkalleen summa on noin $5{,}19$. Summalle ei ole mitään helppoa, yksinkertaista muotoa.

<a id="klassiset-epäyhtälöt"></a>

## 16.3 Klassiset epäyhtälöt

<a id="exr-arv4"></a>

**Tehtävä 16.4** Osoita, että jos $a, b$ ja $c$ ovat reaalilukuja, niin pätee $$a^2 + b^2 + c^2 \ge ab + bc + ca.$$

Tämä tehtävä on hyvin erilainen kuin edellinen: ei ole selvää, miltä ”karkeat arviot” näyttäisivät tässä tehtävässä. Lisäksi epäyhtälössä pätee yhtäsuuruus aina, kun $a = b = c$, mikä rajoittaa lähestymistapoja.

Ratkaisu perustuukin sen sijaan algebrallisiin identiteetteihin. Ainoa varsinainen epäyhtälö, jonka tarvitsemme, on **neliön epänegatiivisuus**: kaikilla reaaliluvuilla $x$ pätee<a id="fnref1"></a>[^1](#fn1) $$x^2 \ge 0$$

<a id="fn1"></a>

^1 Perustelu: Jos $x$ on positiivinen, niin positiivinen kertaa positiivinen on positiivinen, ja epäyhtälö pätee. Jos $x = 0$, epäyhtälö (ja yhtäsuuruus) pätee. Jos $x$ on negatiivinen, niin negatiivinen kertaa negatiivinen on positiivinen, ja epäyhtälö pätee.

Idea on kirjoittaa epäyhtälö sellaiseen muotoon, että väite seuraa neliön epänegatiivisuudella. Kirjoitetaan epäyhtälö siis muotoon $$a^2 + b^2 + c^2 - ab - bc - ca \ge 0,$$ ja yritetään kirjoittaa vasen puoli jonkin lausekkeen neliöksi.

Ikävä kyllä vaikka kuinka kokeilee ja yrittää, niin tämä ei tunnu onnistuvan. Muutetaan siis strategiaa. Yritetään kirjoittaa lauseke useamman lausekkeen neliöiden summana. Tämä onnistuukin, kun pitää tekijöihinjaot mielessä: $$a^2 + b^2 + c^2 - ab - bc - ca = \frac{1}{2}\left((a-b)^2 + (b-c)^2 + (c-a)^2\right).$$ Nyt väite seuraa neliön epänegatiivisuudesta.

<a id="lisää-esimerkkejä"></a>

## 16.4 Lisää esimerkkejä

<a id="exr-arv5"></a>

**Tehtävä 16.5** Etsi kaikki positiiviset kokonaisluvut, jotka ovat kaksi kertaa numeroidensa summa.

Heti huomataan, että luku ei voi olla yksinumeroinen. Mietitään sitten, voiko luku olla kaksinumeroinen. Olkoon $a$ luvun kymmenten paikalla oleva numero ja $b$ ykkösten paikalla oleva numero. Tällöin luku itse on $10a + b$ ja numeroiden summa on $a+b$, eli tutkittavana on yhtälö $$10a + b = 2(a+b),$$ mikä on sievennyksen jälkeen $$8a = b.$$ Koska $a$ ja $b$ ovat numeroita ja luku on kaksinumeroinen, pätee $1 \le a \le 9$ ja $0 \le b \le 9$. Ainoa ratkaisu on $a = 1$, $b = 8$. Huomataan siis, että $18$ kelpaa.

Voiko luku olla kolminumeroinen? Tutkittavaksi tulee yhtälö $$100a + 10b + c = 2(a+b+c).$$ Huomataan, että tällä yhtälöllä ei ole ratkaisuja. Syy on kokoluokissa: vasen puoli on vähintään $100$, mutta oikea puoli on enintään $2 \cdot (9 + 9 + 9) = 54$. Numeroiden summa on yksinkertaisesti liian pieni verrattuna lukuun itse.

Tuntuu järkevältä, ettei ratkaisuja myöskään löydy, jos luvussa on vähintään neljä numeroa. Esimerkiksi neljällä numerolla luku itse on vähintään $1000$ ja kaksi kertaa numeroiden summa on enintään $2 \cdot (9 + 9 + 9 + 9) = 72$.

Todistetaan yleisesti, ettei $k$-numeroisia ratkaisuja ole, jos $k \ge 3$. (Yllä on jo käsitelty tapaukset $k = 3$ ja $k = 4$.) Käytetään samoja ideoita kuin yllä: $k$-numeroinen luku on vähintään $10^{k-1}$ ja sen numeroiden summa on enintään $9k$. Riittää siis todistaa, että $$10^{k-1} \ge 18k.$$

Tämän voi todistaa induktiivisella päättelyllä. Kun lukua $k$ kasvatetaan yhdellä, vasen puoli kymmenkertaistuu ja oikea puoli kasvaa kahdeksallatoista. Kymmenkertaistuminen kasvattaa vasenta puolta vähintään sadalla<a id="fnref2"></a>[^2](#fn2), kun $k$ on vähintään kolme. Täten väite pätee aina yhtä isommalla $k$:n arvolla, joten väite pätee kaikilla $k$.

<a id="fn2"></a>

^2 Tämä on tietysti hyvin karkea arvio.

Näin ollen ainoa tehtävänannon ehdon täyttävä luku on $18$.

<a id="exr-arv6"></a>

**Tehtävä 16.6** Kolmen positiivisen luvun summa on $3$. Kuinka suuri niiden tulo voi enimmillään olla?

Kokeillaan joitakin kolmikoita:

- Valitaan $1, 1, 1$. Tulo on $1$.
- Valitaan $1.5, 1, 0.5$. Tulo on $0.75$.
- Valitaan $2, 0.5, 0.5$. Tulo on $0.5$.
- Valitaan $2.98, 0.01, 0.01$. Tulo on hyvin pieni.

Vaikuttaisi siltä, että isoin tulo saadaan silloin, kun kaikki luvut ovat $1$. Todistetaan tämä.

Mistä tämä johtuu? Tuntuu huonolta, että jokin luku on pieni: vaikka pienentämällä jotakin lukua saadaan kasvatettua jotakin toista lukua, tulo tuntuu pienentyvän.

Yritetään perustella tämä. Osoitetaan, että jos kaksi lukua korvaa niiden keskiarvolla, niin tulo kasvaa (paitsi jos kyseiset luvut olivat samat).

Lähdetään siis tilanteesta, jossa luvut ovat $a, b$ ja $c$ ja siirrytään tilanteeseen, jossa luvut ovat $\frac{a+b}{2}, \frac{a+b}{2}$ ja $c$. Todistetaan, että $$\frac{a+b}{2} \cdot \frac{a+b}{2} \cdot c \ge abc.$$ Jaetaan $c$ pois ja kerrotaan neljällä, jotta päästään nimittäjistä eroon. Haluttu epäyhtälö on sama kuin $$(a+b)(a+b) \ge 4ab.$$ Kertomalla vasen puoli auki saadaan $a^2 + 2ab + b^2$. Vähennetään puolittain $4ab$, jolloin saadaan $$a^2 - 2ab + b^2 \ge 0.$$ Käyttämällä tekijöihinjakoa vasen puoli on $(a-b)^2$, mikä selvästi on vähintään nolla. Siis tämä viimeinen epäyhtälö pätee. Yllä tehdyt operaatiot voidaan tehdä toiseenkin suuntaan, eli myös alkuperäinen epäyhtälö pätee.

Täten voimme toistuvasti kasvattaa lukujen tuloa ottamalla niistä kaksi ja korvaamalla ne niiden keskiarvolla. Ei ole vaikea nähdä, että kun tätä operaatiota tehdään monta kertaa, niin luvut lähestyvät ykköstä.

Intuitiivisesti tästä seuraa se, että suurimmillaan tulo on, kun kaikki luvut ovat $1$. Vedenpitävä todistus vaatii kuitenkin varovaisuutta. Oletetaan, että on olemassa jotkin kolme lukua $a, b$ ja $c$, joilla $a+b+c = 3$ ja $abc > 1$. Nyt korvaamalla luvut $a, b, c$ toistuvasti keskiarvoilla saadaan mielivaltaisen lähellä ykköstä olevat luvut, joiden summa on kolme ja tulo on suurempi kuin $abc$. Korvataan nyt nämä luvut ykkösillä. Koska luvut olivat ennen muutosta hyvin lähellä ykköstä, ei lukujen tulo juurikaan muutu, eli se olisi edelleen yli $1$.<a id="fnref3"></a>[^3](#fn3) Ristiriita.

<a id="fn3"></a>

^3 Lukiomatematiikkaa pitkälle opiskelleet saattavat tunnistaa, että tässä on kyse siitä, että jatkuvien funktioiden tulo on jatkuva.

Siis suurin mahdollinen tulo on $1$. Tämä saavutetaan, kun kaikki luvut ovat yksi.

<a id="tehtäviä"></a>

## 16.5 Tehtäviä

**Tehtävä 1.** Osoita, että millä tahansa positiivisilla reaaliluvuilla $a$ ja $b$ pätee $$\frac{a+b}{2} \ge \sqrt{ab}.$$ Osoita, että yhtäsuuruus pätee vain kun $a = b$.

(Tämä on kahden muuttujan **aritmeettis-geometrinen epäyhtälö**.)

**Tehtävä 2.** Osoita, että jos $a$ ja $b$ ovat positiivisia reaalilukuja, niin $$\frac{a}{b} + \frac{b}{a} \ge 2.$$

**Tehtävä 3.** Osoita, että jos $a, b, c$ ja $d$ ovat reaalilukuja, niin $$a^2 + b^2 + c^2 + d^2 + 1 \ge a + b + c + d.$$

**Tehtävä 4.** Ratkaise yhtälöryhmä $$\begin{cases} a = \frac{b^2 + 1}{2} \\ b = \frac{c^2 + 1}{2} \\ c = \frac{a^2 + 1}{2}, \end{cases}$$ missä $a, b$ ja $c$ ovat reaalilukuja.

**Tehtävä 5.** Liitutaululla on kirjoitettu jokin määrä joitakin positiivisia kokonaislukuja. Lukujen summa on $15$. Kuinka suuri lukujen tulo voi enimmillään olla?

**Tehtävä 6.** Järjestä seuraavat luvut pienimmästä suurimpaan. $$2^{3^{4^5}}, 10^{10}, 2^{30}, 4^{4^4}, 5^{4^{3^2}}, 5^{15}, 2^{2^{2^2}}.$$ (Muista, että potenssitornit lasketaan ylhäältä alaspäin, eli $a^{b^c} = a^{(b^c)}$.)

**Tehtävä 7.** Olkoon $n$ jokin suuri luku (esimerkiksi $n = 1000$). Järjestä seuraavat luvut pienimmästä suurimpaan. $$n^n, 2^{n^2}, (2^n)!, (n^2)!, 2^{n!}, n!, (2n)!, 2^n.$$

---

原文：[https://kurssi.matematiikkakilpailut.fi/16_arviointi.html](https://kurssi.matematiikkakilpailut.fi/16_arviointi.html)
