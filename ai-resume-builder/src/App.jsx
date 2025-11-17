import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", fontSize: "32px", marginBottom: "20px" }}>
        AI Resume Builder
      </h1>

      {/* INPUT FORM */}
      <div
        style={{
          background: "#f7f7f7",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      >
        <h2>Resume Details</h2>

        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <label>Professional Summary:</label>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          rows={3}
        />

        <label>Experience:</label>
        <textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          rows={4}
        />

        <label>Education:</label>
        <textarea
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          rows={2}
        />

        {/* AI BUTTON (placeholder for now) */}
        <button
          style={{
            padding: "12px 20px",
            background: "black",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
            marginTop: "10px",
          }}
          onClick={() => alert("AI feature coming next!")}
        >
          ✨ Generate Resume With AI
        </button>
      </div>

      {/* PREVIEW SECTION */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Resume Preview</h2>
        <hr />

        <h3>{name || "Your Name"}</h3>
        <p>{email || "your@email.com"}</p>

        <h4>Professional Summary</h4>
        <p>{summary || "Your summary will appear here..."}</p>

        <h4>Experience</h4>
        <p>{experience || "Your experience will appear here..."}</p>

        <h4>Education</h4>
        <p>{education || "Your education details will appear here..."}</p>
      </div>
    </div>
  );
}
