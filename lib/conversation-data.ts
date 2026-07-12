export interface Session {
  id: string
  title: string
  preview: string
  time: string
  minutes: number
  participants: number
}

export const recentSessions: Session[] = [
  {
    id: 's1',
    title: 'Design sync with Maya',
    preview: 'Discussed the new onboarding flow and sign overlays…',
    time: 'Now',
    minutes: 12,
    participants: 2,
  },
  {
    id: 's2',
    title: 'Weekly standup',
    preview: 'Team updates, blockers, and sprint planning notes.',
    time: '2h ago',
    minutes: 34,
    participants: 6,
  },
  {
    id: 's3',
    title: 'Doctor appointment',
    preview: 'Prescription details captured and translated to sign.',
    time: 'Yesterday',
    minutes: 21,
    participants: 2,
  },
  {
    id: 's4',
    title: 'Coffee with Jordan',
    preview: 'Casual catch-up, mixed speech and signing.',
    time: 'Mon',
    minutes: 47,
    participants: 2,
  },
  {
    id: 's5',
    title: 'Product interview',
    preview: 'Candidate screening with live transcript export.',
    time: 'Mon',
    minutes: 58,
    participants: 3,
  },
  {
    id: 's6',
    title: 'Family call',
    preview: 'Weekend plans and updates from home.',
    time: 'Sun',
    minutes: 39,
    participants: 4,
  },
]

export interface TranscriptLine {
  id: string
  speaker: string
  initials: string
  text: string
  time: string
  self?: boolean
}

export const transcriptLines: TranscriptLine[] = [
  {
    id: 't1',
    speaker: 'Maya Chen',
    initials: 'MC',
    text: "Hey! I've been reviewing the new conversation layout and it feels so much calmer now.",
    time: '10:02',
  },
  {
    id: 't2',
    speaker: 'You',
    initials: 'YT',
    text: 'Agreed. The sign overlay finally sits where people actually look.',
    time: '10:02',
    self: true,
  },
  {
    id: 't3',
    speaker: 'Maya Chen',
    initials: 'MC',
    text: 'Exactly. Can we make Aria a little more prominent when speech comes in?',
    time: '10:03',
  },
  {
    id: 't4',
    speaker: 'You',
    initials: 'YT',
    text: "Yeah, I'll bump the activity ring so it pulses with the audio level.",
    time: '10:03',
    self: true,
  },
]

export interface Translation {
  id: string
  from: string
  to: string
  text: string
  accent: 'aria' | 'nova' | 'echo'
}

export const translations: Translation[] = [
  {
    id: 'tr1',
    from: 'Speech',
    to: 'Sign Language',
    text: 'Can we make Aria a little more prominent when speech comes in?',
    accent: 'aria',
  },
  {
    id: 'tr2',
    from: 'Sign Language',
    to: 'Speech',
    text: 'Yes — and keep the captions pinned to the bottom edge.',
    accent: 'echo',
  },
]

export const languages = [
  'English (US)',
  'English (UK)',
  'Español',
  'Français',
  'Deutsch',
  '日本語',
  'ASL',
  'BSL',
]
