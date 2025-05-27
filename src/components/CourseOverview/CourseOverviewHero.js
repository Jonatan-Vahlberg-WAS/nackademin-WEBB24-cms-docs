import { cn } from "../../utils/cn";
import FrostedGlassCard from "../_library/Card/TWFrostedGlassCard";
import T from "../_library/Ui/TWTypography";

const CourseOverviewHero = ({ title, tagline }) => {
  const heroClasses = cn(
    "bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 text-white py-12 min-h-[50vh]",
    "flex flex-col items-center justify-center",
    "animate-gradient-shift"
  );
  return (
    <>
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
            background-size: 200% 200%;
          }
          25% {
            background-position: 100% 50%;
            background-size: 250% 250%;
          }
          50% {
            background-position: 100% 100%;
            background-size: 200% 200%;
          }
          75% {
            background-position: 0% 100%;
            background-size: 250% 250%;
          }
          100% {
            background-position: 0% 50%;
            background-size: 200% 200%;
          }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 20s ease-in-out infinite;
          background-image: linear-gradient(
            45deg,
            rgb(147, 197, 253) 0%,
            rgb(216, 180, 254) 25%,
            rgb(147, 197, 253) 50%,
            rgb(216, 180, 254) 75%,
            rgb(147, 197, 253) 100%
          );
        }
      `}</style>
      <div className={heroClasses}>
        <FrostedGlassCard blur="lg">
          <T.PageTitle>
            <T.FrostedGlassText>{title}</T.FrostedGlassText>
          </T.PageTitle>
          <T.Text className="text-xl font-bold">{tagline}</T.Text>
        </FrostedGlassCard>
      </div>
    </>
  );
};

export default CourseOverviewHero;
