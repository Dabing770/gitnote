---
title: "08 Polynomit"
source: "https://kurssi.matematiikkakilpailut.fi/08_polynomit_I.html"
author: "Olli Järviniemi"
---

# 8  Polynomit

Tekijä

Olli Järviniemi

## 8.1 Johdanto

Polynomit esiintyvät hyvin usein algebran tehtävissä, joten niistä kannattaa olla hyvä ymmärrys. Tässä tekstissä esitetään pari keskeistä ideaa.

## 8.2 Jakolasku

Polynomien yhteen-, vähennys- ja kertolasku käsitellään jo yläkoulussa, ja näiden oletetaan olevan lukijalle tuttuja. Jakolaskusta puhutaan vähemmän, joten käsitellään sitä tässä.

Kokonaislukujen jakolasku on tuttu juttu. Jos esimerkiksi jaetaan luku $123$ luvulla $5$, voidaan jakaminen tehdä vaikkapa jakokulman avulla, ja saadaan $123 = 24 \cdot 5 + 3$. Jako ei mene tasan, vaan jakojäännökseksi tulee $3$. (Jakokulmalla saa halutessaan laskettua myös luvun $123/5$ desimaaleja: $123/5 = 24{,}6$.)

Samanlainen idea toimii myös polynomeilla ja polynomien jakolaskun voi myös toteuttaa jakokulman muunnellulla versiolla. Esitämme asian kuitenkin hieman toisella tavalla. Pohjustetaan asiaa tutkimalla ensin kokonaislukuja.

### 8.2.1 Kokonaislukujen jakolaskua

**Tehtävä.** Kuinka paljon on $1234$ jaettuna seitsemällä?

Vastauksen voi löytää kokeilemalla ja hiljalleen lähestymällä vastausta. Huomataan ensinnäkin, että vastaus on vähintään $100$, koska $100 \cdot 7 = 700 < 1234$. Toisaalta vastaus on alle $200$, koska $200 \cdot 7 = 1400 > 1234$. Vastaus on siis kolminumeroinen luku, jonka ensimmäinen numero on $1$.

Mikä sitten on luvun toinen numero? Huomataan, että sen pitää olla vähintään $5$, koska $150 \cdot 7 = 1050 < 1234$. Tarkennetaan hakua: koska $170 \cdot 7 = 1190 < 1234$, vastaus on yli $170$, mutta $180 \cdot 7 = 1260$ on jo yli $1234$. Toinen numero on siis $7$.

Mietitään sitten vielä kolmatta numeroa. Arvauksella $170$ luku $170 \cdot 7 = 1190$ on $44$ päässä luvusta $1234$, joten arvausta pitää kasvattaa vielä $44/7 \approx 6$ verran. Nyt huomataankin, että

$$176 \cdot 7 = 170 \cdot 7 + 6 \cdot 7 = 1190 + 42 = 1232.$$

 Täten $1234$ jaettuna seitsemällä on $176$ jakojäännöksellä $2$.

Lukija saattaa huomata, että yllä esitetty menetelmä on pohjimmiltaan suunnilleen sama kuin jakokulma. Yllä esitettyä arvailua on kuitenkin hieman helpompi ja nopeampi käyttää esimerkiksi päässälaskettaessa kuin jakokulmaa, vaikka helppoa se ei silti ole. (Samalla tulee pidettyä mielessä vastauksen kokoluokka, joka on usein arkitilanteissa tärkeintä: esimerkiksi arvio $1234/7 \approx 170$ voi olla monessa tilanteessa riittävä.)

### 8.2.2 Polynomien jakolasku

**Tehtävä.** Mitä on $2x^3 + 5x^2 - 7x + 3$ jaettuna polynomilla $x-2$?

Haemme siis sellaista polynomia, joka kerrottuna $x-2$:lla on $2x^3 + 5x^2 - 7x + 3$. Tulemme huomaamaan, että jako ei mene tasan (aivan kuten kokonaisluvuillakaan jako ei aina mene tasan), mutta ei välitetä tästä vielä.

