export interface IPageHeader {
  header: string;
}

const PageHeader: React.FC<IPageHeader> = ({ header }) => {
  return (
    <header>
      <h1 className="text-2xl font-thin">{header}</h1>
    </header>
  );
};

export default PageHeader;
