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
	stack: string[];
}[] = [
	{
		company: 'MyIntelli',
		role: 'Frontend Developer',
		period: 'Oct 2025 – Actual',
		description: [
			'Desarrollé desde cero una aplicación para gestión de turnos y horarios, destinada a reemplazar un módulo legacy existente.',
			'Participé en la modernización progresiva del sistema mediante una arquitectura orientada a microfrontends.',
			'Diseñé e implementé interfaces reutilizables utilizando React y TypeScript, priorizando mantenibilidad y consistencia.',
			'Optimicé el rendimiento mediante code splitting, lazy loading y reducción de renders innecesarios.',
			'Diseñé la capa de consumo de APIs utilizando TanStack Query.'
		],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'React Router', 'TanStack Query']
	}
];

export const heroHighlights = [
	'Interfaces modernas con foco en claridad visual y rendimiento.',
	'Código limpio y escalable para productos web.',
	'+1 año de experiencia profesional'
];

export const profile = {
	name: 'Axel Larrea',
	role: 'Frontend Developer',
	headline: 'Frontend Developer enfocado en rendimiento y calidad de producto.',
	intro: 'Desarrollo aplicaciones web con React y TypeScript, enfocándome en rendimiento, mantenibilidad y experiencia de usuario.',
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
    'Soy Frontend Developer y actualmente trabajo desarrollando aplicaciones web modernas con React y TypeScript. En mi día a día participo en la modernización de sistemas existentes, contribuyendo al desarrollo de aplicaciones escalables y mantenibles.',
    'Me gusta involucrarme en las decisiones técnicas de los proyectos, entender los problemas que se intentan resolver y buscar soluciones que sean sostenibles a largo plazo. Considero que una buena aplicación no solo debe funcionar correctamente, sino también ser fácil de mantener y evolucionar.',
    'Disfruto aprender constantemente, enfrentar nuevos desafíos y seguir creciendo como profesional dentro de equipos colaborativos.',
	],
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
