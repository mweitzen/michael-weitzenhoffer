export interface IPageHeader {
  header: string;
}

const PageHeader: React.FC<IPageHeader> = ({ header }) => {
  return (
    <header className="py-4">
      <h1 className="text-xs font-light uppercase tracking-widest">{header}</h1>
    </header>
  );
};

export default PageHeader;
