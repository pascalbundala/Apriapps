import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiJquery,
  SiReact,
  SiNextdotjs,
  SiGreensock,
  SiThreedotjs,
  SiWebgl,
  SiAndroid,
  SiSwift,
  SiKotlin,
  SiFlutter,
  SiPhp,
  SiLaravel,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiFirebase,
  SiVercel,
  SiGooglecloud,
  SiRender,
} from "react-icons/si";
import { FaJava,FaServer,FaAws  } from "react-icons/fa6";


const skillData = [
  {
    frontend: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "ReactJS", icon: SiReact },
      { name: "NextJS", icon: SiNextdotjs },
      { name: "GSAP", icon: SiGreensock },
      { name: "ThreeJS", icon: SiThreedotjs },
      { name: "WebGL", icon: SiWebgl },
    ],

    mobile: [
      { name: "Android", icon: SiAndroid },
      { name: "Swift", icon: SiSwift },
      { name: "Kotlin", icon: SiKotlin },
      { name: "Flutter", icon: SiFlutter },
    ],

    backend: [
      { name: "Java", icon: FaJava },
      { name: "PHP", icon: SiPhp },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Laravel", icon: SiLaravel },
      { name: "ExpressJS", icon: SiExpress },
      { name: "REST APIs", icon: FaServer },
    ],

    database: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Supabase", icon: SiSupabase },
    ],

    cloudbased: [
      { name: "Firebase", icon: SiFirebase },
      { name: "Vercel", icon: SiVercel },
      {name:"AWS",icon:FaAws },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Render", icon: SiRender },
    ],
  },
];

export default skillData;