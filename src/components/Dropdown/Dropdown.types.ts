// Dropdown.types.ts
export interface DropdownProps {
  options: { id: string, label: string }[];
  onSelect?: (selectedId: string) => void;
  backgroundColor?: string;
  disabled?: boolean; 
}
