/* =========================================================
   I Care Car Express — preview by 7arkat
   ========================================================= */

/* ---------- IMAGES: swap these with the shop's real photos ---------- */
const IMAGES = {
  hero:       "https://images.unsplash.com/photo-1503376780353-7e6692767b70", // dark sports car on road
  tinting:    "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93", // film being applied
  polishing:  "https://images.unsplash.com/photo-1580273916550-e323be2ae537", // glossy paint at dusk
  pdr:        "https://images.unsplash.com/photo-1617531653332-bd46c24f2068", // clean body panels
  ceramic:    "https://images.unsplash.com/photo-1601362840469-51e4d8d58785", // paint reflection
  interior:   "https://images.unsplash.com/photo-1605437241278-c1806d14a4d9", // leather interior
  wash:       "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f", // pressure wash
  tintView:   "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", // view seen through the tinted window
};

/* ---------- Business constants ---------- */
const PHONE = "+971527177889";
const WA_NUMBER = "971527177889";
const PLACE_QUERY = "I Care Car Express ADNOC Autoserv Bani Yas East Abu Dhabi";
const LINKS = {
  tel: `tel:${PHONE}`,
  directions: "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent("8J97+XJ Abu Dhabi"),
  reviews: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(PLACE_QUERY),
  map: "https://www.google.com/maps?q=" + encodeURIComponent("8J97+XJ Abu Dhabi") + "&z=16&output=embed",
};
const wa = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

/* Unsplash sizing helper (keeps mobile downloads small) */
const img = (url, w) => `${url}?auto=format&fit=crop&q=70&w=${w}`;

/* ---------- Services ---------- */
const SERVICES = [
  { id: "tinting", icon: "i-tint", img: "tinting", main: true },
  { id: "polishing", icon: "i-polish", img: "polishing", main: true },
  { id: "pdr", icon: "i-dent", img: "pdr", main: true },
  // TO CONFIRM WITH OWNER: the three services below were not confirmed by the shop yet
  { id: "ceramic", icon: "i-shield", img: "ceramic" },
  { id: "interior", icon: "i-seat", img: "interior" },
  { id: "wash", icon: "i-wash", img: "wash" },
];

