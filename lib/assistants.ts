import { Ear, PenLine, AudioLines, type LucideIcon } from 'lucide-react'

export interface Assistant {
  id: string
  name: string
  role: string
  tagline: string
  description: string
  flow: string
  /** css variable token name, e.g. "aria" */
  accent: 'aria' | 'nova' | 'echo'
  icon: LucideIcon
}

export const assistants: Assistant[] = [
  {
    id: 'aria',
    name: 'Aria',
    role: 'The Listener',
    tagline: 'Speech to Sign Language',
    description:
      'Aria listens to spoken words in real time and renders them as fluid, expressive sign language — so nothing gets lost in the silence.',
    flow: 'Speech → Sign',
    accent: 'aria',
    icon: Ear,
  },
  {
    id: 'nova',
    name: 'Nova',
    role: 'The Scribe',
    tagline: 'Speech & Sign to Writing',
    description:
      'Nova captures both voice and signing and transcribes them into clean, structured text — perfect for notes, captions, and records.',
    flow: 'Speech / Sign → Text',
    accent: 'nova',
    icon: PenLine,
  },
  {
    id: 'echo',
    name: 'Echo',
    role: 'The Voice',
    tagline: 'Sign Language to Speech',
    description:
      'Echo reads sign language and gives it a natural spoken voice, letting signers be heard clearly by anyone in the room.',
    flow: 'Sign → Speech',
    accent: 'echo',
    icon: AudioLines,
  },
]
