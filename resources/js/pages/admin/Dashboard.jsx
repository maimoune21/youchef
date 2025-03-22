import * as React from "react";
import ProfileImg from "@/../../public/images/Profile.png";
import {
    DashboardClose,
    DashboardOpen,
    ManageIcon,
    MessagesIcon,
    RepportIcon,
    UserIcon,
} from "@/../../public/icons/Icons";
import YouchefIcon from "@/../../public/images/YouChef-Icon.svg";
import Logo from "@/components/ui/Logo";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarRail,
    useSidebar,
} from "@/components/ui/sidebar";
import { ReportedMeals } from "./ReportedMeals";
import { UserMessages } from "./UserMessages";
import { UserAccounts } from "./UserAccounts";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

const Dashboard = ({ location }) => {
    const [activeTeam, setActiveTeam] = React.useState({});
    const { auth } = usePage().props;
    const user = auth.user;

    // Determine which component to render based on the URL
    const renderContent = () => {
        switch (location) {
            case "reportedMeals":
                return <ReportedMeals />;
            case "userMessages":
                return <UserMessages />;
            case "userAccounts":
                return <UserAccounts />;
            default:
                return <ReportedMeals />;
        }
    };

    // Compagy Component
    const Compagy = () => {
        const { isMobile } = useSidebar();
        const { state } = useSidebar();

        if (!activeTeam) {
            return null;
        }

        return (
            <SidebarMenu className={state === "collapsed" ? "flexy" : "w-full"}>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton
                                size="lg"
                                className={`data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground bg-gray-200 pointer-events-none select-none flexy ${
                                    state === "collapsed" ? "rounded-full" : ""
                                }`}
                            >
                                <div
                                    className={`flex aspect-square size-8 items-center justify-center bg-white! rounded-full! border-1 border-[var(--bg-10)] ${
                                        state === "collapsed"
                                            ? "ml-2"
                                            : "hidden"
                                    }`}
                                >
                                    <img
                                        src={YouchefIcon}
                                        className="w-full p-1"
                                        alt="logo"
                                    />
                                </div>
                                <div className="grid text-left text-sm leading-tight">
                                    <span
                                        className={`truncate font-semibold text-base ${
                                            state === "collapsed"
                                                ? "hidden"
                                                : ""
                                        }`}
                                    >
                                        <Logo size="20" />
                                    </span>
                                </div>
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        );
    };

    // Nav admin Component
    const NavAdmin = () => {
        const { state } = useSidebar();
        return (
            <SidebarMenu>
                <SidebarMenuItem
                    className={
                        state === "collapsed"
                            ? "flexy"
                            : "bg-gray-200 pointer-events-none select-none rounded-md -mt-2"
                    }
                >
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            asChild
                            className={state === "collapsed" ? "" : ""}
                        >
                            <SidebarMenuButton
                                size="lg"
                                className={`data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex flex-col h-20 ${
                                    state === "collapsed" ? "" : ""
                                }`}
                            >
                                <div>
                                    <Avatar className="rounded-lg h-8 w-8">
                                        <AvatarImage
                                            src={user.profile_img ? `/uploads/users/${user.profile_img}` : ProfileImg}
                                            alt="profile"
                                            className="rounded-full"
                                        />
                                    </Avatar>
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">
                                        {user.firstName} {user.lastName}
                                    </span>
                                </div>
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        );
    };

    const NavMain = () => {
        const getButtonClass = (path) => {
            return location == path ? "bg-10 text-white!" : "";
        };
        const getIconStyles = (path) => {
            return location == path
                ? "fill-white text-white"
                : "fill-black text-black";
        };
        return (
            <SidebarGroup className="pl-0 h-full mt-5">
                <SidebarGroupLabel className="flexy gap-2 border-b-1 rounded-none pb-2 mt-4">
                    <ManageIcon size="size-6!" />
                    <b className="text-lg">Manage</b>
                </SidebarGroupLabel>
                <SidebarMenu className="flex gap-8 h-full mt-6">
                    <SidebarMenuItem>
                        <Link href="/dashboard/reportedMeals">
                            <SidebarMenuButton
                                tooltip="Reported Meals"
                                className={`sideBarBtn group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:pr-12! group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:py-8! group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:pl-3! shadow hover:brightness-95 ${getButtonClass(
                                    "reportedMeals"
                                )}`}
                            >
                                <RepportIcon
                                    style={`size-7! ${getIconStyles(
                                        "reportedMeals"
                                    )}`}
                                />
                                <span className="font-bold text-[17px]">
                                    Reported Meals
                                </span>
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/dashboard/userAccounts">
                            <SidebarMenuButton
                                tooltip="Users Accounts"
                                className={`sideBarBtn group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:pr-12! group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:py-8! group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:pl-3! shadow hover:brightness-95 ${getButtonClass(
                                    "userAccounts"
                                )}`}
                            >
                                <UserIcon
                                    style={`size-7! ${getIconStyles(
                                        "userAccounts"
                                    )}`}
                                />
                                <span className="font-bold text-[17px]">
                                    Users Accounts
                                </span>
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/dashboard/userMessages">
                            <SidebarMenuButton
                                tooltip="User Messages"
                                className={`sideBarBtn group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:pr-12! group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:py-8! group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:pl-3! shadow hover:brightness-95 ${getButtonClass(
                                    "userMessages"
                                )}`}
                            >
                                <MessagesIcon
                                    style={`size-6.5! ${getIconStyles(
                                        "userMessages"
                                    )}`}
                                />
                                <span className="font-bold text-[17px]">
                                    User Messages
                                </span>
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>
        );
    };

    // Main component render
    return (
        <SidebarProvider className="-mt-5!">
            <Sidebar
                collapsible="icon"
                className="relative! h-[91vh] group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:w-20"
            >
                <SidebarHeader className="z-50!">
                    <Compagy />
                </SidebarHeader>
                <SidebarFooter className="z-50!">
                    <NavAdmin />
                </SidebarFooter>
                <SidebarContent className="z-50!">
                    <NavMain />
                </SidebarContent>
                <SidebarRail />
            </Sidebar>
            <SidebarInset className="h-auto">
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <CustomSidebarTrigger />
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {renderContent()}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

// Custom Sidebar Trigger component
const CustomSidebarTrigger = () => {
    const { state, toggleSidebar } = useSidebar();

    return (
        <button
            className="-ml-1 cursor-pointer focus:outline-none"
            onClick={toggleSidebar}
            aria-label={
                state === "expanded" ? "Collapse Sidebar" : "Expand Sidebar"
            }
        >
            {state === "expanded" ? (
                <DashboardClose style="size-6!" />
            ) : (
                <DashboardOpen style="size-6" />
            )}
        </button>
    );
};

export default Dashboard;
