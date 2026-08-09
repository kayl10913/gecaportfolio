import {
  Newspaper,
  PenLine,
  Mic,
  Search,
  CheckCircle,
  Tv,
  Volume2,
  FileText,
  Users,
  Camera,
  Video,
  Scissors,
  Palette,
  Layout,
  Image,
  Film,
  Table,
  Cloud,
} from 'lucide-react';

const iconMap = {
  newspaper: Newspaper,
  pen: PenLine,
  mic: Mic,
  search: Search,
  check: CheckCircle,
  tv: Tv,
  volume: Volume2,
  file: FileText,
  users: Users,
  camera: Camera,
  video: Video,
  scissors: Scissors,
  palette: Palette,
  layout: Layout,
  image: Image,
  film: Film,
  table: Table,
  cloud: Cloud,
};

export function getSkillIcon(name) {
  const Icon = iconMap[name] || PenLine;
  return Icon;
}
