---
title: "29 Aritmetiikan peruslause II"
source: "https://kurssi.matematiikkakilpailut.fi/29_aritmetiikan_peruslause.html"
author: "Olli Järviniemi"
---

<a id="title-block-header"></a>

# 29 Aritmetiikan peruslause II

Tekijä

Olli Järviniemi

<a id="johdanto"></a>

## 29.1 Johdanto

Olemme aiemmin käsitelleet aritmetiikan peruslausetta ja alkulukujen määrän äärettömyyttä. Tässä tekstissä esitetään uusia näihin ideoihin perustuvia ajattelutapoja lukuteorian ongelmien ratkomiseen.

<a id="katso-eksponenttia"></a>

## 29.2 Katso eksponenttia

Diofantoksen yhtälöitä ratkottaessa olemme toistaiseksi käyttäneet pääasiassa kolmea menetelmää: tekijöihinjakoa, modulotarkasteluita ja epäyhtälöitä. Tässä esitellään Katso eksponenttia -menetelmä. Idea on hyödyllinen erityisesti silloin, kun tehtävässä esiintyy paljon tekijöihinjakoa.

Demonstroidaan menetelmää parin esimerkin kautta. Esimerkeissä on hyödyllistä käyttää seuraavaa kätevää notaatiota.

<a id="def-vp"></a>

**Määritelmä 29.1** Jos $p$ on alkuluku ja $n$ on positiivinen kokonaisluku, merkitään luvulla $v_p(n)$ alkuluvun $p$ eksponenttia luvun $n$ alkutekijähajotelmassa.

Esimerkiksi $v_5(50) = 2$, $v_3(60) = 1$ ja $v_7(30) = 0$. Notaation avulla voimme puhua helpommin alkutekijähajotelman lukujen eksponenteista.

Sitten itse esimerkkeihin.

<a id="exr-arp1"></a>

**Tehtävä 29.1** Positiivisilla kokonaisluvuilla $a$ ja $b$ pätee $$a^2b \mid a^3 + b^3.$$ Osoita, että $a = b$.

Idea: Kaksi lukua ovat samat täsmälleen silloin, kun niiden alkutekijähajotelmissa kunkin alkuluvun eksponentit ovat samat. Tutkitaan siis ongelmaa ”alkuluku kerrallaan”.

Olkoon siis $p$ alkuluku ja olkoon $v_p(a) = x$ luvun $p$ eksponentti $a$:n alkutekijähajotelmassa ja $v_p(b) = y$ eksponentti $b$:n alkutekijähajotelmassa. Pyritään osoittamaan, että $x = y$.

Mitä tietoa meillä on luvuista $x$ ja $y$? Kaikki informaatio tulee ehdosta $a^2b \mid a^3 + b^3$, joka kertoo $$v_p(a^2b) \le v_p(a^3 + b^3).$$ On helppo nähdä, että luvun $a^2b$ alkutekijähajotelmassa $p$:n eksponentti on $2x + y$. On kuitenkin vaikeampi analysoida, mikä on $p$:n eksponentti luvussa $a^3 + b^3$.

Mietitään joitakin konkreettisia tapauksia. Mitä on $v_p(a^3 + b^3)$, jos $x = 1, y = 0$? Tällöin $a^3$ on jaollinen $p$:llä (oikeastaan jopa $p^3$:lla), mutta $b^3$ ei ole. Täten summa ei ole jaollinen $p$:llä, eli $v_p(a^3 + b^3) = 0$.

Yleisesti jos pätee $x > y$, niin $v_p(a^3 + b^3) = 3y$. Tällöin nimittäin $p^{3y}$ jakaa molemmat luvuista $a^3$ ja $b^3$, mutta $p^{3y+1}$ jakaa vain toisen näistä luvuista. Jos $x < y$, pätee vastaavasti $v_p(a^3 + b^3) = 3x$.

Tässä on riittävästi työkaluja ongelman ratkaisemiseksi. Tutkitaan tapauksittain.

*Tapaus 1:* $x < y$. Tällöin $v_p(a^3 + b^3) = 3x$, ja yhtälö $v_p(a^2b) \le v_p(a^3 + b^3)$ muuttuu muotoon $$2x + y \le 3x$$ eli $y \le x$. Tutkimme kuitenkin tapausta $x < y$, joten tämä ei käy.

*Tapaus 2:* $x > y$. Samaan tapaan kuin tapauksessa 1 saadaan $$2x + y \le 3y$$ eli $x \le y$. Tutkimme kuitenkin tapausta $x > y$, joten tämä ei käy.

*Tapaus 3:* $x = y$. Tämä on se, mitä halusimmekin!

