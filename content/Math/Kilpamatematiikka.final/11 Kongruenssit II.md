---
title: "11 Kongruenssit II"
source: "https://kurssi.matematiikkakilpailut.fi/11_kongruenssit_II.html"
author: "Olli Järviniemi"
---

<a id="title-block-header"></a>

# 11 Kongruenssit II

Tekijä

Olli Järviniemi

<a id="johdanto"></a>

## 11.1 Johdanto

Tässä tekstissä jatketaan kongruenssien käsittelyä.

<a id="laskusääntöjen-todistukset"></a>

## 11.2 Laskusääntöjen todistukset

Palautetaan mieleen seuraava lause.

<a id="thm-kongr-perus"></a>

**Lause 11.1 (Kongruenssien peruslaskutoimitukset)** Olkoot $a, b, c, d$ ja $m$ kokonaislukuja ($m \ge 1$). Oletetaan, että pätee $$a \equiv b \pmod{m} \qquad \text{ja} \qquad c \equiv d \pmod{m}.$$ Tällöin pätee $$a + c \equiv b + d \pmod{m}, \qquad a - c \equiv b - d \pmod{m} \qquad \text{ja} \qquad ac \equiv bd \pmod{m}.$$

Kuten jo todettiin, lauseen pointti on, että kongruenssiyhtälöitä voi käsitellä pitkälti kuten tavallisia yhtälöitä.

Aiemmassa tekstissä esitettiin kansantajuiset selitykset sille, miksi väitteen pitäisi päteä (tutkimalla allekkain yhteen- ja kertolaskua). Alla annetaan formaali todistus. Todistuksen ideat eivät ole kovin erityisiä, vaan tämän voi ottaa harjoituksena matemaattisesta todistamisesta.

Aloitetaan lähtien jaollisuudesta, jonka idea on varmasti lukijalle tuttu. Tässä on tarkka määritelmä.

<a id="def-jaollisuus"></a>

**Määritelmä 11.1** Jos $a$ ja $b$ ovat kokonaislukuja ($a \ge 1$), niin sanotaan, että $b$ on **jaollinen** luvulla $a$ tai että $a$ **jakaa** luvun $b$, jos $\frac{b}{a}$ on kokonaisluku. Tällöin merkitään $a \mid b$.

Tästä saadaan pari hyödyllistä jaollisuuden laskusääntöä. Nämäkin lienevät lukijalle ainakin periaatteina tuttuja: on esimerkiksi melko selvää, että jos $a$ jakaa kaksi lukua $b$ ja $c$, niin $a$ jakaa myös niiden summan $a+b$.

<a id="lem-jaollisuus1"></a>

**Apulause 11.1** Olkoot $a, b$ ja $c$ kokonaislukuja ($a \ge 1$). Oletetaan, että $a \mid b$.

1. Jos myös $a \mid c$, niin $a \mid b + c$.
2. Jos myös $a \mid c$, niin $a \mid b - c$.
3. Pätee $a \mid bc$.

Todistetaan väitteet:

1. Koska $\frac{b}{a}$ ja $\frac{c}{a}$ ovat kokonaislukuja, niin myös $\frac{b+c}{a} = \frac{b}{a} + \frac{c}{a}$ on kokonaislukujen summana kokonaisluku, eli $a \mid b+c$
2. Koska $\frac{b}{a}$ ja $\frac{c}{a}$ ovat kokonaislukuja, niin myös $\frac{b+c}{a} = \frac{b}{a} - \frac{c}{a}$ on kokonaislukujen erotuksena kokonaisluku, eli $a \mid b-c$
3. Koska $\frac{b}{a}$ on kokonaisluku, myös $\frac{bc}{a} = c \cdot \frac{b}{a}$ on kokonaislukujen tulona kokonaisluku, eli $a \mid bc$.

Kongruenssin määritelmä puolestaan oli, että $a \equiv b \pmod{m}$ jos $m \mid a - b$.

Todistetaan sitten lause. Lauseessa on kolme osaa, joten todistuksessakin on kolme osaa.