/* ---------- Translations ---------- */
const T = {
  en: {
    "meta.title": "I Care Car Express | Window Tinting & Car Care in Bani Yas, Abu Dhabi",
    "meta.desc": "Premium window tinting, car polishing and paintless dent repair inside ADNOC Autoserv, Bani Yas East, Abu Dhabi. Rated 4.9★ by 422 Google reviewers. Open daily until 11 PM.",
    skip: "Skip to content",
    "nav.services": "Services", "nav.tint": "Tint shades", "nav.why": "Why us", "nav.reviews": "Reviews", "nav.location": "Location",
    "cta.call": "Call now", "cta.callShort": "Call", "cta.book": "Book on WhatsApp", "cta.directions": "Get Directions", "cta.whatsapp": "WhatsApp", "cta.price": "Ask for price",
    "hero.badge": "(422 Google reviews)",
    "hero.title": "Premium Tinting &amp; Car Care <em>in Bani Yas</em>",
    "hero.sub": "Window tinting, polishing and paintless dent repair — done fast, done right, inside ADNOC Autoserv. Open every day until 11 PM.",
    "hero.f1": "Inside ADNOC Autoserv", "hero.f2": "Open daily · until 11 PM",
    "services.eyebrow": "What we do", "services.title": "Services",
    "services.lead": "Tap “Ask for price” and we’ll reply on WhatsApp with a quote for your car.",
    "svc.popular": "Popular",
    "svc.tinting.t": "Window Tinting", "svc.tinting.d": "Heat-rejecting films that cut glare and keep your cabin cool in the UAE sun. Choose your shade.",
    "svc.polishing.t": "Car Polishing", "svc.polishing.d": "Machine polishing that removes swirls and light scratches and brings back a deep, mirror-like gloss.",
    "svc.pdr.t": "Paintless Dent Repair", "svc.pdr.d": "Dings and parking dents pushed out from behind the panel — no filler, no repaint, original paint kept.",
    "svc.ceramic.t": "Ceramic Coating", "svc.ceramic.d": "A hard, glossy protective layer that repels dust and water and makes washing easier.",
    "svc.interior.t": "Interior Detailing", "svc.interior.d": "Deep clean of seats, carpets, dashboard and vents for a fresh, like-new cabin.",
    "svc.wash.t": "Car Wash", "svc.wash.d": "Careful exterior and interior wash while you fuel up at the station.",
    "tint.eyebrow": "Try it live", "tint.title": "Pick your tint shade",
    "tint.lead": "The percentage is how much light gets through (VLT). Lower number = darker glass, more privacy, less glare.",
    "tint.cta": "Ask about this shade",
    "tint.note": "Preview is illustrative. Ask us which shades are legal for your vehicle in the UAE.",
    "shade.5.n": "5% · Limo", "shade.5.d": "Maximum privacy — almost impossible to see inside.",
    "shade.20.n": "20% · Dark", "shade.20.d": "Strong privacy and glare cut with a sleek, dark look.",
    "shade.35.n": "35% · Medium", "shade.35.d": "The popular balance of style, privacy and night visibility.",
    "shade.50.n": "50% · Light", "shade.50.d": "Noticeable heat and glare reduction with a subtle look.",
    "shade.70.n": "70% · Clear", "shade.70.d": "Almost clear — heat protection without changing the look.",
    "why.eyebrow": "Why drivers choose us", "why.title": "Why I Care",
    "why.1t": "Top-rated 4.9★", "why.1d": "422 Google reviews from drivers across Abu Dhabi.",
    "why.2t": "Inside ADNOC Autoserv", "why.2d": "Easy to find, easy parking — fuel up while we work.",
    "why.3t": "Open until 11 PM", "why.3d": "Every day of the week, so you can come after work.",
    "why.4t": "Fast service", "why.4d": "Express turnaround without cutting corners.",
    "reviews.eyebrow": "Google reviews", "reviews.lead": "Based on 422 reviews on Google Maps.",
    "reviews.ph": "Customer review placeholder — will be replaced with real Google reviews.",
    "reviews.who": "Google review · placeholder",
    "reviews.cta": "See all 422 reviews on Google",
    "loc.eyebrow": "Find us", "loc.title": "Inside ADNOC Autoserv, Bani Yas East",
    "loc.addrL": "Address", "loc.addr": "171 Street 5, Bani Yas East, Abu Dhabi, UAE", "loc.plus": "Plus code",
    "loc.hoursL": "Hours", "loc.hours": "Open daily · closes 11:00 PM", "loc.phoneL": "Phone / WhatsApp",
    "footer.contact": "Contact", "footer.credit": "Website preview by 7arkat",
    "wa.general": "Hi I Care Car Express, I'd like to book an appointment.",
    "wa.service": "Hi I Care Car Express, I'd like a price for: {s}. My car is: ",
    "wa.shade": "Hi I Care Car Express, I'm interested in {v} window tinting. My car is: ",
    "hero.scroll": "Scroll down",
    "stats.rating": "Google rating", "stats.reviews": "Google reviews", "stats.pm": "PM", "stats.open": "Open until, every night", "stats.days": "Days a week",
    "marquee.extra": "Bani Yas · Abu Dhabi",
    "cmp.eyebrow": "Polishing", "cmp.title": "See the shine",
    "cmp.lead": "Drag the slider to compare a dull, swirled finish with a machine-polished one.",
    "cmp.before": "Before", "cmp.after": "After", "cmp.aria": "Before and after comparison",
    "cmp.note": "Illustration of the polishing effect. Real before/after photos from the shop coming soon.",
    "tint.privacy": "Privacy", "tint.glare": "Glare cut",
    "proc.eyebrow": "How it works", "proc.title": "Three steps. Zero hassle.",
    "proc.1t": "Message us", "proc.1d": "Send your car model on WhatsApp and get a quote.",
    "proc.2t": "Drive in", "proc.2d": "Come to ADNOC Autoserv, Bani Yas East, any day until 11 PM.",
    "proc.3t": "Drive out shining", "proc.3d": "Fast, careful work. Pick up your car looking its best.",
    "proc.cta": "Start on WhatsApp",
  },
  ar: {
    "meta.title": "آي كير إكسبرس | تظليل وعناية بالسيارات في بني ياس، أبوظبي",
    "meta.desc": "تظليل زجاج وتلميع سيارات وإصلاح الصدمات بدون صبغ داخل أدنوك أوتوسيرف، بني ياس شرق، أبوظبي. تقييم ٤٫٩★ من ٤٢٢ مراجعة على جوجل. مفتوح يومياً حتى ١١ مساءً.",
    skip: "تخطَّ إلى المحتوى",
    "nav.services": "الخدمات", "nav.tint": "درجات التظليل", "nav.why": "لماذا نحن", "nav.reviews": "التقييمات", "nav.location": "الموقع",
    "cta.call": "اتصل الآن", "cta.callShort": "اتصال", "cta.book": "احجز عبر واتساب", "cta.directions": "الاتجاهات", "cta.whatsapp": "واتساب", "cta.price": "اسأل عن السعر",
    "hero.badge": "(٤٢٢ مراجعة على جوجل)",
    "hero.title": "تظليل وعناية فاخرة بسيارتك <em>في بني ياس</em>",
    "hero.sub": "تظليل الزجاج، التلميع، وإصلاح الصدمات بدون صبغ — بسرعة وبإتقان، داخل محطة أدنوك أوتوسيرف. مفتوح يومياً حتى الساعة ١١ مساءً.",
    "hero.f1": "داخل أدنوك أوتوسيرف", "hero.f2": "مفتوح يومياً · حتى ١١ مساءً",
    "services.eyebrow": "خدماتنا", "services.title": "الخدمات",
    "services.lead": "اضغط «اسأل عن السعر» وسنرد عليك عبر واتساب بعرض سعر لسيارتك.",
    "svc.popular": "الأكثر طلباً",
    "svc.tinting.t": "تظليل الزجاج", "svc.tinting.d": "أفلام عازلة للحرارة تخفف الوهج وتحافظ على برودة المقصورة تحت شمس الإمارات. اختر الدرجة التي تناسبك.",
    "svc.polishing.t": "تلميع السيارات", "svc.polishing.d": "تلميع بالماكينة يزيل الدوائر والخدوش الخفيفة ويعيد اللمعان العميق كالمرآة.",
    "svc.pdr.t": "إصلاح الصدمات بدون صبغ", "svc.pdr.d": "إزالة الطعجات الصغيرة وصدمات المواقف من خلف القطعة — بدون معجون وبدون صبغ، مع الحفاظ على الطلاء الأصلي.",
    "svc.ceramic.t": "طلاء السيراميك", "svc.ceramic.d": "طبقة حماية صلبة ولامعة تطرد الغبار والماء وتجعل الغسيل أسهل.",
    "svc.interior.t": "تنظيف داخلي شامل", "svc.interior.d": "تنظيف عميق للمقاعد والسجاد والطبلون وفتحات التكييف لمقصورة منتعشة كالجديدة.",
    "svc.wash.t": "غسيل السيارات", "svc.wash.d": "غسيل خارجي وداخلي بعناية أثناء تعبئة الوقود في المحطة.",
    "tint.eyebrow": "جرّبها مباشرة", "tint.title": "اختر درجة التظليل",
    "tint.lead": "النسبة تعني كمية الضوء التي تمر عبر الزجاج (VLT). كلما قل الرقم زادت العتمة والخصوصية وقلّ الوهج.",
    "tint.cta": "اسأل عن هذه الدرجة",
    "tint.note": "المعاينة توضيحية. اسألنا عن درجات التظليل المسموح بها قانونياً لسيارتك في الإمارات.",
    "shade.5.n": "٥٪ · ليموزين", "shade.5.d": "أقصى خصوصية — يكاد يستحيل رؤية الداخل.",
    "shade.20.n": "٢٠٪ · داكن", "shade.20.d": "خصوصية قوية وتقليل كبير للوهج مع مظهر أنيق داكن.",
    "shade.35.n": "٣٥٪ · متوسط", "shade.35.d": "التوازن الأكثر طلباً بين الأناقة والخصوصية والرؤية الليلية.",
    "shade.50.n": "٥٠٪ · فاتح", "shade.50.d": "تقليل واضح للحرارة والوهج بمظهر هادئ.",
    "shade.70.n": "٧٠٪ · شبه شفاف", "shade.70.d": "شبه شفاف — حماية من الحرارة دون تغيير شكل السيارة.",
    "why.eyebrow": "لماذا يختارنا السائقون", "why.title": "لماذا آي كير",
    "why.1t": "تقييم ٤٫٩★", "why.1d": "٤٢٢ مراجعة على جوجل من سائقين في مختلف أنحاء أبوظبي.",
    "why.2t": "داخل أدنوك أوتوسيرف", "why.2d": "سهل الوصول ومواقف متوفرة — عبّئ الوقود بينما نعمل على سيارتك.",
    "why.3t": "مفتوح حتى ١١ مساءً", "why.3d": "طوال أيام الأسبوع، لتأتي بعد الدوام.",
    "why.4t": "خدمة سريعة", "why.4d": "إنجاز سريع دون التنازل عن الجودة.",
    "reviews.eyebrow": "تقييمات جوجل", "reviews.lead": "بناءً على ٤٢٢ مراجعة على خرائط جوجل.",
    "reviews.ph": "مكان مخصص لمراجعة عميل — سيتم استبداله بمراجعات حقيقية من جوجل.",
    "reviews.who": "مراجعة جوجل · نص مؤقت",
    "reviews.cta": "شاهد جميع المراجعات الـ ٤٢٢ على جوجل",
    "loc.eyebrow": "موقعنا", "loc.title": "داخل أدنوك أوتوسيرف، بني ياس شرق",
    "loc.addrL": "العنوان", "loc.addr": "١٧١ الشارع ٥، بني ياس شرق، أبوظبي، الإمارات", "loc.plus": "رمز الموقع",
    "loc.hoursL": "ساعات العمل", "loc.hours": "مفتوح يومياً · يغلق ١١:٠٠ مساءً", "loc.phoneL": "الهاتف / واتساب",
    "footer.contact": "تواصل معنا", "footer.credit": "معاينة الموقع بواسطة 7arkat",
    "wa.general": "مرحباً آي كير إكسبرس، أود حجز موعد.",
    "wa.service": "مرحباً آي كير إكسبرس، أود معرفة سعر: {s}. سيارتي: ",
    "wa.shade": "مرحباً آي كير إكسبرس، أنا مهتم بتظليل بنسبة {v}. سيارتي: ",
    "hero.scroll": "مرّر للأسفل",
    "stats.rating": "تقييم جوجل", "stats.reviews": "مراجعة على جوجل", "stats.pm": "مساءً", "stats.open": "مفتوح حتى، كل ليلة", "stats.days": "أيام في الأسبوع",
    "marquee.extra": "بني ياس · أبوظبي",
    "cmp.eyebrow": "التلميع", "cmp.title": "شاهد الفرق في اللمعان",
    "cmp.lead": "اسحب المؤشر للمقارنة بين طلاء باهت مليء بالخدوش الدائرية وطلاء ملمّع بالماكينة.",
    "cmp.before": "قبل", "cmp.after": "بعد", "cmp.aria": "مقارنة قبل وبعد",
    "cmp.note": "توضيح لتأثير التلميع. صور حقيقية قبل وبعد من المحل قريباً.",
    "tint.privacy": "الخصوصية", "tint.glare": "تقليل الوهج",
    "proc.eyebrow": "كيف نعمل", "proc.title": "ثلاث خطوات. بدون أي تعب.",
    "proc.1t": "راسلنا", "proc.1d": "أرسل موديل سيارتك عبر واتساب واحصل على عرض سعر.",
    "proc.2t": "تعال إلينا", "proc.2d": "زرنا في أدنوك أوتوسيرف، بني ياس شرق، أي يوم حتى ١١ مساءً.",
    "proc.3t": "استلمها لامعة", "proc.3d": "عمل سريع ودقيق. استلم سيارتك بأفضل حالاتها.",
    "proc.cta": "ابدأ عبر واتساب",
  },
};

