# Nirogya AI – Your Agentic Health Guardian

> Breaking language and access barriers in Indian healthcare through AI

---

## The Problem

Healthcare in India faces three critical barriers:

1. **Access Barrier**: 65% of India lives in rural areas without smartphones or reliable internet. They can't use app-based telemedicine.

2. **Language Barrier**: A Tamil-speaking patient cannot communicate with an English-speaking doctor. Rural patients speaking regional languages struggle to access quality healthcare.

3. **Follow-up Gap**: Doctors can't manually call every patient to check if they're taking medicines or monitor chronic conditions. Patients forget medications and miss follow-ups.

---

## Our Solution

Nirogya AI is an **agentic healthcare ecosystem** that works for everyone - from a farmer in rural Punjab to a tech professional in Bangalore.

### For Rural Users (No Smartphone Needed No Internet Needed)

**Just make a phone call.** That's it.

Call Nirogya's number and speak in your local language - Hindi, Tamil, Telugu, Punjabi, or any of 11+ Indian languages. An AI agent listens, understands your symptoms, and helps you:

- **Get medical advice**: "Mujhe bukhar hai" → AI creates a summary and suggests which doctor to see
- **Book appointments**: "Doctor se milna hai" → AI checks availability and books a slot
- **Set reminders**: "Subah 8 baje BP ki dawai yaad karwana" → AI calls you daily at 8 AM
- **Check medicine availability**: "Paracetamol milegi nearby?" → AI checks local pharmacy stock

No app download. No internet. Just a phone call in your language.

### For Urban Users (Mobile/Web App)

**Video consultations that actually work across languages.**

Imagine a video call where you speak Hindi, the doctor speaks Kannada, but you both understand each other perfectly. That's what we built.

- **Real-time translation**: Your speech is instantly translated to the doctor's language with captions and audio
- **AI triage**: Upload a photo of a rash, describe symptoms, and AI suggests the right specialist
- **Smart health insights**: Connect your smartwatch (Noise, Fitbit) and AI gives context-aware advice based on your sleep, heart rate, and stress levels

Example: You say "I have a headache." AI checks your smartwatch data and responds: "You've only slept 4 hours in the last 2 days and your stress level is high. Your body needs rest. Here's what to do..."

### For Doctors (Web Dashboard)

**Stop making manual follow-up calls. Let AI do it.**

Doctors spend hours calling patients to check: "Did you take your BP medicine?" "Any chest pain?" "What's your sugar reading?"

With Nirogya, doctors create an **intelligent scheduler**:

- Set rules: "Call this patient twice a week"
- Define questions: "Are you taking your BP medicine?" "Any chest pain?" "Blood sugar reading?"
- Set alerts: "Notify me if patient says yes to chest pain or sugar > 200"

The AI agent makes automated calls, logs responses, and **only alerts the doctor when something is wrong**. Doctors see AI-generated summaries of every patient interaction in one click.

---

## How It Works

### 1. Rural Patient Journey

```
Patient calls Nirogya number
         ↓
AI answers in local language: "Namaste! Main Nirogya hoon. Kaise madad kar sakti hoon?"
         ↓
Patient describes symptoms in Hindi/Tamil/Telugu
         ↓
AI creates medical summary, assesses risk, suggests specialist
         ↓
AI books appointment or sets medicine reminder
         ↓
Patient receives callback reminders at scheduled times
```

### 2. Video Consultation Journey

```
Patient joins video call (speaks Hindi)
         ↓
Doctor joins video call (speaks English/Kannada)
         ↓
Patient: "Mujhe kal se bukhar hai"
         ↓
AI translates in real-time
         ↓
Doctor hears: "I have fever since yesterday" (English audio + captions)
         ↓
Doctor responds in English/Kannada
         ↓
AI translates back
         ↓
Patient hears: "Paracetamol lo aur aaram karo" (Hindi audio + captions)
```

### 3. Automated Follow-up Journey

```
Doctor creates rule: "Call Ramesh twice a week"
         ↓
AI calls patient automatically
         ↓
AI: "Namaste Ramesh ji, Dr. Sharma ke taraf se call kar rahi hoon. 
     Kya aap BP ki dawai le rahe ho?"
         ↓
Patient: "Haan, le raha hoon"
         ↓
AI logs response
         ↓
If response is concerning → Doctor gets instant alert
If response is normal → No action needed, doctor sees log later
```

