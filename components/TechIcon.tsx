"use client";

import type { LucideIcon } from "lucide-react";
import {
  Binary,
  Bot,
  Braces,
  Box,
  Code2,
  Container,
  Database,
  Flame,
  GitBranch,
  Globe,
  Layers3,
  LayoutGrid,
  Map,
  MonitorSmartphone,
  Network,
  Palette,
  Server,
  Settings2,
  Shield,
  Smartphone,
  Terminal,
  TestTube2,
  Zap,
} from "lucide-react";

type TechIconProps = {
  label: string;
  size?: number;
  className?: string;
};

function pickIcon(label: string): LucideIcon {
  const value = label.toLowerCase();
  // Languages
  if (value.includes("kotlin")) return Braces;
  if (value.includes("go") && !value.includes("google")) return Terminal;
  if (value.includes("c++") || value === "c") return Braces;
  if (value.includes("java") && !value.includes("javascript")) return Braces;
  if (value.includes("dart")) return Code2;
  if (value.includes("sql") && !value.includes("nosql") && !value.includes("postgre")) return Database;
  if (value.includes("python")) return Braces;
  // Backend & Systems
  if (value.includes("spring")) return Zap;
  if (value.includes("websocket")) return Network;
  if (value.includes("postgre")) return Database;
  if (value.includes("redis")) return Database;
  if (value.includes("docker")) return Container;
  if (value.includes("junit") || value.includes("mockito")) return TestTube2;
  if (value.includes("rest") || value.includes("json") || value.includes("api")) return Server;
  // Mobile & Frontend
  if (value.includes("flutter")) return MonitorSmartphone;
  if (value.includes("jetpack") || value.includes("compose")) return Smartphone;
  if (value.includes("getx")) return Layers3;
  if (value.includes("material")) return Palette;
  if (value.includes("hive")) return Database;
  // Cloud & Infra
  if (value.includes("firebase")) return Flame;
  if (value.includes("firestore") || value.includes("cloud")) return Database;
  if (value.includes("gemini") || value.includes("ai")) return Bot;
  if (value.includes("openstreetmap") || value.includes("map")) return Map;
  // Tools
  if (value.includes("git") && !value.includes("github")) return GitBranch;
  if (value.includes("github")) return Globe;
  if (value.includes("linux") || value.includes("shell")) return Terminal;
  if (value.includes("postman")) return Server;
  if (value.includes("intellij")) return LayoutGrid;
  if (value.includes("vs code")) return LayoutGrid;
  if (value.includes("android")) return MonitorSmartphone;
  // CS Fundamentals
  if (value.includes("system design")) return Network;
  if (value.includes("concurrency")) return Zap;
  if (value.includes("low-level") || value.includes("lld")) return Settings2;
  if (value.includes("design pattern")) return Box;
  if (value.includes("dsa") || value.includes("algorithm") || value.includes("data structure")) return Binary;
  if (value.includes("object") || value.includes("oop")) return Settings2;
  if (value.includes("dbms")) return Database;
  if (value.includes("operating")) return Terminal;
  // State / Notification / Animation
  if (value.includes("state")) return Layers3;
  if (value.includes("notification")) return Zap;
  if (value.includes("animation")) return Palette;
  if (value.includes("security") || value.includes("abac")) return Shield;
  return Code2;
}

function pickTone(label: string) {
  const value = label.toLowerCase();
  // Languages
  if (value.includes("kotlin")) return "bg-purple-500/20 text-purple-400";
  if (value.includes("go") && !value.includes("google")) return "bg-cyan-500/20 text-cyan-400";
  if (value.includes("c++") || value === "c") return "bg-blue-500/20 text-blue-400";
  if (value.includes("java") && !value.includes("javascript")) return "bg-orange-500/20 text-orange-400";
  if (value.includes("dart")) return "bg-sky-500/20 text-sky-400";
  if (value.includes("sql") && !value.includes("nosql") && !value.includes("postgre")) return "bg-amber-500/20 text-amber-400";
  if (value.includes("python")) return "bg-yellow-500/20 text-yellow-400";
  // Backend & Systems
  if (value.includes("spring")) return "bg-green-500/20 text-green-400";
  if (value.includes("websocket")) return "bg-violet-500/20 text-violet-400";
  if (value.includes("postgre")) return "bg-blue-600/20 text-blue-400";
  if (value.includes("redis")) return "bg-red-500/20 text-red-400";
  if (value.includes("docker")) return "bg-sky-600/20 text-sky-400";
  if (value.includes("junit") || value.includes("mockito")) return "bg-emerald-500/20 text-emerald-400";
  if (value.includes("rest") || value.includes("json") || value.includes("api")) return "bg-indigo-500/20 text-indigo-400";
  // Mobile & Frontend
  if (value.includes("flutter")) return "bg-sky-500/20 text-sky-400";
  if (value.includes("jetpack") || value.includes("compose")) return "bg-green-500/20 text-green-400";
  if (value.includes("getx")) return "bg-fuchsia-500/20 text-fuchsia-400";
  if (value.includes("material")) return "bg-rose-500/20 text-rose-400";
  if (value.includes("hive")) return "bg-yellow-500/20 text-yellow-400";
  // Cloud & Infra
  if (value.includes("firebase") || value.includes("firestore")) return "bg-amber-500/20 text-amber-400";
  if (value.includes("cloud")) return "bg-blue-500/20 text-blue-400";
  if (value.includes("gemini") || value.includes("ai")) return "bg-violet-500/20 text-violet-400";
  if (value.includes("openstreetmap") || value.includes("map")) return "bg-emerald-500/20 text-emerald-400";
  // Tools
  if (value.includes("git")) return "bg-orange-500/20 text-orange-400";
  if (value.includes("linux") || value.includes("shell")) return "bg-slate-500/20 text-slate-300";
  if (value.includes("postman")) return "bg-orange-500/20 text-orange-400";
  if (value.includes("intellij")) return "bg-rose-500/20 text-rose-400";
  if (value.includes("vs code")) return "bg-blue-500/20 text-blue-300";
  if (value.includes("android")) return "bg-lime-500/20 text-lime-400";
  // CS Fundamentals
  if (value.includes("system design")) return "bg-cyan-500/20 text-cyan-400";
  if (value.includes("concurrency")) return "bg-amber-500/20 text-amber-400";
  if (value.includes("low-level") || value.includes("lld")) return "bg-purple-500/20 text-purple-400";
  if (value.includes("design pattern")) return "bg-violet-500/20 text-violet-400";
  if (value.includes("dsa") || value.includes("algorithm") || value.includes("data structure")) return "bg-red-500/20 text-red-400";
  if (value.includes("object") || value.includes("oop")) return "bg-teal-500/20 text-teal-400";
  if (value.includes("dbms")) return "bg-teal-500/20 text-teal-400";
  if (value.includes("operating")) return "bg-slate-500/20 text-slate-300";
  // Misc
  if (value.includes("state")) return "bg-fuchsia-500/20 text-fuchsia-400";
  if (value.includes("notification")) return "bg-amber-500/20 text-amber-400";
  if (value.includes("animation")) return "bg-pink-500/20 text-pink-400";
  return "bg-coral/20 text-coral";
}

export default function TechIcon({
  label,
  size = 12,
  className = "",
}: TechIconProps) {
  const Icon = pickIcon(label);
  return (
    <span
      className={`inline-flex h-4 w-4 items-center justify-center rounded-full ${pickTone(
        label
      )} ${className}`}
      aria-hidden="true"
    >
      <Icon size={size - 2} />
    </span>
  );
}
