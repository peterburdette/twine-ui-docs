export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-center text-sm text-gray-500 md:text-left">
              Built with{' '}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4 hover:text-gray-900 transition-colors"
              >
                Tailwind CSS
              </a>
              . The source code is available on{' '}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 md:items-end">
            <p className="text-center text-sm text-gray-500 md:text-right">
              © 2024 Twine UI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