**Yhtälöiden summaaminen.** Oletetaan, että $a \equiv b \pmod{m}$ ja $c \equiv d \pmod{m}$ eli että $m \mid a - b$ ja $m \mid c - d$. Jaollisuuden laskusääntöjen kohdan (i) nojalla nyt pätee $$m \mid (a-b) + (c-d) = (a + c) - (b + d),$$ eli $a+c \equiv b + d \pmod{m}$.

**Yhtälöiden vähentäminen.** Edetään kuten yllä, mutta käytetäänkin jaollisuuden laskusääntöjen kohtaa (ii): $$m \mid (a-b) - (c-d) = (a-c) - (b-d),$$ eli $a-c \equiv b-d \pmod{m}$.

**Yhtälöiden kertominen.** Tämä on vaikein osuus. Osoitetaan ensiksi, että $ac \equiv ad \pmod{m}$ ja sitten, että $ad \equiv bd \pmod{m}$. Yhdistämällä nämä kaksi saadaan haluttu väite.

Tuumasta toimeen. Tiedämme, että $m \mid c - d$, joten jaollisuuden laskusääntöjen kohdan (iii) nojalla pätee myös $$m \mid a(c - d) = ac - ad,$$ eli $ac \equiv ad \pmod{m}$.

Vastaavasti todetaan, että koska $m \mid a-b$, niin taas laskusäännöllä (iii) saadaan $$m \mid d(a-b) = ad - bd,$$ eli $ad \equiv bd \pmod{m}$.

Kuulostaa järkeenkäyvältä, että yhtälöistä $x \equiv y \pmod{m}$ ja $y \equiv z \pmod{m}$ saadaan $x \equiv z \pmod{m}$. Näin onkin: jos $m \mid x-y$ ja $m \mid y - z$, niin $$m \mid (x-y) + (y-z) = x - z,$$ eli $x \equiv z \pmod{m}$. Soveltamalla tätä yllä saatuihin yhtälöihin $ac \equiv ad \pmod{m}$ ja $ad \equiv bd \pmod{m}$ saadaan $ac \equiv bd \pmod{m}$, mikä on haluttu väite.

<a id="polynomit-kongruensseissa"></a>

## 11.3 Polynomit kongruensseissa

Seuraava lause toimii taas yhtenä esimerkkinä siitä, että kongruenssiyhtälöitä voi käsitellä kuten tavallisia yhtälöitä.

<a id="thm-polymod"></a>

**Lause 11.2 (Polynomit kongruensseissa)** Olkoon $P$ polynomi, jonka kertoimet ovat kokonaislukuja. Olkoot $a, b$ ja $m$ kokonaislukuja ($m \ge 1$). Oletetaan, että $a \equiv b \pmod{m}$. Tällöin $$P(a) \equiv P(b) \pmod{m}.$$

Tässä lauseessa ei oikeastaan ole paljoa uutta. Idea on vain soveltaa toistuvasti eri kongruenssien laskusääntöjä.

