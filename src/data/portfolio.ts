import type { ImageMetadata } from 'astro';

import profileImage from '../assets/images/ProfilePicture.webp';
import mercadoLibreImage from '../assets/images/mcl-clone-ss.webp';
import charactersHubImage from '../assets/images/charactershub-ss.webp';

export type Accent = 'cyan' | 'violet' | 'neutral';
export type SocialIconKey = 'linkedin' | 'github' | 'email';
export type TechnologyIconKey =
	| 'html'
	| 'css'
	| 'javascript'
	| 'typescript'
	| 'react'
	| 'node'
	| 'tailwind'
	| 'supabase';

export interface SectionLink {
	href: string;
	label: string;
}

export interface SocialLink {
	label: string;
	href: string;
	description: string;
	accent: Accent;
	icon: SocialIconKey;
}

export interface ProjectItemData {
	title: string;
	description: string;
	image: ImageMetadata;
	liveUrl: string;
	codeUrl: string;
	stack: string[];
	accent: Accent;
}

export interface TechnologyItem {
	name: string;
	detail: string;
	accent: Accent;
	icon?: TechnologyIconKey;
	badge?: string;
}

export const sectionLinks: SectionLink[] = [
	{ href: '#sobre-mi', label: 'Sobre mí' },
	{ href: '#experiencia', label: 'Experiencia' },
	{ href: '#proyectos', label: 'Proyectos' },
	{ href: '#tecnologias', label: 'Tecnologías' },
	{ href: '#contacto', label: 'Contacto' }
];

export const socialLinks: SocialLink[] = [
	{
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/axel-larrea',
		description: 'Perfil profesional',
		accent: 'cyan',
		icon: 'linkedin'
	},
	{
		label: 'GitHub',
		href: 'https://github.com/AxelLarrea',
		description: 'Código y repositorios',
		accent: 'violet',
		icon: 'github'
	},
	{
		label: 'Email',
		href: 'mailto:axel.larrea.9@gmail.com',
		description: 'Contacto directo',
		accent: 'neutral',
		icon: 'email'
	}
];

export const experience: {
	company: string;
	role: string;
	period: string;
	description: string[];
}[] = [
	{
		company: 'MyIntelli',
		role: 'Frontend Developer',
		period: 'Oct 2025 – Actual',
		description: [
			'Desarrollé desde cero una aplicación para gestión de turnos y horarios, reemplazando un sistema legacy',
			'Implementé arquitectura de microfrontends para migración progresiva',
			'Construí interfaces reutilizables con React, TypeScript, Tailwind CSS, Zustand y React Router',
			'Mejoré performance con code splitting y lazy loading',
			'Trabajé bajo metodología Scrum (dailies, sprints, Kanban)'
		]
	}
];

export const heroHighlights = [
	'Interfaces modernas con foco en claridad visual y rendimiento.',
	'Código limpio y escalable para productos web.',
	'+1 año de experiencia profesional'
];

export const profile = {
	name: 'Axel Larrea',
	role: 'Desarrollador Web',
	kicker: 'Desarrollador Frontend',
	headline: 'Construyo experiencias web precisas y modernas.',
	intro: 'Me enfoco en interfaces funcionales, código limpio y productos digitales que se sienten sólidos, rápidos y pensados para durar.',
	image: profileImage
};

export const cv = {
	href: '/Curriculum%202026%20-%20Axel%20Luj%C3%A1n%20Larrea.pdf',
	downloadName: 'Axel-Larrea-CV-2026.pdf'
};

export const aboutContent = {
	title: 'Sobre mí',
	lead: 'Trabajo desde una mirada técnica y de producto: cada sección debe comunicar, rendir bien y resolver una necesidad real.',
	paragraphs: [
		'Desarrollador Frontend con experiencia construyendo aplicaciones web modernas con React y TypeScript.',
		'Participo activamente en la migración de sistemas legacy hacia arquitecturas basadas en microfrontends.',
		'Me enfoco en desarrollar productos bien pensados, con foco en rendimiento y experiencia de usuario.',
		'Disfruto resolver problemas reales y seguir creciendo técnicamente en equipos colaborativos.'
	],
	pills: ['MyIntelli / Frontend Developer', 'React + TypeScript']
};

export const projects: ProjectItemData[] = [
	{
		title: 'Clon de MercadoLibre',
		description: 'E-commerce orientado a experiencia realista de catálogo, filtros, búsqueda y detalle de producto con una interfaz rápida y clara.',
		image: mercadoLibreImage,
		liveUrl: 'https://mcl-clone-v2.vercel.app/',
		codeUrl: 'https://github.com/AxelLarrea/mcl-clone-v2',
		stack: ['React', 'Node.js', 'CSS', 'Supabase'],
		accent: 'cyan'
	},
	{
		title: 'CharactersHub',
		description: 'Aplicación para explorar personajes de cómics con filtros, búsqueda y biografías, diseñada para navegación fluida y visualmente enfocada.',
		image: charactersHubImage,
		liveUrl: 'https://characters-hub-ts.vercel.app',
		codeUrl: 'https://github.com/AxelLarrea/characters-hub',
		stack: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
		accent: 'violet'
	}
];

export const technologies: TechnologyItem[] = [
	{ name: 'HTML', detail: 'Estructura semántica y accesible.', accent: 'neutral', icon: 'html' },
	{ name: 'CSS', detail: 'Layouts, animaciones y detalle visual.', accent: 'neutral', icon: 'css' },
	{ name: 'JavaScript', detail: 'Lógica interactiva y UI dinámica.', accent: 'cyan', icon: 'javascript' },
	{ name: 'TypeScript', detail: 'Tipado seguro para escalar componentes.', accent: 'neutral', icon: 'typescript' },
	{ name: 'React', detail: 'Componentes escalables y reutilizables.', accent: 'cyan', icon: 'react' },
	{ name: 'Node.js', detail: 'APIs y servicios backend.', accent: 'cyan', icon: 'node' },
	{ name: 'Tailwind CSS', detail: 'Sistemas visuales precisos.', accent: 'violet', icon: 'tailwind' },
	{ name: 'Supabase', detail: 'Auth, datos y backend ágil.', accent: 'violet', icon: 'supabase' },
];
