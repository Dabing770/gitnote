# Luku 5 — Kvanttimekaaniset atomitilat: vastaukset ja ratkaisut

> Tehtävät: [[Luku 5 - Tehtävät]]
> Lähde: [[5 Kvanttimekanisen atomi tilat]]

Ratkaisuissa käytetään vakioita $h = 6{,}626\cdot10^{-34}\ \mathrm{J\,s}$, $c = 2{,}998\cdot10^{8}\ \mathrm{m/s}$ ja $hc = 1240\ \mathrm{eV\cdot nm}$.

---

## 1. Kvanttiluvut ja orbitaalit

**a)** Sääntö: $l \le n-1$ ja $|m_l| \le l$, $m_s = \pm\tfrac12$.

| Yhdistelmä | Arvio | Perustelu |
| --- | --- | --- |
| $(2,2,0,+\tfrac12)$ | **ei mahdollinen** | $l = 2$ vaatisi $n \ge 3$ |
| $(3,1,-1,+\tfrac12)$ | mahdollinen | $l=1 \le 2$, $|m_l|=1 \le 1$ |
| $(3,0,1,-\tfrac12)$ | **ei mahdollinen** | $l = 0 \Rightarrow m_l$ voi olla vain 0 |
| $(4,2,+2,-\tfrac12)$ | mahdollinen | $l = 2 \le 3$, $|m_l| = 2 \le 2$ |

（易错点：$m_l$ 只由 $l$ 限制，不受 $n$ 直接影响。）

**b)** $l = 0, 1, 2$:
- $l=0$: 1 orbitaali, $l=1$: 3 orbitaalia ($m_l=-1,0,+1$), $l=2$: 5 orbitaalia ($m_l=-2\dots+2$).

Yhteensä $1+3+5 = 9$ orbitaalia, ja jokaiseen 2 elektronia (Paulin kieltosääntö) → **18 elektronia** = $2n^2 = 2\cdot3^2$.

**c)** 3p vastaa $l = 1$ → 3 orbitaalia × 2 = **6 elektronia**. Täydessä joukossa Hundin säännön mukaan 3 elektronia on spin ylös ja 3 spin alas → **3 elektronilla** $m_s = +\tfrac12$.

---

## 2. Elektronikonfiguraatiot ja Hundin sääntö

**a)** P ($Z=15$): $1s^2\,2s^2\,2p^6\,3s^2\,3p^3$
Fe ($Z=26$): $1s^2\,2s^2\,2p^6\,3s^2\,3p^6\,4s^2\,3d^6$ eli $[\mathrm{Ar}]\,4s^2\,3d^6$

**b)** $3d^6$ täytetään Hundin säännön mukaan: ensin 5 elektronia samansuuntaisilla spineillä eri orbitaaleille, sitten kuudes pariuttaa yhden → **4 paritonta elektronia**, kaikki 3d-orbitaaleilla. (Tämä on raudan perustila, "high spin".)

**c)** $l = 1$ tarkoittaa p-orbitaaleja: $2p^6 + 3p^6 =$ **12 elektronia**.

**d)** Orbitaalin energia määräytyy sekä $n$:stä että $l$:stä: 4s asettuu useimmilla atomeilla **energialtaan 3d:tä alemmas**, joten minimienergiaperiaatteen mukaan se täyttyy ensin. Täyttymisjärjestys on siis

$$1s\ 2s\ 2p\ 3s\ 3p\ 4s\ 3d\ 4p\ 5s\ 4d\ 5p\ 6s\ 4f\,5d\ 6p\dots$$

Poikkeuksia esiintyy raskaammilla atomeilla (esim. Cr, Cu), kun elektronien väliset vuorovaikutukset muuttavat energioiden järjestystä.

---

## 3. Heliumin viritystilat ja fotonit

**a)** $E = |E_{\text{loppu}} - E_{\text{alku}}|$ ja $\lambda = hc/E$:

| Siirtymä | $\Delta E$ / eV | $\lambda$ / nm | Alue |
| --- | --- | --- | --- |
| 1s² → 1s2s | $24{,}589-4{,}768 = 19{,}821$ | $1240/19{,}821 \approx 62{,}6$ | UV (kaukainen) |
| 1s² → 1s2p | $24{,}589-3{,}623 = 20{,}966$ | $\approx 59{,}1$ | UV |
| 1s² → 1s3s | $24{,}589-1{,}869 = 22{,}720$ | $\approx 54{,}6$ | UV |

Kaikki ovat ultraviolettia (näkyvä alue noin 380–750 nm), joten heliumin virittämiseen tarvitaan UV-fotoni.

