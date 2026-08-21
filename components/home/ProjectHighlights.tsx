import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types/wordpress";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

interface ProjectHighlightsProps {
  projects: Project[];
}

export const ProjectHighlights: React.FC<ProjectHighlightsProps> = ({ projects }) => {
  const displayProjects = projects.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Bespoke Metal Fabrication Executed in Rajasthan"
            subtitle="Explore our executed residential villa gates, commercial door frame projects, and floating staircases."
          />
          <Button href="/projects" variant="outline" icon className="self-start md:self-auto">
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="group premium-card overflow-hidden hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <Image
                  src={project.cover_image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hrm-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-hrm-orange text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-hrm-orange" />
                    {project.location}
                  </span>
                  <span>•</span>
                  <span className="truncate">{project.scope}</span>
                </div>

                <h3 className="text-xl font-bold text-hrm-charcoal group-hover:text-hrm-orange transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed flex-grow">
                  {project.excerpt}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-hrm-charcoal group-hover:text-hrm-orange transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
