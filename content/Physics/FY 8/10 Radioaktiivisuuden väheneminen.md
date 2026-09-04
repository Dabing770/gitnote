## Aktiivisuus
= **hajoamisten määrä aikayksikössä**

$$
A = -\frac{\Delta N}{\Delta t}
$$

- $\Delta N$ = ydinten määrän muutos, $\Delta t$ = kulunut aika
- **Miinusmerkki**: ytimet vähenevät → $\Delta N < 0$, mutta aktiivisuus on aina **positiivinen**
- Yksikkö **becquerel**: $1\ \text{Bq} = 1\ \tfrac{1}{\text{s}}$ (yksi hajoaminen sekunnissa)
- Jokaisessa hajoamisessa vapautuu **yksi havaittava hiukkanen** → havaittujen hiukkasten määrä = hajoamisten määrä

### Ominaisaktiivisuus
= aktiivisuus **massayksikköä kohti**, yksikkö $1\ \tfrac{\text{Bq}}{\text{kg}}$

$$
a = \frac{A}{m}
$$

> Käytetään luonnosta saatavien elintarvikkeiden (sienet, kalat, riista) radioaktiivisuuden seurantaan.

### Aktiivisuuden riippuvuudet
Aktiivisuus riippuu **kahdesta** asiasta:
1. **kuinka paljon ainetta on** (ydinten lukumäärä)
2. **mikä nuklidi** on kyseessä (hajoamisvakio)

---

## Hajoamisvakio
Jos näytteessä on vain **yhtä** radioaktiivista nuklidia, aktiivisuus on **suoraan verrannollinen** ydinten lukumäärään:

$$
\boxed{\ A = \lambda N\ }
$$

- $\lambda$ = **hajoamisvakio**, yksikkö $\tfrac{1}{\text{s}}$
- ♦ Tässä $\lambda$ **ei** ole aallonpituus eikä sen yksikkö ole hertsi ♦
- Pitkäikäisillä nuklideilla $\lambda$ = **hajoamisen todennäköisyys aikayksikössä** (aikayksikössä hajoaa ytimistä osuus $\lambda$)

### Lyhyt- ja pitkäikäiset nuklidit
| | hajoamisia | $T_{1/2}$, keskielinaika | $\lambda$ | aktiivisuus (sama ainemäärä) |
| --- | --- | --- | --- | --- |
| **lyhytikäinen** | tiheään | lyhyt | suuri | **suuri** |
| **pitkäikäinen** | harvakseltaan | pitkä | pieni | pieni |

- **U-238**: keskielinaika ≈ **6,4 mrd vuotta** (pitkäikäinen)
- **Th-234** (U-238:n hajoamistuote): keskielinaika vajaat **35 vuorokautta**
- Lyhytikäisimpien nuklidien keskielinaikoja **ei pystytä mittaamaan**

---

## Hajoamislaki
Ydinten määrän muutosnopeus on verrannollinen jäljellä olevaan määrään:

$$
\frac{\Delta N}{\Delta t} = -\lambda N \quad \xrightarrow{\ \Delta t \to 0\ } \quad \frac{dN}{dt} = -\lambda N
$$

Tämä on **differentiaaliyhtälö**, jonka ratkaisu on eksponenttifunktio:

$$
\boxed{\ N = N_0 e^{-\lambda t}\ }
$$

- $N_0$ = ydinten määrä alussa, $N$ = ydinten määrä ajan $t$ kuluttua
- ♦ Tässä $e$ **ei** ole alkeisvaraus vaan **Neperin luku** ♦

Kun hajoamislaki kerrotaan puolittain $\lambda$:lla ja käytetään yhtälöä $A = \lambda N$:

$$
\boxed{\ A = A_0 e^{-\lambda t}\ }
$$

> **Aktiivisuus noudattaa samanmuotoista lakia kuin ydinten lukumäärä** → mittaamalla aktiivisuutta päästään suoraan ydinten suhteeseen.

---

## Puoliintumisaika $T_{1/2}$
= aika, jossa **puolet** ytimistä on hajonnut. Saadaan hajoamislaista sijoittamalla $N = \tfrac{N_0}{2}$:

$$
\tfrac{1}{2}N_0 = N_0e^{-\lambda T_{1/2}} \ \Rightarrow\ \ln\tfrac{1}{2} = -\lambda T_{1/2}
$$

$$
\boxed{\ T_{1/2} = \frac{\ln 2}{\lambda}\ }\qquad\qquad \boxed{\ \lambda = \frac{\ln 2}{T_{1/2}}\ }
$$

