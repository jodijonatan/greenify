import React from "react";

export default function SectionTitle({
  tag,
  title,
  subtitle,
  align = "center", // Bisa diatur "center" atau "left"
  dark = false,
}) {
  const isLeft = align === "left";

  return (
    <div
      className={`max-w-3xl mb-16 ${isLeft ? "text-left" : "mx-auto text-center"}`}
    >
      {/* Badge Tag */}
      {tag && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-green-600 bg-green-100 rounded-full">
          {tag}
        </span>
      )}

      {/* Main Title */}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-black leading-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
        <span className="text-green-500">.</span>
      </h2>

      {/* Decorative Accent Line */}
      <div
        className={`flex items-center gap-2 mt-4 ${isLeft ? "justify-start" : "justify-center"}`}
      >
        <div className="h-1.5 w-12 bg-green-500 rounded-full" />
        <div className="h-1.5 w-3 bg-green-200 rounded-full" />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-6 text-lg md:text-xl leading-relaxed ${
            dark ? "text-green-100/70" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
