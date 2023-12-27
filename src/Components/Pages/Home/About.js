const About = () => {
    return ( 
    <div>
        <h1 className="font-regular text-Typo font-Natasha md:text-[4rem] text-[2rem] text-center mb-[5vw]">A propos</h1>
        <div className="flex w-full px-[8vw] flex-col gap-8 max-md:text-center md:text-[1.2rem] text-[1rem] font-Gilroy text-[Typo]">
            <div>
                <p>Bienvenue sur 'Science', votre plateforme dédiée à la recherche scientifique de pointe.Nous avons créé 'Science' dans le but de fournir un environnement accueillant et intuitif, permettant aux chercheurs du monde entier de découvrir, explorer et sauvegarder des articles scientifiques de la plus haute qualité.</p>
            </div>

            <div className="flex flex-col md:flex-row md:gap-32">

                <div className="flex flex-col md:gap-8">
                     <p>Chez 'Science', nous plaçons la crédibilité scientifique au cœur de notre mission. Nos processus éditoriaux sont rigoureux, garantissant la véracité des informations.</p>
                    <p>De plus, nos modérateurs sont habilités à corriger toute erreur éventuelle, assurant ainsi une base de données fiable et précise. Profitez de fonctionnalités avancées, dont une recherche ciblée, la sauvegarde aisée d'articles et des outils collaboratifs.</p>
                </div>
                <div className="flex flex-col md:gap-8">
                    <p>Notre vision s'étend au-delà d'une simple plateforme. Nous aspirons à jouer un rôle significatif au sein de la communauté scientifique en favorisant l'échange dynamique de connaissances.</p>
                    <p>'Science' s'efforce également de garantir un accès transparent à une base de données diversifiée, couvrant un large éventail de domaines scientifiques.</p>
                </div>
                
            </div>

            <div>
                <p>Nous vous invitons à vous joindre à nous dans cette aventure passionnante. Ensemble, repoussons les frontières de la recherche scientifique et créons un environnement collaboratif propice à l'innovation et à la découverte.</p>
            </div>

            </div>
        </div>
     );
}
 
export default About;