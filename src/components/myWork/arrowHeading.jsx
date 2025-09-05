export default function ArrowButton({ title, description }) {
  return (
    <div className="md:px-4 my-4 flex items-center font-family-helvetica ">
      <a
        href="#"
        className="hidden md:block relative text-black text-2xl no-underline group 
          before:content-[''] before:absolute before:w-0 before:h-px before:bg-black before:left-0 before:top-1/2 
          before:transition-all before:duration-300
          after:content-[''] after:absolute after:top-1/2 after:left-[52px] after:w-[7px] after:h-[7px] 
          after:border-t after:border-l after:border-black after:rotate-[135deg] after:-translate-y-1/2 [5px] 
          after:opacity-0 after:transition-all after:duration-300
          group-hover:before:w-[60px] group-hover:after:opacity-100 group-hover:after:delay-300 group-hover:before:delay-200"
      >
        <span
          className="inline-block relative transition-all duration-300
            before:content-[''] before:absolute before:h-px before:bg- black before:top-1/2 before:w-[60px]
            before:left-[calc(100%+10px)] before:transition-all before:duration-300
            after:content-[''] after:absolute after:top-1/2 after:left-[calc(100%+62px)] after:w-[7px] after:h-[7px]
             after:rotate-[135deg] after:-translate-y-1/2 [5px]
            group-hover:translate-x-[70px] group-hover:before:w-0 group-hover:after:opacity-0 group-hover:before:delay-100"
        >
          <h3 className="text-base md:text-xl font-medium text-black  transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
            {description}
          </p>
        </span>
      </a>
      <div className="md:hidden">
        <h3 className="text-base md:text-xl font-medium text-black  transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
}
