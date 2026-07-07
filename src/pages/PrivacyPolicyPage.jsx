import Header from "../Components/CommonComponents/Header/Header";
import LegalPage from "../Components/CommonComponents/LegalPage/LegalPage";
import privacyPolicyContent from "../Components/CommonComponents/LegalPage/privacyPolicyContent";
import Footer from "../Components/CommonComponents/Footer/Footer";
import WhatsAppFloat from "../Components/CommonComponents/WhatsAppFloat/WhatsAppFloat";

const PrivacyPolicyPage = () => (
  <>
    <Header />
    <LegalPage content={privacyPolicyContent} />
    <Footer />
    <WhatsAppFloat />
  </>
);

export default PrivacyPolicyPage;