Edetään kuten kokonaislukujen jakolaskussa. Ensinnäkin huomataan, että vastauspolynomin tulee olla toisen asteen polynomi, koska polynomin aste kasvaa yhdellä, kun se kerrotaan $x-2$:lla, ja polynomin $2x^3 + 5x^2 + 7x + 3$ aste on kolme. (Kokonaislukujen tapaukseen verrattuna tämä vastaa sitä, että tiedämme, kuinka monta numeroa vastauksessa on.)

Vastaus on siis muotoa $ax^2 + bx + c$. Mietitään seuraavaksi, mikä luvun $a$ tulee olla. (Vertaa: kokonaisluvuissa mietitään, mikä osamäärän ensimmäisen numeron tulee olla.) Kerroin $a$ valitaan niin, että kerrottaessa

$$(x-2)(ax^2 + bx + c)$$

 auki korkeimman asteen termin $x^3$ kerroin on sama kuin polynomissa $2x^3 + 5x^2 - 7x + 3$. Yllä olevassa kertolaskussa termin $x^3$ kertoimeksi tulee $a$, joten $a = 2$.

Mietitään sitten, mikä luvun $b$ tulee olla. (Vertaa: kokonaisluvuissa mietitään, mikä jakolaskun toisen numeron tulee olla.) Kerroin $b$ valitaan niin, että kerrottaessa auki tulo

$$(x-2)(2x^2 + bx + c)$$

 termin $x^2$ kerroin on sama kuin polynomissa $2x^3 + 5x^2 - 7x + 3$ eli $5$. Termi $x^2$ syntyy kahdella eri tavalla: tuloista $x \cdot bx$ ja $(-2) \cdot 2x^2$. Täten saamme yhtälön $b - 4 = 5$, mistä saadaan $b = 9$.

Mietitään vielä, mikä luvun $c$ tulee olla. Kerroin $c$ valitaan niin, että kerrottaessa auki tulo

$$(x-2)(2x^2 + 9x + c)$$

 taas yhtä pienempiasteisen termin $x$ kerroin saadaan oikein eli täsmäämään polynomin $2x^3 + 5x^2 - 7x + 3$ kertoimen $-7$ kanssa. Termiä $x$ syntyy kahdella eri tavalla: tuloista $x \cdot c$ ja $(-2) \cdot 9x$. Tästä saadaan yhtälö $c - 18 = -7$, eli $c = 11$.

Huomataan, että jako ei mene tasan: kerrottaessa $(x-2)(2x^2 + 9x + 11)$ auki vakiokertoimeksi tulee $(-2) \cdot 11 = -22$, mikä ei täsmää polynomin $2x^3 + 5x^2 - 7x + 3$ vakiotermin $3$ kanssa. Jakojäännökseksi tulee $3 - (-22) = 25$. Kaiken kaikkiaan

$$2x^3 + 5x^2 - 7x + 3 = (x-2)(2x^2 + 9x + 11) + 25.$$

 (Jos selitys tuntui vaikealta, kannattaa tarkistaa tämä kertomalla oikea puoli auki.)

### 8.2.3 Polynomien jakoyhtälö

Yleisesti menetelmä toimii samalla tavalla: valitaan kertoimia ensin korkeimman asteen termille ja jatketaan siitä pienempiasteisten termien kertoimiin. Tätä kautta saadaan jaettua mikä tahansa polynomi $A(x)$ polynomilla $B(x)$ niin, että jakojäännöksen aste on pienempi kuin jakajan $B(x)$. (Edellisessä esimerkissä jakojäännös $25$ on vakiopolynomi, joten sen aste on $0$, kun taas jakajan $x-2$ aste on $1$.)

Koska tämä on tärkeä tulos, kirjoitetaan se erikseen omaksi lauseekseen.

**

**Lause 8.1 (Polynomien jakoyhtälö)** Olkoot $A(x)$ ja $B(x)$ polynomeja (jotka eivät ole vakiopolynomeja). Tällöin on olemassa polynomit $Q(x)$ ja $R(x)$, joilla

$$A(x) = B(x)Q(x) + R(x)$$

 ja joilla polynomin $R(x)$ aste on pienempi kuin polynomin $B(x)$.

## 8.3 Kertoimet vs. nollakohdat

