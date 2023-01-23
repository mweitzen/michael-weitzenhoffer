import Link from "next/link";
import Page from "@/components/page";

export default function UnauthorizedPage() {
  return (
    <Page header="Oops! Not authorized" seoTitle="Unauthorized">
      <Link href="/">
        <p className="mx-auto w-full max-w-xs bg-white bg-opacity-5 py-4 text-center">
          Go to Home Page
        </p>
      </Link>
    </Page>
  );
}
