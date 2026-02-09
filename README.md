# Voice-AI & Human Perception: An HCI Research Tool

This repository contains a specialized React application developed for my Senior Year Research Project at Biruni University. The platform is designed to conduct controlled HCI (Human-Computer Interaction) experiments on how different age groups (specifically Gen Z and Seniors) process AI-generated vs. Human voices in short-form video advertising.

---

## Research Context

As synthetic speech becomes the industry standard for content creation, we face a digital divide. While younger users are accustomed to AI voices, older demographics may experience higher cognitive load or trust issues. This platform aims to provide empirical data on:

1. The Intergenerational Gap: Does AI-prosody act as a cognitive barrier for elderly users?
2. The Disclosure Effect: Does an "AI-Generated" transparency label build trust or trigger the Uncanny Valley effect?

The core research hypothesis follows the interaction model:


---

## Technical Features

* **Automated A/B/C Testing:** Randomizes participants into three groups: Human Voice, Hidden AI Voice, and Disclosed AI Voice.
* **RT Logger:** High-resolution timestamp logging for visual reaction tests.
* **A11y Optimized UI:** Designed with high-contrast elements and large-scale typography for elderly accessibility.
* **Firebase Integration:** Serverless data collection using Firestore for real-time results.
* **Likert Scale Integration:** Custom survey modules to measure subjective brand trust and perceived "creepiness."

---

## Tech Stack

* **Frontend:** React.js, Tailwind CSS, Framer Motion
* **Backend:** Firebase Firestore
* **Voice Synthesis:** Stimuli prepared via ElevenLabs Professional Voice Cloning
* **Data Science:** Python (Pandas/SciPy) for post-experiment ANOVA analysis

---

## Getting Started

1. **Clone the repo:**
```bash
git clone https://github.com/efearabaci/hci-voice-ai-study.git

```


2. **Install dependencies:**
```bash
npm install

```


3. **Configure Firebase:**
Create a `.env` file in the root and add your Firebase credentials:
```env
REACT_APP_FIREBASE_API_KEY=your_key
REACT_APP_FIREBASE_PROJECT_ID=your_id

```


4. **Run:**
```bash
npm start

```



---

## Data Privacy

This tool is built following **IRB-standard** ethical guidelines. It collects only anonymized demographic data (Age and Gender) and requires explicit digital consent before the experiment begins.

---