Olemme nimittäin jo aiemmin todenneet, että kongruenssiyhtälön voi korottaa puolittain johonkin (positiiviseen kokonaisluku)potenssiin: jos pätee $a \equiv b \pmod{m}$, niin pätee myös $$a^2 \equiv b^2 \pmod{m},$$ $$a^3 \equiv b^3 \pmod{m},$$ $$a^4 \equiv b^4 \pmod{m}$$ ja niin edelleen.<a id="fnref1"></a>[^1](#fn1)

<a id="fn1"></a>

^1 Perustelimme tämän aiemmin niin, että kerromme toistuvasti nykyisen kongruenssiyhtälön yhtälöllä $a \equiv b \pmod{m}$. Toinen tapa: Käytetään [Algebrallinen manipulaatio](04%20Algebrallinen%20manipulaatio.md) -tekstistä tuttua tekijöihinjakoa $a^n - b^n = (a-b)(a^{n-1} + a^{n-2}b + \ldots + ab^{n-2} + b^{n-1})$. Oletuksen $a \equiv b \pmod{m}$ nojalla yhtälön oikea puoli on jaollinen luvulla $m$, joten myös vasen puoli on.

Voimme kertoa näitä yhtälöitä puolittain joillain kokonaisluvuilla, koska jos $m \mid a^n - b^n$, niin $m \mid ca^n - cb^n$ millä tahansa kokonaisluvulla $c$ jaollisuussäännön (iii) nojalla. Lisäksi voimme summata näin saatuja yhtälöitä. Tätä kautta voidaan ”rakentaa” mikä tahansa polynomi.

Esimerkki: Tutkitaan vaikkapa tapausta $P(x) = x^5 - 7x^3 + 2x^2 + 5$. Osoitetaan, että jos $a \equiv b \pmod{m}$, niin $P(a) \equiv P(b) \pmod{m}$. Tutkitaan seuraavia yhtälöitä: $$5 \equiv 5 \pmod{m},$$ $$a^2 \equiv b^2 \pmod{m},$$ $$a^3 \equiv b^3 \pmod{m},$$ $$a^5 \equiv b^5 \pmod{m}.$$ Kerrotaan toinen yhtälö puolittain kahdella ja kolmas yhtälö puolittain luvulla $-7$. Summataan sitten nämä neljä yhtälöä. Saadaan $$5 + 2a^2 - 7a^3 + a^5 \equiv 5 + 2b^2 - 7b^3 + b^5 \pmod{m},$$ mikä on juurikin haluttu yhtälö $$P(a) \equiv P(b) \pmod{m}.$$

<a id="potenssit-kongruensseissa"></a>

## 11.4 Potenssit kongruensseissa

Aiemmassa kongruensseja käsittelevässä tekstissä huomattiin säännönmukaisuus tutkittaessa seiskan potenssien viimeisiä numeroita: ne ovat $7, 9, 3, 1, 7, 9, 3, 1, 7, 9, 3, 1, \ldots$ Vastaavanlainen ilmiö tapahtuu millä tahansa kantaluvulla ja millä tahansa modulolla, ei pelkästään seiskan potensseilla modulo kymmenen.

Mietitään yleistä tilannetta, jossa tutkimme luvun $a$ potensseja modulo $m$. Avainidea: seuraavan potenssin $a^{n+1}$ arvo modulo $m$ riippuu vain siitä, mitä $a$ ja $a^n$ ovat modulo $m$. Tämä on jälleen kerran esimerkkisovellus kongruenssien laskutoimituksille. Siis lukujen $a, a^2, a^3, \ldots$ jakojäännökset $m$:llä jaettaessa muodostavat lukujonon, jossa seuraava luku riippuu vain edellisestä luvusta.

Tilannetta voi tulkita halutessaan myös visuaalisesti. Alla on tutkittu luvun $2$ potensseja luvulla $7$ jaettaessa.

![Vaakarivissä ympyröidyt luvut nollasta kuuteen. Kustakin luvusta lähtee nuoli sen kaksinkertaiseen arvoon modulo 7. Luvusta 0 nuoli osoittaa takaisin itseensä. Luvut 1, 2 ja 4 muodostavat nuolilla renkaan reittiä 1, 2, 4 ja takaisin 1, ja luvut 3, 6 ja 5 toisen renkaan reittiä 3, 6, 5 ja takaisin 3.](11 Kongruenssit II.assets/potenssit.svg)

*Luvusta $x \pmod{7}$ on piirretty nuoli lukuun $2x \pmod{7}$.*

Jos nykyinen kakkosen potenssi on esimerkiksi $4 \pmod{7}$, on seuraava kakkosen potenssi nuolen osoittama luku $1 \pmod{7}$.

Tutkimme potenssiinkorotuksen ominaisuuksia moduloissa lisää myöhemmin. Tässä on koottuna jonkin verran tähänastisia tuloksia sekä hieman esimakua tulevasta.

<a id="thm-potmod"></a>

**Lause 11.3 (Potenssit kongruensseissa)** Olkoot $a$ ja $m$ kokonaislukuja ($m \ge 1$). Tällöin

1. Lukujono $a^0, a^1, a^2, a^3, a^4, \ldots$ tutkittuna modulo $m$ on jostain pisteestä lähtien jaksollinen.
2. Jos lukujen $a$ ja $m$ suurin yhteinen tekijä on $1$, niin kohdan (i) jono on jaksollinen heti alusta lähtien.
3. Jos $m = p$ on alkuluku ja $a$ ei ole jaollinen $p$:llä, niin $$a^{p-1} \equiv 1 \pmod{p}.$$

Kohdan (i) tulos on kohtuullisen selvä: koska seuraava luku riippuu vain edellisestä (ja luvusta $a$) ja lukuja modulo $m$ on vain $m$ kappaletta, tulee jossain kohtaa lukujen alkaa toistaa itseään.

Kohta (ii) kertoo siitä, missä tilanteissa lukujono palaa alkuun. Jos tutkitaan esimerkiksi luvun $a = 2$ potensseja modulo $m = 24$ aloittaen luvusta $2^0$, ovat jakojäännökset $$1, 2, 4, 8, 16, 8, 16, 8, 16, \ldots$$ Alussa esiintyy luvut $1, 2, 4$, mutta niihin ei enää koskaan palata. Syynä on se, että luvuilla $a$ ja $m$ on yhteinen tekijä $2$. Näin ei voi käydä suurimman yhteisen tekijän ollessa $1$.

Kohta (iii), joka tunnetaan **Fermat’n pienenä lauseena**, on yllättävin näistä kolmesta. Jos modulo on alkuluku, niin $p-1$ askeleen jälkeen olemme takaisin aloituspisteessä $1 \pmod{p}$, aloitimme mistä luvusta hyvänsä (kunhan luku ei ole $0 \pmod{p}$). Saatamme olla aloituspisteessä jo aikaisemminkin: esimerkiksi jos $p = 7$ ja $a = 2$, palaamme alkuun jo kolmen askeleen jälkeen (kuva 1). Fermat’n pieni lause kuitenkin takaa, että tasan $p-1$ askeleen jälkeen olemme varmasti aloituspisteessä $1 \pmod{p}$.

Tämä ei ole selvää: miksei voisi olla esimerkiksi niin, että arvolla $p = 7$ jonkin luvun potenssit muodostavat viisi lukua pitkän lenkin, jolloin $p-1 = 6$ askeleen jälkeen ollaan aloituspisteen jälkeisessä luvussa? Jostakin syystä tämä ei ole mahdollista. Fermat’n pieni lause siis kertoo yllättävää informaatiota siitä, miltä lukujen potenssit voivat näyttää modulo $p$ — ei pelkästään tapauksessa $p = 7$, vaan yleisesti kaikilla alkuluvuilla. (Fermat’n pienestä lauseesta on myös versio muillekin kuin alkulukumoduloille, mutta se on hieman teknisempi.)

<a id="tehtäviä"></a>

## 11.5 Tehtäviä

**Tehtävä 1.** Mikä on suurin positiivinen kokonaisluku $n$, jolla $n+5 \mid n(n+1)(n+2)(n+3)(n+4)$?

**Tehtävä 2.** Mikä on luvun $9^{8^7}$ jakojäännös luvulla $7$ jaettaessa?

**Tehtävä 3.** Kokonaislukukertoimisella polynomilla $P(x)$ pätee $P(0) = 0, P(1) = 1$ ja $P(2) = 4$. Osoita, että yhtälöllä $P(x) = -1$ ei ole kokonaislukuratkaisuja.

**Tehtävä 4.** Osoita, että $2^n + 3^n$ ei ole neliöluku, kun $n$ on positiivinen kokonaisluku.

**Tehtävä 5.** Olkoon $n$ on positiivinen kokonaisluku. Osoita, että luvun $47^n - 14$ pienin alkutekijä on alle $15$.

**Tehtävä 6.** Tutkitaan jonoa $1^1, 2^2, 3^3, 4^4, \ldots$ modulo $5$. Onko lukujono jaksollinen?

---

原文：[https://kurssi.matematiikkakilpailut.fi/11_kongruenssit_II.html](https://kurssi.matematiikkakilpailut.fi/11_kongruenssit_II.html)
