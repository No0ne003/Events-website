import { useLocale, useMessages, useTranslations } from "next-intl";
import Hero from "./_components/Home/Hero-section/Hero";
import Refrences from "./_components/Home/Refrences/Refrences";

const Home: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  const messages = useMessages();

  const title = t.raw("title");
  const titleSplit = t.raw("titleSplit");
  const contactUs = t("contact-us");
  const discoverNow = t("discover-now");
  const subHeading = t("subHeading");

  return (
    <div className="flex-1 flex flex-col gap-20">
      <Hero
        locale={locale}
        title={title}
        titleSplit={titleSplit}
        contactUs={contactUs}
        discoverNow={discoverNow}
        subHeading={subHeading}
      />
      <Refrences />
    </div>
  );
};

export default Home;
