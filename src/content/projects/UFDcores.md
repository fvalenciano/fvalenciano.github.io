---
title:
  en: "Cored galaxies in cuspy Dark Matter halos"
  es: "Galaxias con cores en halos de materia oscura cuspy"
year: "2025"
description:
  en: "Testing whether stellar cores in ultra-faint dwarf galaxies really rule out cuspy dark-matter halos."
  es: "Comprobamos si los núcleos estelares en galaxias enanas ultra-débiles realmente descartan halos de materia oscura cuspy."
image: "/fornax.jpg"
paper: "https://ui.adsabs.harvard.edu/abs/2025arXiv251215886V/abstract"
---

<div class="lang-en">

## Introduction

If you’ve ever wondered what really keeps stars “glued” inside a galaxy, you’re already thinking about **dark matter** — the invisible substance that makes up about 28% of the mass of the Universe. In this work we focus on one of the classic puzzles in astrophysics: the apparent **mismatch** between what dark‑matter theory predicts and what we observe in small galaxies.

Simulations based on the standard cosmological model (ΛCDM: the **theory** that reasonably describes how structures have formed from the Big Bang to today) predict that dark‑matter halos should have a central density peak (a **cusp**). However, **observations** of many dwarf galaxies — especially the smallest ones — often show that their stars are more evenly distributed in the centre, forming a **core**.

<img src="/UFDcores/corecusp.png" alt="Core vs cusp" style="width: 90%; margin: 1rem auto;" />
<br>

So the question is: is the theory wrong, or why are we observing **cores** in galaxies?

There are two main ways to explain this without throwing away everything we know about the Universe, and the explanation boils down to two reasons:

<div style="margin-top: 1rem;"></div>

**1. Supernova explosions:** When a star runs out of fuel, it dies in an explosion we call a *supernova*. If a galaxy has many stars in its centre, these explosions can “push out” dark matter and flatten its density profile (turning a **cusp** into a **core**). How efficient this is depends on the galaxy’s mass — more precisely, on the balance between mass and gravitational attraction. In large galaxies like the Milky Way (around 10 billion stars), gravity is so strong that these explosions are not very efficient and the dark‑matter profile stays **cuspy**. In dwarf satellites like Fornax (around 100 million stars), the explosions are efficient and can create a **core**. If we go even smaller, to the recently discovered ultra‑faint dwarf galaxies with only a few thousand stars, the explosions are not enough to create a **core**.

<div style="margin-top: 1rem;"></div>

**2. Star‑formation history:** If a galaxy formed stars rapidly and violently for a long time, you get again explosions that can redistribute dark matter and create a **core**. The efficiency follows the same logic described above.

<img src="/UFDcores/cores.png" alt="Core vs cusp" style="width: 100%; margin: 1rem auto;" />
<br>

You might ask: *How do we infer a cusp or a core?* We do it through stellar dynamics, i.e., their velocities. When you detect a star orbiting a galaxy, its speed tells you directly about the gravitational force keeping it in orbit, and therefore about the mass and density.

## What is the problem with ultra-faint galaxies?

Here is where things get interesting. These **ULTRA‑FAINT GALAXIES** (not lazy — just extremely faint) seem to show **core** profiles. How? Didn’t we say that with so few stars, supernova feedback shouldn’t be efficient enough to form a **core**?
Yes, and this is where a series of studies by IAC researchers Jorge Sánchez Almeida and Ignacio Trujillo come in.
In such faint galaxies we cannot measure velocities reliably, so they only work with the spatial distribution of stars (i.e., how stars are distributed, whether density rises toward the centre or not).
In those studies, they show with statistical‑physics arguments that the stellar density profiles are incompatible with **cuspy** dark‑matter halos.
That would imply the standard cosmological model is wrong — and that’s exactly what those papers claim.

<div style="margin-top: 1rem;"></div>

If this were true, it would be a revolution: we would have to change our understanding of the laws of the Universe. But there are still things that are not completely clear in those studies.
This work asks a simple but crucial question:  
**Does observing a stellar “core” automatically mean that the dark‑matter halo must also be “core”?**

It may seem intuitive: if stars trace the dark‑matter potential, they would behave like marbles on a sheet, moving according to that surface.

Our answer is: <span class="highlight">**NOT necessarily**</span>