Koska tapaukset 1 ja 2 ovat mahdottomia, minkä tahansa alkuluvun $p$ eksponentit luvuissa $a$ ja $b$ ovat samat, joten $a = b$.

**Kommentti.** Ratkaisussa perusteltiin seuraava hyödyllinen tulos.

<a id="lem-vpab"></a>

**Apulause 29.1** Olkoot $a$ ja $b$ positiivisia kokonaislukuja. Tällöin $$v_p(a+b) \ge \min(v_p(a), v_p(b)).$$ Lisäksi jos $v_p(a) \neq v_p(b)$, niin pätee $$v_p(a+b) = \min(v_p(a), v_p(b)).$$

Jos $v_p(a) = v_p(b)$, ei eksponentista $v_p(a+b)$ voi oikein sanoa muuta kuin että se on vähintään $v_p(a)$. Esimerkiksi jos $a = 1, b = 1$ niin $v_3(a+b) = 0$, mutta jos $a = 1, b = 3^{100} - 1$, niin $v_3(a+b) = 100$.

Milloin Katso eksponenttia -menetelmää voi hyödyntää?

Lyhyt vastaus: kun tehtävä on ”multiplikatiivinen”, eli siinä on enimmäkseen kertolaskua ja vain vähän yhteenlaskua. Kuvitellaan esimerkiksi, että tutkittavana on jaollisuusehto $$a^2b \mid a^3 + b^3 + 1.$$ Tässä tapauksessa lukua $v_p(a^3 + b^3 + 1)$ ei oikein pystytä laskemaan ja menetelmä ei toimi.

Seuraavana esitetään hieman edistyneempi esimerkki.

<a id="exr-arp2"></a>

**Tehtävä 29.2** Olkoot $d_1, d_2, \ldots, d_9$ erisuuria kokonaislukuja, ja olkoon $P(x) = (x + d_1)(x+d_2) \cdots (x + d_9)$. Osoita, että on olemassa sellainen positiivinen kokonaisluku $N$, että kaikilla kokonaisluvuilla $x \ge N$ luku $P(x)$ on jaollinen jollakin lukua $20$ isommalla alkuluvulla.

Eli tehtävä väittää, että suurilla $x$ luvun $P(x)$ alkutekijähajotelmassa on vähintään yksi ”suuri” (tai pikemminkin ei-kovin-pieni) alkuluku.

Miltä tilanne näyttäisi, jos näin ei olisi? Tällöin $P(x)$ olisi äärettömän usein lukua $20$ pienempien alkulukujen tulo. Lukua $20$ pienemmät alkuluvut ovat $$2, 3, 5, 7, 11, 13, 17, 19.$$ Näitä on kahdeksan kappaletta eli yksi vähemmän kuin tulontekijöitä $x + d_i$.

Jos $x$ on suuri ja $P(x)$ on jaollinen vain yllä esitetyillä alkuluvuilla, niin kunkin luvuista $x + d_i$ alkutekijähajotelmassa on vain pieniä alkulukuja. Niiden eksponentit olisivat varmaankin hyvin suuria. Tehtävä perustuu jotenkin siihen ideaan, että tämä ei onnistu. Miksei?

Ajatus on, että jos $p$ on alkuluku, niin $v_p(x + d_1)$ ja $v_p(x + d_2)$ eivät voi molemmat olla samanaikaisesti suuria. Jos nimittäin $p^k$ jakaa luvut $x+d_1$ ja $x + d_2$, niin $p^k$ jakaa niiden erotuksen $d_1 - d_2$, eli $k$ ei voi olla mielivaltaisen suuri. Toisin sanoen lukujen $x+d_1$ ja $x+d_2$ alkutekijähajotelmissa ei voi olla kovin paljon yhteistä: yhteinen osuus jakaa luvun $d_1 - d_2$.

Tästä tehtävä saadaankin maaliin. Jos $x$ on hyvin suuri luku, jolla $P(x)$:n suurin alkutekijä on alle $20$, niin kunkin luvuista $x+d_1, x+d_2, \ldots, x+d_9$ alkutekijähajotelmassa vähintään yksi eksponentti on suuri. Koska lukua $20$ pienempiä alkulukuja on vain $8$, laatikkoperiaatteen nojalla on jokin alkuluku, jonka eksponentti on suuri sekä luvussa $x + d_i$ että luvussa $x+ d_j$ joillain $i \neq j$. Tämä ei käy edellisen kappaleen huomion nojalla.

**Kommentti.** Kisatilanteessa on toivottavaa, että tekee hieman tarkemmin ratkaisun loppupään laskut (mitä esimerkiksi tarkoittaa, että vähintään yksi alkutekijähajotelman eksponenteista on ”suuri”). Emme kuitenkaan tässä juutu näihin teknisiin yksityiskohtiin.

