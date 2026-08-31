## Radioaktiivinen hajoaminen
= Epävakaa ydin hajoaa itsestään toisen alkuaineen ytimeksi ja lähettää **ydinsäteilyä**

- Suurin osa nuklideista on epävakaita eli pysymättömiä → **radionuklideja**
- Hajoaminen on **satunnainen** prosessi: yksittäisen ytimen hajoamishetkeä ei voi ennustaa
- Hajoamiseen **ei voi vaikuttaa** makroskooppisilla ominaisuuksilla (lämpötila, paine, kemiallinen sidos)
- Säteilylajit:
	- Hiukkassäteily: **α**, **β**, **neutronisäteily**
	- **γ-säteily** = hyvin lyhytaaltoista sähkömagneettista säteilyä
- Monilla nuklideilla on vaihtoehtoisia hajoamistapoja (esim. $^{233}$Am: β⁺ 95,5 %, α 4,5 %). Taulukoissa ilmoitetaan tyypillisin.

> Ilmaus "radioaktiivinen säteily" on harhaanjohtava — säteily ei ole radioaktiivista, vaan **ionisoivaa**. Radioaktiivisia ovat ytimet.

### Historia
- **Becquerel 1896**: uraaninäyte jätti jäljen valokuvauslevyyn ilman valoa → uusi säteilylaji
- **Marie Curie**: nimesi ilmiön radioaktiivisuudeksi, löysi radiumin ja poloniumin

---

## Massakato ja vapautuva energia
= Hajoamistuotteiden yhteismassa on **pienempi** kuin lähtöytimen massa

$$
\Delta m = m_{\text{lähtö}} - \sum m_{\text{tuotteet}}
$$

Massan ja energian ekvivalenssi → hajoamisessa vapautuva energia:

$$
Q = \Delta m c^2
$$

- Ydin siirtyy hajotessaan **energeettisesti edullisempaan tilaan**
- **Massakato** (ydinmuutoksessa kadonnut massa) ≠ **massavaje** (ytimen ja sen rakenneosien massaero)

### Säilymislait ydinprosesseissa
Energia · liikemäärä · pyörimismäärä · sähkövaraus · nukleonien lukumäärä

---

## Alfahajoaminen
= Ytimestä irtoaa **alfahiukkanen** $^4_2$He (2 protonia + 2 neutronia)

- Raskaiden ydinten **yleisin** hajoamistapa
- Syy: heliumytimen **sidososuus** on selvästi suurempi kuin naapurinuklidien → α-hiukkanen on energeettisesti hyvin edullinen kokonaisuus
- **Emoydin** → **tytärydin** + α
- Järjestysluku pienenee 2:lla, massaluku 4:llä

$$
^{A}_{Z}\text{X} \rightarrow\ ^{A-4}_{Z-2}\text{Y} + ^{4}_{2}\text{He}
$$

### Massakato alfahajoamisessa
Ytimien massoja ei ole taulukoitu, mutta **atomimassoja voi käyttää suoraan**, koska tytäratomissa ja heliumatomissa on yhteensä yhtä monta elektronia kuin emoatomissa:

$$
\Delta m = m_{\text{X-atomi}} - m_{\text{Y-atomi}} - m_{\text{He-atomi}}
$$

$$
Q = (m_{\text{X-atomi}} - m_{\text{Y-atomi}} - m_{\text{He-atomi}})c^2
$$

### Energian jakautuminen
Emoydin voidaan olettaa **levossa** (liike-energia mitätön verrattuna Q:hun).
Liikemäärän säilyminen → hiukkaset lähtevät vastakkaisiin suuntiin yhtä suurin liikemäärin:

$$
p_\alpha = p_{\text{Y}}
$$

Koska $E_k = \dfrac{p^2}{2m}$, liike-energia jakautuu **massojen käänteisessä suhteessa**:

$$
\frac{E_{k,\alpha}}{E_{k,\text{Y}}} = \frac{m_{\text{Y}}}{m_\alpha}
\quad\Longrightarrow\quad
E_{k,\alpha} = \frac{m_{\text{Y}}}{m_{\text{Y}} + m_\alpha}\,Q
$$

→ Kevyt α-hiukkanen saa **valtaosan** energiasta.

---

## Spontaani fissio
= Raskas ydin hajoaa itsestään kahdeksi keskiraskaaksi ytimeksi ilman ulkoista syytä

- Raskaissa ytimissä on suhteellisesti enemmän neutroneja kuin keskiraskaissa → vapautuu tyypillisesti **2–3 neutronia**
- Protonien ja neutronien määrä säilyy → massakato lasketaan **atomimassoilla**
- Yleensä alfa-aktiivisten nuklidien **vaihtoehtoinen** hajoamistapa
- Esim. $^{235}$U: spontaanin fission todennäköisyys $7\cdot10^{-11}$

---

## Gammasäteily
= Virittyneen ytimen viritystilan purkautuessa emittoitunut fotoni

- Ytimen energiatilat ovat **kvantittuneita** (kuten elektronien), suuruusluokka **MeV** → fotoni osuu γ-alueelle
- **Erillistä gammahajoamista ei ole** — γ-säteily on aina seurausta jostakin radioaktiivisesta hajoamisesta
- Gammafotonin energia = tytärytimen energiatilojen **erotus**

$$
E_\gamma = E_2 - E_1
$$

- Jos tytärydin jää viritystilaan, α-hiukkanen ja tytärydin saavat **vähemmän** liike-energiaa — mutta jakosuhde pysyy samana
- α-hiukkasten energioita mittaamalla selviää, kuinka suuri osuus tytärytimistä jää viritystilaan
- γ-energiat ovat hajoamiselle **ominaisia** → toimivat "sormenjälkenä" nuklidin tunnistamiseen

**Esim. $^{226}$Ra → $^{222}$Rn:** 94 % suoraan perustilaan, 6 % viritystilaan.

---

## Sovelluksia
| Sovellus | Periaate |
|---|---|
| Kilpirauhasen isotooppitutkimus | Radioaktiivinen jodi kulkeutuu kilpirauhaseen, seurataan gammakameralla |
| Kilpirauhassyövän hoito | Jakautumisvaiheessa olevat syöpäsolut ovat herkkiä ionisoivalle säteilylle |
| Keuhkoveritulpan diagnosointi | Hengitetään radioaktiivista hiilipölyä, seurataan säteilyä |
| Palovaroitin ($^{241}$Am) | α-hiukkaset ionisoivat ilmaa; savu sitoo ionit → virta pienenee → hälytys |

> Historiallisia varoittavia esimerkkejä: radium- ja thorium-kosmetiikka, pullotettu radonvesi, Tšernobyl 26.4.1986.
