import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSwitcher = () => {
  return (
    <Select>
      <SelectTrigger className="w-[120px] dark:bg-secondary dark:text-secondary-foreground">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="bn">Bangla</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