**b)** $E = 4{,}768 - 1{,}869 = 2{,}899\ \mathrm{eV}$

$$\lambda = \frac{1240\ \mathrm{eV\,nm}}{2{,}899\ \mathrm{eV}} \approx 428\ \mathrm{nm}$$

→ **sinivioletti näkyvä valo** (lähellä näkyvän alueen rajaa).

**c)** 1s3s on korkeaenerginen viritystila, josta on olemassa nopea sallittu siirtymä alemmas (1s3s → 1s2s), joten atomi purkautuu nopeasti. **Metastabiili** = pitkäikäinen viritystila: siirtymä alemmas on kvanttimekaanisesti hyvin epätodennäköinen ("kielletty"), joten atomi voi pysyä tilassa pitkään. Tämä on olennaista lasertoiminnalle (neonin 5s ja 4s).

**d)** Ionisoituminen onnistuu, jos fotonin energia riittää irrottamaan elektronin. Taulukon energiat on ilmoitettu ionisaatiorajasta (He⁺ + e⁻ = 0), joten tilassa 1s2s elektronin sitoutumisenergia on 4,768 eV eli **ionisaatioenergia on 4,768 eV**. Koska $20{,}0\ \mathrm{eV} > 4{,}768\ \mathrm{eV}$:

$$E_k = 20{,}0\ \mathrm{eV} - 4{,}768\ \mathrm{eV} \approx 15{,}2\ \mathrm{eV}$$

→ **kyllä**, irtoavan elektronin liike-energia on noin 15,2 eV. (Ionisaatiorajan yläpuolella fotoneja voidaan absorboida millä tahansa energialla, koska lopputila on jatkumo.)

---

## 4. HeNe-laserin fotoni ja teho

**a)** $E = \dfrac{hc}{\lambda} = \dfrac{1240\ \mathrm{eV\,nm}}{632{,}8\ \mathrm{nm}} \approx 1{,}96\ \mathrm{eV}$

$$E \approx 1{,}96 \cdot 1{,}602\cdot10^{-19}\ \mathrm{J} \approx 3{,}14\cdot10^{-19}\ \mathrm{J}$$

Energiaero $E_{5s}-E_{3p} \approx 1{,}96\ \mathrm{eV}$.

**b)** $N = \dfrac{Pt}{E} = \dfrac{1{,}0\cdot10^{-3}\ \mathrm{W}\cdot 1{,}0\ \mathrm{s}}{3{,}14\cdot10^{-19}\ \mathrm{J}} \approx 3{,}2\cdot10^{15}$

→ noin **3,2 biljoonaa fotonia sekunnissa** (kertaluku $10^{15}$).

**c)** $p = \dfrac{h}{\lambda} = \dfrac{6{,}626\cdot10^{-34}}{632{,}8\cdot10^{-9}} \approx 1{,}05\cdot10^{-27}\ \mathrm{kg\,m/s}$

Absorboivalle pinnalle

$$F = \frac{P}{c} = \frac{1{,}0\cdot10^{-3}}{2{,}998\cdot10^{8}} \approx 3{,}3\cdot10^{-12}\ \mathrm{N}$$

（这是 1 mW 光对完全吸收面的辐射压力对应力；若完全反射则为 $2P/c$。）

**d)** **Spontaani emissio:** viritystila purkautuu itsestään, fotoni lähtee satunnaiseen suuntaan, fotonit eivät ole keskenään samassa vaiheessa. **Stimuloitu emissio:** ohikulkeva sähkömagneettinen aalto laukaisee purkautumisen, ja syntyvä fotoni on **samassa vaiheessa ja suunnassa** kuin laukaiseva aalto → vyörypurkaus, peilit vahvistavat → koherentti, monokromaattinen, yhdensuuntainen säde.

---

## 5. Fluoresenssi: energiatarkastelu

**a)** $E_{450} = \dfrac{1240}{450} \approx 2{,}76\ \mathrm{eV}$, $E_{550} = \dfrac{1240}{550} \approx 2{,}25\ \mathrm{eV}$

**b)** $\Delta E = 2{,}76 - 2{,}25 = 0{,}50\ \mathrm{eV}$

$$\Delta E \approx 0{,}50 \cdot 1{,}602\cdot10^{-19}\ \mathrm{J} \approx 8{,}1\cdot10^{-20}\ \mathrm{J}$$

Ero menee aineen **värähtely- eli lämpöenergiaksi** (hilavärähtelyt) välitilojen kautta — tämä on **Stokes-siirtymä**: emittoitu fotoni on aina matalaenergisempi (pidempi aallonpituus) kuin absorboitu.

