import { useLocale, useMessages, useTranslations } from "next-intl";
import Hero from "./_components/Home/Hero";

const Home: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  const messages = useMessages();

  // Precompute the translations for the title and titleSplit
  const title = t.raw("title");
  const titleSplit = t.raw("titleSplit");
  const contactUs = t("contact-us");
  const discoverNow = t("discover-now");
  const subHeading = t("subHeading");

  return (
    <div className="flex-1">
      <Hero
        locale={locale}
        title={title}
        titleSplit={titleSplit}
        contactUs={contactUs}
        discoverNow={discoverNow}
        subHeading={subHeading}
      />
    </div>
  );
};

export default Home;