<a id="äärettömästi-alkulukuja"></a>

## 29.3 Äärettömästi alkulukuja

Aiemmin todistettiin alkulukujen määrän äärettömyys. Todistus oli melko helppo: jos niitä olisi vain äärellisen monta, sanotaan $p_1, p_2, \ldots, p_n$, niin luku $$p_1p_2 \cdots p_n + 1$$ ei olisi jaollinen millään alkuluvulla, mikä ei käy.

Idea yleistyy muihinkin tilanteisiin.

<a id="exr-arp3"></a>

**Tehtävä 29.3** Osoita, että on olemassa äärettömän monta alkulukua $p$, joilla $p \equiv 3 \pmod{4}$.

Vastaoletus kannattaa tietysti tehdä. Oletetaan, että näitä alkulukuja on vain äärellisen monta. Olkoot ne $p_1, \ldots, p_n$. Luvun $p_1p_2 \cdots p_n + 1$ tutkiminen ei toimi: se ei toki ole jaollinen millään alkuluvuista $p_i$, mutta se voisi olla tulo alkuluvuista, jotka ovat $1 \pmod{4}$ (ja alkuluvusta $2$).

Miten kierrämme ongelman? Haluaisimme muodostaa luvun, joka ei varmasti ole jaollinen millään luvuista $p_1, \ldots, p_n$ ja joka ei voi olla tulo pelkästään alkuluvuista, jotka ovat $2$ tai $1 \pmod{4}$. Temppu on siinä, että jos luku on $3 \pmod{4}$, niin sen alkutekijähajotelmasta pitää löytyä vähintään yksi alkuluku, joka on $3 \pmod{4}$. Muutenhan luku itse olisi $1 \pmod{4}$ (tai parillinen).

Tätä kautta keksitään, että tutkimalla lukua $$4p_1p_2 \cdots p_n - 1$$ saadaan ristiriita: tämä luku on $3 \pmod{4}$, mutta se ei ole jaollinen millään luvuista $p_i$. Tämä ei käy.

<a id="exr-arp4"></a>

**Tehtävä 29.4** Osoita, että on olemassa äärettömän monta alkulukua $p$, joilla $p \equiv 1 \pmod{4}$.

Tehdään taas vastaoletus, että $p_1, \ldots, p_n$ ovat kaikki tällaiset alkuluvut. Tällä kertaa kysymys on: miten voimme luoda luvun, jolla ei varmasti ole alkutekijöitä, jotka ovat $3 \pmod{4}$? Samanlainen idea kuin aiemmin ei toimi: luku voi olla $1 \pmod{4}$ vaikka, sillä olisi alkutekijöitä, jotka ovat $3 \pmod{4}$.

Jos on lukenut Kertolasku kongruensseissa -tekstin huolella, muistaa että $-1$ on neliönjäännös modulo $p$ vain jos $p \equiv 1 \pmod{4}$ (tai $p = 2$). Toisin sanoen luvut muotoa $x^2 + 1$ eivät ole jaollisia alkuluvuilla muotoa $p \equiv 3 \pmod{4}$.

Ristiriita saadaan tutkimalla lukua $$(2p_1p_2 \cdots p_n)^2 + 1.$$

Voisi veikata, että vastaavat tulokset pätevät myös muillakin moduloilla kuin $4$. Tämä pitää paikkansa.

<a id="thm-dirichlet"></a>

**Lause 29.1 (Dirichlet’n lause)** Olkoon $m$ positiivinen kokonaisluku ja olkoon $a$ kokonaisluku, joka on yhteistekijätön luvun $m$ kanssa. On olemassa äärettömän monta alkulukua $p$, joilla $$p \equiv a \pmod{m}.$$

Ikävä kyllä lauseen todistus on erittäin vaikea, joten sitä ei voida esittää tässä. Vaikka yllä olevat erikoistapaukset (sekä joitain muita erikoistapauksia) saa käsiteltyä kohtalaisen helpolla vastaoletustodistuksella, yleisessä tapauksessa tarvitaan raskaita, kilpailumatematiikan ulkopuolisia työkaluja.

Sen sijaan seuraavan mielenkiintoisen tuloksen saa todistettua hieman samaan tapaan kuin yllä.

<a id="thm-schur"></a>

**Lause 29.2 (Schurin lause)** Olkoon $P$ polynomi, jonka kertoimet ovat kokonaislukuja ja joka ei ole vakio. Tällöin on olemassa äärettömän monta alkulukua, jotka jakavat jonkin luvuista $$P(1), P(2), P(3), \ldots$$

Tapaus $P(x) = x^2 + 1$ käsiteltiin yllä tekemällä vastaoletus ja tutkimalla lukua $(2p_1 \cdots p_n)^2 + 1$.