/* ---------- State ---------- */
let lang = document.documentElement.lang === "ar" ? "ar" : "en";
let vlt = 35;
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const t = (k) => T[lang][k] ?? T.en[k] ?? k;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---------- Render services ---------- */
let rendered = false;
function renderServices() {
  $("#servicesGrid").innerHTML = SERVICES.map((s, i) => `
    <article class="svc reveal${rendered ? " in" : ""}" style="--d:${(i % 3) * 0.08}s">
      <div class="svc__img">
        <img alt="" loading="lazy" decoding="async" width="640" height="400"
          src="${img(IMAGES[s.img], 640)}"
          srcset="${img(IMAGES[s.img], 420)} 420w, ${img(IMAGES[s.img], 640)} 640w, ${img(IMAGES[s.img], 900)} 900w"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px">
        ${s.main ? `<span class="svc__tag">${t("svc.popular")}</span>` : ""}
        <span class="svc__icon"><svg aria-hidden="true"><use href="#${s.icon}"/></svg></span>
      </div>
      <div class="svc__body">
        <h3>${t(`svc.${s.id}.t`)}</h3>
        <p>${t(`svc.${s.id}.d`)}</p>
        <a class="btn btn--ghost btn--sm" target="_blank" rel="noopener"
          href="${wa(t("wa.service").replace("{s}", t(`svc.${s.id}.t`)))}">
          <svg class="ico" aria-hidden="true"><use href="#i-wa"/></svg>${t("cta.price")}
        </a>
      </div>
    </article>`).join("");
  $$("#servicesGrid img").forEach((el) => {
    const done = () => el.classList.add("is-loaded");
    el.complete ? done() : el.addEventListener("load", done, { once: true });
  });
  rendered = true;
  observeReveals();
}

