import { cn } from "@/lib/utils";
import {
  BarChart3,
  History,
  Home,
  MessageSquare,
  Settings,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Mock Interviews", href: "/mock-interview", icon: MessageSquare },
  { name: "Interview History", href: "/history", icon: History },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-card border-r border-border h-full flex flex-col">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <nav className="mt-5 flex-1 px-2 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary border-l-4 border-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