Yleisessä tapauksessa tehdään tietysti myös vastaoletus, että näitä alkulukuja olisi vain $p_1, \ldots, p_n$. Ikävä kyllä suoraan luvun $P(p_1 \cdots p_n)$ tutkiminen ei toimi: jos esimerkiksi $P(x) = x^2 + p_1$, niin luku $P(p_1 \cdots p_n)$ on jaollinen luvulla $p_1$. Tämän ei kuitenkaan pitäisi olla oikea ongelma: $P(p_1 \cdots p_n)$ ei tällöin voi olla jaollinen luvulla $p_1^2$, eli pitäisi päteä $P(p_1 \cdots p_n) = p_1$, mikä ei tietenkään käy.

Yleisesti ongelma kierretään Katso eksponenttia -tyylisellä idealla. Ideana on valita sellainen luku $x$, että pystymme kontrolloimaan lukujen $p_i$ eksponentteja luvun $P(x)$ alkutekijähajotelmassa. Tätä kautta saadaan ristiriita.

Kirjoitetaan $$P(x) = a_dx^d + \ldots + a_1x + a_0$$ ja oletetaan, että $a_d > 0$. Olkoon $N$ hyvin suuri, olkoon $m$ jokin positiivinen kokonaisluku ja tutkitaan lukua

$$P\left((mp_1 \cdots p_n)^N\right) = a_d(mp_1 \cdots p_n)^{Nd} + \ldots + a_1(mp_1 \cdots p_n)^N + a_0.$$

Nyt jos $N$ on niin suuri, ettei $p_i^N$ jaa lukua $a_0$ millään $i$,<a id="fnref1"></a>[^1](#fn1) niin $p_i^N$ jakaa summasta kaikki paitsi viimeisen termin, joten se ei jaa koko summaa.

<a id="fn1"></a>

^1 Tällaista $N$ ei tietysti ole, jos $a_0 = 0$. Tapaus $a_0 = 0$ on kuitenkin helppo: millä tahansa alkuluvulla $p$ pätee $p \mid P(p)$, eli mikä tahansa alkuluku jakaa vähintään yhden luvuista $P(1), P(2), \ldots$

Tällöin luvun $P\left((mp_1 \cdots p_n)^N\right)$ alkutekijähajotelmassa kunkin luvun $p_i$ eksponentti on alle $N$. Koska $p_i$ ovat kaikki alkuluvut, jotka jakavat jonkin luvuista $P(1), P(2), \ldots$, ei alkutekijähajotelmassa ole muita lukuja. Tämä kertoo, että $$P\left((mp_1 \cdots p_n)^N\right) \le (p_1 \cdots p_n)^N,$$ mikä ei tietenkään päde, jos $m$ valitaan riittävän suureksi (ja koska oletimme $a_d > 0$).

<a id="tehtäviä"></a>

## 29.4 Tehtäviä

**Tehtävä 1.** Olkoot $a$ ja $b$ positiivisia kokonaislukuja. Olkoon $\text{syt}(a, b)$ niiden suurin yhteinen tekijä ja $\text{pyj}(a, b)$ niiden pienin yhteinen jaettava. Osoita, että $$\text{syt}(a, b) \cdot \text{pyj}(a, b) = ab.$$

**Tehtävä 2.** Laske $v_3(100!)$.

**Tehtävä 3.** Olkoot $a$ ja $b$ positiivisia kokonaislukuja, joilla $a \mid b, b \mid a^2, a^2 \mid b^3, b^3 \mid a^4, \ldots$ Osoita, että $a = b$.

**Tehtävä 4.** Olkoot $a, b, c$ ja $d$ positiivisia kokonaislukuja. Oletetaan, että $ad - bc > 1$. Osoita, että $ad - bc$ ei jaa kaikkia luvuista $a, b, c$ ja $d$.

**Tehtävä 5.** Olkoot $a, b$ ja $c$ positiivisia kokonaislukuja. Oletetaan, että $\text{syt}(a, b, c) = 1$ ja että $ab = c(a-b)$. Osoita, että $a-b$ on neliöluku.

**Tehtävä 6.** Osoita, että on olemassa äärettömän monta alkulukua $p$, joilla $p \equiv 5 \pmod{6}$. (Et saa käyttää Dirichlet’n lausetta.)

**Tehtävä 7.** Osoita, että on olemassa äärettömän monta alkulukua $p$, jotka jakavat jonkin luvun muotoa $2^n - 3$, missä $n = 1, 2, 3, \ldots$

---

原文：[https://kurssi.matematiikkakilpailut.fi/29_aritmetiikan_peruslause.html](https://kurssi.matematiikkakilpailut.fi/29_aritmetiikan_peruslause.html)