/* ---------- Tint selector ---------- */
const toArabicDigits = (n) => String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
function setShade(v) {
  vlt = v;
  // 5% VLT => ~92% dark overlay, 70% VLT => ~22%
  $("#tintLayer").setAttribute("opacity", ((100 - v) / 100 * 0.97).toFixed(2));
  $("#vltBig").textContent = `${v}%`;
  $("#shadeName").textContent = t(`shade.${v}.n`);
  $("#shadeDesc").textContent = t(`shade.${v}.d`);
  const label = lang === "ar" ? `${toArabicDigits(v)}٪` : `${v}%`;
  $("#tintCta").href = wa(t("wa.shade").replace("{v}", label));
  $$("#shades button").forEach((b) => b.setAttribute("aria-checked", String(+b.dataset.vlt === v)));
  // illustrative meters, derived from how much light the film blocks
  $("#mPrivacy").style.width = `${100 - v}%`;
  $("#mGlare").style.width = `${Math.round(100 - v * 0.85)}%`;
}
function initTint() {
  $("#winImg").setAttribute("href", img(IMAGES.tintView, 900));
  $$("#shades button").forEach((b) => {
    b.style.setProperty("--o", ((100 - b.dataset.vlt) / 100).toFixed(2));
    b.addEventListener("click", () => setShade(+b.dataset.vlt));
  });
  // arrow-key support for the radiogroup
  $("#shades").addEventListener("keydown", (e) => {
    const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (!(e.key in keys)) return;
    e.preventDefault();
    const btns = $$("#shades button");
    let step = keys[e.key];
    if (lang === "ar" && (e.key === "ArrowRight" || e.key === "ArrowLeft")) step = -step;
    const i = btns.findIndex((b) => +b.dataset.vlt === vlt);
    const next = btns[(i + step + btns.length) % btns.length];
    setShade(+next.dataset.vlt);
    next.focus();
  });
}

