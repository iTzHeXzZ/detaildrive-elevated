import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Detail Drive — Premium Fahrzeugaufbereitung" },
      { name: "description", content: "Premium Car Detailing & mobile Fahrzeugaufbereitung in Swisttal." },
      { name: "author", content: "Detail Drive" },
      { property: "og:title", content: "Detail Drive — Premium Fahrzeugaufbereitung" },
      { property: "og:description", content: "Premium Car Detailing & mobile Fahrzeugaufbereitung in Swisttal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Detail Drive — Premium Fahrzeugaufbereitung" },
      { name: "twitter:description", content: "Premium Car Detailing & mobile Fahrzeugaufbereitung in Swisttal." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0e034af3-0c21-419d-9dee-7f519ac86e89/id-preview-81aa439a--840c9726-2b6e-447a-b6f4-1e48a36b92b2.lovable.app-1777654801585.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0e034af3-0c21-419d-9dee-7f519ac86e89/id-preview-81aa439a--840c9726-2b6e-447a-b6f4-1e48a36b92b2.lovable.app-1777654801585.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