**c)** $\eta = \dfrac{2{,}25}{2{,}76} \approx 0{,}82$ → **noin 82 %**. (Huom: tämä on energiahyötysuhde. Jos jokainen absorboitunut fotoni tuottaa yhden fotonin, fotonimääräinen hyötysuhde on 100 %.)

**d)** $N = \dfrac{Pt}{E_{450}} = \dfrac{2{,}0\cdot10^{-3}}{2{,}7556\cdot1{,}602\cdot10^{-19}} \approx 4{,}5\cdot10^{15}$ fotonia/s

$$P_{\text{vihreä}} = N\,E_{550} \approx 4{,}5\cdot10^{15} \cdot 3{,}61\cdot10^{-19}\ \mathrm{W} \approx 1{,}6\ \mathrm{mW}$$

→ noin **1,6 mW**, eli 82 % absorboituneesta tehosta — sama hyötysuhde kuin c-kohdassa. (Loppu 0,4 mW lämmittää levyä.)

---

## 6. Tunneloituminen ja tunnelointimikroskooppi

**a)** $I(d) = 1{,}0\ \mathrm{nA}\cdot 10^{-d/0{,}10\,\mathrm{nm}}$
- $d = 0{,}65$ nm: $10^{-0{,}5} = 0{,}316$ → $I \approx 0{,}32$ nA
- $d = 0{,}70$ nm: $10^{-1{,}0} = 0{,}10$ → $I \approx 0{,}10$ nA

**b)** Muutoskerroin $= 10^{-0{,}1} \approx 0{,}79$ → virta **pienenee noin 21 %** jo 0,01 nm:n muutoksella.

**c)** $d = 0{,}58$ nm: $10^{+0{,}2} = 1{,}58$ → $I \approx 1{,}6$ nA
$d = 0{,}62$ nm: $10^{-0{,}2} = 0{,}63$ → $I \approx 0{,}63$ nA
Suhde $\approx 2{,}5$. → Virta vaihtelee kertoimella 2,5 pelkän lämpövärähtelyn takia; etäisyys on siis säädettävä **pienemmällä kuin 0,01 nm:n tarkkuudella** ja tärinä on eristettävä. Tämä herkkyys on samalla mittauksen vahvuus: hyvin pieni korkeusero näkyy suurena virran muutoksena.

**d)** Koska $I$ riippuu **eksponentiaalisesti** etäisyydestä, jo yhden atomikerroksen korkeusero muuttaa virtaa moninkertaisesti → pinnan muodot saadaan erittäin tarkasti. Vakiovirta-takaisinkytkentä säätää kärjen korkeutta niin, että virta pysyy vakiona; korkeuden säätösignaali piirtää pinnan topografiaa ja estää kärjen törmäämisen näytteeseen.

---

## 7. Käsitetehtävä: energiatilat ja spektrit

**a)** Atomin energia voi saada vain tiettyjä kvantittuneita arvoja. Fotoni absorboituu tai emittoituu vain, kun sen energia vastaa **täsmälleen** kahden tilan energiaeroa: $E = hc/\lambda = \Delta E$. Siksi vain tietyt aallonpituudet toteutuvat → spektrissä teräviä viivoja, ei jatkuvaa jakaumaa.

**b)** Bohr-malli käsittelee yhtä elektronia ytimen Coulombin kentässä. Heliumissa on kaksi elektronia, jotka vuorovaikuttavat sekä ytimen että **toistensa** kanssa; tilat (esim. singletti- ja triplettitilat, 1s2s vs. 1s2p) eroavat tavalla, jota Bohr-malli ei kuvaa. Vedyllä on vain yksi elektroni, joten Schrödingerin yhtälö ratkeaa tarkasti.

**c)** Orbitaalien **energiajärjestys** määräytyy pääosin siitä, miten orbitaalit miehittävät ytimen lähiympäristön (läpäisy ja varjostus), ja tämä rakenne on likimain sama kaikilla atomeilla; siksi matalin tila on aina 1s. Absoluuttiset energiat riippuvat kuitenkin ytimen varauksesta $Z$: mitä suurempi $Z$, sitä voimakkaampi Coulombin vetovoima ja sitä syvempi 1s-energia. Siksi $E_{1s}(\mathrm{He}) \neq E_{1s}(\mathrm{H})$.

