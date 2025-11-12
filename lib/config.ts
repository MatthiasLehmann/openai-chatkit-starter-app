import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Welche Sportarten gibt es beim TSV Wald?",
    prompt: "Welche Sportarten gibt es beim TSV Wald?",
    icon: "circle-question",
  },
  {
    label: "Wie kann ich Mitglied werden beim TSV Wald?",
    prompt: "Wie kann ich Mitglied werden beim TSV Wald?",
    icon: "circle-question",
  },  
  {
    label: "Wie kann ich die Grillstelle mieten?",
    prompt: "Wie kann ich die Grillstelle mieten?",
    icon: "circle-question",
  },  
  {
    label: "Wie kann ich das TSV Zelt ausleihen?",
    prompt: "Wie kann ich das TSV Zelt ausleihen?",
    icon: "circle-question",
  },  
];

export const PLACEHOLDER_INPUT = "Stelle eine Frage ... ";

export const GREETING = "Wie kann ich Ihnen heute helfen?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
