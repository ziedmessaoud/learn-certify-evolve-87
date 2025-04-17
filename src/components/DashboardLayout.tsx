
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Award,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FileText,
  Home,
  LogOut,
  Menu,
  Settings,
  User,
  X
} from "lucide-react";

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const SidebarItem = ({ icon, label, href, active }: SidebarItemProps) => (
  <Link to={href}>
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2 pl-2 mb-1",
        active ? "bg-primary/10 text-primary" : "hover:bg-primary/5 hover:text-primary"
      )}
    >
      {icon}
      <span>{label}</span>
    </Button>
  </Link>
);

interface DashboardLayoutProps {
  children: ReactNode;
  userType: "student" | "teacher";
}

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const baseUrl = `/${userType}`;
  
  const studentNav = [
    { icon: <Home className="h-4 w-4" />, label: "Tableau de bord", href: `${baseUrl}/dashboard` },
    { icon: <BookOpen className="h-4 w-4" />, label: "Mes cours", href: `${baseUrl}/courses` },
    { icon: <FileText className="h-4 w-4" />, label: "Mes quiz", href: `${baseUrl}/quizzes` },
    { icon: <Award className="h-4 w-4" />, label: "Mes certificats", href: `${baseUrl}/certificates` },
    { icon: <User className="h-4 w-4" />, label: "Profil", href: `${baseUrl}/profile` },
    { icon: <Settings className="h-4 w-4" />, label: "Paramètres", href: `${baseUrl}/settings` },
  ];

  const teacherNav = [
    { icon: <Home className="h-4 w-4" />, label: "Tableau de bord", href: `${baseUrl}/dashboard` },
    { icon: <BookOpen className="h-4 w-4" />, label: "Mes cours", href: `${baseUrl}/courses` },
    { icon: <FileText className="h-4 w-4" />, label: "Mes quiz", href: `${baseUrl}/quizzes` },
    { icon: <User className="h-4 w-4" />, label: "Étudiants", href: `${baseUrl}/students` },
    { icon: <Settings className="h-4 w-4" />, label: "Paramètres", href: `${baseUrl}/settings` },
  ];

  const navigation = userType === "student" ? studentNav : teacherNav;

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full bg-white border-r transition-all duration-300 lg:static",
          collapsed ? "w-16" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <div className={cn("flex items-center", collapsed && "justify-center w-full")}>
            <BookOpen className="h-6 w-6 text-primary" />
            {!collapsed && <span className="ml-2 font-bold text-lg">LearnCertify</span>}
          </div>
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-500 hover:text-gray-700 lg:block hidden"
          >
            {collapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>
          <button 
            onClick={() => setMobileOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100vh-8rem)]">
          <div className={cn("space-y-1", collapsed && "flex flex-col items-center")}>
            {navigation.map((item) => (
              <div key={item.href}>
                {collapsed ? (
                  <Link to={item.href} title={item.label}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "w-10 h-10 mb-1",
                        location.pathname === item.href ? "bg-primary/10 text-primary" : "hover:bg-primary/5"
                      )}
                    >
                      {item.icon}
                    </Button>
                  </Link>
                ) : (
                  <SidebarItem
                    icon={item.icon}
                    label={item.label}
                    href={item.href}
                    active={location.pathname === item.href}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 w-full border-t p-4">
          <Link to="/login">
            <Button 
              variant="ghost" 
              className={cn(
                "text-red-500 hover:text-red-700 hover:bg-red-50 w-full",
                collapsed ? "justify-center" : "justify-start gap-2"
              )}
            >
              <LogOut className="h-4 w-4" />
              {!collapsed && <span>Déconnexion</span>}
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b bg-white flex items-center justify-between px-4">
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-gray-700"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-semibold hidden sm:block">
            {userType === "student" ? "Espace Étudiant" : "Espace Enseignant"}
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-500">{userType === "student" ? "Étudiant" : "Enseignant"}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
              JD
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