- Puoliintumisaika on **kääntäen verrannollinen** hajoamisvakioon
- Puoliintumisaikoja on **taulukoitu** → $\lambda$ lasketaan yleensä tunnetusta $T_{1/2}$:sta
- Aktiivisuudesta häviää **yhtä suuri osa aina yhtä pitkän ajan kuluessa** — puolittuminen kestää yhtä kauan riippumatta aktiivisuuden arvosta

| kulunut aika | jäljellä |
| --- | --- |
| $1\,T_{1/2}$ | $\tfrac{1}{2}$ |
| $2\,T_{1/2}$ | $\tfrac{1}{4}$ |
| $3\,T_{1/2}$ | $\tfrac{1}{8}$ |
| $10\,T_{1/2}$ | vajaa **promille** ($\approx 0{,}1\ \%$) |

> **Perseverance-mönkijä** (Mars 2021): energianlähteenä **Pu-238**, jonka pitkä **87,7 vuoden** puoliintumisaika takaa tasaisen lämpö- ja sähköenergian pölyyntyvien aurinkopaneelien sijaan.

### Ajan ratkaiseminen
Kun tunnetaan jäljellä oleva osuus $\tfrac{N}{N_0}$ (tai $\tfrac{A}{A_0}$):

$$
t = -\frac{1}{\lambda}\ln\frac{N}{N_0} = \frac{T_{1/2}}{\ln 2}\ln\frac{N_0}{N}
$$

---

## Hajoamissarjat
Hajoamisessa syntyvä uusi ydin on **usein itsekin radioaktiivinen** → peräkkäiset hajoamiset muodostavat **hajoamissarjan**, joka päättyy **pysyvään isotooppiin**.

Sarjoja tunnetaan **neljä**: **uraani-, torium-, aktinium-** ja **neptuniumsarja**.

- **Uraanisarja**: kaikki **Rn-222:ta edeltävät** nuklidit ovat hyvin **pitkäikäisiä** → radonia syntyy maaperässä **tasaiseen tahtiin** eivätkä lähtöaineet lopu miljooniin vuosiin. Rn-222 itse on **lyhytikäinen** → pienenkin radonmäärän **aktiivisuus on suuri**.
- Sarjan loppupäässä **Bi-214** hajoaa **sekä α- että β⁻-hajoamisella** → hajoaminen voi edetä **kahta eri reittiä**.
- **Neptuniumsarja**: kaikki nuklidit ovat aurinkokunnan ikään verrattuna **niin lyhytikäisiä**, että ne ovat ehtineet **hävitä maapallolta**.
- Kaikki raskaat alkuaineet ovat peräisin aurinkokuntaa **edeltävästä supernovaräjähdyksestä**.

---

## Radioaktiivinen iänmääritys

### Radiohiiliajoitus (C-14)
Perustuu **pysyvän $^{12}$C:n ja radioaktiivisen $^{14}$C:n suhteen** muuttumiseen.

1. $^{14}$C syntyy **yläilmakehässä kosmisen säteilyn** vaikutuksesta typen isotoopista **N-14**
2. Syntyminen ja hajoaminen ovat **dynaamisessa tasapainossa** → isotooppisuhde ilmakehässä on pysynyt **likimain vakiona tuhansia vuosia**
3. **Eliön eläessä** hiili vaihtuu jatkuvasti (yhteyttäminen, ravintoketju) → suhde **sama kuin ilmakehässä**
4. **Kuoleman jälkeen** uutta hiiltä ei tule → $^{14}$C alkaa vähentyä β-hajotessaan takaisin typeksi
5. Mitä enemmän suhde poikkeaa ilmakehän suhteesta, sitä **kauemmin** kuolemasta on

**Raja**: $T_{1/2} \approx 5\,700\ \text{a}$; 10 puoliintumisajan jälkeen jäljellä vain promille → isotooppisuhdetta **ei voi enää mitata luotettavasti**. Ei sovi **useita kymmeniä tuhansia vuosia** vanhoihin näytteisiin.

### Uraani-lyijy-ajoitus
- Mitataan **lyijyn määrä zirkonissa**; lyijyn oletetaan syntyneen $^{238}$U:n ja $^{235}$U:n hajoamisissa
- **Zirkoni kestää** hyvin mekaanista ja kemiallista rasitusta → antaa hyvin tarkan iän
- Sopii **satoja tuhansia vuosia** vanhoille tai vanhemmille mineraaleille ja fossiileille

### Kalium-argon-menetelmä
- $^{40}$K hajoaa **89,1 %:n** todennäköisyydellä **kalsiumiksi** ja **10,9 %:n** todennäköisyydellä **argoniksi**
- **Sulasta** kiviaineksesta argonkaasu **karkaa pois**, jäähtyneeseen kiveen se **jää sisään**
- Argonin määrä kertoo, kuinka kauan sitten kiviaines **jähmettyi** → kivikerrostumien ja fossiilien ajoitus

