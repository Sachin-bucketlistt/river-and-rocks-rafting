import Header from "../Components/CommonComponents/Header/Header";
import HeroHome from "../Components/HomeRoutes/HeroHome/HeroHome";
import RideExplore from "../Components/HomeRoutes/RideExplore/RideExplore";
import ActivitiesCards from "../Components/HomeRoutes/ActivitiesCards/ActivitiesCards";
import RaftingRouteExplorer from "../Components/HomeRoutes/RaftingRouteExplorer/RaftingRouteExplorer";
import CompanyContent from "../Components/HomeRoutes/CompanyContent/CompanyContent";
import Footer from "../Components/CommonComponents/Footer/Footer";
import WhatsAppFloat from "../Components/CommonComponents/WhatsAppFloat/WhatsAppFloat";

const HomePage = () => (
  <>
    <Header />
    <HeroHome />
    <RideExplore />
    <ActivitiesCards />
    <RaftingRouteExplorer />
    <CompanyContent />
    <Footer />
    <WhatsAppFloat />
  </>
);

export default HomePage;
