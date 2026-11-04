import {
  User,
  Mail,
  Home,
  ListChecks,
  CheckCircle2,
  Lock,
  Home as HomeIcon,
  Flame,
  SortDesc,
  SortAsc,
  Award,
  Edit2,
  Trash2,
  MoreVertical,
  Clock,
  Calendar,
  UserRound,
} from "lucide-react";

// BACKEND TEST
// DUMMY DATA
const backendDummy = [
  {
    title: "Buy groceries",
    description: "Milk, bread, eggs, and spinach",
    priority: "Low",
    dueDate: "2025-05-02T18:00:00.000Z",
    completed: "No",
  },
  {
    title: "Book dentist appointment",
    description: "Routine check-up and cleaning",
    priority: "Medium",
    dueDate: "2025-05-10T10:00:00.000Z",
    completed: true,
  },
  {
    title: "Book dentist appointment",
    description: "Routine check-up and cleaning",
    priority: "Medium",
    dueDate: "2025-05-10T10:00:00.000Z",
    completed: true,
  },
  {
    title: "Pay utility bills",
    description: "Electricity and water bills for April",
    priority: "High",
    dueDate: "2025-04-28T12:00:00.000Z",
    completed: "Yes",
  },
];

// FRONTEND DUMMY DATA

// assets/formConstants.js
export const baseControlClasses =
  "w-full px-4 py-2.5 border text-maintxt border-slate-200 rounded-2xl bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-300 focus:outline-none text-sm";

export const priorityStyles = {
  Low: "bg-green-50 text-green-700",
  Medium: "bg-amber-50 text-amber-700",
  High: "bg-red-50 text-red-700",
};

// data/defaultTask.js
export const DEFAULT_TASK = {
  title: "",
  description: "",
  priority: "Low",
  dueDate: "",
  completed: "No",
  id: null,
};

// LOGIN CSS
export const INPUTWRAPPER =
  "flex items-center bg-slate-50 text-maintxt border border-slate-200 rounded-2xl px-3 py-2.5 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-300 transition-all duration-200";
export const BUTTON_CLASSES =
  "w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:shadow-lg hover:shadow-indigo-200 transition-all duration-200 flex items-center justify-center gap-2";

// PROFILE CSS
export const INPUT_WRAPPER =
  "flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-300 transition-all duration-200";
export const FULL_BUTTON =
  "w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-2.5 rounded-2xl cursor-pointer hover:shadow-md hover:shadow-indigo-200 transition-all duration-200 flex items-center justify-center gap-2";
export const SECTION_WRAPPER =
  "bg-white rounded-3xl shadow-sm border border-slate-200 p-4";
export const BACK_BUTTON =
  "hidden flex items-center text-gray-600 hover:text-purple-600 mb-8 transition-colors duration-200";
export const DANGER_BTN =
  "w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl \
   bg-red-600 cursor-pointer lg:bg-red-50 border border-red-200 lg:text-red-700 \
   hover:bg-red-700 lg:hover:bg-red-100 hover:border-red-200 text-white lg:text-red-700 \
   transition-all duration-200";
export const personalFields = [
  { name: "name", type: "text", placeholder: "Full Name", icon: UserRound },
  { name: "email", type: "email", placeholder: "Email", icon: Mail },
];

