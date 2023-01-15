export interface IPageHeader {
  header: string;
}

const PageHeader: React.FC<IPageHeader> = ({ header }) => {
  return (
    <header className="py-8">
      <h1 className="text-center text-xs font-light uppercase tracking-widest">
        {header}
      </h1>
    </header>
  );
};

export default PageHeader;
