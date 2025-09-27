import { Roboto } from "next/font/google";
import localFont from "next/font/local";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const albra = localFont({
  src: "./AlbraTRIAL-Light.otf",
});

const helvetica = localFont({
  src: "./HelveticaNowDisplay-Regular.ttf",
});

export const robotoFont = roboto.className;
export const albraFont = albra.className;
export const helveticaFont = helvetica.className;
