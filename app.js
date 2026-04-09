const initialWords = [
    // --- თქვენი წინა სიტყვები აქ დარჩება (შემოკლებულია საჩვენებლად) ---
    { term: "Adherence", ipa: "/ədˈhɪərəns/", def: "Strict adherence to guidelines improves outcomes.", geo: "დაცვა, ერთგულება" },
    // ... (სხვა სიტყვები)

    // --- ახალი 30 ტერმინი ---
    { term: "Observer Bias", ipa: "/əbˈzɜːrvər ˈbaɪəs/", def: "Tendency of observers to see what they expect to see.", geo: "დამკვირვებლის მიკერძოება" },
    { term: "Abating", ipa: "/əˈbeɪtɪŋ/", def: "Becoming less intense or widespread.", geo: "შემცირება, დაცხრომა" },
    { term: "Ward off", ipa: "/wɔːrd ɒf/", def: "To prevent someone or something from harming you.", geo: "თავიდან აცილება, მოგერიება" },
    { term: "Surplus", ipa: "/ˈsɜːrpləs/", def: "An amount left over when requirements have been met.", geo: "ჭარბი, ნამტი" },
    { term: "Deprivation", ipa: "/ˌdeprɪˈveɪʃən/", def: "The damaging lack of material benefits or biological necessities.", geo: "დეპრივაცია, უკმარისობა" },
    { term: "Recuperation", ipa: "/rɪˌkuːpəˈreɪʃən/", def: "Recovery from illness or exertion.", geo: "ძალების აღდგენა, გამოჯანმრთელება" },
    { term: "Futile", ipa: "/ˈfjuːtaɪl/", def: "Incapable of producing any useful result; pointless.", geo: "ამაო, უშედეგო" },
    { term: "Sluggish", ipa: "/ˈslʌɡɪʃ/", def: "Slow-moving or inactive; lacking energy.", geo: "დუნე, შენელებული" },
    { term: "Postpone", ipa: "/poʊstˈpoʊn/", def: "Cause or arrange for something to take place at a time later than scheduled.", geo: "გადადება" },
    { term: "Fortified", ipa: "/ˈfɔːrtɪfaɪd/", def: "Strengthened or enriched (often used for nutrients).", geo: "გაძლიერებული, ფორტიფიცირებული" },
    { term: "Equilibrium", ipa: "/ˌiːkwɪˈlɪbriəm/", def: "A state in which opposing forces or influences are balanced.", geo: "წონასწორობა" },
    { term: "Stall", ipa: "/stɔːl/", def: "Stop or cause to stop making progress.", geo: "შეფერხება, გაჩერება" },
    { term: "Relapse", ipa: "/rɪˈlæps/", def: "A deterioration in someone's state of health after a temporary improvement.", geo: "რეციდივი, გაუარესება" },
    { term: "Cue", ipa: "/kjuː/", def: "A signal for something to happen.", geo: "ნიშანი, მინიშნება" },
    { term: "Aversion", ipa: "/əˈvɜːrʒən/", def: "A strong dislike or disinclination.", geo: "ზიზღი, ანტიპათია" },
    { term: "Recruitment", ipa: "/rɪˈkruːtmənt/", def: "The action of finding new people to join an organization or study.", geo: "რეკრუტირება, დაკომპლექტება" },
    { term: "Tardive", ipa: "/ˈtɑːrdɪv/", def: "Having a delayed onset (e.g., tardive dyskinesia).", geo: "გვიანი (სიმპტომი/გამოვლინება)" },
    { term: "Rigor Check", ipa: "/ˈrɪɡər tʃek/", def: "A strict evaluation of accuracy and validity.", geo: "სიმკაცრის/სიზუსტის შემოწმება" },
    { term: "Pruritus", ipa: "/pruːˈraɪtəs/", def: "Severe itching of the skin.", geo: "ქავილი" },
    { term: "Interbody spacer", ipa: "/ˌɪntərˈbɒdi ˈspeɪsər/", def: "A medical device used in spinal fusion procedures.", geo: "მალთაშუა სპეისერი" },
    { term: "Cultural Accretion", ipa: "/ˈkʌltʃərəl əˈkriːʃən/", def: "Growth or increase by the gradual accumulation of cultural traits.", geo: "კულტურული აკრეცია/დაგროვება" },
    { term: "Lavished", ipa: "/ˈlævɪʃt/", def: "Bestowed something in generous or extravagant quantities.", geo: "უხვად გაცემული" },
    { term: "Unwittingly", ipa: "/ʌnˈwɪtɪŋli/", def: "Without being aware; unintentionally.", geo: "უნებლიეთ" },
    { term: "Affronted", ipa: "/əˈfrʌntɪd/", def: "Offended or insulted.", geo: "შეურაცხყოფილი" },
    { term: "To ebb", ipa: "/tuː eb/", def: "Gradually Wiggin or reduce.", geo: "მიქცევა, შემცირება" },
    { term: "Mining Of", ipa: "/ˈmaɪnɪŋ ɒv/", def: "The process of extracting valuable materials or data.", geo: "მოპოვება (მონაცემების/რესურსების)" },
    { term: "Envisage", ipa: "/ɪnˈvɪzɪdʒ/", def: "Contemplate or conceive of as a possibility or a future event.", geo: "წარმოდგენა, განჭვრეტა" },
    { term: "Alterations", ipa: "/ˌɔːltəˈreɪʃənz/", def: "The action of changing or modifying something.", geo: "ცვლილებები" },
    { term: "Algae", ipa: "/ˈældʒiː/", def: "Simple non-flowering plants (often aquatic).", geo: "წყალმცენარეები" },
    { term: "Mediocre", ipa: "/ˌmiːdiˈoʊkər/", def: "Of only moderate quality; not very good.", geo: "შუალედური, არაფრით გამორჩეული" }
];

// ... (დანარჩენი ლოგიკა უცვლელია)
