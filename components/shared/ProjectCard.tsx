import { MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/data/projects'

type Props = {
  project: Project
  accentColor?: string
}

export function ProjectCard({ project, accentColor = '#00B4D8' }: Props) {
  if (project.cta && project.ctaHref) {
    return (
      <div className="rounded-2xl border border-surface-line bg-surface-soft p-8 flex flex-col justify-between min-h-60">
        <div>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
          >
            {project.badge}
          </span>
          <h4 className="text-xl font-bold text-ink mb-3">{project.title}</h4>
          <p className="text-ink-muted text-sm leading-relaxed">{project.desc}</p>
        </div>
        <Link
          href={project.ctaHref}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: accentColor }}
        >
          {project.cta}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-surface-line bg-white overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      {project.image ? (
        <div className="h-48 bg-surface-soft overflow-hidden relative">
          <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      ) : (
        <div
          className="h-48 flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}05)` }}
        >
          <span className="text-4xl font-black opacity-10" style={{ color: accentColor }}>PPT</span>
        </div>
      )}
      <div className="p-6">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
          style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
        >
          {project.badge}
        </span>
        <h4 className="text-lg font-bold text-ink mb-1">{project.title}</h4>
        {(project.location || project.type) && (
          <div className="flex items-center gap-1 text-ink-muted text-xs mb-3">
            <MapPin className="w-3 h-3" />
            <span>{[project.location, project.type].filter(Boolean).join(' · ')}</span>
          </div>
        )}
        <p className="text-ink-muted text-sm leading-relaxed">{project.desc}</p>
        {project.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-surface-soft rounded-md text-ink-soft">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