---

## Key Features

### 🗣️ Voice AI Agent
- Works on any phone (no smartphone needed)
- Understands 11+ Indian languages
- Books appointments, sets reminders, checks medicine availability
- Available 24/7

### 📹 Multilingual Video Calls
- Real-time translation between 11+ languages
- Live captions and audio translation
- Patient and doctor speak in their preferred language
- No language barrier

### ⌚ Smart Wearable Integration
- Connects with Noise Watch, Fitbit, Strava
- AI analyzes sleep, heart rate, stress, activity
- Context-aware health advice
- Proactive health alerts

### 👨‍⚕️ Doctor Dashboard
- Automated patient follow-ups
- AI-generated call summaries
- Intelligent scheduling with custom rules
- Reduces doctor workload by 70%

### 💊 Medicine Reminders
- Voice call reminders in local language
- Tracks medication adherence
- Alerts doctor if patient misses doses

---

## Impact

✅ **Accessible**: Rural users without smartphones can access quality healthcare via phone calls  
✅ **Inclusive**: Language is no longer a barrier - speak in your mother tongue  
✅ **Proactive**: AI monitors health data and alerts before problems escalate  
✅ **Efficient**: Doctors save hours on manual follow-ups, focus on critical cases  
✅ **Affordable**: No expensive apps or devices needed - just a phone call

---

## Example Scenarios

**Scenario 1: Rural Farmer**
> Ramu, a 55-year-old farmer in Punjab, doesn't own a smartphone. He calls Nirogya and says in Punjabi: "Mere seene mein dard hai." The AI understands, creates a summary, and books him an appointment with a cardiologist. The next day, he receives a reminder call in Punjabi.

**Scenario 2: Language Barrier**
> Priya speaks only Tamil. Her doctor speaks only Hindi. They have a video consultation where Priya speaks Tamil, the doctor hears Hindi (with captions), and both understand each other perfectly. The consultation happens seamlessly.

**Scenario 3: Chronic Disease Management**
> Dr. Sharma has 50 diabetic patients. Instead of calling each one, he sets up an AI scheduler: "Call all patients weekly, ask about sugar levels, alert me if > 200." The AI makes 50 calls, logs responses, and only alerts Dr. Sharma about 3 patients who need attention.

**Scenario 4: Wearable Insights**
> Amit says "I have a headache." His smartwatch shows he slept only 4 hours in 2 days and his stress is high. AI responds: "Your body is signaling sleep deprivation. Your heart rate is elevated. Get 7-8 hours of sleep tonight and try breathing exercises."

---

## Technology Stack

**Voice AI**: Twilio, Ultravox, ElevenLabs, LangGraph, Gemini  
**Video Translation**: WebRTC, Socket.IO, Whisper, Gemini, gTTS  
**Backend**: Node.js, Express, MongoDB  
**Frontend**: React, Next.js, TailwindCSS  
**Wearables**: Noise Watch, Strava, Fitbit APIs

---

## Links

- **Video Call**: https://nirogyaa.vercel.app/
- **Mobile App(Web version)**: https://m-app-livid.vercel.app/
- **Call Demo Video**: [Google Drive Link](https://drive.google.com/file/d/1bLk1Tn4-eZJFaePfhOPLttUoVBwP6HEZ/view?usp=sharing)
- **Mobile App (Apk)**:[Google Drive Link](https://drive.google.com/file/d/1M9cJlIx1idCrsCBfLZnsjGQ3wdn4I6Gt/view?usp=sharing)


---

## Documentation

- **[Technical Architecture](./ARCHITECTURE.md)** - Complete system architecture, API reference, data models, and technology stack
- **[Future Features](./Future-Features.md)** - Planned enhancements, roadmap, and upcoming features

---

## Project Images

- **Mobile App**:
<img width="1851" height="583" alt="image" src="https://github.com/user-attachments/assets/24496e17-c403-4fa5-ba33-5c0a3be5c32e" />

- **Video Call**:
<img width="1740" height="460" alt="image" src="https://github.com/user-attachments/assets/969d2c84-a64e-4441-9a53-ecc0b1d330cc" />

- **Doctor Dashboard**:
<img width="1817" height="690" alt="image" src="https://github.com/user-attachments/assets/7c148820-16c6-475d-baa4-3912899a0c91" />






