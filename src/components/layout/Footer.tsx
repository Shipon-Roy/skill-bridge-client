import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12">
      <Container>
        <div className="container px-4 md:px-6 mx-auto grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <span className="text-green-500">Skill Bridge</span>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Welcome to{" "}
              <span className="text-green-400 font-bold">Skill Bridge</span>,
              the ultimate destination for anyone looking to learn programming
              languages for free!
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="/tutors" className="hover:text-blue-600">
                  Tutors
                </Link>
              </li>

              <li>
                <Link href="/login" className="hover:text-blue-600">
                  Log In
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  href="/tutors?category=Programming"
                  className="hover:text-blue-600"
                >
                  Tech
                </Link>
              </li>
              <li>
                <Link
                  href="/tutors?category=Languages"
                  className="hover:text-blue-600"
                >
                  Languages
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container px-4 md:px-6 mx-auto mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SkillBridge. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
