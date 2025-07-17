import IntegrationCard from "@/components/home/IntegrationCard";
import Grid from "@/components/home/Grid";
import ThreeScene from "@/components/threejs/ThreeScene";

export default function Home() {
  return (
    <>
    <div className="h-[150vh] sm:h-dvh w-full flex flex-col sm:flex-row border-b border-foreground z-30 pt-[3.25rem] sm:pt-0">
      <div className="flex-[1] sm:flex-[5] border-foreground border-b sm:border-none relative">
        <h1 className="font-bold text-2xl fixed z-30 top-2.5 left-[3.875rem]">Dashboard Swall-E</h1>
        <ThreeScene/>
      </div>
      <div className="flex-[1] sm:flex-[3] sm:border-l border-foreground box-border overflow-y-auto flex flex-col">
        <h2 className="text-xl font-bold pl-4 pt-2.5">Intégrations dynamiques</h2>
        <div className=" flex-1 overflow-y-auto">
          <Grid r={3} c={2}>
            <IntegrationCard path={"/niveaux-bolus"} src={"/scatter-thumbnail-black.webp"} title={"Déplacement du Bolus à travers le pharinx"} alt={"Image d'illustration de la page d'intégration de visualisation de données par graphique"}/>
            <IntegrationCard path={"/photos-dic"} src={"/scatter-thumbnail-black.webp"} title={"Photos des mesures pour DIC"} alt={"Image d'illustration de la page d'intégration des photos prise lors des la prise des images DIC"}/>

            <IntegrationCard path={"/visualisation-3d"} src={"/scatter-thumbnail-black.webp"} title={"Visualisation 3D"} alt={"Image d'illustration de la page d'intégration qui peremet de manipuler en 3D le modèle du conduit de Swall-E"}/>
            <div className="bg-yellow-200 dark:bg-yellow-800 p-4 flex items-center justify-center">Intégration 4</div>
            <div className="bg-purple-200 dark:bg-purple-800 p-4 flex items-center justify-center">Intégration 5</div>
            <div className="bg-pink-200 dark:bg-pink-800 p-4 flex items-center justify-center">Intégration 6</div>
            </Grid>
        </div>
        
      </div>
      <div className="fixed z-20 top-0 inset-x-0 block sm:hidden h-[3.25rem] bg-[#f7f7f7] dark:bg-[#050505]">
        {/* barr de fond format mobile */}
      </div>
    </div>
    <div className="min-h-dvh  z-10">
      <div className="hidden sm:block sticky z-20 top-0 inset-x-0 h-[3.25rem] bg-[#f7f7f7] dark:bg-[#050505]">
      {/* barre de fond sticky */}
      </div>
      <div className="p-6">
        <p>
        Bienvenue sur le tableau de bord interactif de <i>Swall-E</i>, votre passerelle vers une compréhension approfondie de la physiologie de la déglutition !<br/><br/>
        <strong>Qu&apos;est-ce que Swall-E ?</strong><br/>
        Swall-E est un modèle robotique in vitro innovant qui simule la déglutition humaine. Conçu avec une précision anatomique, il reproduit le conduit oro-pharyngé et les mouvements complexes des structures clés impliquées dans le processus de déglutition, comme le pharynx contractant et l&apos;épiglotte mobile. Il représente une approche moderne pour étudier la dynamique des fluides dans le système aéro-digestif supérieur.<br/><br/>
        <strong>Pourquoi Swall-E est-il important ?</strong><br/>
        La déglutition est un mécanisme vital, mais les troubles associés, connus sous le nom de dysphagie, peuvent avoir des conséquences graves telles que la malnutrition, la déshydratation, la pneumonie par aspiration, voire la mort. Actuellement, de nombreuses interventions cliniques pour la dysphagie sont empiriques, car les mécanismes sous-jacents sont souvent mal compris et difficiles à étudier in vivo.<br/><br/>
        <i>Swall-E</i> apporte une solution cruciale en offrant :
        <br/>
        <br/>
        </p>
        <ul className="flex flex-col gap-2">
          <li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Une alternative sans risque et économique : Contrairement aux études in vivo (sur des êtres vivants), Swall-E permet de tester des scénarios et des interventions de manière sûre et plus abordable. Il ne nécessite pas de matériaux radioactifs, contrairement à la vidéofluoroscopie (VFSS), qui est l&apos;étalon-or pour le diagnostic de la dysphagie.<br/>
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- La visualisation des phénomènes complexes : Il permet de visualiser l&apos;hydrodynamique des liquides pendant la déglutition, un aspect souvent inaccessible avec les instruments de visualisation standard.<br/>
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- L&apos;identification des mécanismes fondamentaux : En modélisant les interactions fluide-structure, Swall-E aide à identifier les mécanismes qui sous-tendent l&apos;aspiration et la formation de résidus.<br/>
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- La caractérisation des propriétés du bolus : Il permet d&apos;étudier l&apos;impact de la consistance (par exemple, liquide mince vs. liquide épaissi selon la classification IDDSI) et du volume du bolus sur la dynamique de la déglutition. Par exemple, une dispensation trop lente de liquides fins peut augmenter le risque d&apos;aspiration.<br/>
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- L&apos;exploration des mouvements structuraux : Swall-E peut simuler l&apos;effet de différents angles de l&apos;épiglotte ou de l&apos;activité du pharynx sur le flux du liquide et les risques d&apos;aspiration, notamment en cas d&apos;inversion incomplète de l&apos;épiglotte.<br/>
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Un outil de référence pour la recherche clinique : Les données issues de modèles comme Swall-E peuvent fournir des valeurs de référence pour des mesures quantitatives (comme la cinématique de l&apos;os hyoïde) pour une déglutition saine, ce qui est essentiel pour une interprétation fiable des évaluations cliniques et pour orienter les décisions. La méthode ASPEKT et la grille D-GRID sont des exemples de méthodes d&apos;analyse quantitative qui peuvent être comparées aux simulations de Swall-E pour évaluer l&apos;efficacité de la déglutition et la protection des voies aériennes.<br/>
          </li>
        </ul>
      </div>
      
    </div>
    
    
    
    </>
  );
}
