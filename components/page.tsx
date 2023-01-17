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
    <>
      <SEO title={seoTitle} />
      <div className="flex h-full flex-col">
        <div className={`${PUBLIC_TOPBAR_HEIGHT} shrink-0`} />
        <div className="flex flex-col overflow-hidden">
          <PageHeader header={header} />
          <div className="overflow-y-scroll px-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Page;
