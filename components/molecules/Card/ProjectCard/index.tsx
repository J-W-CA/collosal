import React from 'react';
import ButtonLink from 'components/atoms/Button/ButtonLink';
import LazyCard, { LazyCardProps } from 'components/atoms/LazyCard';
import Text from 'components/atoms/Text';

interface ProjectCardProps extends LazyCardProps {
  title: string;
  description: string;
  imageSrc: string; // Add image source property
}

const ProjectCard = ({
  title,
  description,
  imageSrc, // Include image source in props
  bottomSquareSize = 'small',
  height = 450,
}: ProjectCardProps) => {
  return (
    <div className="w-full">
      <LazyCard bottomSquareSize={bottomSquareSize} height={height} />
      <div className="flex flex-col place-items-center text-center mt-10">
        <div className="mb-2.5">
          <Text value={title} textStyle="ProjectTitle" />
        </div>
        <div className="mb-2.5">
          <img src={imageSrc} alt={title} className="max-w-full" /> {/* Display the image */}
        </div>
        <div className="mb-9">
          <Text value={description} textStyle="ProjectDescription" />
        </div>
        <div className="">
          <ButtonLink
            value="Detail"
            color="white"
            radius="pill"
            style="outline"
            href="/project/detail"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