// SIDEBAR
export const menuItems = [
  { text: "Dashboard", path: "/", icon: <Home className="w-5 h-5" /> },
  {
    text: "Pending Tasks",
    path: "/pending",
    icon: <ListChecks className="w-5 h-5" />,
  },
  {
    text: "Completed Tasks",
    path: "/complete",
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
];

export const SIDEBAR_CLASSES = {
  desktop:
    "hidden md:flex flex-col fixed inset-y-3 left-3 h-[calc(100vh-1.5rem)] w-20 lg:w-64 bg-one rounded-3xl border border-slate-200 shadow-sm z-20 transition-all duration-300",
  mobileButton:
    "absolute md:hidden inset-x-2 sm:inset-x-4 mt-3 sm:mt-0 flex items-center justify-between bg-one text-maintxt p-2 rounded-2xl shadow-sm border border-slate-200 transition",
  mobileDrawerBackdrop: "fixed inset-0 bg-black/40 backdrop-blur-sm",
  mobileDrawer:
    "absolute top-0 left-0 w-66 h-full bg-one/50 backdrop-blur-md border-r border-one shadow-lg z-50 p-4 flex flex-col space-y-6",
};

export const LINK_CLASSES = {
  base: "group flex items-center px-4 py-3 rounded-2xl transition-all duration-300",
  active:
    "bg-indigo-50 border-l-2 sm:border-l-3 border-indigo-600 text-indigo-700 font-semibold",
  inactive: "hover:bg-slate-50 text-slate-500 hover:text-slate-900",
  icon: "transition-transform duration-300 group-hover:scale-110 text-current",
  text: "text-sm font-medium ml-2",
};

export const PRODUCTIVITY_CARD = {
  container: "bg-slate-50 rounded-2xl p-3 border border-slate-100",
  header: "flex items-center justify-between mb-2",
  label: "text-xs font-semibold tracking-wider text-slate-500",
  badge: "text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full",
  barBg: "w-full h-2 bg-slate-200 rounded-full overflow-hidden",
  barFg: "h-full bg-indigo-600 rounded-full transition-all duration-500",
};

export const TIP_CARD = {
  container:
    "bg-indigo-50 rounded-2xl p-4 border border-indigo-100",
  iconWrapper: "p-2 bg-white rounded-xl",
  title: "text-sm font-semibold text-maintxt",
  text: "text-xs text-slate-500 mt-1",
};

// SIGNUP
export const FIELDS = [
  { name: "name", type: "text", placeholder: "Full Name", icon: User },
  { name: "email", type: "email", placeholder: "Email", icon: Mail },
  { name: "password", type: "password", placeholder: "Password", icon: Lock },
];

export const Inputwrapper =
  "flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-3 py-2.5 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-300 transition-all duration-200";
export const BUTTONCLASSES =
  "w-full bg-gradient-to-r from-indigo-600 to-violet-600 cursor-pointer text-white text-md font-semibold py-2.5 rounded-2xl hover:shadow-lg hover:shadow-indigo-200 transition-all duration-200 flex items-center justify-center gap-2";
export const MESSAGE_SUCCESS =
  "bg-green-50 text-green-700 p-3 rounded-2xl text-sm mb-3 border border-green-200";
export const MESSAGE_ERROR =
  "bg-red-50 text-red-700 p-3 rounded-2xl text-sm mb-3 border border-red-200";

// TASK ITEM
export const getPriorityColor = (priority) => {
  const colors = {
    low: "border-l-emerald-500 bg-green-50 text-green-700",
    medium: "border-l-amber-500 bg-amber-50 text-amber-700",
    high: "border-l-red-500 bg-red-50 text-red-700",
  };
  return (
    colors[priority?.toLowerCase()] ||
    "border-gray-500 bg-gray-50/50 text-gray-700"
  );
};

export const getPriorityBadgeColor = (priority) => {
  const colors = {
    low: "bg-green-50 text-green-700",
    medium: "bg-amber-50 text-amber-700",
    high: "bg-red-50 text-red-700",
  };
  return colors[priority?.toLowerCase()] || "bg-gray-100 text-gray-700";
};

// DASHBOARD
// UI Constants
export const WRAPPER = "p-2 sm:p-0 h-full overflow-hidden";
export const HEADER =
  "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 md:mb-4 gap-3 rounded-3xl bg-one p-4 md:p-5 border border-slate-200 shadow-sm";
export const ADD_BUTTON =
  "flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-4 py-2.5 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-indigo-200 cursor-pointer md:hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto justify-center text-sm md:text-base font-semibold";
export const STATS_GRID =
  "grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-3 md:mb-4";
export const STAT_CARD =
  "p-3 md:p-4 rounded-3xl bg-one shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 min-w-0";
export const ICON_WRAPPER = "p-1.5 md:p-2 rounded-xl";
export const VALUE_CLASS = "text-lg md:text-2xl font-bold truncate";
export const LABEL_CLASS = "text-xs text-maintxt truncate";

// Stats definitions
export const STATS = [
  {
    key: "total",
    label: "Total Tasks",
    icon: HomeIcon,
    iconColor: "bg-one/30 text-maintxt",
    borderColor: "border-indigo-200",
    valueKey: "total",
    gradient: true,
  },
  {
    key: "lowPriority",
    label: "Low Priority",
    icon: Flame,
    iconColor: "bg-green-50 text-green-700",
    borderColor: "border-green-200",
    valueKey: "lowPriority",
    textColor: "text-green-700",
  },
  {
    key: "mediumPriority",
    label: "Medium Priority",
    icon: Flame,
    iconColor: "bg-amber-50 text-amber-700",
    borderColor: "border-amber-200",
    valueKey: "mediumPriority",
    textColor: "text-amber-700",
  },
  {
    key: "highPriority",
    label: "High Priority",
    icon: Flame,
    iconColor: "bg-red-50 text-red-700",
    borderColor: "border-red-200",
    valueKey: "highPriority",
    textColor: "text-red-700",
  },
];

// Filter options
export const FILTER_OPTIONS = ["all", "today", "week", "high", "medium", "low"];
export const FILTER_LABELS = {
  all: "All Tasks",
  today: "Today's Tasks",
  week: "This Week",
  high: "High Priority",
  medium: "Medium Priority",
  low: "Low Priority",
};

// Empty state
export const EMPTY_STATE = {
  wrapper: "p-6 bg-one rounded-3xl shadow-sm border border-slate-200 text-center",
  iconWrapper:
    "w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4",
  btn: "px-4 py-2 bg-indigo-600 text-white rounded-2xl text-md font-medium hover:bg-indigo-700 hover:shadow-lg cursor-pointer transition-all duration-200",
};

// Filter UI Constants
export const FILTER_WRAPPER =
  "flex items-center justify-between bg-one border border-slate-200 p-4 rounded-3xl shadow-sm";
export const SELECT_CLASSES =
  "px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-indigo-500 sm:hidden text-sm text-maintxt";
export const TABS_WRAPPER = "hidden sm:flex space-x-1 bg-slate-100 p-1 rounded-xl";
export const TAB_BASE =
  "px-3 py-1.5 rounded-xl text-xs font-medium transition-all";
export const TAB_ACTIVE = "bg-white text-indigo-700 shadow-sm border border-slate-200";
export const TAB_INACTIVE = "text-slate-500 hover:bg-white hover:text-slate-900";

// COMPLETE TASK
export const SORT_OPTIONS = [
  { id: "newest", label: "Newest", icon: <SortDesc className="w-3 h-3" /> },
  { id: "oldest", label: "Oldest", icon: <SortAsc className="w-3 h-3" /> },
  { id: "priority", label: "Priority", icon: <Award className="w-3 h-3" /> },
];

// CSS class groups
export const CT_CLASSES = {
  page: "h-full overflow-hidden p-2 sm:p-0",
  header: "flex flex-col w-full mb-3 md:mb-4 gap-3 md:gap-4",
  titleWrapper:
    "flex flex-col sm:flex-row w-full sm:items-center justify-between bg-one rounded-3xl p-4 shadow-sm border border-slate-200 gap-3",
  title: "text-xl md:text-2xl lg:text-3xl font-bold text-maintxt truncate",
  subtitle: "text-xs md:text-sm text-maintxt/50 ml-1",
  sortContainer: "w-full",
  sortBox:
    "flex w-full items-center justify-between bg-one p-4 rounded-3xl shadow-sm border border-slate-200 whitespace-nowrap",
  filterLabel:
    "flex items-center gap-2 text-maintxt font-medium whitespace-nowrap",
  select:
    "px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-indigo-500 outline-none sm:hidden text-sm text-maintxt",
  btnGroup: "hidden sm:flex space-x-1 bg-slate-100 p-1 rounded-xl ml-2 md:ml-3",
  btnBase:
    "px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1",
  btnActive: "bg-white text-indigo-700 shadow-sm border border-slate-200 rounded-xl",
  btnInactive: "text-slate-500 hover:text-slate-900 hover:bg-white rounded-xl",
  list: "space-y-3 md:space-y-4",
  emptyState:
    "p-6 bg-one rounded-3xl shadow-sm border border-slate-200 text-center",
  emptyIconWrapper:
    "w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4",
  emptyTitle: "text-lg font-semibold text-maintxt mb-1",
  emptyText: "text-sm text-maintxt/50",
};

// constants/cssClasses.js
export const layoutClasses = {
  container: "p-2 sm:p-0 h-full overflow-hidden",
  headerWrapper: "flex flex-col w-full mb-3 md:mb-4 gap-3 md:gap-4",
  sortBox:
    "flex w-full items-center justify-between bg-one p-4 rounded-3xl shadow-sm border border-slate-200 whitespace-nowrap",
  select:
    "px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-indigo-500 outline-none sm:hidden text-sm text-maintxt",
  tabWrapper: "hidden sm:flex space-x-1 bg-slate-100 p-1 rounded-xl ml-2 md:ml-3",
  tabButton: (active) =>
    `px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
      active
        ? "bg-white text-indigo-700 shadow-sm border border-slate-200"
        : "text-slate-500 hover:text-slate-900 hover:bg-white"
    }`,
  addBox:
    "hidden md:block p-5 border-2 border-dashed border-purple-200 rounded-xl hover:border-purple-400 transition-colors cursor-pointer mb-6 bg-purple-50/50 group",
  emptyState: "bg-one rounded-3xl shadow-sm border border-slate-200 text-center",
  emptyIconBg:
    "w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4",
  emptyBtn:
    "px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-sm font-medium transition-all duration-300",
};

// TASK ITEM
// Menu options for task actions
export const MENU_OPTIONS = [
  {
    action: "edit",
    label: "Edit Task",
    icon: <Edit2 size={14} className="text-maintxt" />,
  },
  {
    action: "delete",
    label: "Delete Task",
    icon: <Trash2 size={14} className="text-red-600" />,
  },
];

// CSS class groups for TaskItem
export const TI_CLASSES = {
  wrapper:
    "group p-4 sm:p-5 rounded-3xl shadow-sm bg-one border-l-4 hover:shadow-md transition-all duration-300 border border-slate-200",
  leftContainer: "flex items-start gap-2 sm:gap-3 flex-1 min-w-0",
  completeBtn:
    "mt-0.5 sm:mt-1 p-1 sm:p-1.5 rounded-full hover:bg-one/30 transition-colors duration-300",
  checkboxIconBase: "w-4 h-4 sm:w-5 sm:h-5",
  actionBtn:
    "px-3 py-1.5 rounded-xl text-xs md:text-sm font-medium border border-slate-200 \
    transition-all duration-200",
  secondaryBtn:
    "px-3 py-1.5 rounded-xl text-xs md:text-sm bg-slate-50 cursor-pointer border border-slate-200 text-slate-700 \
   hover:bg-slate-100 transition-colors",

  dangerBtn:
    "px-3 py-1.5 rounded-xl text-xs md:text-sm bg-red-50 cursor-pointer border border-red-200 text-red-700 \
   hover:bg-red-100 transition-colors",
  titleBase: "text-base sm:text-lg font-semibold truncate",
  priorityBadge: "text-xs px-2 py-0.5 rounded-full shrink-0",
  description: "text-sm text-maintxt/50 line-clamp-3 leading-snug",
  subtasksContainer:
    "mt-3 sm:mt-4 space-y-2 sm:space-y-3 bg-purple-50/30 p-2 sm:p-3 rounded-lg border border-purple-100",
  progressBarBg: "h-1.5 bg-purple-100 rounded-full overflow-hidden",
  progressBarFg:
    "h-full bg-gradient-to-r from-fuchsia-500 to-purple-600 transition-all duration-300",
  rightContainer: "flex flex-col items-end gap-2 sm:gap-3",
  menuButton:
    "p-1 sm:p-1.5 hover:bg-one/30 rounded-lg text-maintxt/50 hover:text-maintxt transition-colors duration-200",
  menuDropdown:
    "absolute right-0 mt-1 w-40 sm:w-48 bg-white border border-slate-200 rounded-2xl shadow-xl z-10 overflow-hidden animate-fadeIn",
  dateRow:
    "flex items-center gap-1.5 text-xs font-medium whitespace-nowrap text-maintxt/50",
  createdRow:
    "flex items-center gap-1.5 text-xs font-medium whitespace-nowrap text-maintxt/50",
};
// APP.JSX
// const user = {
//   avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
//     data.name || "User"
//   )}&background=random`,
// };
