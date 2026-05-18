import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({
  year,
  title,
  description,
  tech,
  link,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        grid
        grid-cols-8
        gap-6
        rounded-md
        p-6
        transition-all
        duration-300
        hover:bg-white/5
        hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]

        mt-6
        lg:group-hover/list:opacity-50
        lg:hover:!opacity-100
      "
    >

      {/* LEFT SIDE */}
      <div className="col-span-2">

        <p className="
          uppercase
          tracking-widest
          text-[#94A3B8]
          text-xs
        ">
          {year}
        </p>

      </div>

      {/* RIGHT SIDE */}
      <div className="col-span-6">

        <h3 className="
          flex
          items-center
          gap-2
          text-base
          text-gray-300
          transition-colors
          duration-300
        ">
          {title}

          <FiArrowUpRight
            className="
            text-base
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
            "
        />
        </h3>

        <p className="
          mt-3
          text-[#94A3B8]
          text-sm
          leading-relaxed
        ">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">

          {tech.map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border
                border-white/10
                px-3
                py-1
                text-sm
                text-zinc-300
              "
            >
              {item}
            </span>
          ))}

        </div>

      </div>

    </a>
  )
}