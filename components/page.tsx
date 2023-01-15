import { PUBLIC_TOPBAR_HEIGHT } from "@/lib/constants";
//
import { WithChildren } from "@/types";
//
import SEO from "./seo";
import PageHeader, { IPageHeader } from "./page-header";

interface IPageComponent extends IPageHeader, WithChildren {
  seoTitle?: string;
}

const PageComponent: React.FC<IPageComponent> = ({
  header,
  children,
  seoTitle = "",
}) => {
  return (
    <>
      <SEO title={seoTitle} />
      <div className={PUBLIC_TOPBAR_HEIGHT} />
      <div className="h-full p-4 text-center md:p-12">
        <PageHeader header={header} />
        {children}
      </div>
    </>
  );
};

export default PageComponent;
