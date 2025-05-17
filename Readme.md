# **Carbon Native SDK Kit (CN SDK)**

**Carbon Native SDK** হলো একটি Android অ্যাপ ডেভেলপমেন্ট টুলকিট, যা **DroidScript** এর উপর ভিত্তি করে তৈরি এবং **Java Native Bridge** ব্যবহার করে কাজ করে।

এটি মূলত তিনটি অংশ নিয়ে গঠিত:

## **গঠন (Structure)**

```
- Carbon Native Bundle (Compiler)
- Carbon Native SDK Kit (Apk তৈরির ফাইলসমূহ)
- Project (আপনার কোড লিখবেন এাখানে)
```

---

## **ব্যবহার করার ধাপ**

### **১. প্রাথমিক প্রস্তুতি**

- GitHub থেকে এই [git রিপোজিটরি ডাউনলোড করুন](https://github.com/AbdunNur-Porag/Carbon-Native-SDK)।
- ফাইলটি **unzip** করুন।
- unzip করার পর এমন দেখাবে
![file](/img/project.png)

### **Unzip করার পর আপনি পাবেন:**
- `Carbon Bundle Generator` – bundle তৈরি করার টুল (apk বানানোর পূর্বশর্ত)
- `Carbon Native Template` – SDK kit
- `project` – এখানে আপনার নিজের কোড থাকবে
- `example` – একটি নমুনা অ্যাপ `react_cdn_app` নামে

---

### **২. ইনস্টলেশন**

- DroidScript অ্যাপ ইনস্টল করুন।
- DroidScript এ `Apk Builder` plugin ইনস্টল করুন।
- `Carbon Bundle Generator` ও `Carbon Native Template` ফোল্ডার দুটি DroidScript ফোল্ডারের মধ্যে কপি করুন।
- যেকোনো Code Editor (যেমন: Spck Editor) দিয়ে `project` ফোল্ডার ওপেন করুন।

---

## **প্রকল্প তৈরি (Create a Project)**

- আপনার JS ফাইলগুলো `project/view` ফোল্ডারে রাখুন।
- `bundle.json` ফাইলে অ্যাপের সকল JS ফাইলের নাম যুক্ত করুন:

```json
[
  {
    "activityName": "MainPage",
    "activitySrc": "main.js"
  },
  {
    "activityName": "App",
    "activitySrc": "app.js"
  }
  // আরও ফাইল একইভাবে যোগ করুন
]
```

### **কিভাবে JS কোড লিখবেন বা প্রজেক্ট তৈরি করবেন?**

> বিস্তারিত জানতে [এই লিংকে ক্লিক করুন](https://github.com/AbdunNur-Porag/Carbon-Native-V2.2-Main)

এই পৃষ্ঠায় আপনি জানতে পারবেন:
- কিভাবে JS ফাইল তৈরি করবেন
- কিভাবে Carbon Native স্ট্রাকচার অনুসারে কোড লিখবেন
- কিভাবে বিভিন্ন Activity যুক্ত করবেন
- কিভাবে `bundle.json` ফাইলে সেগুলো সংযুক্ত করবেন

---

## **Carbon Bundle Generator ব্যবহার**

১. আপনার প্রকল্প তৈরি শেষ হলে, `project` ফোল্ডারটি কপি করে `Carbon Bundle Generator/package/<আপনার ফোল্ডার>`-এ পেস্ট করুন।

২. **যদি আপনি DroidScript-এ `Carbon Bundle Generator` দেখতে না পান**, তাহলে:

   - DroidScript-এ গিয়ে `Carbon Bundle Generator` নামে একটি **নতুন Native Project তৈরি করুন**।
   - আমাদের দেওয়া Carbon Bundle Generator এর কোড কপি করে সেই প্রজেক্টের ভিতরে পেস্ট করুন।

৩. এরপর DroidScript খুলে `Carbon Bundle Generator` প্রজেক্ট রান করুন।

৪. সেখানে `Package Name` চাইলে, আপনার ফোল্ডারের নাম দিন এবং বাটনে ক্লিক করুন।

৫. এটি bundle তৈরি করবে এবং `package` ফোল্ডারে `Build` নামে একটি নতুন ফোল্ডার তৈরি হবে।

৬. এখান থেকে `carbon.main.bundle.1` থেকে `carbon.main.bundle.43` পর্যন্ত ফাইল কপি করুন (raw ফাইল নয়)।

---

## **APK তৈরি করা**

১. bundle ফাইলগুলো `Carbon Native Template/main` ফোল্ডারে পেস্ট করুন।

২. DroidScript এ `Native Project` তৈরি করুন এবং একটি নাম দিন।

৩. `Carbon Native Template`-এ থাকা `<apk name>.js` ফাইলে এই নামটি বসান এবং সেই প্রজেক্ট কোডও সেখানে রাখুন।

৪. DroidScript থেকে `Build APK` করলেই আপনার APK তৈরি হয়ে যাবে।

---

## **সতর্কতা**
- `carbon.main.bundle.raw.<number>` ফাইল **ব্যবহার করবেন না**।
- `engine/` ফোল্ডারের ভেতরে কিছু **Edit / Modify / Delete** করবেন না।

---

**সংস্করণ:** ১ম (১৭ মে, ২০২৫)  
**লিখেছেন:** আব্দুন নুর পরাগ
