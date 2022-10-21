import { ChangeEvent } from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function TextField({ value, onChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      className={`rounded border p-1`}
    />
  );
}