The key reason is that what we observe with telescopes is a **2D projection** of a galaxy on the sky. Different three‑dimensional stellar distributions — some compatible with cuspy dark matter, others not — can look almost identical once projected into two dimensions. As a result, a flat stellar profile in observations **is not strong evidence** against cuspy dark‑matter halos.

---

<!-- <h2 style="font-size: 1.25rem !important; font-weight: 500 !important; margin: 1rem 0 0.5rem !important;">What does cusp and core mean in dark matter?</h2> -->


<!-- To explore this question, we take a deliberately minimal and transparent approach:

- We analyse **photometric data** (the spatial distribution of stars) for:
  - **Ultra-faint dwarf galaxies (UFDs)**, which contain very few stars
  - **Fornax**, one of the best-observed dwarf galaxies around the Milky Way
- We model the stellar distributions using several commonly used profiles (e.g. Plummer, Einasto, Sérsic)
- We distinguish between **weak** and **strong** stellar cores in three dimensions, and study how they appear once projected into two dimensions
- We test whether these stellar profiles can exist in **physical equilibrium** inside a **cuspy dark-matter halo**, using well-established dynamical consistency conditions
- We compare models statistically to evaluate whether current data can truly distinguish between different inner structures

Importantly, we show that **photometry alone is often insufficient** to tell whether a galaxy’s stars live in a cuspy or cored dark-matter halo. -->

## What do we do in this paper?

The article has many mathematical subtleties because, deep down, astrophysicists did not have a robust definition of a **core**: “something whose density is constant, with zero derivative”.
But if you remember anything about limits from math class, approaching zero linearly is not the same as logarithmically. As abstract as this sounds, it has strong consequences here.
For the first time, in our paper we introduce the following classification:
<div style="margin-top: 1rem;"></div>

**Strong core**: the logarithmic slope ($\gamma$) and the linear slope ($b$) both go to zero.

**Weak core**: the logarithmic slope ($\gamma$) goes to zero but the linear slope ($b$) does not.

<div style="margin-top: 1rem;"></div>

The key point is that **strong‑core** profiles are incompatible with standard dark‑matter profiles, while **weak‑core** profiles are perfectly compatible.

<div style="margin-top: 1rem;"></div>

*How do we test compatibility?*

<div style="margin-top: 1rem;"></div>

We use a method developed by the great astronomer Arthur **Eddington** in a 1911 paper, where he relates: (1) stellar density profile, (2) gravitational potential, and (3) distribution function.
The latter describes how the energy of stars is distributed while they orbit in that potential.

## $$\rho$$ $+$ $\Psi$ $\longrightarrow$ $f(E)$

If the distribution function $f(E)$ is negative, that combination of stars + dark matter is not physical and cannot exist. This argument is exactly what earlier papers used to rule out standard dark matter.

<div style="margin-top: 1rem;"></div>

Returning to our classification, a **strong core** leads to a negative distribution function (not possible) but a **weak core** does not.

<div style="margin-top: 1rem;"></div>

*What happens when we project to 2D?*

<div style="margin-top: 1rem;"></div>

We must remember that whenever we look at a galaxy, we see its projection onto a plane — we see it in 2D, not in 3D. This projection effect has important consequences. In our context, both **strong core** and **weak core** project to a **strong core**!
Let me explain: if we observe a galaxy profile in 2D and it is flat, we will see it as a **strong core** and therefore might think its distribution function is negative $\rightarrow$ not possible.
However, when deprojected, that profile could come from either a **strong core** or a **weak core**,
since both are <span class="highlight"><u>**INDISTINGUISHABLE**</u></span> in projection.


<img src="/UFDcores/henr.png" alt="Core vs cusp" style="width: 100%; margin: 1rem auto;" />
<br>


In the figure above, left, we see that both **strong cores** and **weak cores** give a similar 2D profile, and bottom‑right we see that some have positive distribution functions while others are negative.

<div style="margin-top: 1rem;"></div>

Therefore the main result is:
<span class="highlight">**stellar distributions that look very similar in projection (2D) can correspond to fundamentally different physical structures in 3D**</span>.

Some of these configurations are fully compatible with cuspy halos, while others are not — and yet photometric data alone struggles to tell them apart.