Polynomien määritelmä on tuttu: polynomit ovat muotoa

$$a_nx^n + a_{n-1}x^{n-1} + \ldots + a_1x + a_0$$

 olevia lausekkeita, missä $x$ on muuttuja ja $a_0, a_1, \ldots, a_n$ ovat polynomin **kertoimet**.

Polynomeja voi kuitenkin miettiä myös hyvin toisella tavalla niiden **nollakohtien** kautta. (Polynomin $P(x)$ nollakohtia ovat ne luvut $a$, joilla $P(a) = 0$.) Tarvitsemme hieman esitietoja. Aloitamme hyvin tärkeällä polynomien nollakohtia koskevalla tuloksella.

**

**Lause 8.2 (Algebran peruslause)** Olkoon $P(x)$ epävakio polynomi, jonka aste on $n$. Tällöin polynomilla $P(x)$ on $n$ nollakohtaa.

Jotkut nollakohdat voivat olla moninkertaisia. Esimerkiksi polynomilla $P(x) = (x + 3)(x - 2)^3$ on kolminkertainen nollakohta pisteessä $x = 2$ ja yksinkertainen nollakohta pisteessä $x = -3$, joten sillä ajatellaan olevan neljä nollakohtaa.[^1](08 Polynomit.md#fn1)

^1 Lisäksi jotkut nollakohdat voivat olla kompleksisia, kuten polynomin $P(x) = x^2 + 1$ tapauksessa. Emme kuitenkaan tässä käsittele kompleksilukuja.

Lauseen todistus vaatii paljon teoriaa, joten sitä ei esitetä tässä.

Algebran peruslauseen avulla saadaan polynomille esitys nollakohtien avulla.

**

**Lause 8.3 (Polynomin esitys nollakohtien avulla)** Olkoon $P(x)$ astetta $n$ oleva polynomi, eli $P(x) = a_nx^n + \ldots + a_1x + a_0$, missä $a_n \neq 0$. Jos $\alpha_1, \ldots, \alpha_n$ ovat polynomin $P(x)$ nollakohdat, niin $P(x)$ voidaan esittää tulomuodossa

$$P(x) = a_n(x - \alpha_1)(x - \alpha_2) \cdots (x - \alpha_n).$$

Otetaan esimerkki. Tutkitaan polynomia $P(x) = 3x^2 + 3x - 6$. Kokeilemalla huomataan, että $P(1) = 0$ ja $P(-2) = 0$. Tässä on kaksi nollakohtaa, ja algebran peruslauseen nojalla useampia ei ole. Yllä oleva lause väittää, että

$$P(x) = 3(x - 1)(x - (-2)),$$

 ja näin onkin: kertomalla auki $3(x-1)(x+2)$ todella saadaan $3x^2 + 3x - 6$.

Lauseen todistukseen palataan seuraavassa polynomeja käsittelevässä tekstissä, kun niistä on saatu enemmän tuntumaa. (Paljastetaan kuitenkin sen verran, että todistus perustuu vahvasti polynomien jakoyhtälöön.) Tulemme myös syventymään lisää lauseen seurauksiin.

## 8.4 Esimerkkitehtäviä

**

**Tehtävä 8.1** Ratkaise yhtälö

$$x^3 - 2x^2 - 3x + 6 = 0.$$

On hyvä idea kokeilla ensin, jos yhtälölle löytyisi jokin helppo ratkaisu. Huomataankin, että $x = 2$ toteuttaa yhtälön.

Avainidea on, että löytämällä yksi ratkaisu saadaan kolmannen asteen yhtälö muutettua toisen asteen yhtälöksi: Käytetään polynomien jakoyhtälöä polynomeille $x^3 - 2x^2 - 3x + 6$ ja $x-2$. Voidaan kirjoittaa

$$x^3 - 2x^2 - 3x + 6 = (x-2)Q(x) + R(x),$$

 missä polynomin $R(x)$ aste on pienempi kuin polynomin $x-2$. Siis $R(x)$ on vakiopolynomi. Toisaalta yhtälön vasen puoli on $0$ kun $x = 2$, ja samoin termi $(x-2)Q(x)$ on tällöin nolla. Täten $R(2) = 0$, eli $R$ on nollapolynomi. Toisin sanoen jako menee tasan!

Yhtälö

$$x^3 - 2x^2 - 3x + 6 = 0$$

 voidaan täten kirjoittaa muotoon

$$(x-2)Q(x) = 0.$$

 Tällä on ratkaisuina $x = 2$ sekä polynomin $Q$ nollakohdat.

Polynomi $Q$ saadaan selville suorittamalla jakolasku (kuten osiossa [Alaluku 8.2.2](08 Polynomit.md#sec-poly-jako)). Saadaan

$$x^3 - 2x^2 - 3x + 6 = (x-2)(x^2 - 3),$$

 eli $Q(x) = x^2 - 3$. Täten polynomilla $Q(x)$ on nollakohdat $x = \sqrt{3}$ ja $x = -\sqrt{3}$.

Yhtälön kaikki ratkaisut ovat siis $x = 2, x = \sqrt{3}$ ja $x = -\sqrt{3}$.

**

**Tehtävä 8.2** Määritä suurin positiivinen kokonaisluku $n$, jolla $n+10$ jakaa luvun $n^3 + 100$.

Tehtävä koskee siis sitä, milloin

$$\frac{n^3 + 100}{n+10}$$

 on kokonaisluku. Tämä vihjaa vahvasti polynomien jakolaskuun ja jakoyhtälön käyttämiseen. Osion [Alaluku 8.2.2](08 Polynomit.md#sec-poly-jako) esimerkin mukaisesti saadaan suoritettua jakolasku:

$$n^3 + 100 = (n+10)(n^2 - 10n + 100) - 900.$$

 Tästä huomataan, että yhtälön vasen puoli $n^3 + 100$ on jaollinen luvulla $n+10$ täsmälleen silloin, kun yhtälön oikean puolen termi $900$ on jaollinen luvulla $n+10$. Suurin luku $n$, jolla $n+10$ jakaa luvun $900$, on $n = 890$.

Vastaus tehtävään on täten $n = 890$.

## 8.5 Tehtäviä

**Tehtävä 1.** Jaa polynomi $A(x)$ polynomilla $B(x)$ ja laske jakojäännös, kun

1. $A(x) = 3x-7$ ja $B(x) = x+2$

2. $A(x) = x^2 + x + 1$ ja $B(x) = x-1$

3. $A(x) = 3x^2 - 5x + 7$ ja $B(x) = x+2$

4. $A(x) = x^3 - 2x - 1$ ja $B(x) = x-3$

**Tehtävä 2.** Jos polynomissa $P(x) = a_nx^n + a_{n-1}x^{n-1} + \ldots + a_1x + a_0$ kerroin $a_n$ ei ole nolla, niin polynomin $P(x)$ aste on $n$. (Esimerkiksi polynomien $x^3 - 2$, $3x + 1$ ja $1$ asteet ovat $3, 1$ ja $0$.) Osoita, että jos polynomin $A(x)$ aste on $a$ ja polynomin $B(x)$ aste on $b$, missä $a, b \ge 1$, niin tulon $A(x)B(x)$ aste on $a+b$.

**Tehtävä 3.** Polynomin $P(x)$ aste on $n$, termin $x^n$ kerroin on $1$ ja kaikki $n$ nollakohtaa ovat kokonaislukuja. Osoita, että polynomin $P(x)$ kaikki kertoimet ovat kokonaislukuja.

**Tehtävä 4.** Onko jokin polynomin $x^6 - x - 1$ nollakohdista kokonaisluku?

**Tehtävä 5.** Onko olemassa polynomeja $A(x)$ ja $B(x)$, joilla on seuraavat ominaisuudet?

- Polynomien $A(x)$ ja $B(x)$ kaikki kertoimet ovat kokonaislukuja.

- $x^3 + x + 1 = A(x)B(x)$

- Kumpikaan polynomeista $A(x)$ ja $B(x)$ ei ole vakiopolynomi

---

原文：[https://kurssi.matematiikkakilpailut.fi/08_polynomit_I.html](https://kurssi.matematiikkakilpailut.fi/08_polynomit_I.html)
