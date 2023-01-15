import { PUBLIC_TOPBAR_HEIGHT } from "@/lib/constants";
//
import { WithChildren } from "@/types";
//
import SEO from "./seo";
import PageHeader, { IPageHeader } from "./page-header";

interface IPageComponent extends IPageHeader, WithChildren {
  seoTitle?: string;
}

const Page: React.FC<IPageComponent> = ({
  header,
  children,
  seoTitle = "",
}) => {
  return (
    <div className="flex h-full flex-col">
      <SEO title={seoTitle} />
      <div className={PUBLIC_TOPBAR_HEIGHT} />
      <div className="flex flex-grow flex-col">
        <PageHeader header={header} />
        {children}
      </div>
    </div>
  );
};

export default Page;