<div style="margin-top: 1rem;"></div>

*What about the observations?*

To demonstrate these mathematical theorems, we use the same data as the ultra‑faint studies. In fact, we show that when fitting the 2D profile, **strong‑core** and **weak‑core** models are indistinguishable, with **weak cores** often preferred.

<img src="/UFDcores/ufds.png" alt="Core vs cusp" style="width: 100%; margin: 1rem auto;" />
<br>

Okay, this is because these systems have few stars. Going to an extreme case: with enough precision and data, can I statistically distinguish between the two?

For that, we analyse the dwarf galaxy **Fornax**, one of the best studied and with the highest resolution (and it’s our header image).
<img src="/UFDcores/fornax.png" alt="Core vs cusp" style="width: 80%; margin: 1rem auto;" />
<br>

We see that all the models we fit give very similar fits (statistically speaking).

We conclude: <span class="highlight">even with exquisite data we cannot distinguish between **strong cores** and **weak cores**. Therefore using the (2D!) observation of **strong cores** is not a fair way to discard the standard cosmological model.</span>
<div style="margin-top: 1rem;"></div>

---

## Why is all this important?

I ask myself the same question... But it is true that in recent years, claims based only on photometric **cores** in ultra‑faint galaxies have been used to question the standard dark‑matter model. This work shows that such conclusions should be treated with caution.

To make robust statements about the nature of dark matter, **we need more than how galaxies look** — we also need **how their stars move**. Combining photometry with stellar kinematics is essential to break the degeneracies introduced by projection effects.

---

## Personal note

The most fascinating part of this project was its own development. We started by seeing that combinations of stars + standard dark matter were compatible in simulations, but it did not seem like an argument worth publishing. It wasn’t until, by chance, I met Julio Navarro (discoverer of the universal dark‑matter halo profile that bears his name, NFW) and Raphael Errani (one of the leading experts in galaxy dynamics) during a dinner at a Turkish restaurant in Durham — thanks to Isabel Santos‑Santos — that a beautiful and sincere collaboration became possible.
<div style="margin-top: 1rem;"></div>
What struck me most that night was that they were also investigating this question, and a collaboration emerged. They told me to lead the research and share it with them. It was months of intense work, especially alongside my supervisor Jorge and Ariana, and thanks to the data provided by Giuseppina.
It was months of learning, letting the equations and data guide us, finding this classification and finally solving a puzzle we had been carrying for a year — all thanks to a sincere collaboration between people eager to uncover the truth of this small but important problem.

---

## Links

