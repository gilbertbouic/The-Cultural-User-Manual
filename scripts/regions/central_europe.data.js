/**
 * Central Europe - Cultural Data
 * Quiz questions and cultural guidance for Central Europe (Germany, Austria, Czechia, Hungary, Poland, Slovakia, Slovenia, Switzerland).
 */
(function() {
    'use strict';

    const centralEuropeData = {
        id: "quiz_central_europe",
        title: "Central Europe Cultural Quiz",
        region: "central_europe",
        category: "general",
        questions: [
            {
                question: "You have a business meeting in Germany at 10:00 AM. What is the best time to arrive?",
                options: {
                    a: "10:15 AM - being a little late is fashionable.",
                    b: "10:00 AM exactly.",
                    c: "9:55 AM - being a few minutes early is best."
                },
                correct: "c",
                explanation: "Punctuality (Pünktlichkeit) is extremely important in Central Europe. Arriving a few minutes early for a business meeting is considered polite and professional."
            },
            {
                question: "You are emailing a new German colleague, Dr. Anna Schmidt, for the first time. How should you address her in the email?",
                options: {
                    a: "Hey Anna,",
                    b: "Dear Anna Schmidt,",
                    c: "Sehr geehrte Frau Dr. Schmidt,"
                },
                correct: "c",
                explanation: "In a professional context in Germany, it is important to use formal address (Sie) and include titles. 'Sehr geehrte Frau Dr. Schmidt,' is the most appropriate and respectful opening."
            },
            {
                question: "You are invited to a dinner party at a colleague's home in Switzerland. What should you bring?",
                options: {
                    a: "A large, expensive gift to show your appreciation.",
                    b: "A small, thoughtful gift, such as a bottle of wine or a box of chocolates.",
                    c: "Nothing - bringing a gift might be seen as an attempt to bribe your colleague."
                },
                correct: "b",
                explanation: "In Switzerland, it is customary to bring a small, thoughtful gift when invited to someone's home for dinner. A bottle of wine, flowers, or a dessert item are all good choices."
            }
        ],
        // Comprehensive cultural guidance by country
        countries: {
            germany: {
                name: "Germany",
                emoji: "🇩🇪",
                sections: [
                    {
                        title: "Big ideas – Life in Germany",
                        items: [
                            "Laws and rules are very important.",
                            "Be on time for everything.",
                            "People are polite, but often quiet with strangers.",
                            "You need German for jobs, offices, school."
                        ]
                    },
                    {
                        title: "Parenting",
                        items: [
                            "Do not hit children. Strong hitting can bring child‑protection office (Jugendamt).",
                            "Children must go to school every day.",
                            "Give food, clothes, safety, and medical care.",
                            "Teachers and doctors can call Jugendamt if they worry about a child."
                        ]
                    },
                    {
                        title: "Tipping (giving extra money for service)",
                        items: [
                            "Restaurant with waiter: usually 5–10% tip or round up (e.g., €18 → €20).",
                            "Taxi, bar: round up a little.",
                            "Fast food, bakery: no tip needed."
                        ]
                    },
                    {
                        title: "Dating & relationships",
                        items: [
                            "Adults choose their own partners.",
                            "Living together without marriage is normal.",
                            "Same‑sex relationships and marriage are legal.",
                            "Violence at home (against partner or children) is illegal."
                        ]
                    },
                    {
                        title: "Neighbours",
                        items: [
                            "Be quiet at night and on Sundays (no loud music or drilling).",
                            "Follow house rules (Hausordnung) and trash‑sorting rules.",
                            "Say 'Guten Tag / Guten Morgen / Guten Abend' in stairs or lift."
                        ]
                    },
                    {
                        title: "Papers & bureaucracy",
                        items: [
                            "Register your address (Anmeldung) at the city office.",
                            "Keep all papers safe: passport, asylum or residence card, health card, letters.",
                            "Read all letters from authorities or ask for help to read them."
                        ]
                    },
                    {
                        title: "Work",
                        items: [
                            "Be on time and do your tasks carefully.",
                            "Ask your boss if you do not understand something.",
                            "Keep work contract and payslips.",
                            "You have work rights; unions and NGOs can help."
                        ]
                    },
                    {
                        title: "Health & emergencies",
                        items: [
                            "You must have health insurance.",
                            "Choose or find a family doctor (Hausarzt) for normal health problems.",
                            "Emergencies: call 112.",
                            "Take your health card to doctor or hospital."
                        ]
                    }
                ]
            },
            austria: {
                name: "Austria",
                emoji: "🇦🇹",
                sections: [
                    {
                        title: "Big ideas – Life in Austria",
                        items: [
                            "Rules, order, and punctuality are important.",
                            "People can be formal at first (titles, last names).",
                            "German is the main language."
                        ]
                    },
                    {
                        title: "Parenting",
                        items: [
                            "Do not hit children hard. Serious hitting can bring youth office (Jugendamt).",
                            "Children must go to school.",
                            "Parents must give food, clothing, safety.",
                            "Teachers and doctors can call social/youth services if worried."
                        ]
                    },
                    {
                        title: "Tipping",
                        items: [
                            "Restaurant or café with service: 5–10% tip or round up.",
                            "Taxi, bar: round up a little.",
                            "Self‑service fast food: no tip needed."
                        ]
                    },
                    {
                        title: "Dating & relationships",
                        items: [
                            "Adults choose partners; many people live together before marriage.",
                            "Same‑sex partnerships/marriage are legally protected.",
                            "Violence or forced marriage is illegal."
                        ]
                    },
                    {
                        title: "Neighbours",
                        items: [
                            "Be quiet at night and on Sundays.",
                            "Follow house rules for cleaning, rubbish, laundry room.",
                            "Greet neighbours: 'Grüß Gott', 'Hallo'."
                        ]
                    },
                    {
                        title: "Papers & bureaucracy",
                        items: [
                            "Register your address (Meldezettel) at local office.",
                            "Keep all ID, asylum, residence and health insurance cards safe.",
                            "Don't ignore letters from authorities."
                        ]
                    },
                    {
                        title: "Work",
                        items: [
                            "Be on time every day.",
                            "Use polite form and last names until told to be informal.",
                            "Know your contract: hours, pay, holidays.",
                            "Worker rights exist; unions and NGOs can help."
                        ]
                    },
                    {
                        title: "Health & emergencies",
                        items: [
                            "You need health insurance (e‑card).",
                            "Use e‑card at doctors and hospitals.",
                            "Emergencies: 144 (ambulance), 122 (fire), 133 (police), 112 (also works).",
                            "Go to family doctor for normal problems, hospital for emergencies."
                        ]
                    }
                ]
            },
            czechia: {
                name: "Czechia",
                emoji: "🇨🇿",
                sections: [
                    {
                        title: "Big ideas – Life in Czechia",
                        items: [
                            "Rules and papers are important.",
                            "Be on time.",
                            "Czech language is main; English more in Prague and big cities."
                        ]
                    },
                    {
                        title: "Parenting",
                        items: [
                            "Do not hit children strongly. Abuse is illegal.",
                            "Children must go to school.",
                            "Parents must provide food, clothes, safety, and medical care.",
                            "School or doctor can call social services if they worry."
                        ]
                    },
                    {
                        title: "Tipping",
                        items: [
                            "Restaurants/cafés: 5–10% tip or round up.",
                            "Bars/taxis: small tip or round up.",
                            "Tourist areas expect tips more."
                        ]
                    },
                    {
                        title: "Dating & relationships",
                        items: [
                            "Adults choose their partners; living together without marriage is normal.",
                            "Same‑sex partnerships have rights; more accepted in cities.",
                            "Domestic violence is illegal; you can get help."
                        ]
                    },
                    {
                        title: "Neighbours",
                        items: [
                            "People may be quiet, but polite.",
                            "Be quiet at night and early morning.",
                            "Keep shared areas clean.",
                            "Greet neighbours: 'Dobrý den'."
                        ]
                    },
                    {
                        title: "Papers & bureaucracy",
                        items: [
                            "Register your residence and keep visa/permit valid.",
                            "Keep all documents and copies (residence card, contracts, letters).",
                            "Do not ignore letters from immigration or police."
                        ]
                    },
                    {
                        title: "Work",
                        items: [
                            "Be on time, follow safety and boss instructions.",
                            "Start formal (pan/paní + last name).",
                            "Keep contracts and payslips."
                        ]
                    },
                    {
                        title: "Health & emergencies",
                        items: [
                            "Have public health insurance (e.g., VZP) if possible.",
                            "Register with a family doctor and a dentist.",
                            "Emergencies: 112 or 155.",
                            "Use pharmacy (lékárna) for medicines and advice."
                        ]
                    }
                ]
            },
            hungary: {
                name: "Hungary",
                emoji: "🇭🇺",
                sections: [
                    {
                        title: "Big ideas – Life in Hungary",
                        items: [
                            "Rules and strong national identity.",
                            "Hungarian language (Magyar) is main; English mainly in cities.",
                            "Society can feel more traditional."
                        ]
                    },
                    {
                        title: "Parenting",
                        items: [
                            "Severe or repeated hitting is not allowed.",
                            "Children must go to school.",
                            "Parents must give food, safety, and medical care.",
                            "Teachers/doctors can inform child protection if they see danger."
                        ]
                    },
                    {
                        title: "Tipping",
                        items: [
                            "Restaurants/cafés: about 10% tip is normal.",
                            "Bars/taxis: round up or a small extra.",
                            "Tourist places clearly expect tips."
                        ]
                    },
                    {
                        title: "Dating & relationships",
                        items: [
                            "Adults choose partners; some families are more traditional.",
                            "Domestic violence and forced marriage are illegal.",
                            "LGBTQ+ people have some legal rights, but be careful in some areas."
                        ]
                    },
                    {
                        title: "Neighbours",
                        items: [
                            "Be quiet at night and on Sundays.",
                            "Keep building clean and follow house rules.",
                            "Simple greeting 'Jó napot' or 'Szia' is good."
                        ]
                    },
                    {
                        title: "Papers & bureaucracy",
                        items: [
                            "Keep residence and work permits valid.",
                            "Always have or know where your ID/permit is.",
                            "Keep copies of all letters and decisions from immigration."
                        ]
                    },
                    {
                        title: "Work",
                        items: [
                            "Be on time and follow instructions.",
                            "Know your contract: working hours, pay, holidays.",
                            "If you feel cheated, ask NGOs or legal aid for help."
                        ]
                    },
                    {
                        title: "Health & emergencies",
                        items: [
                            "Public system; many have insurance via TAJ card.",
                            "Register with a local doctor.",
                            "Emergencies: 112 or 104.",
                            "Pharmacies (gyógyszertár) give medicine and advice."
                        ]
                    }
                ]
            },
            poland: {
                name: "Poland",
                emoji: "🇵🇱",
                sections: [
                    {
                        title: "Big ideas – Life in Poland",
                        items: [
                            "Rules, family, and religion are important.",
                            "Polish language is needed; English more in big cities and youth.",
                            "Be on time."
                        ]
                    },
                    {
                        title: "Parenting",
                        items: [
                            "Strong or repeated hitting of children is not allowed.",
                            "Children must go to school.",
                            "Parents must give safety, food, clothes, and health care.",
                            "Schools/doctors can call social services if child is unsafe."
                        ]
                    },
                    {
                        title: "Tipping",
                        items: [
                            "Restaurants/cafés: about 10% tip.",
                            "Bars/taxis: round up or small extra.",
                            "In simple local places, rounding up is enough."
                        ]
                    },
                    {
                        title: "Dating & relationships",
                        items: [
                            "Adults mostly choose partners; cohabitation is common in cities.",
                            "Domestic violence and forced marriage are illegal.",
                            "LGBTQ+ issues can be sensitive; more safety in big cities."
                        ]
                    },
                    {
                        title: "Neighbours",
                        items: [
                            "Be quiet at night and Sundays.",
                            "Keep stairs and shared spaces clean.",
                            "Greet neighbours: 'Dzień dobry'."
                        ]
                    },
                    {
                        title: "Papers & bureaucracy",
                        items: [
                            "Keep visas, residence cards, work permits up to date.",
                            "Offices (Voivodeship offices) handle foreign matters.",
                            "Keep copies of all documents and letters."
                        ]
                    },
                    {
                        title: "Work",
                        items: [
                            "Be on time and do your job well.",
                            "Many contract types (e.g., umowa o pracę); know your rights.",
                            "Keep payslips and contracts."
                        ]
                    },
                    {
                        title: "Health & emergencies",
                        items: [
                            "Public health via NFZ; try to register.",
                            "Find a local doctor (GP) if possible.",
                            "Emergencies: 112 or 999.",
                            "Pharmacies (apteka) supply medicine."
                        ]
                    }
                ]
            },
            slovakia: {
                name: "Slovakia",
                emoji: "🇸🇰",
                sections: [
                    {
                        title: "Big ideas – Life in Slovakia",
                        items: [
                            "Rules and family are important.",
                            "Slovak language is main; some English in cities.",
                            "Punctuality is respected."
                        ]
                    },
                    {
                        title: "Parenting",
                        items: [
                            "Strong physical punishment is not allowed.",
                            "Children must go to school.",
                            "Parents must provide safety, food, clothing, health care.",
                            "Social services can act if a child is not safe."
                        ]
                    },
                    {
                        title: "Tipping",
                        items: [
                            "Restaurants/cafés: 5–10% tip or round up.",
                            "Bars/taxis: small tip or round up.",
                            "Tourist areas expect tips more."
                        ]
                    },
                    {
                        title: "Dating & relationships",
                        items: [
                            "Adults choose partners; some traditional attitudes remain.",
                            "Domestic violence is illegal.",
                            "LGBTQ+ issues are sensitive; be cautious with public affection."
                        ]
                    },
                    {
                        title: "Neighbours",
                        items: [
                            "People may be quiet but watch behaviour.",
                            "Be quiet at night and weekends.",
                            "Keep shared spaces clean and tidy."
                        ]
                    },
                    {
                        title: "Papers & bureaucracy",
                        items: [
                            "Register your residence and renew permits on time.",
                            "Keep documents together: ID, residence, work contracts, letters.",
                            "Ask NGOs or social workers for help with forms."
                        ]
                    },
                    {
                        title: "Work",
                        items: [
                            "Be on time; follow rules and safety.",
                            "Start formal and polite with boss and colleagues.",
                            "Know your contract and salary."
                        ]
                    },
                    {
                        title: "Health & emergencies",
                        items: [
                            "Public health with mandatory insurance.",
                            "Register with a doctor if possible.",
                            "Emergencies: 112 or 155.",
                            "Pharmacies for medicines and advice."
                        ]
                    }
                ]
            },
            slovenia: {
                name: "Slovenia",
                emoji: "🇸🇮",
                sections: [
                    {
                        title: "Big ideas – Life in Slovenia",
                        items: [
                            "Small, clean, and green country.",
                            "Slovenian is main language; many young people know English.",
                            "Rules and order are important."
                        ]
                    },
                    {
                        title: "Parenting",
                        items: [
                            "Do not hit children hard; abuse is illegal.",
                            "Children must go to school.",
                            "Parents must give safety, food, clothes, health care.",
                            "Social workers can act if child is in danger."
                        ]
                    },
                    {
                        title: "Tipping",
                        items: [
                            "Restaurants/cafés: 5–10% or round up.",
                            "Bars/taxis: small extra or round up.",
                            "Tourist places expect tips."
                        ]
                    },
                    {
                        title: "Dating & relationships",
                        items: [
                            "Adults choose their partners; cohabitation is common.",
                            "Domestic violence is illegal.",
                            "LGBTQ+ couples have some legal recognition; more accepted in cities."
                        ]
                    },
                    {
                        title: "Neighbours",
                        items: [
                            "Be quiet at night and Sundays.",
                            "Keep building and common areas clean.",
                            "Greet neighbours: 'Dober dan'."
                        ]
                    },
                    {
                        title: "Papers & bureaucracy",
                        items: [
                            "Keep residence card/permits valid and safe.",
                            "Follow deadlines and official rules.",
                            "Keep copies of all important documents."
                        ]
                    },
                    {
                        title: "Work",
                        items: [
                            "Be on time; work carefully.",
                            "Respect boss and co‑workers.",
                            "Keep contracts and payslips."
                        ]
                    },
                    {
                        title: "Health & emergencies",
                        items: [
                            "Public health insurance is required.",
                            "Register with a family doctor.",
                            "Emergencies: 112.",
                            "Pharmacies (lekarna) for medicine and advice."
                        ]
                    }
                ]
            },
            switzerland: {
                name: "Switzerland",
                emoji: "🇨🇭",
                sections: [
                    {
                        title: "Big ideas – Life in Switzerland",
                        items: [
                            "Very orderly, clean, and punctual.",
                            "Several languages (German, French, Italian, Romansh) – check your canton.",
                            "Rules and fines are strict."
                        ]
                    },
                    {
                        title: "Parenting",
                        items: [
                            "No serious physical punishment. Abuse is illegal.",
                            "Children must go to school.",
                            "Parents must provide safety, food, clothes, health care.",
                            "Child protection office can act if they think a child is unsafe."
                        ]
                    },
                    {
                        title: "Tipping",
                        items: [
                            "Service usually included, but:",
                            "Restaurants: often round up or 5–10% for good service.",
                            "Bars/taxis: round up.",
                            "No tip is not terrible, but small tip is normal."
                        ]
                    },
                    {
                        title: "Dating & relationships",
                        items: [
                            "Adults choose partners; cohabitation is common.",
                            "Same‑sex marriage is legal.",
                            "Domestic violence and forced marriage are illegal."
                        ]
                    },
                    {
                        title: "Neighbours",
                        items: [
                            "Very strict quiet times (nights, Sundays, sometimes midday).",
                            "Strong rules for rubbish, recycling, laundry rooms.",
                            "Greet neighbours politely."
                        ]
                    },
                    {
                        title: "Papers & bureaucracy",
                        items: [
                            "Register with your commune (local town office).",
                            "Keep residence permit (N, F, B, C, etc.) valid.",
                            "Rules differ by canton; ask if unsure."
                        ]
                    },
                    {
                        title: "Work",
                        items: [
                            "Always be on time.",
                            "Work must be careful and good quality.",
                            "Respect rules and safety instructions.",
                            "Keep all contracts and payslips."
                        ]
                    },
                    {
                        title: "Health & emergencies",
                        items: [
                            "You must buy health insurance yourself (it is not free from the state).",
                            "Choose a health insurance company soon after arrival.",
                            "Emergencies: 144 (ambulance), 112 (general).",
                            "Take insurance card to doctor/hospital."
                        ]
                    }
                ]
            }
        }
    };

    // Register this region's data
    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('central_europe', centralEuropeData);
    }

})();
