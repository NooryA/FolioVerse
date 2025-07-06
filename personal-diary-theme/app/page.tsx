"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Search,
  BookOpen,
  Edit3,
  Heart,
  Star,
  Sun,
  Cloud,
  CloudRain,
  Snowflake,
  Coffee,
  Code,
  Music,
  Camera,
  Plane,
  MapPin,
  Clock,
  Tag,
  Filter,
  Archive,
  Share,
  Eye,
  EyeOff,
  Plus,
  Save,
  X,
  Smile,
  Meh,
  Frown,
  ThumbsUp,
  ThumbsDown,
  Target,
  Award,
  TrendingUp,
  User,
  Mail,
  Github,
  Linkedin,
  Globe,
  Lightbulb,
  Zap,
  Coffee as CoffeeIcon,
  Moon,
  Settings,
  Download,
  FileText,
  Image,
  Bookmark,
  MessageCircle,
} from "lucide-react";

interface DiaryEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  mood: "happy" | "neutral" | "sad" | "excited" | "tired";
  weather: "sunny" | "cloudy" | "rainy" | "snowy";
  tags: string[];
  isPublic: boolean;
  location?: string;
  category: "personal" | "work" | "travel" | "learning" | "thoughts";
  timeSpent?: number;
}

interface Mood {
  type: "happy" | "neutral" | "sad" | "excited" | "tired";
  icon: any;
  color: string;
  label: string;
}

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"calendar" | "list" | "stats">("calendar");
  const [selectedEntry, setSelectedEntry] = useState<DiaryEntry | null>(null);
  const [isWriting, setIsWriting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTag, setFilterTag] = useState("");
  const [showPrivate, setShowPrivate] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [newEntry, setNewEntry] = useState<Partial<DiaryEntry>>({});

  const moods: Mood[] = [
    { type: "happy", icon: <Smile className="w-5 h-5" />, color: "text-green-500", label: "Happy" },
    { type: "excited", icon: <Zap className="w-5 h-5" />, color: "text-yellow-500", label: "Excited" },
    { type: "neutral", icon: <Meh className="w-5 h-5" />, color: "text-gray-500", label: "Neutral" },
    { type: "tired", icon: <Moon className="w-5 h-5" />, color: "text-blue-500", label: "Tired" },
    { type: "sad", icon: <Frown className="w-5 h-5" />, color: "text-red-500", label: "Sad" },
  ];

  const diaryEntries: DiaryEntry[] = [
    {
      id: "1",
      date: "2024-01-15",
      title: "Learning New Technologies",
      content: `Today I started learning about GraphQL and its benefits over REST APIs. The declarative nature of GraphQL queries is fascinating - clients can request exactly the data they need.

I spent some time building a simple GraphQL server with Node.js and Apollo Server. The type system is really powerful for ensuring data consistency.

Planning to integrate this into my next project. Also had a great coffee at the local café while coding - sometimes a change of environment really helps with productivity.`,
      mood: "excited",
      weather: "sunny",
      tags: ["learning", "graphql", "coding", "coffee"],
      isPublic: true,
      location: "San Francisco, CA",
      category: "learning",
      timeSpent: 4,
    },
    {
      id: "2",
      date: "2024-01-14",
      title: "Team Meeting Reflections",
      content: `Had our weekly team standup today. We discussed the new project timeline and I was assigned to lead the frontend architecture design. Feeling excited about the responsibility but also a bit nervous.

The team dynamics are really good - everyone is supportive and collaborative. I appreciate how we can openly discuss challenges without judgment.

Made some good progress on the React component library we're building. The design system is starting to come together nicely.`,
      mood: "happy",
      weather: "cloudy",
      tags: ["work", "team", "leadership", "react"],
      isPublic: false,
      location: "Office",
      category: "work",
      timeSpent: 8,
    },
    {
      id: "3",
      date: "2024-01-13",
      title: "Weekend Mountain Hike",
      content: `Went on an amazing hike in the mountains today. The weather was perfect - clear skies and cool breeze. There's something about being in nature that just clears your mind.

Took some great photos of the sunrise from the peak. The view was absolutely breathtaking. These moments remind me why I love living in California.

Also had some interesting conversations with fellow hikers about remote work and digital nomadism. Maybe I should consider taking a workation sometime.`,
      mood: "happy",
      weather: "sunny",
      tags: ["nature", "hiking", "photography", "weekend"],
      isPublic: true,
      location: "Mount Tamalpais",
      category: "personal",
      timeSpent: 6,
    },
    {
      id: "4",
      date: "2024-01-12",
      title: "Late Night Debugging Session",
      content: `Spent way too long debugging a weird state management issue in our React app. The bug was so subtle - a closure issue that only appeared in production.

Finally tracked it down to a useEffect dependency array problem. Sometimes the simplest bugs are the hardest to find. Note to self: always double-check those dependency arrays!

Feeling tired but satisfied. There's something oddly satisfying about solving a challenging bug, especially late at night when everything is quiet.`,
      mood: "tired",
      weather: "rainy",
      tags: ["debugging", "react", "late-night", "problem-solving"],
      isPublic: true,
      location: "Home Office",
      category: "work",
      timeSpent: 5,
    },
    {
      id: "5",
      date: "2024-01-11",
      title: "Coffee Shop Coding",
      content: `Decided to work from a new coffee shop today. The atmosphere was perfect - good music, comfortable seating, and amazing coffee.

Made great progress on the personal project I've been working on. Sometimes a change of environment is all you need to get into the flow state.

Met another developer there and we had an interesting discussion about the future of web development and AI tools. The community aspect of coffee shop coding is underrated.`,
      mood: "happy",
      weather: "cloudy",
      tags: ["coffee", "coding", "productivity", "networking"],
      isPublic: true,
      location: "Blue Bottle Coffee",
      category: "work",
      timeSpent: 4,
    },
    {
      id: "6",
      date: "2024-01-10",
      title: "Reflecting on Goals",
      content: `Took some time today to reflect on my goals for this year. I want to focus more on open source contributions and sharing knowledge with the community.

Started outlining a blog post series about React performance optimization. There are so many misconceptions out there that I'd love to clarify.

Also thinking about attending more tech conferences this year. The networking and learning opportunities are invaluable for career growth.`,
      mood: "neutral",
      weather: "sunny",
      tags: ["goals", "reflection", "open-source", "blogging"],
      isPublic: false,
      location: "Home",
      category: "thoughts",
      timeSpent: 2,
    },
  ];

  const allTags = Array.from(new Set(diaryEntries.flatMap((entry) => entry.tags)));

  const filteredEntries = diaryEntries.filter((entry) => {
    if (!showPrivate && !entry.isPublic) return false;
    if (
      searchTerm &&
      !entry.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !entry.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;
    if (filterTag && !entry.tags.includes(filterTag)) return false;
    return true;
  });

  const getMoodIcon = (mood: string) => {
    const moodObj = moods.find((m) => m.type === mood);
    return moodObj ? <span className={moodObj.color}>{moodObj.icon}</span> : null;
  };

  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case "sunny":
        return <Sun className="w-4 h-4 text-yellow-500" />;
      case "cloudy":
        return <Cloud className="w-4 h-4 text-gray-500" />;
      case "rainy":
        return <CloudRain className="w-4 h-4 text-blue-500" />;
      case "snowy":
        return <Snowflake className="w-4 h-4 text-blue-300" />;
      default:
        return null;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "personal":
        return <Heart className="w-4 h-4 text-pink-500" />;
      case "work":
        return <Code className="w-4 h-4 text-blue-500" />;
      case "travel":
        return <Plane className="w-4 h-4 text-green-500" />;
      case "learning":
        return <BookOpen className="w-4 h-4 text-purple-500" />;
      case "thoughts":
        return <Lightbulb className="w-4 h-4 text-yellow-500" />;
      default:
        return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const getEntriesForDate = (day: number) => {
    const dateString = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(
      2,
      "0"
    )}`;
    return diaryEntries.filter((entry) => entry.date === dateString);
  };

  const renderCalendarView = () => {
    const days = getDaysInMonth(currentMonth);
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentMonth(new Date())}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Today
            </button>
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-4">
          {weekDays.map((day) => (
            <div key={day} className="p-3 text-center text-gray-600 font-medium">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const entries = day ? getEntriesForDate(day) : [];
            const isToday =
              day &&
              new Date().getDate() === day &&
              new Date().getMonth() === currentMonth.getMonth() &&
              new Date().getFullYear() === currentMonth.getFullYear();

            return (
              <div
                key={index}
                className={`min-h-[100px] p-2 border border-gray-200 ${day ? "hover:bg-gray-50 cursor-pointer" : ""} ${
                  isToday ? "bg-blue-50 border-blue-300" : ""
                }`}
                onClick={() => day && setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
              >
                {day && (
                  <>
                    <div className={`text-sm font-medium mb-1 ${isToday ? "text-blue-600" : "text-gray-800"}`}>{day}</div>
                    <div className="space-y-1">
                      {entries.slice(0, 2).map((entry) => (
                        <div
                          key={entry.id}
                          className="text-xs p-1 bg-blue-100 text-blue-800 rounded truncate cursor-pointer hover:bg-blue-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedEntry(entry);
                          }}
                        >
                          {getMoodIcon(entry.mood)} {entry.title}
                        </div>
                      ))}
                      {entries.length > 2 && <div className="text-xs text-gray-500">+{entries.length - 2} more</div>}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderListView = () => {
    return (
      <div className="space-y-6">
        {filteredEntries.map((entry) => (
          <div key={entry.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{entry.title}</h3>
                  {getMoodIcon(entry.mood)}
                  {getWeatherIcon(entry.weather)}
                  {getCategoryIcon(entry.category)}
                  {!entry.isPublic && <EyeOff className="w-4 h-4 text-gray-400" />}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(entry.date)}
                  </span>
                  {entry.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {entry.location}
                    </span>
                  )}
                  {entry.timeSpent && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {entry.timeSpent}h
                    </span>
                  )}
                </div>
              </div>
              <button onClick={() => setSelectedEntry(entry)} className="text-blue-600 hover:text-blue-800 transition-colors">
                <Eye className="w-5 h-5" />
              </button>
            </div>

            <p className="text-gray-700 mb-4 line-clamp-3">{entry.content}</p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200"
                    onClick={() => setFilterTag(tag)}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Share className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderStatsView = () => {
    const moodCounts = moods.map((mood) => ({
      ...mood,
      count: diaryEntries.filter((entry) => entry.mood === mood.type).length,
    }));

    const categoryCounts = ["personal", "work", "travel", "learning", "thoughts"].map((category) => ({
      category,
      count: diaryEntries.filter((entry) => entry.category === category).length,
    }));

    const totalEntries = diaryEntries.length;
    const publicEntries = diaryEntries.filter((entry) => entry.isPublic).length;
    const totalTimeSpent = diaryEntries.reduce((sum, entry) => sum + (entry.timeSpent || 0), 0);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Writing Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Entries</span>
              <span className="text-2xl font-bold text-blue-600">{totalEntries}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Public Entries</span>
              <span className="text-2xl font-bold text-green-600">{publicEntries}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Time Logged</span>
              <span className="text-2xl font-bold text-purple-600">{totalTimeSpent}h</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Mood Distribution</h3>
          <div className="space-y-3">
            {moodCounts.map((mood) => (
              <div key={mood.type} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={mood.color}>{mood.icon}</span>
                  <span className="text-gray-600 capitalize">{mood.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${mood.color.replace("text", "bg")}`}
                      style={{ width: `${(mood.count / totalEntries) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800">{mood.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
          <div className="space-y-3">
            {categoryCounts.map(({ category, count }) => (
              <div key={category} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(category)}
                  <span className="text-gray-600 capitalize">{category}</span>
                </div>
                <span className="text-sm font-medium text-gray-800">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Alex's Personal Journal</h1>
                <p className="text-gray-600">Thoughts, experiences, and reflections</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <button
                onClick={() => setIsWriting(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg transition-all"
              >
                <Plus className="w-4 h-4" />
                New Entry
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                {[
                  { id: "calendar", label: "Calendar", icon: <Calendar className="w-4 h-4" /> },
                  { id: "list", label: "List", icon: <FileText className="w-4 h-4" /> },
                  { id: "stats", label: "Stats", icon: <TrendingUp className="w-4 h-4" /> },
                ].map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setViewMode(view.id as any)}
                    className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                      viewMode === view.id ? "bg-white text-purple-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {view.icon}
                    {view.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search entries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <select
                value={filterTag}
                onChange={(e) => setFilterTag(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Tags</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    #{tag}
                  </option>
                ))}
              </select>

              <button
                onClick={() => setShowPrivate(!showPrivate)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                  showPrivate ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-600"
                }`}
              >
                {showPrivate ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                Private
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {viewMode === "calendar" && renderCalendarView()}
        {viewMode === "list" && renderListView()}
        {viewMode === "stats" && renderStatsView()}
      </div>

      {/* Entry Detail Modal */}
      {selectedEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-bold text-gray-800">{selectedEntry.title}</h2>
                  {getMoodIcon(selectedEntry.mood)}
                  {getWeatherIcon(selectedEntry.weather)}
                  {getCategoryIcon(selectedEntry.category)}
                </div>
                <button onClick={() => setSelectedEntry(null)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="prose max-w-none">
                    <div className="text-gray-600 mb-4">{formatDate(selectedEntry.date)}</div>
                    <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">{selectedEntry.content}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Details</h4>
                    <div className="space-y-2 text-sm">
                      {selectedEntry.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{selectedEntry.location}</span>
                        </div>
                      )}
                      {selectedEntry.timeSpent && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span>{selectedEntry.timeSpent} hours</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        {selectedEntry.isPublic ? <Eye className="w-4 h-4 text-green-500" /> : <EyeOff className="w-4 h-4 text-gray-400" />}
                        <span>{selectedEntry.isPublic ? "Public" : "Private"}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEntry.tags.map((tag) => (
                        <span key={tag} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                      <Edit3 className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                      <Share className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
