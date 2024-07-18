import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="container flex-1 flex justify-center items-center">
      <h1 className="text-7xl font-bold font-mono">{t("title")}</h1>
    </div>
  );
}
