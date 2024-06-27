import path from "path";
import webpack, { DefinePlugin } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  if (config.resolve?.modules) {
    config.resolve.modules = [paths.src, "node_modules"];
  }

  config.resolve?.extensions?.push(".ts", ".tsx");

  if (config.module?.rules) {
    config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule | "...") => {
      if (rule !== "..." && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
    })
  );

  config.module?.rules?.push(buildSvgLoader());
  config.module?.rules?.push(buildCssLoader(true));

  return config;
};
