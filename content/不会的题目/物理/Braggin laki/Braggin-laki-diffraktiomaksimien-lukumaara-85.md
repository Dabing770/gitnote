# Braggin laki ja diffraktiomaksimien lukumäärä

## Alkuperäinen tehtävä

**Tehtävä 85.**

Röntgensäteilyn aallonpituus on 85 pm. Säteilyä suunnataan kiteeseen, jonka atomitasojen etäisyys on 2,73 · 10⁻¹⁰ m.

a) Kuinka monta heijastuneen säteilyn diffraktiomaksimia voidaan havaita?

## Ydinasiat

**Braggin laki:**

$$2d\sin\theta = n\lambda,\qquad n = 1, 2, 3, \dots$$

- $d$ = atomitasojen (hilatasojen) etäisyys
- $\theta$ = sirontakulma mitattuna **hilatasosta** (ei normaalista!)
- $n$ = maksimin kertaluku

**Ratkaiseva rajoitus:** $\sin\theta \le 1$. Tästä seuraa maksimien lukumäärän yläraja:

$$n = \frac{2d\sin\theta}{\lambda} \le \frac{2d}{\lambda}$$

Suurin havaittava kertaluku on siis suurin kokonaisluku, joka on pienempi tai yhtä suuri kuin $2d/\lambda$.

Yksikkömuunnos: $1\ \text{pm} = 10^{-12}\ \text{m}$.

## Minun virheeni

Todennäköisiä virhelähteitä tässä tehtävätyypissä:

1. **Ei tajua, että kysymys on epäyhtälöstä $\sin\theta \le 1$.** Tehtävässä ei anneta yhtään kulmaa, joten helposti tuntuu, ettei tietoja ole tarpeeksi. Puuttuva tieto ei ole kulma — se on fysikaalinen ehto $\sin\theta \le 1$.
2. **Pyöristää tuloksen 6,42 ylöspäin luvuksi 7.** Tässä on pakko pyöristää **alaspäin**, koska $n = 7$ vaatisi $\sin\theta > 1$, mikä on mahdotonta.
3. **Unohtaa yksikkömuunnoksen** pm → m ($85\ \text{pm} = 8,5 \cdot 10^{-11}\ \text{m}$).
4. **Laskee $n = 0$ mukaan.** Braggin laissa kertaluku alkaa arvosta $n = 1$; $n = 0$ vastaisi suoraa peiliheijastusta kaikilla kulmilla eikä ole diffraktiomaksimi.

## Ratkaisu

**Tunnetut suureet:**

$$\lambda = 85\ \text{pm} = 8{,}5 \cdot 10^{-11}\ \text{m}, \qquad d = 2{,}73 \cdot 10^{-10}\ \text{m}$$

**Braggin laista:**

$$2d\sin\theta = n\lambda \quad \Rightarrow \quad \sin\theta = \frac{n\lambda}{2d}$$

Koska aina $\sin\theta \le 1$:

$$\frac{n\lambda}{2d} \le 1 \quad \Rightarrow \quad n \le \frac{2d}{\lambda}$$

**Sijoitetaan:**

$$n \le \frac{2 \cdot 2{,}73 \cdot 10^{-10}\ \text{m}}{8{,}5 \cdot 10^{-11}\ \text{m}} = \frac{5{,}46 \cdot 10^{-10}}{8{,}5 \cdot 10^{-11}} = 6{,}42$$

Koska $n$ on kokonaisluku, suurin mahdollinen kertaluku on $n = 6$.

**Vastaus:** Havaittavia diffraktiomaksimeja on **6 kappaletta** (kertaluvut $n = 1, 2, 3, 4, 5, 6$).

**Tarkistus:** kertaluvun $n = 6$ kulma on

$$\sin\theta = \frac{6 \cdot 8{,}5 \cdot 10^{-11}}{5{,}46 \cdot 10^{-10}} = 0{,}934 \quad \Rightarrow \quad \theta \approx 69^\circ \ \checkmark$$

Kertaluvulle $n = 7$ saataisiin $\sin\theta = 1{,}09 > 1$ — mahdotonta.

## Mitä minun pitää osata

1. **Braggin laki ulkoa:** $2d\sin\theta = n\lambda$, ja että $\theta$ mitataan hilatasosta.
2. **Tunnistaa "kuinka monta maksimia" -tehtävätyyppi:** aina kun kysytään maksimien *lukumäärää*, ratkaisu perustuu ehtoon $\sin\theta \le 1$ (hilassa vastaavasti $\sin\theta \le 1$ yhtälössä $d\sin\theta = n\lambda$).
3. **Pyöristää aina alaspäin** lukumäärää etsittäessä — fysikaalinen mahdottomuus rajaa ylöspäin pyöristämisen pois.
4. **Osata pikayhtälö:** $n_{max} = \lfloor 2d/\lambda \rfloor$ Braggin heijastukselle, $n_{max} = \lfloor d/\lambda \rfloor$ tavalliselle hilalle.
5. **Yksikkömuunnokset:** pm, nm, Å ($1\ \text{Å} = 10^{-10}\ \text{m}$) → m.
6. **Huomata, että diffraktio on mahdollista vain kun $\lambda < 2d$** — siksi juuri röntgensäteilyä käytetään kiderakenteiden tutkimiseen.
