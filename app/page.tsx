"use client";
import Button from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { getKhodamByName } from "@/utils/check-khodams";
import { useState } from "react";

const placeholders = ["Masukkan nama kamu..."];

export default function Home() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [khodam, setKhodam] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input || input === "") return;

    setLoading(true);
    setName(input);
    setTimeout(() => {
      const khodam = getKhodamByName(input);
      setKhodam(khodam);
      setLoading(false);
    }, 2000);
  };

  return (
    <Card className="w-fit">
      <div className="flex flex-col gap-5 lg:gap-9">
        <h1 className="text-2xl lg:text-3xl font-bold text-center text-white relative z-20 whitespace-nowrap">
          Cek Khodam Kamu
        </h1>
        <div className="space-y-2">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
          disabled={loading}
        />
        <div className="flex justify-center">
          <Button text="Cek Khodam" onClick={onSubmit} />
        </div>
        </div>
      </div>
      <div>
        {
          loading && (
            <div className="flex flex-col items-center justify-center gap-1 mt-5">
              <h1 className="text-lg font-semibold text-white">
                Sedang mencari khodam {name}...
              </h1>
            </div>
          )
        }
        {khodam && !loading && (
          <div className="flex flex-col items-center justify-center gap-1 mt-5">
            <h1 className="text-lg font-semibold text-gray-100">
              Khodam {name} adalah:
            </h1>
            <h2 className="text-lg font-bold text-white">{khodam}</h2>
          </div>
        )}
      </div>
    </Card>
  );
}
