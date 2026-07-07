import Header from "../Components/CommonComponents/Header/Header";
import LegalPage from "../Components/CommonComponents/LegalPage/LegalPage";
import termsConditionsContent from "../Components/CommonComponents/LegalPage/termsConditionsContent";
import Footer from "../Components/CommonComponents/Footer/Footer";
import WhatsAppFloat from "../Components/CommonComponents/WhatsAppFloat/WhatsAppFloat";

const TermsConditionsPage = () => (
  <>
    <Header />
    <LegalPage content={termsConditionsContent} />
    <Footer />
    <WhatsAppFloat />
  </>
);

export default TermsConditionsPage;
