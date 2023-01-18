import Link, { LinkProps } from "next/link";

interface IAction
  extends React.HTMLProps<HTMLButtonElement | HTMLAnchorElement | LinkProps> {
  type: "link" | "button";
  internal?: boolean;
}

interface IActionBar {
  actions: IAction[];
}

const className =
  "flex items-center justify-center gap-x-2 bg-white bg-opacity-5 py-3 text-xs uppercase tracking-widest backdrop-blur overflow-hidden whitespace-nowrap";

const ActionBar: React.FC<IActionBar> = ({ actions }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 grid grid-cols-3 gap-x-2 p-4">
      {actions.map(({ type, internal, children, ...rest }, i) => {
        if (type === "link") {
          if (internal) {
            return (
              <Link key={i} href={rest.href || ""} className={className}>
                {children}
              </Link>
            ); // internal link
          } else {
            return (
              <a
                key={i}
                href={rest.href}
                className={className}
                target={rest.target}
              >
                {children}
              </a>
            ); // external link
          }
        } else if (type === "button") {
          return null; // on click handler
        }
        return null;
      })}
    </footer>
  );
};

export default ActionBar;
