import React, { useState } from "react";
import TextInput from "./TextInput";
import "./styles.scss";

export default function App() {
  const [input, setInput] = useState("Abc");

  return (
    <section>
      <TextInput
        label="Username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </section>
  );
}