/* ---------- Language ---------- */
function applyLang(next) {
  lang = next;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t("meta.title");
  $('meta[name="description"]').setAttribute("content", t("meta.desc"));
  $$("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  $$("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
  splitWords($(".hero__title"));
  renderMarquee();
  refreshStats();
  $$('[data-link="wa"]').forEach((el) => (el.href = wa(t("wa.general"))));
  $("#langToggle").setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
  renderServices();
  setShade(vlt);
  try { localStorage.setItem("icare-lang", lang); } catch (e) {}
  const url = new URL(location.href);
  if (url.searchParams.has("lang")) { url.searchParams.set("lang", lang); history.replaceState(null, "", url); }
}

/* ---------- Scroll reveal ---------- */
let io;
function observeReveals() {
  if (!("IntersectionObserver" in window)) return $$(".reveal").forEach((el) => el.classList.add("in"));
  io ??= new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  $$(".reveal:not(.in), .steps:not(.in)").forEach((el) => io.observe(el));
}

/* ---------- Hero headline: word-by-word reveal ---------- */
function splitWords(el) {
  const walk = (node) => [...node.childNodes].forEach((n) => {
    if (n.nodeType === 1) { walk(n); n.classList.add("is-split"); return; }
    if (n.nodeType !== 3) return;
    const frag = document.createDocumentFragment();
    n.textContent.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) return frag.append(part);
      const w = document.createElement("span"), inner = document.createElement("span");
      w.className = "w"; inner.textContent = part; w.append(inner); frag.append(w);
    });
    n.replaceWith(frag);
  });
  walk(el);
  el.classList.add("is-ready");
  $$(".w > span", el).forEach((s, i) => s.style.setProperty("--i", i));
}