---

## Esimerkit

**1. Yhden curien aktiivisuus becquereleina** (1,0 g Ra-226, $T_{1/2} = 1585{,}5$ a)

Hajoamisvakio:

$$
\lambda = \frac{\ln 2}{T_{1/2}} = \frac{\ln 2}{1585{,}5\ \text{a} \cdot 3{,}156\cdot10^{7}\ \tfrac{\text{s}}{\text{a}}} = \frac{0{,}6931}{5{,}003\cdot10^{10}\ \text{s}} = 1{,}385\cdot10^{-11}\ \tfrac{1}{\text{s}}
$$

Ydinten lukumäärä (moolimassa $M = 226{,}03\ \tfrac{\text{g}}{\text{mol}}$):

$$
N = \frac{m}{M}N_A = \frac{1{,}0\ \text{g}}{226{,}03\ \tfrac{\text{g}}{\text{mol}}}\cdot 6{,}022\cdot10^{23}\ \tfrac{1}{\text{mol}} = 2{,}664\cdot10^{21}
$$

$$
A = \lambda N = 1{,}385\cdot10^{-11}\ \tfrac{1}{\text{s}} \cdot 2{,}664\cdot10^{21} = \mathbf{3{,}7\cdot10^{10}\ Bq}
$$

**Vastaus:** $1\ \text{Ci} = 3{,}7\cdot10^{10}\ \text{Bq} = 37\ \text{GBq}$

---

**2. Radiojodihoito**, $^{131}$I, $T_{1/2} = 8{,}025$ d. Kuinka monen päivän kuluttua hajonnut a) 90 %, b) 99 %?

Hajonnut 90 % → **jäljellä** $\tfrac{N}{N_0} = 0{,}10$. Hajoamislaista:

$$
t = \frac{T_{1/2}}{\ln 2}\ln\frac{N_0}{N}
$$

a) $t = \dfrac{8{,}025\ \text{d}}{\ln 2}\ln 10 = 8{,}025\ \text{d} \cdot 3{,}322 = \mathbf{26{,}7\ d}$

b) Jäljellä $0{,}010$: $\quad t = \dfrac{8{,}025\ \text{d}}{\ln 2}\ln 100 = 8{,}025\ \text{d}\cdot 6{,}644 = \mathbf{53{,}3\ d}$

> Huomaa: 99 % vie **täsmälleen kaksinkertaisen** ajan 90 %:iin verrattuna, koska $\ln 100 = 2\ln 10$.

---

**3. Suosta löytynyt ruuhi**: $a = 0{,}18\ \tfrac{\text{mBq}}{\text{kg}}$, tuoreessa puussa $a_0 = 0{,}23\ \tfrac{\text{mBq}}{\text{kg}}$, $^{14}$C:n $T_{1/2} = 5\,730$ a

Ominaisaktiivisuudet on laskettu samaa massayksikköä kohti → niiden suhde = aktiivisuuksien suhde:

$$
t = \frac{T_{1/2}}{\ln 2}\ln\frac{a_0}{a} = \frac{5730\ \text{a}}{0{,}6931}\cdot\ln\frac{0{,}23}{0{,}18} = 8267\ \text{a} \cdot 0{,}2451
$$

$$
t = 2026\ \text{a} \approx \mathbf{2{,}0\cdot10^{3}\ a}
$$

**Vastaus:** ruuhi on noin **2 000 vuotta** vanha.

---

## Muistilista
| suure | kaava | huom |
| --- | --- | --- |
| aktiivisuus | $A = -\tfrac{\Delta N}{\Delta t} = \lambda N$ | Bq $= \tfrac{1}{\text{s}}$ |
| ominaisaktiivisuus | $a = \tfrac{A}{m}$ | $\tfrac{\text{Bq}}{\text{kg}}$ |
| hajoamislaki | $N = N_0e^{-\lambda t}$, $A = A_0e^{-\lambda t}$ | samanmuotoiset |
| puoliintumisaika | $T_{1/2} = \tfrac{\ln 2}{\lambda}$ | taulukoitu |
| kulunut aika | $t = \tfrac{T_{1/2}}{\ln 2}\ln\tfrac{N_0}{N}$ | ajoitusten perustyökalu |

> **Yleisin virhe:** sekoitetaan **hajonnut** osuus ja **jäljellä oleva** osuus. Hajoamislakiin sijoitetaan aina **jäljellä oleva** $N$ tai $A$.
