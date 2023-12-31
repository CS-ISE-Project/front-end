import React, { useState } from "react";

function ArticleDetails() {
  const [fav, setFav] = useState(0);
  return (
    <div className="flex flex-col items-center w-[84vw] lg:gap-[72px] md:my-[200px] my-[160px]">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-[72px] w-[100%] items-start">
        <div className="lg:w-[40vw] flex flex-col gap-8 items-center">
          <h2 className="font-semibold text-[2.5rem] text-Blue66">
            Nanoparticules : Propriétés, applications et toxicités
          </h2>
          <div className="flex items-center gap-4 w-[100%]">
            <img src="/Author.svg" alt="author" />
            <h3 className="text-[1.5rem] text-Typo font-semibold">
              Auteur : Abdelkarim
            </h3>
          </div>
          <div className="flex items-center gap-4 w-[100%]">
            <img src="/Date.svg" alt="data" />
            <h3 className="text-[1.5rem] text-Typo font-semibold">
              22-12-2023
            </h3>
          </div>
          <div className="flex lg:hidden justify-between item-center w-[100%]">
            <button className="bg-Spbtn text-white flex gap-6 items-center py-6 px-16  rounded-[8px] font-semibold text-[1.2rem]">
              <img src="/PDF.svg" alt="pdf" />
              Download Article
            </button>
            {!fav ? (
              <button onClick={() => setFav(1)}>
                <img src="/Star.svg" alt="star" />
              </button>
            ) : (
              <button onClick={() => setFav(0)}>
                <img src="/StarF.svg" alt="starf" />
              </button>
            )}
          </div>
          <div className="flex flex-col gap-4 w-[100%]">
            <h3 className="text-[1.7rem] text-Typo font-extrabold">Abstract</h3>
            <h3 className="text-[1.5rem] text-Typo font-medium text-justify">
              We are witnessing an unprecedented expansion of Internet of Things
              (IoT) market, whose nodes are already outnumbering human
              population several times. Despite the huge popularity of IoT, its
              further expansion is slowed down by a lack of viable power supply
              methods capable to replace wires or batteries. Due to IoT demand
              for alternative supply, energy harvesting (EH) gathers attention
              from scientific groups all around the world. In particular,
              thermoelectricity (TE) seems to be a natural and intuitive
              candidate for IoT owing to magnitude and omnipresence of heat
              losses and amenability to direct, vibrationless, noiseless and
              reliable conversion. This review provides up-to-date comparison
              and evaluation of a recent progress in the field of
              thermoelectricity, resulting primarily from multidisciplinary
              optimization of materials, topologies and controlling circuitry.
              The improvement in materials integrates two trends: nanostructural
              modulation of pre-existing, conventional thermoelectric materials
              and synthesis of novel ones. Regarding topology, TE responds
              better and better to miniaturization trend of semiconductor
              industry, driven by miniaturization trend, by proposing
              alternatives to conventional π-type topology. And finally,
              recently developed controlling circuits consume extremely low
              power while idle, exhibit above-90% efficiency and start-up with
              ultra-low input voltages. Combined, these improvements position TE
              closer to marketization than ever before.
            </h3>
          </div>
        </div>
        <div className="lg:w-[40vw] flex flex-col gap-48">
          <div className="hidden lg:flex justify-between item-center w-[100%]">
            <button className="bg-Spbtn text-white flex gap-6 items-center py-6 px-16  rounded-[8px] font-semibold text-[1.2rem]">
              <img src="/PDF.svg" alt="pdf" />
              Download Article
            </button>
            {!fav ? (
              <button onClick={() => setFav(1)}>
                <img src="/Star.svg" alt="star" />
              </button>
            ) : (
              <button onClick={() => setFav(0)}>
                <img src="/StarF.svg" alt="starf" />
              </button>
            )}
          </div>

          <div className="flex flex-col w-[100%] gap-12">
            <div className="flex flex-col gap-4 w-[100%]">
              <h3 className="text-[1.7rem] text-Typo font-extrabold">
                Keywords
              </h3>
              <div className="flex gap-4 flex-wrap">
                <div className="bg-[#E6EEFC] px-8 py-4 flex items-center justify-center rounded-[4px]">
                  <p className="text-Blue100 text-[1.3rem]">Iot</p>
                </div>
                <div className="bg-[#E6EEFC] px-8 py-4 flex items-center justify-center rounded-[4px]">
                  <p className="text-Blue100 text-[1.3rem]">Internet</p>
                </div>
                <div className="bg-[#E6EEFC] px-8 py-4 flex items-center justify-center rounded-[4px]">
                  <p className="text-Blue100 text-[1.3rem]">Networks</p>
                </div>
                <div className="bg-[#E6EEFC] px-8 py-4 flex items-center justify-center rounded-[4px]">
                  <p className="text-Blue100 text-[1.3rem]">Arduino</p>
                </div>
                <div className="bg-[#E6EEFC] px-8 py-4 flex items-center justify-center rounded-[4px]">
                  <p className="text-Blue100 text-[1.3rem]">Hardware</p>
                </div>
                <div className="bg-[#E6EEFC] px-8 py-4 flex items-center justify-center rounded-[4px]">
                  <p className="text-Blue100 text-[1.3rem]">Quantum</p>
                </div>
                <div className="bg-[#E6EEFC] px-8 py-4 flex items-center justify-center rounded-[4px]">
                  <p className="text-Blue100 text-[1.3rem]">Ai</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-[100%]">
              <h3 className="text-[1.7rem] text-Typo font-extrabold">
                Institutions
              </h3>
              <div className="flex gap-4 flex-wrap">
                <div className="bg-[#FEF5F7] px-8 py-4 flex items-center justify-center rounded-[4px]">
                  <p className="text-Rose100 text-[1.3rem]">MIT</p>
                </div>
                <div className="bg-[#FEF5F7] px-8 py-4 flex items-center justify-center rounded-[4px]">
                  <p className="text-Rose100 text-[1.3rem]">ESI</p>
                </div>
                <div className="bg-[#FEF5F7] px-8 py-4 flex items-center justify-center rounded-[4px]">
                  <p className="text-Rose100 text-[1.3rem]">ENSIA</p>
                </div>
                <div className="bg-[#FEF5F7] px-8 py-4 flex items-center justify-center rounded-[4px]">
                  <p className="text-Rose100 text-[1.3rem]">USTHB</p>
                </div>
                <div className="bg-[#FEF5F7] px-8 py-4 flex items-center justify-center rounded-[4px]">
                  <p className="text-Rose100 text-[1.3rem]">NUYAD</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-[100%]">
              <h3 className="text-[1.7rem] text-Typo font-extrabold">
                Références
              </h3>
              <div className="flex flex-col gap-4 flex-wrap">
                <div className="flex flex-col w-[100%]">
                  <h3 className="text-[1.5rem] text-Typo font-medium">
                    J. Benes et al.
                  </h3>
                  <h3 className="text-[1.5rem] text-Purple100 font-bold">
                    The future of oil: geology versus technology
                  </h3>
                  <h3 className="text-[1.5rem] text-Typo font-medium">
                    Int. J. Forecast. (2015)
                  </h3>
                </div>
                <div className="flex flex-col w-[100%]">
                  <h3 className="text-[1.5rem] text-Typo font-medium">
                    J. Benes et al.
                  </h3>
                  <h3 className="text-[1.5rem] text-Purple100 font-bold">
                    The future of oil: geology versus technology
                  </h3>
                  <h3 className="text-[1.5rem] text-Typo font-medium">
                    Int. J. Forecast. (2015)
                  </h3>
                </div>
                <div className="flex flex-col w-[100%]">
                  <h3 className="text-[1.5rem] text-Typo font-medium">
                    J. Benes et al.
                  </h3>
                  <h3 className="text-[1.5rem] text-Purple100 font-bold">
                    The future of oil: geology versus technology
                  </h3>
                  <h3 className="text-[1.5rem] text-Typo font-medium">
                    Int. J. Forecast. (2015)
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-[100%]">
        <h3 className="text-[1.7rem] text-Typo font-extrabold text-center">
          Content
        </h3>
        <h3 className="text-[1.1rem] text-Typo font-medium text-justify">
          Introduction Urged by the worldwide increasing demand in energy [1],
          [2] (see Fig. 1a), constrained by the limited reserves of fossil fuels
          [2], [3], [4], [5] (see Fig. 1a) and facing a problem of global
          climate change [6], [7], [8], [9] (see Fig. 1b), all innovative
          solutions contributing to improve the renewable production of energy
          are playing a strategic role. As presented in Fig. 1a, the natural
          reserves of fossil fuels are predicted to be exhausted within: next 50
          years for oil [5], [10] and more than 100 years for coal [2], [4], gas
          [2], [3], and nuclear [11]. In this context, searching for alternative
          energy sources is an urgent necessity. If we target today a fully
          connected and Internet of Things (IoT) controlled planet, we cannot
          expose this strategy to a total failure in 50–100 years due to fossil
          energy shortage. Meanwhile, an emerging market of IoT expands at a
          rate never seen before [12]. The energy consumed by an IoT node counts
          in ~0.86 kW h/annum (supposing 100 μJ per cycle to be repeated every
          second, see further) – 13 decades behind the world electricity
          consumption as high as 25.5 TW h in 2017 [2]. Nevertheless, if we take
          into account the prospected count of IoT nodes (tens of trillions in
          50–100 year perspective), the total energy consumption by IoT may also
          reach the level of 8.6 TW·h/annum, becoming on the same order of
          magnitude. This clearly indicated the necessity of supplying IoT with
          harvested rather than fossil energy. IoT principle is to establish
          communication between devices (Things) omitting human intervention.
          Basing on this principle countless number of applications are realized
          e.g. smart city [13], remote health care [14], [15], fully automated
          production lines [16], [17] etc. Topological particularity of IoT
          systems lies in their pyramidal structure [13], [18]. A conventional
          IoT system consists of numerous communicating nodes (also called
          leafs) which are monitoring particular parameters, such as
          temperature, presence, light density, traffic intensity etc. measured
          data are temporarily transmitted to the overriding unit (see Fig. 2a).
          Supervising unit stores and analyses data and reacts appropriately.
          Historically, IoT systems first emerged in the military and entered
          into the civil market owing to a concept of Intelligent buildings [19]
          and subsequently got popularized [20], [21], [22]. An endless list of
          IoT applications is reflected by a rapidly rising number of IoT nodes
          and by growing market penetration by IoT devices (see Fig. 3a). At
          present, there are ~5 IoT nodes per each human and this proportion
          will be doubled in the next 4–5 years. It is too early to judge, but
          in the next 50–100 year perspective, the count of IoT nodes may reach
          tens of trillions devices. Quickly expanding IoT market has
          significant societal impact, creating considerable employment growth
          (see Fig. 3b). At the end of 2018 the number of created jobs is
          forecasted to reach almost 3 million and is predicted to further rise
          up to 5 million within next two years. From this perspective, the IoT
          market is of a huge social importance. Significantly, this sizable
          employment market built up within less than a decade – a speed that
          has no precedence. The IoT expansion on the market could proceed even
          faster but it is significantly hampered by a lack of economically
          attractive and energetically efficient alternatives for powering IoT
          nodes. Production of useful energy from omnipresent or lost energy is
          called the Energy Harvesting (EH). EH can be a huge relief for IoT
          allowing its further expansion through construction of wire/battery
          free devices so needed by the IoT. That is why EH gathers remarkable
          attention from scientific community, evidenced by clear acceleration
          in this field (see Fig. 4). Within the period of last 10 years the
          number of publications per year increased close to 20 times. Section
          snippets New paradigm for energy generation due to IoT In the field of
          IoT we more often speak of energy harvesting than on generation. This
          is due to smaller energy consumption that coms to play. Between the
          consumption levels in IoT applications (μJ) and those in
          dwelling/industrial (MJ) we have 12 orders of magnitude difference.
          Therefore, regarding IoT we rather speak of Energy Harvesting (EH)
          (minute, free energy from environment) than generation. Although a
          typical power consumption of a single IoT node is very small (see Fig.
          5), it is Energy source availability EH can be considered as a branch
          of technology developing devices able to convert an ambient energy
          into a useful energy (usually electric one). Two classes/types of EH
          can be distinguished: (i) macro-scale harvesting, considered usually
          as a renewable source of energy [27], [28], [29] and (ii) micro-scale
          harvesting, mainly converting waste energy [25], [26]. It is worth
          noting that majority of micro-scale EH techniques have also
          macro-scale counterparts. Of course we will focus on micro-scale
          Energy harvesting – methods Renewable energy can be harvested in two
          ways: (i) on macro scale exploiting Nature-provided renewable energy
          sources e.g. wind, hydroelectric, geothermal etc. and (ii) on micro
          scale by reusing energy losses resulting from human-driven activities.
          The macro harvesting is offering access to attractive and sizable
          reserves and can be a salvation from greenhouse effect and depleting
          fossils fuels. The micro-scavenging opens a prospect for autonomous,
          battery/wires-free devices vitally needed for Thermoelectricity
          topological aspects As the most difficult to conserve, the heat energy
          exhibits the highest losses. Quantitatively, approximately half of
          heat energy is dissipated to atmosphere [68]. USA industry releases
          almost 30% of input energy in a form of heat each year [69]. Huge heat
          losses can be at least partially recovered using the ThermoElectric
          (TE), TRyboElectric (TRE) or PyRoelectric (PR) [70], [71], [72]
          effects or by hybridization of one of them with other harvesting
          methods. Although TE and PR are both Thermoelectricity – material
          aspects Despite of the advantages of TE effect and a widespread
          availability of heat losses, it took more than 100 years for the first
          TEG to be installed [106]. This gap between the discovery and its
          technological exploitation was caused by a lack of thermoelectrically
          efficient and economically viable materials. TE is a single-step
          conversion which of performance and attractiveness relies mainly on
          the material which is executing this conversion. Evaluation of a
          thermoelectric performance of a given Subjugate thermoelectric energy
          Effective power extraction from TEG requires a use of electronic
          controllers enabling i.a. voltage adaptation, energy storage and
          Maximal Power Point Tracking (MPPT) [204], [205], [206], all this
          functions are integrated in miniaturized microelectronics package as
          depicted in Fig. 17. In the most usual case, TEG operates under
          imposed thermal conditions and temperature difference across the TEG.
          This results in a voltage formation according to the physics of the
          Seebeck effect (see Fig. 10b). Market perspectives Already
          commercially available TEGs (retrieved from Fig. 16b) can successfully
          cover total power needed for sensors that can work in IoT, which is
          graphically illustrated in Fig. 20. Confronting sensor and commercial
          TEGs power densities related to their footprint leads to a conclusion
          that TEGs are able to provide sufficient, convenient, reliable
          DC-power for IoT devices of various type. Numerous applications of
          TEGs in IoT are currently in study, and the first realizations are
          commercially Conclusions This review compares and evaluates recent
          progress in the field of thermoelectricity with the emphasis on
          possible use in the Internet of Things (IoT) devices. IoT creates and
          builds a market bigger than ever known before. Despite of the fact
          that typical IoT nodes require very small amount of energy to operate,
          powering them is problematic, regarding their portability,
          localization, size and often harsh work environment. At present IoT
          nodes are usually supplied using batteries or wires, which Maciej
          HARAS was born in Gdańsk, Poland in 1984. Received the M.Eng diploma
          in power electronics from the Gdańsk University of Technology and the
          Polytechnique de Grenoble (2008). He obtained a Ph.D. in
          nanotechnology from the Université Lille-1 (2016), investigating
          silicon-based thermoelectric generators. This work was awarded with
          the best Ph.D. dissertation prize from the Université Catholique de
          Lille. He joined STMicroelectronics R&D (2011) working on energy
          harvesting. In 2014 he joined
        </h3>
      </div>
    </div>
  );
}

export default ArticleDetails;
