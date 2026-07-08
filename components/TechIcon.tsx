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
  return Code2;
}

export default function TechIcon({
  label,
  size = 14,
  className = "",
}: TechIconProps) {
  const Icon = pickIcon(label);
  return (
    <span
      className={`inline-flex items-center justify-center text-muted group-hover:text-diamond-glow transition-colors ${className}`}
      aria-hidden="true"
    >
      <Icon size={size} />
    </span>
  );
}
