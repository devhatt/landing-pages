import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="h1-bold primary-gradient  mb-5  text-center">
        <span className="bg-gradient-to-r from-tertiary-purple to-primary-purple bg-clip-text text-transparent">
          Hello Octopost
        </span>
      </h1>
      <div className="m-4 grid grid-cols-2 gap-5">
        <div className="">
          <h1 className="paragraph-regular">
            Para uso correto do lint do projeto, certifique-se de adicionar o
            seguinte bloco em suas configurações do vscode{" "}
            <span className="body-regular bg-secondary-gray">
              settings.json
            </span>
          </h1>

          <div className="flex-start mt-4 flex-nowrap overflow-hidden text-xs">
            <pre>
              <code>
                {JSON.stringify(
                  {
                    "editor.defaultFormatter": "esbenp.prettier-vscode",
                    "editor.formatOnSave": true,
                    "editor.codeActionsOnSave": {
                      "source.fixAll.eslint": true,
                      "source.addMissingImports": true,
                    },
                    "[typescriptreact]": {
                      "editor.defaultFormatter": "esbenp.prettier-vscode",
                    },
                  },
                  null,
                  2
                )}
              </code>
            </pre>
          </div>
          <Image src="/img.png" width={500} height={300} alt="pic" />
          <p className="small-medium mt-2">
            Para mais informações referente ao lint do projeto:{" "}
            <Link
              className="text-tertiary-purple"
              href="https://dev.to/nicoletti/easy-and-simple-setup-eslint-prettier-on-nextjs-1h8f"
            >
              Dev.to/eslint-next
            </Link>
          </p>
        </div>
        <div>
          <h1 className=""></h1>Some Tailwind utilities examples
          <h1 className="h1-bold mt-12 text-secondary-purple">h1-bold</h1>
          <h1 className="h2-bold text-secondary-purple">h2-bold</h1>
          <h1 className="h2-semibold text-secondary-purple">h2-semibold</h1>
          <h1 className="h3-bold text-secondary-purple">h3-bold</h1>
          <h1 className="h3-semibold text-secondary-purple">h3-semibold</h1>
          <h1 className="base-medium text-secondary-purple">base-medium</h1>
          <h1 className="base-semibold text-secondary-purple">base-semibold</h1>
          <h1 className="base-bold text-secondary-purple">base-bold</h1>
          <h1 className="paragraph-regular text-secondary-purple">
            paragraph-regular
          </h1>
          <h1 className="paragraph-medium text-secondary-purple">
            paragraph-medium
          </h1>
          <h1 className="paragraph-semibold text-secondary-purple">
            paragraph-semibold
          </h1>
          <h1 className="body-regular text-secondary-purple">body-regular</h1>
          <h1 className="body-medium text-secondary-purple">body-medium</h1>
          <h1 className="body-semibold text-secondary-purple">body-semibold</h1>
          <h1 className="small-regular text-secondary-purple">small-regular</h1>
          <h1 className="small-medium text-secondary-purple">small-medium</h1>
          <h1 className="small-semibold text-secondary-purple">
            small-semibold
          </h1>
          <h1 className="subtle-medium text-secondary-purple">subtle-medium</h1>
          <h1 className="subtle-regular text-secondary-purple">
            subtle-regular
          </h1>
          <h1 className="invert-colors text-secondary-purple">invert-colors</h1>
          <h1 className="primary-gradient text-secondary-purple">
            primary-gradient
          </h1>
          <h1 className="dark-gradient text-secondary-purple">dark-gradient</h1>
          <h1 className="light-gradient text-secondary-purple">
            dark-gradient
          </h1>
        </div>

        <div className="flex-center m-4 gap-10">
          <button className="btn-primary">btn-primary</button>
          <button className="btn-secondary">btn-secondary</button>
          <button className="btn-tertiary">btn-tertiary</button>
        </div>
        <div className="flex-center m-4 bg-purple-400">
          <h1 className="primary-text-gradient h1-bold">Text Gradient</h1>
        </div>
      </div>
    </>
  );
}
