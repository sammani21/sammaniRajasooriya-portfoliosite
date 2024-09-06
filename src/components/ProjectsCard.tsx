

interface Props {
  title: string;
  des: string;
  src: string;
  technologies: JSX.Element[]; // Array of icons to represent technologies
}

const ProjectsCard = ({ title, des, src, technologies }: Props) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal items-center text-center">
              {title}
            </h3>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 items-center text-center">
            {des}
          </p>
        </div>

        {/* Render technologies here */}
        <div className="flex justify-center gap-4 mt-4">
          {technologies.map((TechIcon, index) => (
            <span key={index} className="text-2xl">
              {TechIcon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
