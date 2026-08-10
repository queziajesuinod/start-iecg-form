import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type MemberOption = { id: string; fullName: string };

// Liderança Apostólica já traz os pastores vinculados no cadastro dela, para
// auto-preencher a cadeia de cobertura (Liderança → Pastor de Geração → Pastor de Campus).
export type LiderancaOption = MemberOption & {
  pastorGeracaoMemberId?: string | null;
  pastorGeracao?: MemberOption | null;
  pastorCampusMemberId?: string | null;
  pastorCampus?: MemberOption | null;
};

export type MemberComboboxProps = {
  options: MemberOption[];
  value?: string;
  onSelect: (id: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  loading?: boolean;
  id?: string;
};

export function MemberCombobox({
  options,
  value,
  onSelect,
  placeholder = "Selecione",
  searchPlaceholder = "Buscar...",
  emptyText = "Nenhum resultado.",
  loading = false,
  id,
}: MemberComboboxProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find(o => o.id === value) || null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          id={id}
          className="w-full justify-between font-normal"
        >
          <span className={cn("truncate", !selected && "text-slate-500")}>
            {loading ? "Carregando..." : selected ? selected.fullName : placeholder}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popover-trigger-width) p-0" align="start">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map(option => (
                <CommandItem
                  key={option.id}
                  value={option.fullName}
                  onSelect={() => {
                    onSelect(option.id === value ? "" : option.id);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn("mr-2 h-4 w-4", option.id === value ? "opacity-100" : "opacity-0")}
                  />
                  {option.fullName}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default MemberCombobox;