- [Paper](https://ui.adsabs.harvard.edu/abs/2025arXiv251215886V/abstract)
- [Code](https://github.com/...)

</div>

<div class="lang-es">

## Introducción

Si alguna vez te has preguntado qué mantiene realmente "pegadas" las estrellas en una galaxia, ya estás pensando en la **materia oscura** — la sustancia invisible que domina el 28% de la masa del Universo. En este trabajo nos centramos en uno de los enigmas clásicos de la astrofísica: la aparente **discrepancia** entre lo que predicen la teoría de la materia oscura y lo que observamos en galaxias pequeñas.


Las simulaciones basadas en el modelo cosmológico estándar (ΛCDM: la **teoría** que describe suficientemente bien cómo se han formado las estructuras que observamos desde el Big Bang hasta hoy) 
predicen que los halos de materia oscura deberían tener un pico de densidad central (un **cusp**). Sin embargo, las **observaciones** de muchas galaxias enanas — especialmente las más pequeñas — muestran a menudo que sus estrellas parecen distribuidas de forma más uniforme en el centro, formando un **core**.

<img src="/UFDcores/corecusp.png" alt="Core vs cusp" style="width: 90%; margin: 1rem auto;" />
<br>

La pregunta que surge es: ¿Entonces la teoría está mal, o por qué estamos observando esos **cores** en galaxias?

Muy listo, pues tenemos dos vías para explicar esto sin tener que volvernos locos y cambiar toda la teoría que conocemos del Universo, 
y principalmente es debido a dos razones:

<div style="margin-top: 1rem;"></div>

**1. Explosiones de supernova:** Cuando a una estrella se le acaba el combustible, muere dejando una explosión que conocemos por *supernova*. 
Si la galaxia tiene muchas estrellas en el centro, estas explosiones "esparcirán" la materia oscura del centro aplanando su perfil de densidad (es decir pasaría de ser un **cusp** a un **core**). 
La eficiencia de estas explosiones depende de la masa de la galaxia, más concretamente en el balance entre la masa y la atracción grvitatoria. Para ser más directo, galaxias grandes como la nuestra (Vía Láctea) donde tenemos alrededor de 10 mil millones de estrellas, la gravedad es tan grande que al final esas explosiones no son eficientes y el perfil de materia oscura permanece **cuspy**. En galaxias enanas, satelites de nuestra galaxia (como Fornax) donde tenemos 100 millones de estrellas estas explosiones son muy eficientes y por tanto esparcen la materia oscura del centro, dejando un **core**. 
Si seguimos bajando a galaxias más pequeñas, las recientemente descubiertas galaxias ultra-débiles se encuentran en el caso opuesto, al tener tan pocas estrellas, del orden de mil o 10 mil, estas explosiones no son suficiente para crear el **core**.

<div style="margin-top: 1rem;"></div>

**2. Historia de formación estelar:** Si la galaxia ha estado formando estrellas durante mucho tiempo de forma rápida y violenta, dson d enuevo explosiones que pueden esparcir la materia oscura y formar el **core**. La eficiencia es similar a la que he descrito antes.

<img src="/UFDcores/cores.png" alt="Core vs cusp" style="width: 100%; margin: 1rem auto;" />
<br>


Os preguntaréis: *¿Cómo inferimos un cusp o un core?* Pues lo hacemos a través de la dinámica de las estrellas, sus velocidades. Cuando detectas una estrella orbitando alrededor de una galaxia su velocidad te habla directamente de la fuerza gravitatoria que está sosteniendo esa velocidad en orbita, y por tanto de la masa que hay, por ende su densidad.

## ¿Qué problema tienen las galaxias ultra-débiles?

Lo interesante aparece ahora, porque resulta que estas **GALAXIAS ULTRA-DÉBILES** (no es que sean flojeras sino que su luz es muy tenue) parece que muestran perfiles **core**. ¿Cómo!? ¿No hemos dicho que si hay pocas estrellas las explosiones de supernova no son eficientes para formar el **core**?
Pues sí, y es aquí donde entra una serie de investigaciones realizadas por investigadores del Instituto de Astrofísica de Canarias (IAC) Jorge Sánchez Almeida e Igncio Trujillo. 
En estas galaxias tan tenues no podemos medir con certeza velocidades, por lo que ellos solo trabajan con la distirbución espacial de las estrellas (es decir, cómo de repartidas están las estrellas, si hay una densidad creciente hacia el centro o no).
En esta serie de investigaciones, demuestran con mecanismos de físitca estadística que esos perfiles de densidad de estrellas son incompatibles con halos de materia oscura que sean **cuspy**. 
Esto implicaría por tanto que el modelo cosmológico estándar está mal. Y es justamente lo que afirman en sus artículos. 

<div style="margin-top: 1rem;"></div>

Si esto fuera cierto, sería una revolución, tendríamos que cmabiar todo nuestro entendimiento de las leyes del Universo. Pero hay ciertas cosas que aún no quedan del todo claras en sus investigaciones.
Este trabajo plantea una pregunta simple pero crucial:  
**¿Observar un "core" estelar implica automáticamente que el halo de materia oscura también debe ser "core"?**

Puede parecer intuitivo, si las estrellas son trazadores de la materia oscura (del potencial gravitatorio en el que están) seráin como canicas en una manta, se moverían acorde a dicha superficie.   


Nuestra respuesta es: <span class="highlight">**NO necesariamente**</span> 

La razón clave es que lo que observamos con los telescopios es una **proyección 2D** de una galaxia en el cielo. Diferentes distribuciones estelares tridimensionales — algunas compatibles con materia oscura cuspy y otras no — pueden verse casi idénticas una vez proyectadas en dos dimensiones. Como resultado, un perfil estelar plano en observaciones **no es una evidencia fuerte** contra halos de materia oscura cuspy.

---

<!-- <h2 style="font-size: 1.25rem !important; font-weight: 500 !important; margin: 1rem 0 0.5rem !important;">¿Qué significa cusp y core en materia oscura?</h2> -->


<!-- Para explorar esta cuestión, adoptamos un enfoque deliberadamente minimalista y transparente:

- Analizamos **datos fotométricos** (la distribución espacial de estrellas) para:
  - **Galaxias enanas ultra-débiles (UFDs)**, que contienen muy pocas estrellas
  - **Fornax**, una de las galaxias enanas mejor observadas alrededor de la Vía Láctea
- Modelamos las distribuciones estelares usando perfiles comúnmente empleados (p. ej., Plummer, Einasto, Sérsic)
- Distinguimos entre núcleos estelares **débiles** y **fuertes** en tres dimensiones, y estudiamos cómo aparecen al proyectarse en dos dimensiones
- Probamos si estos perfiles estelares pueden existir en **equilibrio físico** dentro de un **halo de materia oscura cuspy**, usando condiciones de consistencia dinámica bien establecidas
- Comparamos modelos estadísticamente para evaluar si los datos actuales pueden distinguir realmente entre diferentes estructuras internas

De forma importante, mostramos que **la fotometría por sí sola suele ser insuficiente** para determinar si las estrellas de una galaxia viven en un halo cuspy o con núcleo. -->

## ¿Qué es lo que hacemos en este artículo?

El artículo tiene muchas sutilezas matemáticas, porque en el fondo los astrofísicos no tenían una definición robusta de lo que era un **core**: "algo cuya densidad es constante, derivada cero". 
Pero si os acordais algo de vuestra asignatura de matemáticas y los límites, no es lo mismo que tienda a cero de forma lineal o logarítmica. Y por muy abstracta que sea esta definición tiene consecuencias brutales en este contexto.
Por primera vez, en nuestro artículo introducimos la siguiente clasificación:
<div style="margin-top: 1rem;"></div>

**Strong core**: pendiente logarítmica ($\gamma$) y lineal ($b$) van a cero.

**Weak core**: pendiente logarítmica ($\gamma$) va a cero pero lineal ($b$) no.

<div style="margin-top: 1rem;"></div>

La clave reside en que los perfiles **storng core** sí que son INCOMPATIBLES con perfiles de materia oscura, mientras que los **weak core** son perfectamente compatibles.

<div style="margin-top: 1rem;"></div>

*¿Cómo medimos la compatibilidad?*

<div style="margin-top: 1rem;"></div>

Usamos un método desarrollado por el gran astrónomo Arthur **Eddington** en un artículo que publicó en 1911, donde relaciona: (1) Perfil de densidad estelar, (2) Potencial gravitatorio y (3) Función de distirbución. 
Esta última describe cómo se distribuye la energía de esas estrellas que orbitan en dicho potencial. 

## $$\rho$$ $+$ $\Psi$ $\longrightarrow$ $f(E)$

Si la función de distirbución $f(E)$ es negativa significa que esa combinación de estrellas + materia oscura NO es física, no puede existir. Este argumento es justamente lo que usaban los artículos previos para descartar la materia oscura estándar.

<div style="margin-top: 1rem;"></div>

Volviendo a nuestra clasificación, tenemos por tanto que un **strong core** si que lleva a una función de distribución negativa (no posible) pero un **weak core** no tiene dicho problema.

<div style="margin-top: 1rem;"></div>

*¿Qué pasa cuando proyectamos en 2D?*

<div style="margin-top: 1rem;"></div>

Hay que tener en cuenta que SIEMPRE que miramos a una galaxia, vemos su proyección en un plano, la vemos en 2D no en 3D! Este efecto de proyección tiene ciertas consecuencias. En neustro contexto resulta que tanto **core fuerte** como **core débil** proyecta en **core fuerte**!
Me explico, esto quiere decir que SIEMPRE que observemos un perfil de una galaxia en 2D si es plano, vamos a verlo como un **strong core** y por tanto podremos pensar que su función de distribución es negativa $\rightarrow$ no posible. 
Sin embargo, ese perfil al deprouyectarlo podría venir tanto de un **strong core** como de un **weak core**, 
ya que ambos son <span class="highlight"><u>**INDISTINGUIBLES**</u></span> en proyección.


<img src="/UFDcores/henr.png" alt="Core vs cusp" style="width: 100%; margin: 1rem auto;" />
<br>


Vemos en la figura de arriba a la izquierda que tanto **strong cores** como **weak cores** dan un perfil 2D similar, y vemos abajo a la derecha que algunos tienen funciones de distirbución positivas mientras que otros negativas.

<div style="margin-top: 1rem;"></div>

Por tanto el main result es que:
<span class="highlight">**distribuciones estelares que se ven muy similares en proyección (2D) pueden corresponder a estructuras físicas fundamentalmente distintas en 3D**</span>.

Algunas de estas configuraciones son totalmente compatibles con halos cuspy, mientras que otras no — y, aun así, los datos fotométricos por sí solos tienen dificultades para distinguirlas. 

<div style="margin-top: 1rem;"></div>

*¿Qué pasa con las observaciones?*

Para demostrar estos teoremas matemáticos, usamos los mismos datos que usaron para las galaxias ultra-débiles. Demostramos de hecho que al ajustar el perfil 2D los modelos **strong core** como **weak core** son indistinguibles, incluso siendo los **weak core** preferidos.

<img src="/UFDcores/ufds.png" alt="Core vs cusp" style="width: 100%; margin: 1rem auto;" />
<br>

Vale, esto es porque en estos sistemas hay pocas estrellas. Yendonos a un caso extremo: ¿Con suficiente precisión y datos puedo distinguir estadísticamente entre ambos?

Para ello analizamos la galaxia enana **Fornax**, una de las mejor estudiadas y con mayor resolución (y que es nuestra foto de entrada).
<img src="/UFDcores/fornax.png" alt="Core vs cusp" style="width: 80%; margin: 1rem auto;" />
<br>

Vemos que todos los modelos que fiteamos dan ajustes muy similares (estadísticamente hablando).

De aquí concluimos: <span class="highlight">ni siquiera con datos exquisitos tenemos capacidad para distinguir entre **strong cores** y **weak cores**. Por tanto utilizar la observacion (en 2D!) de **strong cores** no es honesta para descartar el modelo cosmológico estándar.</span>
<div style="margin-top: 1rem;"></div>

---

## ¿Y todo esto para qué es importante?

Yo me hago la misma pregunta... Pero es cierto que en los últimos años, afirmaciones basadas únicamente en **cores** fotométricos en galaxias ultra-débiles se han usado para cuestionar el modelo estándar de materia oscura. Este trabajo muestra que esas conclusiones deben tomarse con cautela.

Para hacer afirmaciones robustas sobre la naturaleza de la materia oscura, **necesitamos algo más que cómo se ven las galaxias** — también necesitamos **cómo se mueven sus estrellas**. Combinar fotometría con cinemática estelar es esencial para romper las degeneracias introducidas por los efectos de proyección.

---

## Nota personal

Lo más fascinante de este proyecto fue su propio desarollo. Comenzamos viendo que estas combinaciones de estrellas + materia oscura estándar eran compatibles en simulaciones, pero no nos pareció un argumento digno de ser publicado. No fue hasta que en una escuela en Durham caigo por fortuna en una cena en un restaurante turco con Julio Navarro (descubridor de el perfi universal de los halos de materia oscura, que lleva su nombre, NFW) y Raphael Errani (uno de los mayores expertos en dinámica de galaxias) todo gracias a la invitación de Isabel Santos-Santos :).
<div style="margin-top: 1rem;"></div>
Lo que me impresionó de esa cena fue que cuando salió esta cuestión, ellos también la estaban investigando y se dio una posible colaboración bella y sincera. Me dijeron que llevara yo adelante la investigación y que la compartiera con ellos. Fueron meses de intenso trabajo, sobre todo de la mano de mi supervisor Jorge y Arianana, y gracias a los datos que nos ofreció Giuseppina. 
Fueron meses de un gran aprendizaje dejándonos educar por las ecuaciones y los datos, encontrando esta clasificación y por fin entendiendo un rompecabezas con el que llevábamos un año, todo gracias a una sincera colaboración entre distintas personas deseosas de descubrir la verdad de este pequeño particular, no por ello despreciable.

---

## Enlaces

- [Paper](https://ui.adsabs.harvard.edu/abs/2025arXiv251215886V/abstract)
- [Código](https://github.com/...)

</div>
