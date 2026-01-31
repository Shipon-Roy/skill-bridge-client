import Link from "next/link";
import { GiGraduateCap } from "react-icons/gi";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-linear-to-t from-gray-900 to-gray-800   border-t border-green-500/40 py-16 backdrop-blur-md">
      <Container>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo + Description */}
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center gap-3 group hover:scale-105 transition-all p-3 rounded-xl hover:bg-green-500/10"
            >
              <div className="p-2 bg-linear-to-br from-green-500/20 border-2 border-green-500/30 rounded-xl">
                <GiGraduateCap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-black text-xl bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-tight">
                SkillBridge
              </h3>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Ultimate destination for learning programming languages with
              verified tutors. Master any skill with 1-on-1 personalized
              guidance.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-bold text-gray-200 mb-6 text-lg tracking-tight">
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tutors"
                  className="group inline-flex items-center gap-2 text-gray-400 hover:text-green-400 hover:underline font-medium text-sm transition-all duration-200"
                >
                  Tutors
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="group inline-flex items-center gap-2 text-gray-400 hover:text-green-400 hover:underline font-medium text-sm transition-all duration-200"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="group inline-flex items-center gap-2 text-gray-400 hover:text-green-400 hover:underline font-medium text-sm transition-all duration-200"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-gray-200 mb-6 text-lg tracking-tight">
              Categories
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tutors?category=Programming"
                  className="group inline-flex items-center gap-2 text-gray-400 hover:text-green-400 hover:underline font-medium text-sm transition-all duration-200"
                >
                  Programming
                </Link>
              </li>
              <li>
                <Link
                  href="/tutors?category=Languages"
                  className="group inline-flex items-center gap-2 text-gray-400 hover:text-green-400 hover:underline font-medium text-sm transition-all duration-200"
                >
                  Languages
                </Link>
              </li>
              <li>
                <Link
                  href="/tutors?category=Music"
                  className="group inline-flex items-center gap-2 text-gray-400 hover:text-green-400 hover:underline font-medium text-sm transition-all duration-200"
                >
                  Music
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-gray-200 mb-6 text-lg tracking-tight">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="group inline-flex items-center gap-2 text-gray-400 hover:text-green-400 hover:underline font-medium text-sm transition-all duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="group inline-flex items-center gap-2 text-gray-400 hover:text-green-400 hover:underline font-medium text-sm transition-all duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="group inline-flex items-center gap-2 text-gray-400 hover:text-green-400 hover:underline font-medium text-sm transition-all duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-10 mt-16">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SkillBridge. All rights reserved.
              Made with ❤️ for developers.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
