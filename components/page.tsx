import { useRef } from "react";
import SEO from "./seo";
import PageHeader, { IPageHeader } from "./page-header";
import { WithChildren } from "@/types";
import { PUBLIC_TOPBAR_HEIGHT } from "@/lib/constants";

interface IPageComponent extends IPageHeader, WithChildren {
  seoTitle?: string;
}

const Page: React.FC<IPageComponent> = ({
  header,
  children,
  seoTitle = "",
}) => {
  // find better way to enfore scroll to 0 on state change
  const scrollableRef = useRef<HTMLDivElement>(null);
  if (scrollableRef.current) {
    scrollableRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <SEO title={seoTitle} />
      <div className="flex h-full flex-col">
        <div className={`${PUBLIC_TOPBAR_HEIGHT} shrink-0`} />
        <div className="flex flex-col overflow-hidden">
          <PageHeader header={header} />
          <div ref={scrollableRef} className="overflow-y-scroll px-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
