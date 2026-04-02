"use client";

import type { LucideIcon } from "lucide-react";
import {
  Binary,
  Bot,
  Braces,
  Code2,
  Database,
  Flame,
  GitBranch,
  Globe,
  Layers3,
  LayoutGrid,
  Map,
  MonitorSmartphone,
  Palette,
  Server,
  Settings2
} from "lucide-react";

type TechIconProps = {
  label: string;
  size?: number;
  className?: string;
};

function pickIcon(label: string): LucideIcon {
  const value = label.toLowerCase();
  if (value.includes("flutter")) return MonitorSmartphone;
  if (value.includes("dart")) return Code2;
  if (value.includes("firebase")) return Flame;
  if (value.includes("gemini") || value.includes("ai")) return Bot;
  if (value.includes("hive")) return Database;
  if (value.includes("openstreetmap") || value.includes("map")) return Map;
  if (value.includes("rest") || value.includes("json") || value.includes("api")) return Server;
  if (value.includes("state")) return Layers3;
  if (value.includes("material")) return Palette;
  if (value.includes("git")) return GitBranch;
  if (value.includes("android")) return MonitorSmartphone;
  if (value.includes("dbms") || value.includes("os")) return Database;
  if (value.includes("dsa") || value.includes("algorithm")) return Binary;
  if (value.includes("c++") || value === "c" || value.includes("java") || value.includes("python")) return Braces;
  if (value.includes("github")) return Globe;
  if (value.includes("vs code")) return LayoutGrid;
  if (value.includes("oops")) return Settings2;
  return Code2;
}

function pickTone(label: string) {
  const value = label.toLowerCase();
  if (value.includes("flutter")) return "bg-sky-500/20 text-sky-400";
  if (value.includes("dart")) return "bg-cyan-500/20 text-cyan-400";
  if (value.includes("firebase")) return "bg-amber-500/20 text-amber-400";
  if (value.includes("gemini") || value.includes("ai")) return "bg-violet-500/20 text-violet-400";
  if (value.includes("hive")) return "bg-yellow-500/20 text-yellow-400";
  if (value.includes("openstreetmap") || value.includes("map")) return "bg-emerald-500/20 text-emerald-400";
  if (value.includes("rest") || value.includes("json") || value.includes("api")) return "bg-indigo-500/20 text-indigo-400";
  if (value.includes("state")) return "bg-fuchsia-500/20 text-fuchsia-400";
  if (value.includes("material")) return "bg-rose-500/20 text-rose-400";
  if (value.includes("git")) return "bg-orange-500/20 text-orange-400";
  if (value.includes("android")) return "bg-lime-500/20 text-lime-400";
  if (value.includes("dbms") || value.includes("os")) return "bg-teal-500/20 text-teal-400";
  if (value.includes("dsa") || value.includes("algorithm")) return "bg-red-500/20 text-red-400";
  if (value.includes("c++") || value === "c" || value.includes("java") || value.includes("python")) {
    return "bg-blue-500/20 text-blue-400";
  }
  if (value.includes("github")) return "bg-slate-500/20 text-slate-300";
  if (value.includes("vs code")) return "bg-blue-500/20 text-blue-300";
  if (value.includes("oops")) return "bg-purple-500/20 text-purple-400";
  return "bg-coral/20 text-coral";
}

export default function TechIcon({ label, size = 12, className = "" }: TechIconProps) {
  const Icon = pickIcon(label);
  return (
    <span
      className={`inline-flex h-4 w-4 items-center justify-center rounded-full ${pickTone(label)} ${className}`}
      aria-hidden="true"
    >
      <Icon size={size - 2} />
    </span>
  );
}
