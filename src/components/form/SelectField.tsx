import { ChangeEvent, ReactNode } from 'react';

type Props = {
  value: string;
  defaultText?: ReactNode;
  options: string[];
  onChange: (value: string) => void;
};

export default function SelectField({
  value,
  defaultText = '---',
  options,
  onChange,
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className="rounded border p-1"
    >
      <option value="">{defaultText}</option>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}