/* ---------- Marquee band ---------- */
function renderMarquee() {
  const items = SERVICES.map((s) => `<span>${t(`svc.${s.id}.t`)}</span><i>◆</i>`).join("") + `<span>${t("marquee.extra")}</span><i>◆</i>`;
  $("#marquee").innerHTML = `<div class="marquee__group">${items}</div><div class="marquee__group">${items}</div>`;
}

/* ---------- Stats count-up ---------- */
const fmtNum = (v, dec) => {
  const s = v.toFixed(dec);
  return lang === "ar" ? toArabicDigits(s).replace(".", "٫") : s;
};
function refreshStats() {
  $$(".stat__num").forEach((el) => {
    const end = +el.dataset.count, dec = +(el.dataset.dec || 0);
    el.textContent = fmtNum(el.dataset.state === "idle" ? 0 : end, dec);
  });
}
function initStats() {
  const nums = $$(".stat__num");
  if (REDUCED || !("IntersectionObserver" in window)) return;
  nums.forEach((el) => (el.dataset.state = "idle"));
  new IntersectionObserver((entries, o) => {
    if (!entries[0].isIntersecting) return;
    o.disconnect();
    const t0 = performance.now(), dur = 1600;
    nums.forEach((el) => (el.dataset.state = "run"));
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      nums.forEach((el) => (el.textContent = fmtNum(+el.dataset.count * e, +(el.dataset.dec || 0))));
      if (p < 1) requestAnimationFrame(tick);
      else nums.forEach((el) => (el.dataset.state = "done"));
    };
    requestAnimationFrame(tick);
  }, { threshold: 0.4 }).observe($(".stats"));
}

/* ---------- Before / after slider ---------- */
function initCompare() {
  const box = $(".compare"), range = $(".compare__range");
  const w = Math.min(1600, Math.round(box.clientWidth * Math.min(window.devicePixelRatio || 1, 2) / 200) * 200 || 1200);
  $("#cmpAfter").src = $("#cmpBefore").src = img(IMAGES.polishing, w);
  $("#cmpAfter").loading = $("#cmpBefore").loading = "lazy";
  let touched = false;
  const set = (v) => { box.style.setProperty("--pos", `${v}%`); range.value = v; };
  range.addEventListener("input", () => { touched = true; set(range.value); });
  range.addEventListener("pointerdown", () => (touched = true));
  if (REDUCED || !("IntersectionObserver" in window)) return;
  // one-time "wiggle" so people notice it can be dragged
  new IntersectionObserver((entries, o) => {
    if (!entries[0].isIntersecting) return;
    o.disconnect();
    const t0 = performance.now();
    const tick = (now) => {
      if (touched) return;
      const p = Math.min(1, (now - t0) / 2400);
      set(50 + Math.sin(p * Math.PI * 2) * 30 * (1 - p));
      if (p < 1) requestAnimationFrame(tick);
    };
    setTimeout(() => requestAnimationFrame(tick), 500);
  }, { threshold: 0.6 }).observe(box);
}

