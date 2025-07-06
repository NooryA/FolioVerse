"use client";

import React, { useState, useEffect } from "react";
import {
  User,
  Code,
  Palette,
  Mail,
  MapPin,
  Calendar,
  Coffee,
  Star,
  Zap,
  Heart,
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Clock,
  Briefcase,
  Award,
  TrendingUp,
  MessageSquare,
  Camera,
  Music,
  Gamepad2,
  BookOpen,
  Headphones,
  Target,
  Rocket,
  Globe,
  Smartphone,
  Monitor,
  Lightbulb,
  Flame,
  ThumbsUp,
  Eye,
  Download,
  Play,
  Pause,
  SkipForward,
  Volume2,
  Sun,
  Moon,
  Cloud,
  Umbrella,
  Thermometer,
} from "lucide-react";

interface TimeState {
  time: string;
  date: string;
}

interface WeatherState {
  temp: number;
  condition: "sunny" | "cloudy" | "rainy";
  location: string;
}

interface MusicState {
  isPlaying: boolean;
  track: string;
  artist: string;
  progress: number;
}

export function BentoGrid() {
  const [timeState, setTimeState] = useState<TimeState>({
    time: "",
    date: "",
  });

  const [weatherState, setWeatherState] = useState<WeatherState>({
    temp: 72,
    condition: "sunny",
    location: "New York",
  });

  const [musicState, setMusicState] = useState<MusicState>({
    isPlaying: false,
    track: "Lofi Hip Hop",
    artist: "Chill Beats",
    progress: 45,
  });

  const [coffeeCups, setCoffeeCups] = useState(247);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set initial time on client
    const updateTime = () => {
      const now = new Date();
      setTimeState({
        time: now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        date: now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    setIsVisible(true);

    return () => clearInterval(interval);
  }, []);

  const toggleMusic = () => {
    setMusicState((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
  };

  const addCoffee = () => {
    setCoffeeCups((prev) => prev + 1);
  };

  const getWeatherIcon = () => {
    switch (weatherState.condition) {
      case "sunny":
        return Sun;
      case "cloudy":
        return Cloud;
      case "rainy":
        return Umbrella;
      default:
        return Sun;
    }
  };

  const WeatherIcon = getWeatherIcon();

  const skills = [
    { name: "React", level: 95, color: "bg-blue-500" },
    { name: "TypeScript", level: 90, color: "bg-blue-600" },
    { name: "Next.js", level: 88, color: "bg-black" },
    { name: "Tailwind", level: 92, color: "bg-cyan-500" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "Python", level: 80, color: "bg-yellow-500" },
  ];

  const projects = [
    { name: "E-commerce Platform", status: "Live", users: "12K", color: "bg-emerald-500" },
    { name: "Design System", status: "Beta", users: "3K", color: "bg-purple-500" },
    { name: "Mobile App", status: "Dev", users: "Soon", color: "bg-orange-500" },
  ];

  return (
    <div
      className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 auto-rows-max">
        {/* Main Profile Card - Large */}
        <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-2 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
          <div className="relative">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-3xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">Alex Johnson</h1>
          <p className="text-white/80 mb-6 text-lg">Full Stack Developer & Designer</p>
          <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Get In Touch
          </button>
        </div>

        {/* Time Card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
          <div className="flex items-center justify-between mb-4">
            <Clock className="w-8 h-8 text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xs text-gray-500 uppercase tracking-wide">Local Time</span>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">{timeState.time}</div>
          <div className="text-sm text-gray-500">{timeState.date}</div>
        </div>

        {/* Weather Card */}
        <div className="bg-gradient-to-br from-sky-400 to-blue-500 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
          <div className="flex items-center justify-between mb-4">
            <WeatherIcon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xs text-white/80 uppercase tracking-wide">Weather</span>
          </div>
          <div className="text-2xl font-bold mb-1">{weatherState.temp}°F</div>
          <div className="text-sm text-white/80 capitalize">{weatherState.condition}</div>
        </div>

        {/* Location Card */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
          <div className="flex items-center justify-between mb-4">
            <MapPin className="w-8 h-8 text-white group-hover:bounce transition-transform duration-300" />
            <span className="text-xs text-white/80 uppercase tracking-wide">Location</span>
          </div>
          <div className="text-xl font-bold mb-1">New York</div>
          <div className="text-sm text-white/80">United States</div>
        </div>

        {/* Coffee Counter */}
        <div
          className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
          onClick={addCoffee}
        >
          <div className="flex items-center justify-between mb-4">
            <Coffee className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xs text-white/80 uppercase tracking-wide">Coffee</span>
          </div>
          <div className="text-2xl font-bold mb-1">{coffeeCups}</div>
          <div className="text-sm text-white/80">Cups this year</div>
        </div>

        {/* Skills Card - Large */}
        <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Skills & Expertise</h3>
            <Code className="w-6 h-6 text-indigo-500" />
          </div>
          <div className="space-y-4">
            {skills.slice(0, 4).map((skill, index) => (
              <div key={skill.name} className="flex items-center gap-4">
                <div className="w-20 text-sm font-medium text-gray-700">{skill.name}</div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${skill.color} transition-all duration-1000 delay-${index * 200}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 w-8">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Music Player */}
        <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-center justify-between mb-4">
            <Headphones className="w-6 h-6 text-white" />
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${musicState.isPlaying ? "bg-green-400 animate-pulse" : "bg-gray-400"}`}></div>
              <span className="text-xs text-white/80">{musicState.isPlaying ? "Playing" : "Paused"}</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-lg mb-1">{musicState.track}</div>
            <div className="text-white/80 text-sm">{musicState.artist}</div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
              <SkipForward className="w-4 h-4 rotate-180" />
            </button>
            <button onClick={toggleMusic} className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
              {musicState.isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
              <SkipForward className="w-4 h-4" />
            </button>
            <div className="flex-1 bg-white/20 rounded-full h-1">
              <div className="bg-white h-1 rounded-full transition-all duration-300" style={{ width: `${musicState.progress}%` }}></div>
            </div>
          </div>
        </div>

        {/* Projects Overview */}
        <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Active Projects</h3>
            <Briefcase className="w-6 h-6 text-indigo-500" />
          </div>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${project.color}`}></div>
                  <div>
                    <div className="font-semibold text-gray-800">{project.name}</div>
                    <div className="text-sm text-gray-500">{project.users} users</div>
                  </div>
                </div>
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium">{project.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <span className="text-xs text-gray-500 uppercase tracking-wide">Growth</span>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">+47%</div>
          <div className="text-sm text-gray-500">This Month</div>
        </div>

        {/* Availability Status */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <Zap className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-xs text-white/80 uppercase tracking-wide">Status</span>
          </div>
          <div className="text-xl font-bold mb-1">Available</div>
          <div className="text-sm text-white/80">For new projects</div>
        </div>

        {/* Quote Card */}
        <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 bg-gradient-to-br from-violet-600 to-purple-700 rounded-3xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
          <Sparkles className="w-8 h-8 text-white/80 mb-6 group-hover:rotate-12 transition-transform duration-300" />
          <blockquote className="text-lg font-medium leading-relaxed mb-4">
            "Great design is not just what it looks like and feels like. Design is how it works."
          </blockquote>
          <cite className="text-white/80 text-sm">— Steve Jobs</cite>
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">Connect</h3>
            <Heart className="w-6 h-6 text-red-500" />
          </div>
          <div className="flex gap-3">
            <button className="p-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
              <Github className="w-5 h-5" />
            </button>
            <button className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="p-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Experience Counter */}
        <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
          <div className="flex items-center justify-between mb-4">
            <Award className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xs text-white/80 uppercase tracking-wide">Experience</span>
          </div>
          <div className="text-2xl font-bold mb-1">5+</div>
          <div className="text-sm text-white/80">Years Coding</div>
        </div>

        {/* Call to Action */}
        <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Let's Build Something Amazing</h3>
              <p className="text-white/90 mb-4">Ready to turn your ideas into reality</p>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2 group-hover:gap-4">
                Start Project
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <Rocket className="w-12 h-12 text-white/80 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Blog/Articles */}
        <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-center justify-between mb-4">
            <BookOpen className="w-8 h-8 text-purple-500" />
            <span className="text-xs text-gray-500 uppercase tracking-wide">Articles</span>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">12</div>
          <div className="text-sm text-gray-500">Published</div>
        </div>

        {/* Photography */}
        <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
          <div className="flex items-center justify-between mb-4">
            <Camera className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xs text-white/80 uppercase tracking-wide">Hobby</span>
          </div>
          <div className="text-xl font-bold mb-1">Photography</div>
          <div className="text-sm text-white/80">Side passion</div>
        </div>

        {/* Gaming */}
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
          <div className="flex items-center justify-between mb-4">
            <Gamepad2 className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xs text-white/80 uppercase tracking-wide">Fun</span>
          </div>
          <div className="text-xl font-bold mb-1">Gamer</div>
          <div className="text-sm text-white/80">Level 99</div>
        </div>

        {/* Footer/Contact */}
        <div className="md:col-span-2 lg:col-span-4 xl:col-span-6 bg-gray-900 text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Ready to collaborate?</h3>
              <p className="text-gray-300">Let's create something extraordinary together</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Download Resume
              </button>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