**d)** Siirtymässä 1s2p → 1s² elektronin $l$ muuttuu ($l=1 \to l=0$), mikä on sallittu dipolisirtymä: purkautuminen on nopea. Siirtymässä 1s2s → 1s² molempien tilojen orbitaalit ovat pallosymmetrisiä ($l=0 \to l=0$), eikä fotonin emissio ole sallittu yksifotoniprosessina → tila on metastabiili (pitkäikäinen). Sama periaate on loisteaineiden ja laserin metastabiileissa tiloissa.

---

## 8. Käsitetehtävä: luminesenssi, laser ja superpositio

**a)** **Fluoresenssissa** viritystila purkautuu nopeasti (nanosekunteja) välitilojen kautta; valo lakkaa heti, kun virittävä säteily sammuu. **Fosforesenssissa** kaikki viritystilat eivät purkaudu heti — osa on metastabiileja, joten fotoneja emittoituu pieniä määriä pitkän ajan **vielä virittävän säteilyn sammuttamisen jälkeen**.

**b)** Punaisen fotonin energia ($1240/650 \approx 1{,}9\ \mathrm{eV}$) **ei riitä** virittämään ainetta, koska sopivaa viritystilaa ei ole — absorptiota ei tapahdu → ei hohdetta. Sinisen fotonin energia riittää virittämiseen, ja viritys purkautuu välitilan kautta vihreänä fotonina → vihreä hohde. Intensiteetin kasvu lisää virittyneiden atomien **määrää** (kirkkaampi hohde), mutta ei muuta energiatilojen erotusta → **aallonpituus ei muutu**.

**c)** Neon yksin ei virity tehokkaasti sähköpurkauksessa; helium virittyy helposti, ja muutamat He:n ja Ne:n viritystilat ovat **energioiltaan samat**, joten törmäyksessä He siirtää viritysenergian neonille (resonanssisiirto). Näin suuri joukko neonatomeja saadaan metastabiileihin tiloihin → käänteinen miehitys ja stimuloitu emissio. Laservalon keskeiset ominaisuudet: suuri intensiteetti, **monokromaattisuus** ja **koherentti, yhdensuuntainen** tasoaaltosäde.

**d)** Klassinen **bitti** on joko 0 tai 1 (esim. 0 V / 5 V). **Kubitti** voi olla superpositiossa eli "monessa tilassa yhtä aikaa": aaltofunktio sisältää tiedon kaikista mahdollisista tiloista, ja mittauksessa toteutuu niistä vain yksi todennäköisyyksien mukaisesti. Siksi kvanttitietokone on parhaimmillaan tehtävissä, joissa on valtava määrä vaihtoehtoja ilman tunnettuja säännönmukaisuuksia (alkulukujen seulonta, tekoäly), mutta työläs tavallisessa laskennassa; se on jäähdytettävä millikelvin-lämpötiloihin. **Kööpenhaminan tulkinta:** vasta **havainto** saa systeemin valitsemaan yhden mahdollisista tiloista — suljetussa laatikossa kissa on samanaikaisesti elävä ja kuollut, kunnes tila todetaan, eikä lopputulos ole etukäteen pääteltävissä. Avoin kysymys: riittääkö havainnoksi pelkkä vuorovaikutus vai tarvitaanko tietoinen mieli? Muita tulkintoja: **monimaailmateoria** ja **piilomuuttujateoria**.

---

## Huomioita muistiinpanoista

- "Huidin sääntö" → **Hundin sääntö**; "Fosforenssi" → **fosforesenssi**; "ourkautuminen" → **purkautuminen**; "aineen virityy" → **virittyy**; tiedostonimi "Kvanttimekanisen atomi tilat" → **kvanttimekaaniset atomitilat**.
- Muistiinpanojen periaate "orbitaalien energiajärjestys on likimain sama kaikilla atomeilla, mutta absoluuttiset energiat eri suuret" on tehtävän 7c ydin — hyvä koekysymys.
- Heliumin taulukon arvot ovat likiarvoja (1s2s ≈ triplettitila 2³S). Tehtävässä 3 on käytetty johdonmukaisesti taulukon arvoja.
- **Taulukon nollataso:** muistiinpanoissa ei sanota, mistä energiat on mitattu. Ne eivät ole atomin kokonaisenergioita (sellainen on noin −79,0 eV), vaan **termitasoja mitattuna ionisaatiorajasta** He⁺ + e⁻ = 0: esim. −24,589 eV on heliumin ensimmäinen ionisaatioenergia (kokeellinen 24,587 eV) ja −4,768 eV on ionisaatioenergia tilasta 1s2s. Energia**eroihin** (kuten tehtävä 3a) nollatason valinta ei vaikuta, mutta ionisaatiotehtävissä (3d) se on ratkaiseva.