/* ---------- Pointer effects (desktop only): spotlight, tilt, magnetic buttons ---------- */
function initPointerFx() {
  if (REDUCED || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const bind = (root, sel, tilt) => {
    root.addEventListener("pointermove", (e) => {
      const c = e.target.closest(sel);
      if (!c) return;
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      c.style.setProperty("--mx", `${x * 100}%`);
      c.style.setProperty("--my", `${y * 100}%`);
      if (tilt) {
        c.classList.add("is-tilting");
        c.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-4px)`;
      }
    });
    root.addEventListener("pointerout", (e) => {
      const c = e.target.closest(sel);
      if (c && !c.contains(e.relatedTarget)) { c.style.transform = ""; c.classList.remove("is-tilting"); }
    });
  };
  bind($("#servicesGrid"), ".svc", true);
  bind($(".steps"), ".step", false);
  bind($(".why"), ".why__item", false);
  $$(".btn--lg, .fab").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      b.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.18}px ${(e.clientY - r.top - r.height / 2) * 0.28}px`;
    });
    b.addEventListener("pointerleave", () => (b.style.translate = ""));
  });
}

/* ---------- Init ---------- */
function init() {
  // static links
  $$('[data-link="tel"]').forEach((el) => (el.href = LINKS.tel));
  $$('[data-link="directions"]').forEach((el) => (el.href = LINKS.directions));
  $$('[data-link="reviews"]').forEach((el) => (el.href = LINKS.reviews));
  $("#year").textContent = new Date().getFullYear();

  // hero image: small file on phones, large on desktop
  const hero = $(".hero__bg");
  const w = Math.min(2000, Math.round(window.innerWidth * Math.min(window.devicePixelRatio || 1, 2)));
  const heroImg = new Image();
  heroImg.onload = () => { hero.style.backgroundImage = `url("${heroImg.src}")`; hero.classList.add("is-loaded"); };
  heroImg.fetchPriority = "high";
  heroImg.src = img(IMAGES.hero, Math.max(640, Math.ceil(w / 160) * 160));

  // map: only load the iframe when it is close to view
  const map = $("#mapFrame");
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((e, o) => { if (e[0].isIntersecting) { map.src = LINKS.map; o.disconnect(); } }, { rootMargin: "400px" }).observe(map);
  } else map.src = LINKS.map;

  initTint();
  applyLang(lang);

  $$(".why .reveal, .reviews .reveal").forEach((el, i) => el.style.setProperty("--d", `${(i % 4) * 0.08}s`));

  $("#langToggle").addEventListener("click", () => applyLang(lang === "en" ? "ar" : "en"));

  // scroll: header glass, progress bar, hero parallax (one rAF per frame)
  const header = $(".header"), bar = $("#progressBar"), heroEl = $(".hero");
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const y = window.scrollY, max = document.documentElement.scrollHeight - innerHeight;
    header.classList.toggle("is-scrolled", y > 20);
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    if (!REDUCED && y < heroEl.offsetHeight) hero.style.setProperty("--py", `${y * 0.3}px`);
  };
  onScroll();
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  initStats();
  refreshStats();
  initCompare();
  initPointerFx();

  // mobile menu
  const burger = $("#burger"), nav = $("#nav");
  const setMenu = (open) => { burger.setAttribute("aria-expanded", String(open)); nav.classList.toggle("is-open", open); };
  burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
  $$("#nav a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));
}

init();
